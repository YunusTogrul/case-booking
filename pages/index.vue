<template>
      <div>
            <filterbar />
            <div class="mx-auto max-w-2xl px-2 py-2 sm:px-2 sm:py-2 lg:max-w-7xl lg:px-5">
                  <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div v-for="aparment in apartments" v-bind:key="aparment" class="group relative bg-gray-100 m-1">
                              <div
                                    class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img :src="aparment.attributes.Photo.data.attributes.url"
                                          class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                              </div>
                              <div class="bottom-10 absolute w-full">
                                    <div class="m-3 p-1 bg-white flex justify-center">
                                          <div v-for="inventory in aparment.attributes.Inventory" v-bind:key="inventory">
                                                <i v-if="inventory.Icon != null"
                                                      :class="'ml-2 fa-solid ' + inventory.Icon"></i>
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

      </div>
</template>
<script setup>
import Filterbar from '~/components/Filterbar'
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