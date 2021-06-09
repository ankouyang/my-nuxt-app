<template>
  <div>
    <div>这是user</div>
    <nuxt-link to="/user/2">去id</nuxt-link>
    <nuxt-link to="/user/self">去self</nuxt-link>
    <nuxt-child/>
  </div>

</template>

<script>
    export default {
        name: "user"
    }
</script>

<style scoped>

</style>
