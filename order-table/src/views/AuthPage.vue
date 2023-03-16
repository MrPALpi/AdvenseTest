<template>
  <div class="frame">
      <authInput></authInput>
  </div>
</template>

<script>
// @ is an alias to /src

import authInput from "@/components/authInput.vue";
export default {
  name: 'HomeView',
  components: {
    authInput
  }
}
</script>
<style scoped>

</style>