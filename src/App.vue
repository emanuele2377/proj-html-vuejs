<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import { store } from "./store.js" //state management
import Swiper from 'swiper';



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



  },
  methods: {
    animateValue(obj, start, end, duration) {
      let current = start;
      obj.innerHTML = current;
      const setIncrOut = () => {
        let time = Math.random() * 1000;
        setTimeout(function () {
          if (current < end) {
            current += 1;
            obj.innerHTML = current;
            setIncrOut(time)
          }
        }, time);
      }
      setIncrOut();
    }


  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style scoped></style>

