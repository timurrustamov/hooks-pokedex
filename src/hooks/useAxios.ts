import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

import axios, { AxiosRequestConfig, AxiosResponse, CancelTokenSource } from 'axios';

export type GetRequest<T extends any[]> = (...args: T) => AxiosRequestConfig | null;

type SetState<T> = (data: T) => void;

function createLoader<T extends any[]>(
  setLoading: SetState<boolean>,
  setError: SetState<any>,
  setResponse: SetState<any>,
  tokenSource: RefObject<CancelTokenSource>,
  createConfig: GetRequest<T>,
  ...args: T
) {
  const config = createConfig(...args);
  if (config) {
    setLoading(true);
    axios
      .request({
        ...config,
        cancelToken: tokenSource.current ? tokenSource.current.token : undefined,
      })
      .then((res) => {
        setResponse(res);
        setLoading(false);
      })
      .catch((e) => {
        if (!axios.isCancel(e)) {
          setError(e);
          setLoading(false);
        }
      });
  }
}

function useRequestEffect<T extends any[]>(
  createUrl: GetRequest<T>,
  tokenSource: RefObject<CancelTokenSource>,
  loader: () => void,
  defer?: boolean,
  ...args: any[]
) {
  /**
   * Effect used to load data, cancel fetching, etc..
   */
  useEffect(
    () => {
      (tokenSource as any).current = axios.CancelToken.source();
      if (!defer) {
        loader();
      }
      return () => {
        if (tokenSource.current) {
          tokenSource.current.cancel();
        }
      };
    },
    [createUrl, defer, ...args],
  );
}

function useRequestState<T extends any[]>(createUrl: GetRequest<T>, ...args: T) {
  /**
   * Hooks local state
   */
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState(null);
  /**
   * Cancel token ref
   */
  const cancelToken = useRef(axios.CancelToken.source());
  /**
   * Create loader function
   */
  const reload = useCallback(() => createLoader(setLoading, setError, setResponse, cancelToken, createUrl, ...args), [
    createUrl,
    ...args,
  ]);

  return { loading, reload, error, cancelToken, data: response ? response.data : undefined };
}

function createUseAxios<T extends any[]>(createConfig: GetRequest<T>, defer: boolean = false, refetch: any[] = []) {
  const hook = (...args: T) => {
    // tslint:disable-next-line:react-hooks-nesting
    const { data, error, loading, reload, cancelToken } = useRequestState(createConfig, ...args);
    // tslint:disable-next-line:react-hooks-nesting
    useRequestEffect(createConfig, cancelToken, reload, defer, ...args);

    return { data, error, loading, reload };
  };
  return hook;
}

export default createUseAxios;
