<template>
  <el-container id="app">
    <el-header class="header">
    </el-header>
    <el-container>
      <!-- <el-aside width="200px">
      </el-aside> -->
      <el-container>
        <el-main>
          <Preview @mouseRightClick="mouseRightClick"/>
        </el-main>
      </el-container>
      <el-aside class="right-aside" width="400px">
        <ElementComponentList/>
      </el-aside>
    </el-container>
    <el-card class="box-card" v-show="isShowMenu" id="mouse_menu-right-click">
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
  </div>
    </el-card>
  </el-container>
</template>

<script>
import ElementComponentList from '@/components/ElementComponentList.vue'
import Preview from '@/components/Preview.vue'
export default {
  name: 'App',
  data () {
    return {
      isShowMenu: false
    }
  },
  components: {
    ElementComponentList,
    Preview
  },
  methods: {
    mouseRightClick (event) {
      console.log(event)
      this.isShowMenu = true
      let _element = document.getElementById('mouse_menu-right-click')
      _element.setAttribute('style', 'left:' + event.clientX + 'px;top:' + event.clientY + 'px')
    }
  }
}
</script>

<style>
  html, body, #app {
    height: 100%;
    margin: 0px;
  }

  .header {
    box-shadow: 0px 1px 2px #ccc;
  }

  .right-aside {
    padding: 5px;
    border-left: 1px solid #e6e6e6;
  }
  .mouse-right-menu {
    position: absolute;
    width: 60px;
    height: 100px;
    background-color: red;
  }
</style>
