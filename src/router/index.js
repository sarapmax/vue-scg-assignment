import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SequenceSolution from '@/components/SequenceSolution'
import EquationSolution from '@/components/EquationSolution'
import GoogleApiMaps from '@/components/GoogleApiMaps'
import LineBot from '@/components/LineBot'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sequence-solution',
      name: 'SequenceSolution',
      component: SequenceSolution
    },
    {
      path: '/equation-solution',
      name: 'EquationSolution',
      component: EquationSolution
    },
    {
      path: '/google-api-maps',
      name: 'GoogleApiMaps',
      component: GoogleApiMaps
    },
    {
      path: '/line-bot',
      name: 'LineBot',
      component: LineBot
    }
  ]
})
