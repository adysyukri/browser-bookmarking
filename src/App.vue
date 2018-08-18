<template>
  <v-app>
    <app-navbar></app-navbar>
      <component 
      :is="componentTag" 
      ></component>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import AddPage from './components/AddPage'
import HomeBody from './components/Home/HomeBody'

export default {
  data() {
    return {
      selectedComponent: 'appHomeBody'
    }
  },
  components: {
    appNavbar: Navbar,
    appAddPage: AddPage,
    appHomeBody: HomeBody
  },
  computed: {
    componentTag(){
      return this.$store.getters.loadComponentTag
    }
  },
  beforeCreated() {
    this.$store.dispatch("fetchBooks");
  }
  
}
</script>

<style>
</style>
