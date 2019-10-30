<template>
  <el-scrollbar class="el_scrollbar">
    <el-menu
      class="el_menu_slide"
      mode="vertical"
      default-active="$router.currentRoute.path"
      router
    >
      <!-- 激活导航时以 index 作为 path 进行路由跳转 -->

      <template
        v-for="item in getRouters"
        v-if="item.display && item.children && item.children.length > 0"
      >
        <!-- 无子菜单(包含children中只有一条) -->
        <el-menu-item
          v-if="item.children.length === 1"
          :index="item.children[0].path"
          :key="item.name"
        >
          <i v-if="item.children[0].meta.icon" :class="item.children[0].meta.icon"></i>
          <span slot="title">{{ item.children[0].meta.title }}</span>
        </el-menu-item>

        <!-- 有子菜单 -->
        <el-submenu v-else :index="item.children[0].path" :key="item.name">
          <template slot="title">
            <i v-if="item.meta&&item.meta.icon" :class="item.meta.icon"></i>
            <span slot="title" v-if="item.meta&&item.meta.title">{{ item.meta.title }}</span>
          </template>
          <el-menu-item v-for="child in item.children" :index="child.path" :key="child.name">
            <i v-if="child.meta&&child.meta.icon" :class="child.meta.icon"></i>
            <span slot="title" v-if="child.meta&&child.meta.title">{{ child.meta.title }}</span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Mutation, Action } from "vuex-class";

@Component({
  components: {}
})
export default class SideBar extends Vue {
  @Getter("routers") getRouters: any;
  created() {
    // console.log('getRouters', this.getRouters)
  }
}
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