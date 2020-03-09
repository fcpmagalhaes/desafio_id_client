import Vue from 'vue'

export const setTags = ({ commit }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get(`${process.env.API}/v1/tags`)
      .then((res) => {
        let setValueToTags = res.data.data.map(object => {
          object.value = object.id
          return object
        })
        commit('SET_TAGS', setValueToTags)
        resolve(setValueToTags)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}

export const addTag = ({ commit }, tag) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post(`${process.env.API}/v1/tags`, tag)
      .then((res) => {
        console.log('entrei addtag')
        resolve()
      })
      .catch((err) => {
        console.log('erro')
        console.log(err)
        reject(err)
      })
  })
}
