import { defineStore } from 'pinia';
import { useQuasar } from 'quasar';
export const useAppStore = defineStore('app', {
  state: () => ({
    $q: useQuasar(),
  }),
});
