import React from "react"
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";


import "./index.scss"

function Editor() {
  function onChange(newValue: any) {
    console.log("change", newValue);
  }

  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        width: '100%',
        height: '100%',
        className: 'code-editor'
      }}
    />
  )
}

export default Editor
