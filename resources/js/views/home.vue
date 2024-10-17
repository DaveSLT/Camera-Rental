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
                            :key="link"
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

        <!-- Hero Section -->
        <section
            class="relative h-screen flex items-center justify-center overflow-hidden"
        >
            <div class="absolute inset-0 z-0">
                <video autoplay loop muted class="w-full h-full object-cover">
                    <source
                        src="/resources/js/views/hero-background.mp4"
                        type="video/mp4"
                    />
                </video>
                <div class="absolute inset-0 bg-black opacity-60"></div>
            </div>
            <div class="relative z-10 text-center">
                <h2 class="text-5xl md:text-7xl font-extrabold mb-4">
                    Capture Your Vision
                </h2>
                <p class="text-xl md:text-2xl mb-8">
                    Professional cameras at your fingertips
                </p>
                <a
                    href="#cameras"
                    class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
                >
                    Explore Cameras
                </a>
            </div>
        </section>

        <!-- Main content -->
        <main class="container mx-auto px-4 py-16">
            <!-- Featured Camera Section -->
            <section class="mb-16">
                <h2 class="text-3xl font-bold mb-8 text-center">
                    Featured: EOS R6 Mark II
                </h2>
                <div class="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                    <div class="md:flex">
                        <div class="md:w-1/2">
                            <video
                                ref="videoPlayer"
                                class="w-full h-full object-cover"
                                @click="togglePlay"
                                autoplay
                            >
                                <source
                                    src="/resources/js/views/hero-background.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div class="md:w-1/2 p-8">
                            <h3 class="text-2xl font-bold mb-4">
                                EOS R6 Mark II
                            </h3>
                            <p class="mb-6">
                                Experience unparalleled videography and
                                photography with the EOS R6 Mark II. Capable of
                                recording up to 6K 60p 10-bit RAW movies, this
                                camera is a game-changer for professionals and
                                enthusiasts alike.
                            </p>
                            <div class="flex items-center justify-between mb-6">
                                <span class="text-3xl font-bold text-purple-400"
                                    >$200/day</span
                                >
                                <button
                                    @click="
                                        rentCamera({
                                            id: 'r6-mark-ii',
                                            name: 'EOS R6 Mark II',
                                        })
                                    "
                                    class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                                >
                                    Rent Now
                                </button>
                            </div>
                            <div
                                class="flex items-center justify-center space-x-4"
                            >
                                <button
                                    @click="togglePlay"
                                    class="text-white hover:text-purple-400 transition duration-300"
                                >
                                    <svg
                                        v-if="!isPlaying"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-8 w-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <svg
                                        v-else
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-8 w-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                                <button
                                    @click="toggleMute"
                                    class="text-white hover:text-purple-400 transition duration-300"
                                >
                                    <svg
                                        v-if="!isMuted"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-8 w-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                        />
                                    </svg>
                                    <svg
                                        v-else
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-8 w-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Camera Listing Section -->
            <section id="cameras" class="mb-16">
                <h2 class="text-3xl font-bold mb-8 text-center">
                    Our Camera Collection
                </h2>
                <div class="mb-8">
                    <input
                        v-model="searchTerm"
                        type="text"
                        placeholder="Search cameras..."
                        class="w-full max-w-md mx-auto block px-4 py-3 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
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
                            <p class="text-gray-400 mb-4">
                                {{ camera.description }}
                            </p>
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
            </section>

            <!-- Testimonial Section -->
            <section class="mb-16">
                <h2 class="text-3xl font-bold mb-8 text-center">
                    What Our Customers Say
                </h2>
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <div
                        v-for="testimonial in testimonials"
                        :key="testimonial.id"
                        class="bg-gray-800 rounded-lg p-6 shadow-lg"
                    >
                        <div class="flex items-center mb-4">
                            <img
                                :src="testimonial.avatar"
                                :alt="testimonial.name"
                                class="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h4 class="font-semibold">
                                    {{ testimonial.name }}
                                </h4>
                                <p class="text-gray-400 text-sm">
                                    {{ testimonial.profession }}
                                </p>
                            </div>
                        </div>
                        <p class="text-gray-300">{{ testimonial.comment }}</p>
                    </div>
                </div>
            </section>
        </main>

        <footer class="bg-gray-900 py-12">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4">LensMaster</h3>
                        <p class="text-gray-400">
                            Empowering creators with top-notch camera gear.
                        </p>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul class="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    class="text-gray-400 hover:text-white transition duration-300"
                                    >About Us</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="text-gray-400 hover:text-white transition duration-300"
                                    >FAQ</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="text-gray-400 hover:text-white transition duration-300"
                                    >Terms of Service</a
                                >
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="text-gray-400 hover:text-white transition duration-300"
                                    >Privacy Policy</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-4">
                            Connect With Us
                        </h4>
                        <div class="flex space-x-4">
                            <a
                                href="#"
                                class="text-gray-400 hover:text-white transition duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                class="text-gray-400 hover:text-white transition duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0  14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                class="text-gray-400 hover:text-white transition duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"
                >
                    <p>
                        &copy; {{ new Date().getFullYear() }} LensMaster. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import Canon_EOS_R5 from "@/img/Canon_EOS_R5.png";
