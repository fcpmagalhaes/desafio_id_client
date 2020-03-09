import Vue from 'vue'

export const setClients = ({ commit }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get(`${process.env.API}/v1/clientes`)
      .then((res) => {
        commit('SET_CLIENTS', res.data.data)
        resolve(res.data.data)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}

export const setClient = ({ commit }, id) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get(`${process.env.API}/v1/clientes/${id}`)
      .then((res) => {
        commit('SET_CLIENT', res.data.data)
        resolve(res.data.data)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}
export const addClient = ({ commit }, newClient) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post(`${process.env.API}/v1/clientes/`, newClient)
      .then((res) => {
        resolve(res.data.data)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}

export const updateClient = ({ commit }, clientPayload) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.put(`${process.env.API}/v1/clientes/${clientPayload.id}`, clientPayload.data)
      .then((res) => {
        resolve(res.data.data)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}

export const deleteClient = ({ commit }, id) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.delete(`${process.env.API}/v1/clientes/${id}`)
      .then((res) => {
        resolve(res.data.data)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}
