<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import { store } from "./store.js" //state management



export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    this.doThings();


  },
  methods: {
    doThings() {

    }
  }
}
</script>

<template>
  <AppHeader />
</template>

<style scoped></style>

