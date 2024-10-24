<template>
    <div class="min-h-screen bg-gray-900 flex items-center justify-center">
        <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 class="text-3xl font-bold text-purple-500 text-center mb-6">
                Sign Up
            </h1>
            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label
                        class="block text-gray-300 text-sm font-bold mb-2"
                        for="name"
                        >Full Name</label
                    >
                    <input
                        v-model="name"
                        class="w-full px-3 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        required
                    />
                </div>
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
                <div class="mb-4">
                    <label
                        class="block text-gray-300 text-sm font-bold mb-2"
                        for="confirmPassword"
                        >Confirm Password</label
                    >
                    <input
                        v-model="confirmPassword"
                        class="w-full px-3 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        required
                    />
                </div>
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center">
                        <input
                            v-model="termsAccepted"
                            type="checkbox"
                            id="terms"
                            class="mr-2 h-4 w-4 text-purple-600 border-gray-300 rounded"
                            required
                        />
                        <label for="terms" class="text-sm text-gray-300"
                            >I accept the
                            <a href="#" class="text-purple-500 hover:underline"
                                >Terms and Conditions</a
                            >.</label
                        >
                    </div>
                </div>
                <button
                    type="submit"
                    class="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
                >
                    Sign Up
                </button>
            </form>
            <p class="text-sm text-center text-gray-400 mt-6">
                Already have an account?
                <router-link to="/login" class="text-purple-500 hover:underline"
                    >Log in</router-link
                >
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            termsAccepted: false,
        };
    },
    methods: {
        handleSubmit() {
            if (this.password !== this.confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            console.log("Form Submitted", this.name, this.email, this.password);
        },
    },
};
</script>

<style scoped></style>
