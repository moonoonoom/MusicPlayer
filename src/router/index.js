import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/views/front/homepage/index'
import AddArtist from '@/views/back/artist/add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddArtist',
      component: AddArtist
    }
  ]
})
