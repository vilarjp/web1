// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

export const EventBus = new Vue();

Vue.config.productionTip = false

let app
var config = {
  apiKey: "AIzaSyAJZVPg7TmMPvzYANIv4G6ZNB7Fyot0BW8",
  authDomain: "web1-3c5f8.firebaseapp.com",
  databaseURL: "https://web1-3c5f8.firebaseio.com",
  projectId: "web1-3c5f8",
  storageBucket: "web1-3c5f8.appspot.com",
  messagingSenderId: "661959666135"
};

firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
