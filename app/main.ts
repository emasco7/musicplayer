import Vue from 'nativescript-vue'
import App from './components/App.vue'
import PlayingNow from './pages/PlayingNow.vue'
import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

var getMainFrameChild = function():any{
  return PlayingNow
}
new Vue({
  
  render: h => h('frame', [h(getMainFrameChild())])
}).$start()
