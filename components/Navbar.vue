<template>
    <div>
        <div class="navbar bg-gray-150 px-8">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost text-black lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-300 text-black rounded-box w-52">
                        <li>
                            <NuxtLink to="/">
                                Apartment list</NuxtLink>
                        </li>
                        <NuxtLink to="/inventory">Inventory list</NuxtLink>
                    </ul>
                </div>
                <div class="divider divider-horizontal "></div>
                <div class="text-black hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        <li>
                            <NuxtLink to="/">
                                Apartment list</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/inventory">Inventory list</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="navbar-center ">
                <a class="btn btn-ghost normal-case text-black text-xl ">Yunus Booking</a>
            </div>
        </div>
        <div class="w-full h-72 hidden md:flex">
            <img src="/images/1.jpg" class="h-full w-full object-cover object-center brightness-75">
            <div class="mt-20 ml-10 absolute opacity-75">
                <div class="flex flex-col">
                    <span class="text-3xl font-bold text-white">THE ULTIMATE LUXURY</span>
                    <span class="ml-10 text-6xl font-bold text-white">Luxury Apartment</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style></style>