<template>
  <div id="app">
   <Home />
    <Work />
    <About/>
    <Ablity/>
     <Certificate/>
    <Education/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Work from "./components/Work.vue"
import Ablity from "./components/Ability.vue"
import Certificate from './components/Certificate.vue'
import Education from "./components/Education.vue"
import Contact from "./components/Contact.vue"
import Footer from "./components/Footer.vue"
export default {
  name: 'App',
  components: {
    Home,Work,Ablity,Education,Contact,Footer,About,Certificate
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
