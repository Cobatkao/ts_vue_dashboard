<template>
  <el-scrollbar class="el_scrollbar">
    <el-menu
      class="el_menu_slide"
      mode="vertical"
      default-active="$router.path">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component({
    components: {

    }
})

export default class SideBar extends Vue {}
</script>

<style scoped lang='scss'>
.el_scrollbar {
  height: 100%;
  border-right: 1px solid #e6e6e6;
  background: #fff;

  .el_menu_slide {
    border-right: none;

    i {
      width: 24px;
      font-size: 18px;
      margin-right: 5px;
      text-align: center;
    }
  }
}
</style>