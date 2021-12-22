<template>
  <v-dialog 
    v-model="showDialog"
    persistent
    max-width="400"
  >
    <v-card>
      <header>
        <v-card-title class="headline justify-center">
          <slot name="header">
            {{ $t('dialogs.title.confirmation') }}
          </slot>
        </v-card-title>
        <v-divider />
      </header>

      <main>
        <v-card-text>
          <slot name="content">
            {{ $t('dialogs.content.confirmation') }}
          </slot>
        </v-card-text>
      </main>

      <footer>
        <v-card-actions>
          <v-spacer />
          <slot name="footer">
            <v-btn
              color="green darken-1"
              text
              @click="confirm"
            >
              {{ $t('buttons.yesBtn') }}
            </v-btn>

            <v-btn
              color="red darken-1"
              text
              @click="showDialog = false"
            >
              {{ $t('buttons.closeBtn') }}
            </v-btn>
          </slot>
          <v-spacer />
        </v-card-actions>
      </footer>
    </v-card>
  </v-dialog>
</template>

<script>
/**
 * Basic component for showing custom content dialog.
 */
export default {
  name: "BaseDialog",
  props: {
    /**
     * Custom confirm function.
     */
    confirm: {
      type: Function,
      default: () => {
        return false;
      }
    },
    /**
     * Show/Hide dialog.
     */
    show: Boolean,
  },
  data: () => ({
    /**
     * Show/Hide local for updated prop.
     */
    showDialog: this.show
  })
};
</script>

<style scoped>

</style>