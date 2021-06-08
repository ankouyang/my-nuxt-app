<template>
  <div class="container">
    <div>
      <Logo />
<!--      <h1 class="title">-->
<!--        myFirstSsrProject-->
<!--      </h1>-->
<!--      <div class="links">-->
<!--        <a-->
<!--          href="https://nuxtjs.org/"-->
<!--          target="_blank"-->
<!--          rel="noopener noreferrer"-->
<!--          class="button&#45;&#45;green"-->
<!--        >-->
<!--          Documentation-->
<!--        </a>-->
<!--        <a-->
<!--          href="https://github.com/nuxt/nuxt.js"-->
<!--          target="_blank"-->
<!--          rel="noopener noreferrer"-->
<!--          class="button&#45;&#45;grey"-->
<!--        >-->
<!--          GitHub-->
<!--        </a>-->
<!--      </div>-->
      <nuxt-link to="/test">去test</nuxt-link>
      <a href="/text">去text</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created() {
    console.log(process.env.NODE_ENV);
    console.log(process.env.API_ENV);
    // axios.get('/api').then(res=>{
    //   console.log(res);
    // })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
