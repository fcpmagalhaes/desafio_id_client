<template>
  <q-page class="container q-pa-xs">

    <h3>Adicionar Tag Universidade</h3>
    <q-input v-model="newTag.label" float-label=" Título" />
    <q-input v-model="newTag.color" float-label="Cor em Hexadecimal" />
      <q-btn
        color=primary
        label='Salvar'
        @click="saveTag()"
        class="saveButton"
      />
    <h3>Universidades Cadastradas</h3>
    <div v-for="(tag, index) in tagsList" :key="index">
        <q-btn
          :label=tag.label
          :style="{backgroundColor: tag.color, color: 'white'}"
          disable
        />
    </div>

  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      newTag: {
        label: '',
        color: ''
      }
    }
  },
  mounted () {
    this.setTags()
  },
  computed: {
    ...mapGetters('tags', [
      'tagsList'
    ])
  },
  methods: {
    ...mapActions('tags', [
      'setTags',
      'addTag'
    ]),
    saveTag () {
      this.addTag(this.newTag)
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
