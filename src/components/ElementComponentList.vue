<template>
<div>
  <div class="item" v-for="item in elementComponentList" :key="item.ElementComponent">
    <draggable
      :list="[item]"
      :options="options"
      :clone="handleClone"
    >
      <ElementComponentItem :info="item"></ElementComponentItem>
    </draggable>
  </div>
</div>
</template>

<script>
import ElementComponentItem from '@/components/ElementComponentItem.vue'
import lodash from 'lodash'
import uuid from 'uuid'
export default {
  name: 'ElementComponentList',
  data () {
    return {
      options: {
        group: {
          name: 'ElementComponent',
          pull: 'clone',
          put: false
        },
        sort: false
      },
      elementComponentList: [
        {
          componentName: 'TemplateComponent'
        },
        {
          componentName: 'ElButton',
          slots: []
        },
        {
          componentName: 'ElRow',
          slots: [{
            componentName: 'ElCol',
            id: uuid.v1(),
            props: {
              span: 12
            },
            slots: []
          }, {
            componentName: 'ElCol',
            id: uuid.v1(),
            props: {
              span: 12
            },
            slots: []
          }]
        },
        {
          componentName: 'ElCol',
          props: {
            span: 6
          },
          slots: []
        }
      ]
    }
  },
  components: {
    ElementComponentItem
  },
  methods: {
    handleClone: function (item) {
      item.id = uuid.v1()
      return lodash.cloneDeep(item)
    }
  }
}
</script>

<style scoped>
.item {
  position: relative;
  margin-bottom: 10px;
}
</style>
