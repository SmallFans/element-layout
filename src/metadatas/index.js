import lodash from 'lodash'
var metadatas = {}

function registerMetadata (metadata) {
  metadatas[metadata.componentName] = metadata
}

function getMetadata (componentName) {
  return lodash.cloneDeep(metadatas[componentName])
}

function getMetadataList () {
  var metadataList = Object.keys(metadatas).map(componentName => {
    return lodash.cloneDeep(metadatas[componentName])
  })

  return metadataList
}

registerMetadata(require('./ElButton.metadata.js').default)
registerMetadata(require('./ElCol.metadata.js').default)
registerMetadata(require('./ElRow.metadata.js').default)

export default {
  getMetadataList,
  registerMetadata,
  getMetadata
}
