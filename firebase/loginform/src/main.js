import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBob_iGTYOpUWP-TWSiuVRvclQJLbo3H6Q",
    authDomain: "loginform-f8209.firebaseapp.com",
    projectId: "loginform-f8209",
    storageBucket: "loginform-f8209.appspot.com",
    messagingSenderId: "733037402012",
    appId: "1:733037402012:web:d1b8a833ef52800ad19a59"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
