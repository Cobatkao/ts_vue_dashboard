<template>
  <div class="login">
    <LoginHeader>
        <el-form :model="ruleForm" :rules="rules" ref="formset" label-position="left" style="width: 100%" slot="container">
            <div class="title">
                <h3>找回密码</h3>
            </div>

            <!-- 用户名 -->
            <el-form-item prop="username">
                <el-input type="text" placeholder="用户名" v-model="ruleForm.username">
                    <i slot="prefix" class="fa fa-user-o"></i>
                </el-input>
            </el-form-item>

            <!-- 邮箱地址 -->
            <el-form-item prop="email">
                <el-input type="text" placeholder="邮箱" v-model="ruleForm.email">
                    <i slot="prefix" class="fa fa-envelope"></i>
                </el-input>
            </el-form-item>

            <!-- 确认 -->
            <el-form-item>
                <el-button :loading="isLoading" @click.native.prevent="submitForm" type="primary" style="width: 100%">确认</el-button>
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

export default class Password extends Vue {
    @Provide() isLoading: boolean = false

    @Provide() ruleForm: { username: string; email: string } = {
        username: '',
        email: ''
    }

    @Provide() rules = {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur, change' }
        ],
    }

    submitForm(): void {
        (this.$refs["formset"] as any).validate((valid: boolean, msg: string) => {
            if (valid) {
                this.isLoading = true;
                (this as any).$axios.post('/api/users/findPwd', this.ruleForm).
                    then((res: any) => {
                        console.log(res)
                        this.isLoading = false;
                        this.$message({
                            message: res.data.msg,
                            type: "success"
                        })
                        this.$router.push('/login')
                    }).catch((err: any) => {
                        this.isLoading = false;
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

/deep/ .el-input__prefix {
    padding-left: 5px;
}
</style>