<template>
  <div class="layout">
    <!-- 头部导航 -->
    <LayoutHeader />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import LayoutHeader from "./LayoutHeader.vue"

@Component({
    components: {
      LayoutHeader
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