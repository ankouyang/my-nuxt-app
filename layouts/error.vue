<template>
  <div id="error">
    {{msg}}
  </div>
</template>

<script>
    export default {
        name: "error",
        data:()=>({
          msg: '未找到相应页面请返回'
        })
    }
</script>

<style scoped>

</style>
