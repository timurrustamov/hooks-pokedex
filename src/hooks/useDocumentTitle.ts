import { useEffect } from 'react';

/**
 * Declaratively sets the document title
 */
const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useDocumentTitle;
