import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/views/front/homepage/index'
import AddArtist from '@/views/back/artist/add'
import Back from '@/views/back/index'
import ArtistList from '@/views/back/artist/list'
import Space from '@/views/front/space/index'
import Main from "@/views/front/space/stage/main"
import Artist from "@/views/front/components/artist"
import AdminSongList from "@/views/back/song/list"
import SingerAnalysis from "@/views/back/analysis/singer"
import AdminLogin from "@/views/back/login"

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
        },
        {
          path:'/admin/song/list',
          name: 'AdminSongList',
          component: AdminSongList
        },
        {
          path:'/admin/analysis/singer',
          name: 'SingerAnalysis',
          component: SingerAnalysis
        },
      ]
    },
    {
      path:'/admin/login',
      name:'AdminLogin',
      component: AdminLogin
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
          name: 'Main',
          component: Main
        },
        {
          path: '/space/artist',
          name: 'Artist',
          component: Artist
        }
      ]
    }
  ]
})
