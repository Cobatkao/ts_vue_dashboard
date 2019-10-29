<template>
  <div class="layout">
    <!-- 头部导航 -->
    <LayoutHeader />
    <Content>
      <SideBar slot="left"></SideBar>
      <!-- 路由匹配到的组件将会显示在下面 -->
      <router-view slot="content"></router-view>
    </Content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import LayoutHeader from "./LayoutHeader.vue"
import Content from "./Content.vue"
import SideBar from "./SideBar.vue"

@Component({
    components: {
      LayoutHeader,
      Content,
      SideBar
    }
})

export default class Layout extends Vue {}
</script>

<style scoped lang='scss'>
.layout {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background: #f5f7f9;
}
</style>