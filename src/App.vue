<template>
  <div>
  <el-container id="app">
    <el-header class="header">
    </el-header>
    <el-container>
      <el-container>
        <el-main>
          <Preview @mouseRightClick="mouseRightClick" :componentLsit="componentLsit"/>
        </el-main>
      </el-container>
      <el-aside class="right-aside" width="400px">
        <ElementComponentList/>
      </el-aside>
    </el-container>
    <div class="right-mouse-card" v-show="isShowMenu" id="mouse_menu-right-click">
      <div class="del-btn" @click.stop="deleteComponent(componentLsit[0], currSLot.id)">删除</div>
    </div>
  </el-container>
  </div>
</template>

<script>
import ElementComponentList from '@/components/ElementComponentList.vue'
import Preview from '@/components/Preview.vue'
export default {
  name: 'App',
  data () {
    return {
      componentLsit: [{
        componentName: 'RootBlank',
        slots: []
      }],
      isShowMenu: false,
      currSLot: null
    }
  },
  components: {
    ElementComponentList,
    Preview
  },
  mounted () {
    let _this = this
    this.$nextTick(function () {
      document.getElementById('app').onmousedown = function(e){
        if (e.button ==0) {
          if (!_this.isShowMenu ) {
            _this.isShowMenu = false
          }
        }
      }
    })
  },
  methods: {
    // id为当前选中的要删除的组件的id
    deleteComponent (data, id) {
      if (data.slots) {
        for (let i = 0; i < data.slots.length; i++) {
          if (id === data.slots[i].id) {
            data.slots.splice(i, 1)
            console.log(this.componentLsit)
            break
          } else {
            if (data.slots[i].slots && data.slots[i].slots.length !== 0) {
              return this.deleteComponent(data.slots[i], id)
            }
          }
        }
      }
      this.isShowMenu = false
      return
    },
    mouseRightClick (event, slot, componentLsit) {
      this.isShowMenu = true
      this.currSLot = slot
//      this.componentLsit = componentLsit
      let _element = document.getElementById('mouse_menu-right-click')
      _element.setAttribute('style', 'left:' + event.clientX + 'px;top:' + event.clientY + 'px')
    }
  }
}
</script>

<style lang="stylus">
  .header
    box-shadow: 0px 1px 2px #ccc;
  .right-aside
    padding: 5px;
    border-left: 1px solid #e6e6e6;
  .mouse-right-menu
    position: absolute;
    width: 60px;
    height: 100px;
    background-color: red;
  .right-mouse-card
    width: 80px;
    position: absolute;
    background-color: #fff;
    padding: 10px 10px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    .del-btn
      cursor pointer
</style>
