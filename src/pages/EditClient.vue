<template>
  <q-page class="container q-pa-xs">

    <h3>Editar Cliente</h3>
    <q-input v-model="client.nome" float-label=" Nome" />
    <q-input v-model="client.email" type="email" float-label="Email" suffix="@email.com"/>

    <div v-for="(tag, index) in tagsList" :key="index">
        <q-btn
          :label=tag.label
          :style="{backgroundColor: tag.color, color: 'white'}"
          disable
        />
    </div>

    <q-select
      multiple
      chips
      color="purple"
      float-label="Tags de Universidades"
      v-model="multipleSelect"
      :options="tagsList"
    />

    {{multipleSelect}}

    <q-btn
      color=primary
      label='Salvar'
      @click="saveClient()"
      class="saveButton"
    />
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'EditClient',
  data () {
    return {
      id: 5,
      idb: this.$route.params.id,
      newClient: {
        nome: '',
        email: ''
      },
      multipleSelect: [],
      listOptions: [
        {
          label: 'Google',
          icon: 'email',
          value: 1
        },
        {
          label: 'Facebook',
          icon: 'chat',
          description: 'Enables communication',
          value: 2
        },
        {
          label: 'Twitter',
          inset: true,
          rightIcon: 'live_help',
          value: 3
        }
      ]
    }
  },
  mounted () {
    this.tagsList()
    this.setClient(this.id)
    console.log('idb', this.idb)
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
    saveClient () {
      this.newClient = {
        nome: this.client.nome,
        email: this.client.email
      }
      this.updateClient(parseInt(this.$route.params.id), this.newClient)

      console.log(this.newClient)
    }
  }
}
</script>

<style lang="stylus">
  .q-input
    margin-bottom: 15px
  .saveButton
    margin-bottom: 30px
</style>
