import * as _ from 'lodash'
import get from 'lodash/get'
import * as helper from './utils/helper'

export const executeCodeGeneration = (currentProject) => {
  let codeFile = []

  get(currentProject, 'currentTemplate.files', []).map((file) => {
    let code = ''

    try {
      get(file, 'fileBlocks', []).map((block) => {
        if (block.blockImplementation) {
          code += new Function(
            '_',
            'currentProject',
            'helper',
            block.blockImplementation
          )(_, currentProject, helper)
        }
      })
    } catch (error) {
      console.log('########## error', error)
    }

    codeFile.push({
      id: file.fileName,
      code,
    })
  })

  return codeFile
}
