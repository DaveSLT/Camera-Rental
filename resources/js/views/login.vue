<template>
    <div class="min-h-screen bg-gray-900 flex items-center justify-center">
        <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 class="text-3xl font-bold text-purple-500 text-center mb-6">
                Login
            </h1>
            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label
                        class="block text-gray-300 text-sm font-bold mb-2"
                        for="email"
                        >Email</label
                    >
                    <input
                        v-model="email"
                        class="w-full px-3 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label
                        class="block text-gray-300 text-sm font-bold mb-2"
                        for="password"
                        >Password</label
                    >
                    <input
                        v-model="password"
                        class="w-full px-3 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <router-link to="/Admin"
                    ><button
                        type="submit"
                        class="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
                    >
                        <router-link to="/Home">Login</router-link>
                    </button></router-link
                >
            </form>
            <p class="text-sm text-center text-gray-400 mt-6">
                Don't have an account?
                <router-link
                    to="/signup"
                    class="text-purple-500 hover:underline"
                    >Sign Up</router-link
                >
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        handleSubmit() {
            // Submit login logic
            console.log("Login Submitted", this.email);
        },
    },
};
</script>

<style scoped>
/* Custom styles */
</style>
