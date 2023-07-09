<template>
    <div class="relative flex flex-col justify-center overflow-hidden">
        <div class="w-full p-6 m-auto bg-white lg:max-w-xl">
            <h1 class="text-3xl font-semibold text-center text-gray-700">Add Apartment</h1>
            <form class="space-y-4">
                <div>
                    <label class="label">
                        <span class="text-base label-text">Address</span>
                    </label>
                    <input v-model="formValue.address" :disabled="isPreview" type="text" placeholder="Address"
                        class="w-full input input-bordered bg-white" />
                </div>
                <div>
                    <label class="label">
                        <span class="text-base label-text">Floor</span>
                    </label>
                    <input v-model="formValue.floor" :disabled="isPreview" type="text" placeholder="Floor"
                        class="w-full input input-bordered bg-white" />
                </div>
                <div>
                    <label class="label">
                        <span class="text-base label-text">Door Number</span>
                    </label>
                    <input v-model="formValue.doorNumber" :disabled="isPreview" type="text" placeholder="Door Number"
                        class="w-full input input-bordered bg-white" />
                </div>

                <div>
                    <label class="label">
                        <span class="text-base label-text">Photo for apartment</span>
                    </label>
                    <input :disabled="isPreview" @change="changeApartmentPhoto($event)" type="file"
                        class="file-input w-full max-w-xs bg-white" />
                </div>

                <div>
                    <label class="label">
                        <span class="text-base label-text">Item list for apartment</span>
                    </label>
                    <div class="flex justify-stretch">
                        <select :disabled="isPreview" v-model="selectedId"
                            class="select select-bordered w-full max-w-xs bg-white">
                            <option disabled selected>Pick</option>
                            <option v-for="element in elements" v-bind:key="element" :value="element.id">{{
                                element.attributes.Name }}</option>
                        </select>
                        <button :disabled="isPreview" type="button" @click="addElements" class="ml-1 btn">Add</button>
                    </div>
                    <div class="mt-1">
                        <ul class="bg-base-200 rounded-box bg-gray-100">
                            <li v-for="(item, index) in selectedElements" v-bind:key="item" class="border-solid border-1">
                                <div class="flex flex-1 items-center p-4 ">
                                    <div class="flex-1 pl-1">
                                        <i :class="'fa-solid ' + item.attributes.Icon"></i>
                                    </div>
                                    <div class="flex-1 pl-1">
                                        <div class="font-small text-black">{{ item.attributes.Name }}</div>
                                    </div>
                                    <div class="flex-1 pl-1">
                                        <input @change="changeInventoryPhoto($event, index)" :disabled="isPreview"
                                            type="file"
                                            class="file-input file-input-bordered file-input-xs w-full max-w-xs" />
                                    </div>
                                    <div class="flex flex-row justify-center">
                                        <button :disabled="isPreview" type="button" @click="removeElements(index)"
                                            class="w-10 text-right flex justify-end">
                                            <i class="fa-solid fa-xmark"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="flex justify-end">
                    <button @click="changePreviewMode" type="button" class="btn btn-info">Preview</button>
                    <button @click="sendForm" :disabled="!isPreview" type="button"
                        class="btn ml-1 btn-success">Approve</button>
                </div>

            </form>
        </div>
    </div>
</template>

<script setup>
import { useApiStore } from '@/store'
import { storeToRefs } from 'pinia'
const store = useApiStore()
const { elements } = storeToRefs(store)
let selectedElements = ref([])
let selectedId = ref()
let isPreview = ref(false)
let formValue = ref({
    address: "",
    floor: "",
    doorNumber: "",
    photoApartment: {},
    listInventory: [],
})
onMounted(async () => {
    store.getElements()
})
const addElements = () => {
    const data = useFindLast(elements.value, (n) => {
        return n.id == selectedId.value;
    })
    data["inventoryPhoto"] = {}
    if (selectedElements.value.length < 20) {
        selectedElements.value.push(data)
    }
}
const removeElements = (x) => {
    selectedElements.value.splice(x, 1);
}
const changePreviewMode = () => {
    isPreview.value = !isPreview.value
}
const changeApartmentPhoto = (event) => {
    let uploadedFiles = event.target.files;
    if (uploadedFiles.length > 0) {
        formValue.value.photoApartment = uploadedFiles[0]
    } else {
        formValue.value.photoApartment = {}
    }
}
const changeInventoryPhoto = (event, index) => {
    let uploadedFiles = event.target.files;
    if (uploadedFiles.length > 0) {
        selectedElements.value[index].inventoryPhoto = uploadedFiles[0]
    } else {
        selectedElements.value[index].inventoryPhoto = {}
    }
}
const sendForm = () => {
    formValue.value["inventory"] = selectedElements.value
    console.log(formValue.value)
    store.postPicture(formValue.value)
}
</script>

<style></style>