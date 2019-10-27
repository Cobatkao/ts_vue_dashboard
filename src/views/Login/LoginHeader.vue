<template>
  <div class="login-page">
    <div class="page-center">
      <div class="info">
        <div class="title">
          <img src="@/assets/logo.jpg" alt="头图" />
          <span>练手项目</span>
        </div>
        <div class="detail">
          <span>Vue + Typescript + Scss 打造的简易后台项目</span>
        </div>
      </div>
      <div class="login-container">
        <slot name="container"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component ({
    components: {

    }
})

export default class LayoutHeader extends Vue {}

</script>

<style scoped lang='scss'>
.login-page {
    width: 100vw;
    height: 100vh;
    background: url(../../assets/login-back.svg) center center no-repeat;
    .page-center {
        width: 400px;
        height: 540px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        .info {
            text-align: center;
            height: 150px;
            .title {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 32px;
                color: rgba(0, 0, 0, 0.85);
                font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica,
                sans-serif;
                font-weight: 600;
                img {
                    width: 100px;
                    padding-bottom: 3px;
                    margin-right: 32px;
                }
            }
            .detail {
                font-size: 14px;
                color: rgba(0, 0, 0, 0.45);
                margin-top: 10px;
                margin-bottom: 40px;
                line-height: 1.5;
            }
        }
        .login-container {
             -webkit-border-radius: 5px;
            border-radius: 5px;
            -moz-border-radius: 5px;
            background-clip: padding-box;
            padding: 35px 35px 15px 35px;
            background: #fff;
            border: 1px solid #eaeaea;
            box-shadow: 0 0 25px #cac6c6;
        }
    }
}

</style>