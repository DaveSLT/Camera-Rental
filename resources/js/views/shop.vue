<template>
    <div
        class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
        <!-- Header with Navbar -->
        <header
            class="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg fixed w-full z-10"
        >
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <h1
                        class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                    >
                        Professional Camera Rental
                    </h1>
                    <nav class="hidden md:flex space-x-6">
                        <router-link
                            v-for="link in [
                                'Home',
                                'Shop',
                                'Support',
                                'Account',
                                'LogOut',
                            ]"
                            :to="
                                link === 'LogOut'
                                    ? '/'
                                    : `/${link.toLowerCase().replace(' ', '-')}`
                            "
                            class="text-sm uppercase tracking-wider hover:text-purple-400 transition duration-300"
                            :class="{
                                'text-yellow-400':
                                    $route.path ===
                                    `/${link.toLowerCase().replace(' ', '-')}`,
                            }"
                        >
                            {{ link }}
                        </router-link>
                    </nav>
                    <button
                        @click="toggleMobileMenu"
                        class="md:hidden text-white focus:outline-none"
                    >
                        <svg
                            v-if="!mobileMenuOpen"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <svg
                            v-else
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Mobile menu -->
            <div v-show="mobileMenuOpen" class="md:hidden">
                <router-link
                    v-for="link in [
                        'Home',
                        'Shop',
                        'Support',
                        'Account',
                        'LandingPage',
                    ]"
                    :key="link"
                    :to="
                        link === 'Home'
                            ? '/'
                            : `/${link.toLowerCase().replace(' ', '-')}`
                    "
                    class="block px-4 py-2 text-sm text-center hover:bg-gray-700 transition duration-300"
                    :class="{
                        'text-yellow-400':
                            $route.path ===
                            `/${link.toLowerCase().replace(' ', '-')}`,
                    }"
                >
                    {{ link }}
                </router-link>
            </div>
        </header>

        <!-- Main content -->
        <main class="container mx-auto px-4 pt-24 pb-12">
            <!-- Camera Categories -->
            <section class="mb-16">
                <h2 class="text-3xl font-bold mb-8 text-center">
                    Camera Categories
                </h2>
                <div
                    class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    <div
                        v-for="category in categories"
                        :key="category.name"
                        class="bg-gray-800 rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105"
                    >
                        <h3 class="text-xl font-semibold mb-2">
                            {{ category.name }}
                        </h3>
                        <p class="text-gray-400">{{ category.description }}</p>
                    </div>
                </div>
            </section>

            <!-- Search bar -->
            <div class="mb-12">
                <div class="max-w-xl mx-auto relative">
                    <input
                        v-model="searchTerm"
                        type="text"
                        placeholder="Search cameras..."
                        class="w-full pl-12 pr-4 py-3 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <svg
                        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </div>
            </div>

            <!-- Camera products listing -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                    v-for="camera in filteredCameras"
                    :key="camera.id"
                    class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                    <div class="relative pt-[75%]">
                        <img
                            :src="camera.image"
                            :alt="camera.name"
                            class="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">
                            {{ camera.name }}
                        </h3>
                        <p class="text-gray-400 mb-4">{{ camera.category }}</p>
                        <div class="flex items-center justify-between">
                            <span class="text-2xl font-bold text-purple-400"
                                >${{ camera.price }}/day</span
                            >
                            <button
                                @click="rentCamera(camera)"
                                class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                            >
                                Rent Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer class="bg-gray-900 py-8">
            <div class="container mx-auto px-4 text-center text-gray-400">
                <p>
                    &copy; {{ new Date().getFullYear() }} Professional Camera
                    Rental. All rights reserved.
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
import { ref, computed } from "vue";

import Canon_EOS_R5 from "@/img/Canon_EOS_R5.png";
import Sony_A7_III from "@/img/Sony_A7_III.jpg";
import Nikon_Z6 from "@/img/Nikon_Z6.jpg";
import Fujifilm_X_T4 from "@/img/Fujifilm_X-T4.jpg";
import Panasonic_Lumix_GH5 from "@/img/Panasonic_Lumix_GH5.jpg";
import Blackmagic_Pocket_6K from "@/img/Blackmagic_Pocket_6K.jpg";

export default {
    setup() {
        const mobileMenuOpen = ref(false);
        const searchTerm = ref("");

        const categories = [
            { name: "DSLR", description: "Explore our collection of DSLRs." },
            {
                name: "Mirrorless",
                description: "Lightweight and versatile options.",
            },
            {
                name: "Point and Shoot",
                description: "Easy to use, perfect for casual photography.",
            },
            {
                name: "Others",
                description: "Unique cameras for specific needs.",
            },
        ];

        const cameras = ref([
            {
                id: 1,
                name: "Canon EOS R5",
                price: 150,
                image: Canon_EOS_R5,
                category: "DSLR",
            },
            {
                id: 2,
                name: "Sony A7 III",
                price: 120,
                image: Sony_A7_III,
                category: "Mirrorless",
            },
            {
                id: 3,
                name: "Nikon Z6",
                price: 130,
                image: Nikon_Z6,
                category: "Mirrorless",
            },
            {
                id: 4,
                name: "Fujifilm X-T4",
                price: 100,
                image: Fujifilm_X_T4,
                category: "Mirrorless",
            },
            {
                id: 5,
                name: "Panasonic Lumix GH5",
                price: 110,
                image: Panasonic_Lumix_GH5,
                category: "DSLR",
            },
            {
                id: 6,
                name: "Blackmagic Pocket 6K",
                price: 200,
                image: Blackmagic_Pocket_6K,
                category: "Others",
            },
        ]);

        const filteredCameras = computed(() =>
            cameras.value.filter((camera) =>
                camera.name
                    .toLowerCase()
                    .includes(searchTerm.value.toLowerCase())
            )
        );

        const toggleMobileMenu = () => {
            mobileMenuOpen.value = !mobileMenuOpen.value;
        };

        const rentCamera = (camera) => {
            console.log(`Renting ${camera.name}`);
            // Implement rental logic here
        };

        return {
            mobileMenuOpen,
            searchTerm,
            categories,
            cameras,
            filteredCameras,
            toggleMobileMenu,
            rentCamera,
        };
    },
};
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

/* Add any additional custom styles here */
</style>
