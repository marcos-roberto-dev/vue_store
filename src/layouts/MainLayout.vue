<template>
  <q-layout view="hHh Lpr fff">
    <q-header elevated class="bg-purple-10">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> {{ APP_CONSTANTS.APP_NAME }} </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer elevated class="bg-purple-10">
      <q-toolbar>
        <div class="text-center full-width">
          {{ $t('powered') }} v{{ $q.version }}
        </div>
      </q-toolbar>
    </q-footer>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered> </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { APP_CONSTANTS } from 'src/constants/app.constants';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      APP_CONSTANTS,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
