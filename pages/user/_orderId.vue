<template>
    <div>
       动态路由{{this.$route.params.orderId}}
    </div>
</template>

<script>
    import {getUserinfo} from "../../request/apis/user";
    export default {
        name: "id",
        async asyncData(){
         const {lists} = await getUserinfo()
         return  {lists}
       },
        created() {
          console.log(this.$route.params.orderId);
        }
    }
</script>

<style scoped>

</style>
