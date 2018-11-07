export default {
  componentName: 'ElCol',
  parent: 'ElRow',
  isInlineElement: true,
  props: {
  },
  invisible: {
    style: {
      'border': '1px solid #DDDDDD',
      'border-radius': '4px 4px 4px 4px',
      'box-shadow': 'inset 0 1px 13px rgba(0, 0, 0, 0.1)',
      'padding': '10px'
    }
  },
  slots: [
    {
      name: 'default',
      type: '*'
    }
  ]
}
