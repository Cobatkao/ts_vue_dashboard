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
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">活动管理</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动列表</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 右侧内容 -->
      <div class="content">
        <slot name="content"></slot>
      </div>
    </el-main>

  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component({
    components: {

    }
})

export default class Content extends Vue {}
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
  }
}
</style>