<template>
    <div>
        <Navbar class="bg-blue-900" />

        <div>
            <h2 class="text-3xl m-4 my-8">Reservas</h2>
            <div class="flex items-start justify-around m-4">
                <div class="flex w-1/2 items-start justify-around">
                    <button class="h-12 p-2 bg-blue-700 px-8 rounded-xl flex justify-center">
                        <img src="../assets/play.png" style="transform: rotate(90deg);" alt />
                    </button>
                    <button class="h-12 p-2 bg-gray-700 px-8 rounded-xl flex justify-center">
                        <img src="../assets/time.png" alt />
                    </button>
                    <button class="h-12 p-2 bg-red-700 px-8 rounded-xl flex justify-center">
                        <img src="../assets/delete.png" alt />
                    </button>
                </div>
                <div class="w-1/2 flex justify-center">
                    <button
                        type="submit"
                        class="mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >Agregar reserva</button>
                </div>
            </div>
        </div>

        <div class="mt-8 mx-8">
            <div class="h-16 bg-gray-300 my-8 flex justify-around items-center">
                <p>Angel Lahoz</p>
                <p>Thames Hotel and Resort</p>
                <p>27/01 al 03/02</p>
                <p>2 adultos</p>
                <p>0 niños</p>
                <button class="h-12 p-2 bg-gray-500 px-8 rounded-xl flex justify-center">
                        <img src="../assets/setting.png" alt="">
                    </button>
            </div>
            <div class="h-16 bg-gray-300 my-8"></div>
            <div class="h-16 bg-gray-300 my-8"></div>
            <div class="h-16 bg-gray-300 my-8"></div>
            <div class="h-16 bg-gray-300 my-8"></div>
            <div class="h-16 bg-gray-300 my-8"></div>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
    name: "Bookings",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { Navbar }
};
</script>