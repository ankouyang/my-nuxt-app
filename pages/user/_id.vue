<template>
    <div>
       动态路由{{this.$route.params.id}}
    </div>
</template>

<script>
    export default {
        name: "id",
        created() {
          console.log(this.$route.params.id);
        }
    }
</script>

<style scoped>

</style>
