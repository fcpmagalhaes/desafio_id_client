<template>
  <q-page class="container q-pa-xs">

    <h3>Adicionar Cliente</h3>
    <q-input v-model="newClient.nome" float-label=" Nome" />
    <q-input v-model="newClient.email" type="email" float-label="Email" suffix="@email.com"/>

    <p class="itemTitle">Lista de Tags</p>
    <div v-for="(tag, index) in newTags" :key="index" class="tagButton">
      <div v-if="!tag.clicked">
        <p>ON</p>
      </div>
      <div v-else>
        <p>OFF</p>
      </div>
      <q-btn dense v-if="!tag.clicked" @click="addRemoveTagOnList(index)" outline :style="{color: tag.color}" :label="tag.label"/>
      <q-btn dense v-else @click="addRemoveTagOnList(index)" :style="{backgroundColor: 'black', color: 'white'}" :label="tag.label"/>
      <q-toggle v-model="check2" color="secondary" :label="tag.label" />
    </div>

    <q-select
      multiple
      chips
      color="purple"
      float-label="With chips"
      v-model="selectedTags"
      :options="newTags"
    />

    <q-field
      icon="tag"
      :count="3"
      label="Tags do Cliente"
      helper="Selecione as tags do cliente"
    >
      <q-select
        chips
        color="amber"
        multiple
        v-model="selectedTags"
        :options="newTags"
      />
    </q-field>

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
        object.clicked = false
        return object
      })
    },
    addRemoveTagOnList (tagId) {
      console.log('entrei', tagId)
      console.log('newTags id', this.newTags[tagId])
      if (this.newTags[tagId].clicked === false) {
        this.selectedTags.push(tagId)
        // this.newTags[tagId].clicked = true
        this.$set(this.newTags[tagId], 'clicked', true)
        console.log('adicionado', this.selectedTags)
        console.log('newTags', this.newTags)
      } else {
        this.selectedTags = this.selectedTags.filter(
          e => e !== tagId
        )
        this.$set(this.newTags[tagId], 'clicked', false)
        // this.newTags[tagId].clicked = false
        console.log('removido', this.selectedTags)
        console.log('newTags', this.newTags)
      }
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
    margin-bottom: 30px
  .disciplineButton
    margin-bottom: 4px
    width: 18%
    margin-right: 2%
    display: inline-block
  .disciplineButton .q-btn
    width: 100%
    font-size: 12px
</style>
