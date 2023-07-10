<template>
    <div v-show="!isReady" class="flex justify-center my-10 mx-10">
        <span class="loading loading-infinity loading-lg"></span>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useApiStore } from '@/store'
const { isReady } = storeToRefs(useApiStore())
</script>

<style></style>