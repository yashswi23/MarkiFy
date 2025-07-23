import React, { createContext } from 'react'

import useMarkdownEditor from '../hooks/useMarkdownEditor';
export const markDownContext= createContext();

export const MarkDownProvider = ({children}) =>{
    const {rawText, handleChangeRawInputedText, getMarkDownAsHTMLOutput} = useMarkdownEditor();
 return (
    <markDownContext.Provider
      value={{ rawText, handleChangeRawInputedText, getMarkDownAsHTMLOutput }}
    >
      {children}
    </markDownContext.Provider>
  );

}
