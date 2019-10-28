<template>
  <div class="login">
    <LoginHeader>
        <el-form :model="ruleForm" :rules="rules" ref="formset" label-position="left" style="width: 100%" slot="container">
            <div class="title">
                <h3>用户名密码登录</h3>
            </div>

            <!-- 用户名 -->
            <el-form-item prop="username">
                <el-input type="text" placeholder="用户名" v-model="ruleForm.username">
                    <i slot="prefix" class="fa fa-user-o"></i>
                </el-input>
            </el-form-item>

            <!-- 密码 -->
            <el-form-item prop="pwd">
                <el-input type="password" placeholder="密码" v-model="ruleForm.pwd">
                    <i slot="prefix" class="fa fa-lock"></i>
                </el-input>
            </el-form-item>

            <!-- 登录按钮 -->
            <el-form-item>
                <el-button :loading="isLogin" type="primary" style="width: 100%" @click.native.prevent="handleLogin">登录</el-button>
            </el-form-item>

            <!-- 底部 -->
            <el-form-item>
                <el-checkbox v-model="ruleForm.autoLogin" :checked="ruleForm.autoLogin" label="7天内自动登录" name="type"></el-checkbox>
                <el-button id="forget" type="text" @click.native.prevent="$router.push('/password')">忘记密码？</el-button>
            </el-form-item>
        </el-form>
    </LoginHeader>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator"
import LoginHeader from "@/views/Login/LoginHeader.vue"

@Component({
    components: {
        LoginHeader
    }
})

export default class Login extends Vue {
    @Provide() isLogin: boolean = false
    @Provide() ruleForm: {
        username: string;
        pwd: string;
        autoLogin: boolean;
    } = {
        username: "",
        pwd: "",
        autoLogin: true
    }

    @Provide() rules = {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    }

    handleLogin(): void {
        (this.$refs["formset"] as any).validate((valid: boolean, msg: string) => {
            if (valid) {
                this.isLogin = true;
                (this as any).$axios.post('/api/users/login', this.ruleForm).
                    then((res: any) => {
                        this.isLogin = false
                        localStorage.setItem('ts_token', res.data.token)
                        console.log('成功请求', res)
                    }).catch((err: any) => {
                        this.isLogin = false
                        console.warn(err)
                    })
            }
        })
    }

    }
</script>

<style scoped lang='scss'>
.title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
    font-weight: bold;
}

#forget {
    float: right;
}

/deep/ .el-input__prefix {
    padding-left: 5px;
}
</style>