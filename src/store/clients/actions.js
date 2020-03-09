import Vue from 'vue'

export const setClients = ({ commit }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get(`${process.env.API}/v1/clientes`)
      .then((res) => {
        const payload = adjustClientsList(res.data.data.clientes, res.data.data.tagsClientes)
        commit('SET_CLIENTS', payload)
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
        const client = res.data.data.cliente
        const clientTags = res.data.data.tagsCliente.map(c => c.id)
        commit('SET_CLIENT', client)
        commit('SET_CLIENT_TAGS', clientTags)
        resolve(res.data.data)
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}

const adjustClientsList = (clients, tags) => {
  return clients.map((client) => {
    client.tagsCliente = []
    tags.map((tag) => {
      if (tag.id === client.id) {
        client.tagsCliente = tag.tagsCliente
      }
    })
    return client
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
