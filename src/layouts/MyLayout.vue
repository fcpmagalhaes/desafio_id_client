<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color=black
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          <img src="~/src/assets/logo-id.png"> Desafio Ignição Digital
          <div slot="subtitle">Developer by: Felipe C P Magalhães</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Menu </q-list-header>
        <q-item to="/list-clients">
          <q-item-side icon="list" />
          <q-item-main label="Lista de Clientes"/>
        </q-item>
        <q-item to="/new-client">
          <q-item-side icon="person" />
          <q-item-main label="Adicionar Cliente"/>
        </q-item>
        <q-item to="/add-tag">
          <q-item-side icon="tag" />
          <q-item-main label="Adicionar Tag"/>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus">
  .q-toolbar-title img
    width: 20px
    margin-top: 5px
</style>
