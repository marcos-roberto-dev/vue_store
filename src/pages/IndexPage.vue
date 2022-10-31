<template>
  <q-page class="row items-center justify-evenly">
    <div>{{ $t('success') }}</div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from 'src/stores/app.store';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const appStore = useAppStore();
    return { appStore };
  },
});
</script>
