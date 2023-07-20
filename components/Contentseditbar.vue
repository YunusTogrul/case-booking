<template>
    <loading />
    <div class="flex justify-end mt-4">
        <NuxtLink to="/inventory/add" class="btn btn-circle btn-info btn-m"><i class="fa-solid fa-plus"></i>
        </NuxtLink>
    </div>
    <div v-if="apartments.length != 0" class="mx-auto max-w-2xl px-2 py-2 sm:px-2 sm:py-2 lg:max-w-7xl lg:px-5">
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div v-for="aparment in apartments" v-bind:key="aparment" class="group relative m-1">
                <div class="bg-white p-1 mt-4 flex justify-end">
                    <button @click="deleteItem(aparment.id)" class="btn btn-circle btn-error btn-xs"><i
                            class="fa-solid fa-xmark"></i></button>
                </div>
                <div
                    class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img :src="aparment.attributes.Photo.data.attributes.url"
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                </div>
                <div class="bottom-10 absolute w-full">
                    <div class="m-3 p-1 bg-white flex justify-center">
                        <div v-for="inventory in aparment.attributes.Inventory" v-bind:key="inventory">
                            <i v-if="inventory.Icon != null" :class="'ml-2 fa-solid ' + inventory.Icon"></i>
                        </div>

                    </div>
                </div>
                <div class="bg-white p-1 mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-950">
                        {{ aparment.attributes.Address }}
                    </h3>
                    <div>
                        <p class="mt-1 text-sm text-gray-500">Door Number : {{
                            aparment.attributes.DoorNumber }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">Floor: {{ aparment.attributes.Floor }}</p>
                    </div>
                </div>

            </div>

        </div>

    </div>
    <div v-if="apartments.length == 0" class="h-52 flex items-center justify-center">
        <p>Doesn't have content!</p>
    </div>
</template>

<script setup>
import { useApiStore } from '@/store'
import { storeToRefs } from 'pinia'
import Loading from '~/components/Loading';
const router = useRouter();
const { $toast } = useNuxtApp();
let deleted = isDeleted()
const { apartments, isReady } = storeToRefs(useApiStore())
const store = useApiStore()
onMounted(async () => {
    isReady.value = apartments.value.length > 0 ? true : false
    await store.filterClear()
    await store.getApartments();
    isReady.value = true
})

const deleteItem = async (id) => {
    console.log(id)
    let toastId = $toast.warn('Data is deleting', { isLoading: true });
    await store.deleteData(id)
    deleted.value = toastId
}

</script>

<style></style>