<template>
  <SanyaLoh/>
</template>

<script>
import SanyaLoh from './components/SanyaLoh.vue'

export default {
  name: 'App',
  components: {
    SanyaLoh
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100..900;1,100..900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Sevillana&display=swap');

body {
  background-image: url("https://i.pinimg.com/564x/c7/e0/cd/c7e0cde974b68327792e0037ed39791f.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  backdrop-filter: blur(4px);
  padding: 40px;
  overflow-x: hidden;
  min-height: 100vh;
}

@media (max-width: 1000px) {
  body {
    background-image: url("assets/a-cheerful-korean-girl-wearing-hoodie-and-knit-hat-ai-generative-photo.jpg");
  }
}
</style>
