// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueSocialSharing from 'vue-social-sharing'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFlag, faClock } from '@fortawesome/free-regular-svg-icons'

library.add(faFlag)
library.add(faClock)

Vue.config.productionTip = false
Vue.use(VueSocialSharing);
Vue.component('font-awesome-icon', FontAwesomeIcon)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
