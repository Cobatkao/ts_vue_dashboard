<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator"
import { State, Getter, Mutation, Action } from 'vuex-class'

@Component({
    components: {

    }
})

export default class App extends Vue {
  // 保持用户token信息
  @Action('setUsers') setUsers: any

  created() {
    this.setUsers(localStorage.getItem('ts_token'))
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
