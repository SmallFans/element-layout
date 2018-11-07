<template>
  <div>
    <textarea name="" id="" cols="30" rows="10" v-model="template"></textarea>
    <templateComponents :renderFn="renderFn"></templateComponents>
  </div>
</template>

<script>
import Vue from 'vue/dist/vue.esm.js'
var templateComponents = {
  props: ['renderFn'],
  render: function (createElement) {
    var self = this
    return self.renderFn(createElement)
  }
}

export default {
  name: 'App',
  data () {
    return {
      template: `
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      `,
      renderFn: null
    }
  },
  watch: {
    template: {
      handler: function (template) {
        var res = Vue.compile(template)
        this.renderFn = res.render
      },
      immediate: true
    }
  },
  components: {
    templateComponents
  }
}
</script>

<style>

</style>
