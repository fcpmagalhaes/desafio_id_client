<template>
  <q-page padding>
    <h3>Lista de Clientes</h3>
    <q-card inline class="q-ma-sm c">
      <q-card-title>
        Title
        <span slot="subtitle">Subtitle</span>
        <q-btn round flat icon="more_vert" slot="right">
          <q-popover>
            <q-list link class="no-border">
              <q-item v-close-overlay>
                <q-item-main label="Editar" />
              </q-item>
              <q-item v-close-overlay>
                <q-item-main label="Excluir" />
              </q-item>
            </q-list>
          </q-popover>
        </q-btn>
      </q-card-title>
      <q-card-separator />
      <q-card-actions>
        <q-btn
          @click="ativateTag"
          style="background: #007DDC; color: white"
          label="Action 1"
        />
        <q-btn
          @click="desativateTag"
          outline
          style="color: #007DDC;"
          label="Action 2"
        />

      </q-card-actions>
    </q-card>

  </q-page>
</template>

<script>
export default {
  data () {
    return {
      stars: 3,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="stylus">
.q-card
  width 100%
.bigger
  width 450px
  max-width 90vw
@media (max-width $breakpoint-xs-max)
  .q-card
      width 100%
</style>
