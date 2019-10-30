<template>
  <div class="user_info">UserInfo</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component({
    components: {

    }
})

export default class UserInfo extends Vue {}
</script>

<style scoped lang='scss'>
.user_info {
  margin: 5px;
}
</style>