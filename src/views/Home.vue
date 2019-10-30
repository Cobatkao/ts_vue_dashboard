<template>
  <div class="home">
    <div class="wrap">
      <span class="intro">TS + Vue2.x Dashboard 练手项目</span>
      <el-button plain class="btn" @click.native.prevent="jumpToRepo">源码仓库</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component({
    components: {

    }
})

export default class Home extends Vue {

  jumpToRepo(): void {
    window.open('https://github.com/Cobatkao/ts_vue_dashboard', '_blank')
  }
}
</script>

<style scoped lang='scss'>
.home {
  height: 100%;
  background: center / cover url('../assets/bg.jpg') no-repeat;
  position: relative;
  margin: 5px;

  &::after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba($color: #000000, $alpha: .5);
  }

  .wrap {
    display: inline-block;
    position: absolute;
    z-index: 9;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 36px;
    color: #fff;
    font-weight: bold;
    text-align: center;

    .btn {
      margin-top: 15px;
    }
  }
}
</style>