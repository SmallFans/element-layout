<template>
  <component :is="info.componentName"
    v-bind="info.props"
    :style="metadatas && metadatas.invisible && metadatas.invisible.style"
  >
    <template v-for="(slot,i) in info.slots || []" >
      <!--<template v-if="typeof slot === 'string'">{{slot}}</template>-->
      <ElementComponentItem v-if="typeof slot === 'object'" :key="i" :info="slot"></ElementComponentItem>
    </template>
  </component>
</template>

<script>
import metadatas from '@/metadatas/index.js'
export default {
  name: 'ElementComponentItem',
  props: {
    info: Object
  },
  computed: {
    metadatas () {
      return metadatas.getMetadata(this.info.componentName)
    }
  }
}
</script>

<style>
</style>
