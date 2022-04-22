import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyC3I3lvbQwkN7Ho277Rks31fvpPsQmqzok",
    authDomain: "vue-todo-603af.firebaseapp.com",
    projectId: "vue-todo-603af",
    storageBucket: "vue-todo-603af.appspot.com",
    messagingSenderId: "487229829388",
    appId: "1:487229829388:web:657febd11379ec684a5929",
    measurementId: "G-0MX8BMFSH1"
};

firebase.initializeApp(firebaseConfig)

createApp(App).use(firebase).use(router).mount('#app')