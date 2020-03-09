<template>
  <q-page class="container q-ma-lg">

    <h3>Editar Cliente</h3>
    <q-input v-model="client.nome" float-label=" Nome" />
    <q-input v-model="client.email" type="email" float-label="Email" suffix="@email.com"/>

    <q-select
      multiple
      chips
      color="purple"
      float-label="Tags de Universidades"
      v-model="multipleSelect"
      :options="newTags"
    />

    {{multipleSelect}}

    <div class='row justify-center'>
      <div class="col-md-5 col-sm-12">
        <q-btn
          color=primary
          label='Salvar'
          @click="saveClient()"
          class="saveButton"
        />

      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'EditClient',
  data () {
    return {
      id: this.$route.params.id,
      multipleSelect: [],
      newTags: []
    }
  },
  mounted () {
    this.setClient(this.id)
    this.listTags()
  },
  computed: {
    ...mapGetters('clients', [
      'client'
    ]),
    ...mapGetters('tags', [
      'tagsList'
    ])
  },
  methods: {
    ...mapActions('clients', [
      'setClient',
      'updateClient'
    ]),
    listTags () {
      this.newTags = this.tagsList.map(object => {
        object.value = object.id
        delete object.color
        return object
      })
    },
    saveClient () {
      let clientPayload = {
        id: parseInt(this.id),
        data: {
          nome: this.client.nome,
          email: this.client.email
        }
      }
      console.log(clientPayload)
      this.updateClient(clientPayload)
    }
  }
}
</script>

<style lang="stylus">
  .q-input
    margin-bottom: 15px
  .saveButton
    margin-bottom: 30px
    float: right
</style>