import Sony_A7_III from "@/img/Sony_A7_III.jpg";
import Nikon_Z6 from "@/img/Nikon_Z6.jpg";
import Fujifilm_X_T4 from "@/img/Fujifilm_X-T4.jpg";
import Panasonic_Lumix_GH5 from "@/img/Panasonic_Lumix_GH5.jpg";
import Blackmagic_Pocket_6K from "@/img/Blackmagic_Pocket_6K.jpg";

export default {
    data() {
        return {
            mobileMenuOpen: false,
            navLinks: [
                { to: "#", text: "Home" },
                { to: "/shop", text: "Shop" },
                { to: "#", text: "About" },
                { to: "#", text: "Contact" },
            ],
            cameras: [
                {
                    id: 1,
                    name: "Canon EOS R5",
                    price: 150,
                    image: Canon_EOS_R5,
                    description: "High-resolution full-frame mirrorless camera",
                },
                {
                    id: 2,
                    name: "Sony A7 III",
                    price: 120,
                    image: Sony_A7_III,
                    description: "Versatile full-frame mirrorless camera",
                },
                {
                    id: 3,
                    name: "Nikon Z6",
                    price: 130,
                    image: Nikon_Z6,
                    description: "All-around performer for stills and video",
                },
                {
                    id: 4,
                    name: "Fujifilm X-T4",
                    price: 100,
                    image: Fujifilm_X_T4,
                    description: "Flagship APS-C mirrorless camera",
                },
                {
                    id: 5,
                    name: "Panasonic Lumix GH5",
                    price: 110,
                    image: Panasonic_Lumix_GH5,
                    description: "Professional-grade video capabilities",
                },
                {
                    id: 6,
                    name: "Blackmagic Pocket 6K",
                    price: 200,
                    image: Blackmagic_Pocket_6K,
                    description: "Cinema-quality 6K video in a compact body",
                },
            ],
            searchTerm: "",
            isPlaying: false,
            isMuted: true,
            testimonials: [
                {
                    id: 1,
                    name: "Sarah Johnson",
                    profession: "Professional Photographer",
                    avatar: "/avatar1.jpg",
                    comment:
                        "LensMaster has been a game-changer for my photography business. The quality of their cameras is unmatched!",
                },
                {
                    id: 2,
                    name: "Mike Chen",
                    profession: "Indie Filmmaker",
                    avatar: "/avatar2.jpg",
                    comment:
                        "As an indie filmmaker, having access to high-end equipment is crucial. LensMaster delivers every time.",
                },
                {
                    id: 3,
                    name: "Emily Rodriguez",
                    profession: "Travel Vlogger",
                    avatar: "/avatar3.jpg",
                    comment:
                        "I've been using LensMaster for all my travels. Their service is top-notch, and the gear is always in perfect condition.",
                },
            ],
        };
    },
    computed: {
        filteredCameras() {
            return this.cameras.filter((camera) =>
                camera.name
                    .toLowerCase()
                    .includes(this.searchTerm.toLowerCase())
            );
        },
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        rentCamera(camera) {
            console.log(`Renting ${camera.name}`);
            // Implement rental logic here
        },
        togglePlay() {
            const video = this.$refs.videoPlayer;
            if (video.paused) {
                video.play();
                this.isPlaying = true;
            } else {
                video.pause();
                this.isPlaying = false;
            }
        },
        toggleMute() {
            const video = this.$refs.videoPlayer;
            video.muted = !video.muted;
            this.isMuted = video.muted;
        },
    },
};
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

/* Add any additional custom styles here */
</style>
