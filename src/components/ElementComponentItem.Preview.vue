<template>
  <div>
  <component :is="info.componentName" v-bind="info.props" :style="metadatas && metadatas.invisible && metadatas.invisible.style"
    :class="{isSelect: isSelect}"
  >
    <!-- <div v-if="isChildren" >
      <button @click="$emit('selectInfo',info)">选择</button>
    </div> -->
    <draggable
      v-if="isSelect"
      v-model="info.slots"
      class="draggable"
      :options="{
        group:{
          name: 'ElementComponent',
          pull: true,
          put: true
        },
        sort: true
      }"
    >
      <template v-for="(slot,i) in info.slots || []" >
        <ElementComponentItem :selectNode="selectNode" v-if="typeof slot === 'object'" :key="i" :info="slot" :isChildren="isRoot" @selectInfo="(info) => {
          $emit('selectInfo',info)
        }"></ElementComponentItem>
      </template>
    </draggable>

    <template v-else v-for="(slot,i) in info.slots || []" >
      <ElementComponentItem :selectNode="selectNode" v-if="typeof slot === 'object'" :key="i" :info="slot" :isChildren="isRoot"
      @selectInfo="(info) => {
        $emit('selectInfo',info)
      }"></ElementComponentItem>
    </template>
  </component>
  </div>
</template>

<script>
import metadatas from '@/metadatas/index.js'
export default {
  name: 'ElementComponentItem',
  data () {
    return {
    }
  },
  props: {
    info: Object,
    isRoot: Boolean,
    isChildren: Boolean,
    selectNode: Object
  },
  computed: {
    isSelect () {
      return this.info === this.selectNode
    },
    metadatas () {
      return metadatas.getMetadata(this.info.componentName)
    }
  },
  methods: {
    mouseRightClick (event) {
      console.log(event)
      this.$emit('mouseRightClick', event)
    }
  }
}
</script>

<style scoped>
.draggable {
  border: dotted 1px black;
  min-height: 50px;
  padding: 5px;
}
.isSelect {
  border: red 1px solid !important;
}
</style>
