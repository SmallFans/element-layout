export default {
  componentName: 'ElButton',
  props: {
    type: {
      type: String,
      default: 'default',
      acceptedValues: [
        'primary',
        'success',
        'warning',
        'danger',
        'info',
        'text'
      ]
    },
    size: {
      type: String,
      default: '',
      acceptedValues: [
        'medium',
        'small',
        'mini'
      ]
    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  slots: [
    {
      name: 'default',
      test: '*'
    }
  ]
}
