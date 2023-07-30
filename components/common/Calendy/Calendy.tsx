import { FC, useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

interface Props {
  className?: string;
}
export const Calendy: FC<Props> = ({ children }) => {
  const [documentReady, setDocumentReady] = useState(false);
  useEffect(() => {
    setDocumentReady(true);
  }, [documentReady]);

  const pageSettings = {
    hideGdprBanner: true,
  };

  return (
    documentReady && (
      <PopupButton
        className='mb-1 mr-3 inline-block px-6 py-3 text-slate-800 dark:text-slate-200 ring-slate-400 ring-offset-1 transition duration-200 ease-linear ring dark:ring-slate-200 hover:dark:ring-slate-400 hover:ring-transparent hover:dark:ring-slate-600 hover:ring-offset-transparent ring-offset-slate-400 dark:ring-offset-slate-200 hover:dark:ring-offset-slate-400 hover:dark:ring-slate-400 md:px-6 md:py-3 2xl:ring-offset-1 rounded-full font-medium'
        url='https://calendly.com/josemukorivo'
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById('__next')}
        pageSettings={pageSettings}
        text={children.toString()}
      />
    )
  );
};
