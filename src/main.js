import { createApp } from 'vue'
import './style.css'
import App from './App.vue'



const logosSlider = new Swiper(".testimonials__logos", {
    loop: true,
    freeMode: true,
    freeModeMomentum: false,
    speed: 3000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});

createApp(App).mount('#app')
