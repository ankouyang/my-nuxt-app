<template>
    <div>
       动态路由{{this.$route.params.orderId}}
    </div>
</template>

<script>
   import axios from 'axios'
    export default {
        name: "id",
        async asyncData({app}){
          const {data} = await app.$axios.get('http://localhost:8888/api')
          if (data.code === 200) {
            return data
          }
        },
        created() {
          console.log(this.$route.params.orderId);
        }
    }
</script>

<style scoped>

</style>
