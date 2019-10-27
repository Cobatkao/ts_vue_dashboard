<template>
  <div class="login">
    <LoginHeader>
        <el-form slot="container">
            <div class="title">
                <h3>找回密码</h3>
            </div>
        </el-form>
    </LoginHeader>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import LoginHeader from "@/views/Login/LoginHeader.vue"

@Component({
    components: {

    }
})

export default class Password extends Vue {}
</script>

<style scoped lang='scss'>
.title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
    font-weight: bold;
}
</style>