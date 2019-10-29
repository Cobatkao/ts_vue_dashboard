<template>
  <div class="layout_header">
    <el-row>
      <el-col :span="12" :xs="10" :sm="12" :md="14" :lg="16" :xl="18">
        <div class="lf_logo">
          <img src="@/assets/logo.jpeg" alt="">
          <span>TS + VUE2.x Dashboard</span>
        </div>
      </el-col>
      <el-col :span="12" :xs="14" :sm="12" :md="10" :lg="8" :xl="6">
        <el-dropdown @command="handleCommand">
          <span class="role_avatar">
            <img :src="require('@/assets/' + getUser.key + '.jpg')" alt="">
            <span>{{ getUser.username }}</span>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="usercenter">用户中心</el-dropdown-item>
            <el-dropdown-item command="logout" divided>注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { State, Getter, Mutation, Action } from 'vuex-class'

@Component({
    components: {

    }
})

export default class LayoutHeader extends Vue {
  @Getter('user') getUser: any;

  handleCommand(command: string): void {
    this.$message('click on item ' + command);
  }

  created() {
    console.log(this.getUser)
  }
}
</script>

<style scoped lang='scss'>
.layout_header {
  background: #495060;
  line-height: 64px;
  height: 64px;

  .lf_logo {

    img {
      width: 40px;
      border-radius: 50%;
      float: left;
      margin: 10px;
    }

    span {
      font-weight: bold;
      color: #fff;
    }
  }

  .el-dropdown {
    float: right;
    margin-right: 10px;

    .role_avatar {
    
      img {
        cursor: pointer;
        width: 40px;
        border-radius: 50%;
        float: right;
        margin: 10px 0 10px 10px;
      }

      span {
        color: #fff;
        font-weight: bold;
      }
  }
  }
}

</style>