<template>
      <div>
            <filterbar />
            <contentseditbar />
      </div>
</template>

<script setup>
import Filterbar from '~/components/Filterbar'
import Contentseditbar from '~/components/Contentseditbar';
import { useApiStore } from '@/store'
const { $toast } = useNuxtApp();

const store = useApiStore()
let success = isSuccess()
let deleted = isDeleted()

onMounted(async () => {
      store.filterClear()

      if (success.value != undefined) {
            $toast.remove(success.value)
            success.value = undefined
            $toast.success('New data created!');
      }

      watch(deleted, (newConfig) => {
            console.log(newConfig)
            if (newConfig != undefined) {
                  $toast.remove(newConfig)
                  deleted.value = undefined
                  $toast.error('Data deleted!');
                  store.getApartments();
            }
      });


})
</script>

<style></style>