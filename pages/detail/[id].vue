<template>
    <loading :isReady="isReady" />
    <div v-if="isReady" class="card lg:card-side shadow-xl my-4 mx-4">
        <figure><img class="object-fill h-64 w-96" :src="apartment.data.attributes.Photo.data.attributes.url
            " /></figure>
        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div class="card-body">
                <h2 class="card-title">Addres: {{ apartment.data.attributes.Address }}</h2>
                <p>Floor: {{ apartment.data.attributes.Floor }}</p>
                <p>Door Number: {{ apartment.data.attributes.DoorNumber }}</p>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-1 ">
                    <div v-for="item in apartment.data.attributes.Inventory" v-bind:key="item" class="indicator">
                        <span class="indicator-item badge badge-primary">{{ item.Name }}</span>
                        <div class="grid w-32 h-32 place-items-center">
                            <img class="w-32 h-32" :src="item.Photo.data.attributes.url" alt="" srcset="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useApiStore } from '@/store'
import { storeToRefs } from 'pinia'
import Loading from '~/components/Loading';
let { isReady } = storeToRefs(useApiStore())
const route = useRoute()
const store = useApiStore()
let apartment = ref(null)
isReady.value = false
onMounted(async () => {

    apartment.value = await store.getApartment(route.params.id)
    isReady.value = true
})
</script>

<style></style>