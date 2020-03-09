<template>
  <q-page class="container q-ma-lg">
    <h3>Adicionar Cliente</h3>
    <q-input v-model="newClient.nome" float-label=" Nome" />
    <q-input v-model="newClient.email" type="email" float-label="Email" suffix="@email.com"/>

    <q-select
        multiple
        toggle
        chips
        color="purple"
        float-label="Tags do Cliente"
        label="Tags do Cliente"
        v-model="selectedTags"
        :options="newTags"
      />
    <q-btn
      color=primary
      label='Salvar'
      @click="saveClient()"
      class="saveButton"
    />
    <br>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'EditClient',
  data () {
    return {
      newClient: {
        nome: '',
        email: ''
      },
      newTags: [],
      selectedTags: []
    }
  },
  mounted () {
    this.listTags()
  },
  computed: {
    ...mapGetters('tags', [
      'tagsList'
    ])
  },
  methods: {
    ...mapActions('clients', [
      'addClient'
    ]),
    ...mapActions('tags', [
      'setTags'
    ]),
    async listTags () {
      await this.setTags()
      this.newTags = this.tagsList.map(object => {
        object.value = object.id
        delete object.color
        return object
      })
    },
    saveClient () {
      this.addClient(this.newClient)
      console.log(this.newClient)
    }
  }
}
</script>

<style lang="stylus">
  .q-input
    margin-bottom: 15px
  .saveButton
    margin: 30px
    float: right
  .disciplineButton
    margin-bottom: 4px
    width: 18%
    margin-right: 2%
    display: inline-block
  .disciplineButton .q-btn
    width: 100%
    font-size: 12px
</style>
