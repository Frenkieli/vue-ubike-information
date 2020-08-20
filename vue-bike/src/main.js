import { createApp } from 'vue'
import App from './App.vue'
import sortItem from './components/sortItem.vue'

createApp(App).component('sortItem', sortItem).mount('#app');