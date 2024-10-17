<template>
    <div class="min-h-screen bg-gray-900 flex flex-col">
        <nav class="bg-gray-800 p-4">
            <div class="flex justify-between items-center">
                <h1 class="text-xl text-purple-500">Admin Dashboard</h1>
                <router-link
                    to="/"
                    class="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
                    >Return Home</router-link
                >
            </div>
        </nav>
        <div class="flex-grow p-6">
            <h2 class="text-2xl font-bold text-purple-500 mb-4">
                Rented Products
            </h2>
            <table class="min-w-full bg-gray-800 border border-gray-700">
                <thead>
                    <tr>
                        <th class="py-2 px-4 text-left text-gray-300 border-b">
                            Customer Name
                        </th>
                        <th class="py-2 px-4 text-left text-gray-300 border-b">
                            Rented Date
                        </th>
                        <th class="py-2 px-4 text-left text-gray-300 border-b">
                            Return Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="rental in rentals" :key="rental.id">
                        <td class="py-2 px-4 text-gray-300 border-b">
                            {{ rental.customerName }}
                        </td>
                        <td class="py-2 px-4 text-gray-300 border-b">
                            {{ rental.rentedDate }}
                        </td>
                        <td class="py-2 px-4 text-gray-300 border-b">
                            {{ rental.returnDate }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rentals: [
                {
                    id: 1,
                    customerName: "John Doe",
                    rentedDate: "2024-10-01",
                    returnDate: "2024-10-10",
                },
                {
                    id: 2,
                    customerName: "Jane Smith",
                    rentedDate: "2024-10-05",
                    returnDate: "2024-10-15",
                },
            ],
        };
    },
};
</script>

<style scoped>
/* Custom styles */
</style>
