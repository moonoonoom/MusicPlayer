import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/views/front/homepage/index'
import AddArtist from '@/views/back/artist/add'
import Back from '@/views/back/index'
import ArtistList from '@/views/back/artist/list'
import Space from '@/views/front/space/index'
import Main from "@/views/front/space/stage/main"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'Back',
      component: Back,
      children:[
        {
          path:'/admin/artist/add',
          name: 'AddArtist',
          component: AddArtist
        },
        {
          path:'/admin/artist/list',
          name: 'ArtistList',
          component: ArtistList
        }
      ]
    },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path:'/space',
      name: 'Space',
      component: Space,
      redirect:'/space/main',
      children:[
        {
          path: '/space/main',
          main: 'Main',
          component: Main
        }
      ]
    }
  ]
})
