<template>
    <div>
        <navbar />
        <div class="container mt-5 mx-auto">
            <slot />
        </div>
        <footerbar />
    </div>
</template>
  
<script setup>
import Navbar from '~/components/Navbar'
import Footerbar from '~/components/Footerbar'


</script>