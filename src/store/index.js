import Vue from 'vue'
import Vuex from 'vuex'

import tags from './tags'
import clients from './clients'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      tags,
      clients
    }
  })

  return Store
}
