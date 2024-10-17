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
                        'LogOut',
                    ]"
                    :key="link"
                    :to="
                        link === 'LogOut'
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

        <!-- Account Page Content -->
        <main class="container mx-auto px-4 pt-24 pb-12">
            <h2 class="text-4xl font-bold mb-8 text-center">My Account</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Account Details Section -->
                <div class="bg-gray-800 rounded-lg shadow-lg p-6">
                    <h3 class="text-2xl font-semibold mb-4 text-purple-400">
                        Account Details
                    </h3>
                    <p class="text-gray-300 mb-2">
                        <strong>Name:</strong> {{ userAccount.name }}
                    </p>
                    <p class="text-gray-300 mb-2">
                        <strong>Email:</strong> {{ userAccount.email }}
                    </p>
                    <p class="text-gray-300 mb-2">
                        <strong>Membership Status:</strong>
                        {{ userAccount.membershipStatus }}
                    </p>
                    <router-link
                        to="/settings"
                        class="text-purple-400 hover:underline"
                    >
                        Edit Account Details
                    </router-link>
                </div>

                <!-- Settings Section -->
                <div class="bg-gray-800 rounded-lg shadow-lg p-6">
                    <h3 class="text-2xl font-semibold mb-4 text-purple-400">
                        Settings
                    </h3>
                    <ul class="space-y-2">
                        <li v-for="setting in settings" :key="setting.to">
                            <router-link
                                :to="setting.to"
                                class="text-gray-300 hover:text-purple-400 transition duration-300"
                            >
                                {{ setting.text }}
                            </router-link>
                        </li>
                    </ul>
                </div>

                <!-- Cameras Rented Section -->
                <div class="bg-gray-800 rounded-lg shadow-lg p-6">
                    <h3 class="text-2xl font-semibold mb-4 text-purple-400">
                        Cameras Rented
                    </h3>
                    <ul class="space-y-2">
                        <li
                            v-for="(rental, index) in rentedCameras"
                            :key="index"
                            class="text-gray-300"
                        >
                            {{ rental.camera }} - Rented from
                            {{ rental.startDate }} to {{ rental.endDate }}
                        </li>
                    </ul>
                    <router-link
                        to="/rental-history"
                        class="text-purple-400 hover:underline mt-4 inline-block"
                    >
                        View Full Rental History
                    </router-link>
                </div>

                <!-- Other Settings Section -->
                <div class="bg-gray-800 rounded-lg shadow-lg p-6 md:col-span-3">
                    <h3 class="text-2xl font-semibold mb-4 text-purple-400">
                        Other Settings
                    </h3>
                    <p class="text-gray-300 mb-4">
                        Manage your other preferences and settings related to
                        your account here.
                    </p>
                    <router-link
                        to="/support"
                        class="text-purple-400 hover:underline"
                    >
                        Need Help? Contact Support
                    </router-link>
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
export default {
    data() {
        return {
            mobileMenuOpen: false,
            userAccount: {
                name: "John Doe",
                email: "johndoe@example.com",
                membershipStatus: "Active",
            },
            settings: [
                { to: "/settings", text: "Profile Settings" },
                { to: "/payment-settings", text: "Payment Settings" },
                {
                    to: "/notification-settings",
                    text: "Notification Preferences",
                },
            ],
            rentedCameras: [
                {
                    camera: "Canon EOS R5",
                    startDate: "10/01/2024",
                    endDate: "10/10/2024",
                },
                {
                    camera: "Nikon D850",
                    startDate: "10/05/2024",
                    endDate: "10/12/2024",
                },
                {
                    camera: "Sony A7 III",
                    startDate: "10/15/2024",
                    endDate: "10/20/2024",
                },
            ],
        };
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
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
