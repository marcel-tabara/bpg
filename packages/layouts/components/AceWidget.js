import React from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-jsx'
import 'ace-builds/src-noconflict/theme-github'

const AceWidget = ({ title, onChange, value }) => (
  <>
    <div>{title}</div>
    <AceEditor
      mode="jsx"
      theme="github"
      onChange={onChange}
      name={`${title}`}
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        showLineNumbers: true,
        tabSize: 2,
      }}
      fontSize={12}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={value}
      style={{ width: '100%' }}
    />
  </>
)

export default AceWidget
