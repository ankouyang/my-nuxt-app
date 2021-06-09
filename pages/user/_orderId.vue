<template>
    <div>
       动态路由{{this.$route.params.orderId}}
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "id",
        async asyncData(context,store){
          const { data } = await axios.get(`http://localhost:8888/api`)
          console.log(context.params);
          console.log(store.state);
          return  data
        },
        created() {
          console.log(this.$route.params.orderId);
        }
    }
</script>

<style scoped>

</style>
