import React from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-jsx'
import 'ace-builds/src-noconflict/theme-github'
import get from 'lodash/get'

const getPathForAce = id => {
  const idArr = id.split('_')
  idArr.shift()
  return idArr
}

const AceWidget = ({ title, id, formState, onChange }) => {
  const onValueChange = (e, val) => {
    onChange(val.getValue())
  }

  return (
    <>
      <div>{title}</div>
      <AceEditor
        mode='jsx'
        theme='github'
        onBlur={(e, val) => onValueChange(e, val)}
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
        value={get(formState, getPathForAce(id), '')}
        style={{ width: '100%' }}
      />
    </>
  )
}

export default AceWidget
