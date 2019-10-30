<template>
  <div class="errors">
    <div class="pic_404">
      <img class="pic-404__parent" src="@/assets/404_images/404.png" alt="">
    </div>
    <div class="notFound">
      <span>啊哦～您访问的页面不存在哦～</span>
      <span>
        你可以尝试
        <a class="link" @click="$router.go(-1)">返回上一页</a>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component({
    components: {

    }
})

export default class Errors extends Vue {}
</script>

<style scoped lang='scss'>
.errors {
  position: relative;

  .pic_404 {
    margin-left: 100px;
    margin-top: 100px;
    display: inline-block;

    .pic-404__parent {
      width: 700px;
    }
  }

  .notFound {
    display: inline-block;
    color: #8b7b8b;
    position: absolute;
    right: 25%;
    top: 50%;

    span {
      display: block;
      margin-top: 15px;

      .link {
      color: #5cacee;
      font-size: 20px;
      cursor: pointer;
    }
    }
  }
}
</style>