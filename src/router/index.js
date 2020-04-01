import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import HelloWorld from '@/components/HelloWorld'
import SequenceSolution from '@/components/SequenceSolution'
import EquationSolution from '@/components/EquationSolution'

Vue.use(Router)
Vue.use(VueAxios, axios)

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
    }
  ]
})
