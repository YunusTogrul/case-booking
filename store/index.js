import { defineStore } from 'pinia';

export const useApiStore = defineStore({
    id: 'data',
    state: () => ({
        apartments: {},
        elements: {},
        filters: { Address: "", Floor: "", DoorNumber: "" },
        filtersParams: "",
    }),
    actions: {
        async getApartments() {
            const { $api } = useNuxtApp();
            this.filterParamsSet()
            const response = await $api.get("/apartments?populate=*" + this.filtersParams)
            const data = await response.data;
            this.apartments = data.data;
        },
        async getElements() {
            const { $api } = useNuxtApp();
            const response = await $api.get("/elements?populate=*")
            const data = await response.data;
            this.elements = data.data;
        },
        async postPicture(form) {
            const { $api } = useNuxtApp();
            let formData = {}
            let aparmentPhotoData = new FormData()
            aparmentPhotoData.append("files", form.photoApartment, form.photoApartment.name)
            const responseApartmentPhoto = await $api.post("/upload", aparmentPhotoData)
            const dataApartmentPhoto = await responseApartmentPhoto.data;
            formData["data"] = {}
            formData.data["Address"] = form.address
            formData.data["Floor"] = form.floor
            formData.data["DoorNumber"] = form.doorNumber
            formData.data["Photo"] = dataApartmentPhoto[0].id
            formData.data["Inventory"] = []
            for (let index = 0; index < form.inventory.length; index++) {
                const element = form.inventory[index];
                let inventoryPhotoData = new FormData()
                inventoryPhotoData.append("files", element.inventoryPhoto, element.inventoryPhoto.name)
                const responseInventoryPhoto = await $api.post("/upload", inventoryPhotoData)
                const dataInventoryPhoto = await responseInventoryPhoto.data;
                formData.data.Inventory.push({ Name: element.attributes.Name, Icon: element.attributes.Icon, Photo: dataInventoryPhoto[0].id, "__component": "component.inventory" })
            }
            console.log(formData)
            const response1 = await $api.post("/apartments", formData)
            const data1 = await response1.data;
            console.log(data1)
        },
        filterParamsSet() {
            this.filtersParams = ""
            if (this.filters.Address != "") {
                this.filtersParams = this.filtersParams + "&filters[Address][$containsi]=" + this.filters.Address
            }
            if (this.filters.Floor != "") {
                this.filtersParams = this.filtersParams + "&filters[Floor][$containsi]=" + this.filters.Floor
            }
            if (this.filters.Floor != "") {
                this.filtersParams = this.filtersParams + "&filters[DoorNumber][$containsi]=" + this.filters.DoorNumber
            }
        },
        filterClear() {
            this.filters = { Address: "", Floor: "", DoorNumber: "" }
        }
    }
})