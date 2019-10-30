<template>
  <el-container class="layout_container">
    <!-- 左侧菜单 -->
    <el-aside width="200px">
      <slot name="left"></slot>
    </el-aside>
    <!-- 右侧页面 -->
    <el-main>
      <!-- 右侧面包屑 -->
      <div class="wrap">
        <i class="fa fa-reorder"></i>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="item in breadcrumbCollection" :key="item.path" :to="{ path: `${item.path}` }">{{ item.title }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 右侧内容 -->
      <div class="layout_content">
        <slot name="content"></slot>
      </div>
    </el-main>

  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Provide, Watch } from "vue-property-decorator"
@Component({
    components: {

    }
})

export default class Content extends Vue {
  @Provide() breadcrumbCollection: any = []

  // watch一个路由对象this.$route
  @Watch('$route') handleRouteChange(newRouter: any) {
    this.initBreadCrumb(newRouter)
  }

  created() {
    this.initBreadCrumb(this.$route)
  }

  initBreadCrumb(route: any) {
    const routeArray: any = [{path: '/', title: '后台管理系统'}]
    for (const routerItem of route.matched) {
      if (routerItem.meta && routerItem.meta.title) {
        routeArray.push({
          path: routerItem.path ? routerItem.path : '/',
          title: routerItem.meta.title
        })
      }
    }
    this.breadcrumbCollection = routeArray
    console.log(this.breadcrumbCollection)
  }
}
</script>

<style scoped lang='scss'>
.layout_container {
  width: 100%;
  height: 100%;

  .el-main {
    padding: 0;

    .wrap {
      height: 54px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e6e6e6;

      i {
        font-size: 20px;
        margin-right: 10px;
        cursor: pointer;
        padding-left: 16px;
      }
    }

    .layout_content {
      width: 100%;
      height: calc(100% - 129px);
    }
  }
}
</style>