import { createApp } from 'vue'
import App from './App.vue'
import sortItem from './components/sortItem.vue'
import domTest from './components/domTest.vue'

createApp(App).
component('sortItem', sortItem).
component('domTest', domTest).
mount('#app');