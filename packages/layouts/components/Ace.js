import React from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-jsx'
import 'ace-builds/src-noconflict/theme-github'
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import AceTabs from './AceTabs'

const Ace = ({ code, currentTab, aceTabs }) => {
  const getAceContent = () => {
    if (isEmpty(code)) return ''
    return get(
      code.filter((e) => e.id === currentTab),
      '[0].code',
      ''
    )
  }

  return (
    <div>
      <div className="paddingTop">
        <div>
          <AceTabs code={code} currentTab={currentTab} aceTabs={aceTabs} />
        </div>

        <AceEditor
          mode="jsx"
          theme="github"
          name="ace-editor"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            showLineNumbers: true,
            tabSize: 2,
          }}
          fontSize={12}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={getAceContent()}
          height={`${window.innerHeight - 150}px`}
        />
      </div>
    </div>
  )
}

export default Ace
