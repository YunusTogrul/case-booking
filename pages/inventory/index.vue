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
import { storeToRefs } from 'pinia'
const { apartments } = storeToRefs(useApiStore())
const store = useApiStore()
onMounted(async () => {
      store.filterClear()
      store.getApartments();
})
</script>

<style></style>