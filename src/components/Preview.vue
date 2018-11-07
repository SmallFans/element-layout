<template>
<div style="height: 100%;">
  <div style="float:left;width: 30%;height: 100%;">
    <el-tree
      :data="[rootComponent]"
      :expand-on-click-node="false"
      :default-expand-all="true"
      :props="{children: 'slots', label: 'componentName'}"
      @node-click="handleNodeClick">
    <!-- :render-content="renderContent" -->
    </el-tree>
  </div>
  <div style="float:left;width: 70%;height: 100%;">
    <!-- <button  @click="(info) => { componentLsit.length && componentLsit.shift(info) }">返回</button> -->
    <ElementComponentItem :info="rootComponent" @mouseRightClick="mouseRightClick" :selectNode="selectNode"></ElementComponentItem>
    {{selectNode}}
  </div>
</div>
</template>

<script>
import ElementComponentItem from '@/components/ElementComponentItem.Preview.vue'
export default {
  name: 'Preview',
  data () {
    return {
      componentLsit: [{
        componentName: 'RootBlank',
        slots: []
      }],
      selectNode: null
    }
  },
  methods: {
    mouseRightClick (event) {
      this.$emit('mouseRightClick', event)
    },
    renderContent (h, { node, data, store }) {
      return h('div', ['1234'])
    },
    handleNodeClick (data) {
      this.selectNode = data
    }
  },
  computed: {
    rootComponent () {
      return this.componentLsit[0]
    }
  },
  components: {
    ElementComponentItem
  }
}
</script>

<style>
</style>
