<template>
    <div
        class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
        <!-- Header -->
        <header
            class="bg-black w-full transition-all duration-300"
            :class="{ fixed: !isSmallScreen, relative: isSmallScreen }"
        >
            <div
                class="container mx-auto flex justify-between items-center py-4 px-4"
            >
                <!-- Logo / Site Name -->
                <h1
                    class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                >
                    ZoomPro
                </h1>

                <!-- Main Navigation for medium screens and larger -->
                <nav class="hidden md:flex space-x-4">
                    <router-link
                        to="/login"
                        class="bg-gray-700 hover:bg-gray-600 border border-gray-400 text-white py-2 px-4 rounded transition duration-300"
                    >
                        Login
                    </router-link>
                    <router-link
                        to="/signUp"
                        class="bg-gray-100 text-gray-900 hover:bg-gray-700 hover:text-white py-2 px-4 rounded transition duration-300"
                    >
                        Sign Up
                    </router-link>
                </nav>

                <!-- Hamburger Menu Icon for small screens -->
                <div class="md:hidden">
                    <button
                        @click="toggleMenu"
                        class="text-white focus:outline-none"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>

            <!-- Mobile Navigation Menu (visible when hamburger is clicked) -->
            <div v-if="isMenuOpen" class="bg-black md:hidden px-4">
                <router-link
                    to="/login"
                    class="block text-white py-2 px-4 hover:bg-gray-600 rounded mt-2"
                >
                    Login
                </router-link>
                <router-link
                    to="/signUp"
                    class="block text-white py-2 px-4 hover:bg-gray-600 rounded mt-2"
                >
                    Sign Up
                </router-link>
            </div>
        </header>

        <!-- Hero Section -->
        <section
            class="bg-gradient-to-br from-gray-800 to-gray-700 py-12 md:py-20"
            :class="{ 'pt-24': !isSmallScreen }"
        >
            <div
                class="container mx-auto flex flex-col md:flex-row items-center"
            >
                <div class="md:w-1/2 px-5">
                    <h1
                        class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                    >
                        Explore Our Camera Collection
                    </h1>
                    <p class="mt-3 text-lg text-gray-400 mb-5">
                        Find top-quality cameras for every occasion, available
                        at affordable rental prices.
                    </p>
                    <router-link
                        to="/login"
                        class="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition duration-300"
                    >
                        Start Renting
                    </router-link>
                </div>
                <div class="md:w-1/2 mt-6 md:mt-0">
                    <img
                        src="/resources/js/img/Canon_EOS_R5.png"
                        alt="Camera"
                        class="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto"
                    />
                </div>
            </div>
        </section>
        <!-- Features Section -->
        <section class="bg-gray-900 py-10 md:py-12">
            <div class="container mx-auto">
                <h2 class="text-3xl font-bold text-center text-white">
                    Why Choose Us?
                </h2>
                <div class="flex flex-wrap justify-center mt-8">
                    <div class="w-full md:w-1/3 p-4">
                        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-semibold text-white">
                                Diverse Camera Collection
                            </h3>
                            <p class="mt-2 text-gray-400">
                                Choose from our extensive range of DSLR,
                                mirrorless, and professional cameras.
                            </p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 p-4">
                        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-semibold text-white">
                                Flexible Rental Plans
                            </h3>
                            <p class="mt-2 text-gray-400">
                                Our rental options are tailored to your needs,
                                from daily to monthly plans.
                            </p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 p-4">
                        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-semibold text-white">
                                Customer Support
                            </h3>
                            <p class="mt-2 text-gray-400">
                                We offer 24/7 customer support to help with your
                                rental needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action Section -->
        <section class="bg-gray-900 py-12 md:py-16 text-white text-center">
            <h2 class="text-3xl font-bold">
                Ready to Rent Your Perfect Camera?
            </h2>
            <p class="my-5">Explore our collection and start renting today!</p>
            <router-link
                to="/shop"
                class="mt-5 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition duration-300"
            >
                Browse Cameras
            </router-link>
        </section>

        <!-- Footer -->
        <footer class="bg-black py-4">
            <div class="container mx-auto text-center text-gray-400">
                <p>
                    &copy; {{ new Date().getFullYear() }} ZoomPro. All rights
                    reserved.
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: "LandingPage",
    data() {
        return {
            isMenuOpen: false,
            isSmallScreen: false,
        };
    },
    mounted() {
        this.checkScreenSize();
        window.addEventListener("resize", this.checkScreenSize);
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        checkScreenSize() {
            this.isSmallScreen = window.innerWidth <= 768;
        },
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.checkScreenSize);
    },
};
</script>

<style scoped>
/* Responsive styles */
@media (max-width: 640px) {
    header h1 {
        font-size: 1.75rem;
    }
    section {
        padding: 1.5rem 0;
    }
    img {
        max-width: 100%;
        height: auto;
    }
    footer p {
        font-size: 0.875rem;
    }
}
</style>
