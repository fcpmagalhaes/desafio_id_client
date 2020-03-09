<template>
  <q-page class="container q-ma-lg">

    <h3>Adicionar Nova Tag</h3>
    <q-input v-model="newTag.label" float-label=" Título" />
    <q-color v-model="newTag.color" popover format-model="hex" stack-label="Cor" />
     <div class='row justify-center'>
      <div class="col-md-5 col-sm-12">
        <q-btn
          color=primary
          label='Salvar'
          @click="saveTag()"
          class="saveButton"
        />
      </div>
    </div>
    <h3>Tags Cadastradas</h3>
    <q-btn
      v-for="(tag, index) in tagsList" :key="index"
      :label=tag.label
      :style="{color: tag.color}"
      outline
      dense
      disable
      class="tagsSpacing"
    />

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
    margin: 30px
    float: right
  .tagsSpacing
    margin: 5px
</style>
