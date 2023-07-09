<template>
    <div class="p-2 rounded-md bg-gray-100 flex justify-between">
        <input @keydown.enter="onSearch" v-model="filters.Address" type="text" placeholder="Address"
            class="input input-bordered input-gray bg-white  w-full max-w-xs" />
        <input v-model="filters.Floor" type="text" placeholder="Floor"
            class="input input-bordered input-gray bg-white  w-full max-w-xs" />
        <input v-model="filters.DoorNumber" type="text" placeholder="Door Number"
            class="input input-bordered input-gray bg-white  w-full max-w-xs" />
    </div>
</template>

<script setup>
import { useApiStore } from '@/store'
import { storeToRefs } from 'pinia'
let { filters } = storeToRefs(useApiStore())
const onSearch = () => {
    const store = useApiStore()
    store.getApartments();
}
</script>

<style></style>