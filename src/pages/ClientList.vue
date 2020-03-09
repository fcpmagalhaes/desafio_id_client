<template>
  <q-page class="container q-ma-lg">
    <h3>Lista de Clientes</h3>

    <div class="row gutter-md q-pa-md">
      <div class="col-xs-12" v-for="(client, index) in clientsList" :key="index">
         <q-card>
            <q-card-title>
              {{client.nome}}
              <span slot="subtitle">{{client.email}}</span>
              <q-btn round flat icon="more_vert" slot="right">
                <q-popover>
                  <q-list link class="no-border">
                    <q-item v-close-overlay @click.native="editClient(client.id)">
                      <q-item-main label="Editar" />
                    </q-item>
                    <q-item v-close-overlay @click.native="deleteClient(client.id)">
                      <q-item-main label="Excluir" />
                    </q-item>
                  </q-list>
                </q-popover>
              </q-btn>
            </q-card-title>
            <q-card-separator />
            <q-card-actions>
              <q-btn
                v-for="(tag, index) in client.tagsCliente" :key="index"
                style="background: #007DDC; color: white"
                :label=tag.label
                :style="{color: tag.color}"
                outline
                dense
                disable
                class="tagsSpacing"
              />
            </q-card-actions>
          </q-card>

      </div>
    </div>

  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ClientList',
  data () {
    return {
    }
  },
  mounted () {
    this.setClients()
  },
  computed: {
    ...mapGetters('clients', [
      'clientsList'
    ])
  },
  methods: {
    ...mapActions('clients', [
      'setClients',
      'deleteClient'
    ]),
    editClient (id) {
      this.$router.push(`/client/${id}`)
    }
  }
}
</script>

<style lang="stylus">
.tagsSpacing
  margin: 5px
.q-card
  width 100%
.bigger
  width 450px
  max-width 90vw
@media (max-width $breakpoint-xs-max)
  .q-card
      width 100%
</style>
