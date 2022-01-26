<template>
    <div>
        <Navbar class="bg-blue-900" />
        <Search color="gray-800" tittle="Clientes" class="my-24" />
        <section class="flex justify-around flex-wrap">
        <div v-for="person in persons" class="m-4 mx-8 rounded-md bg-gray-400 text-xl text-black w-1/4 p-4">
            {{ person.name}}
        </div>
        </section>
    </div>
</template>

<script>
import Search from "../components/Search.vue";
import Navbar from "../components/Navbar.vue";
export default {
    name: "Clients",
    data() {
        return {
            persons: [{ name: 'Foo' }, { name: 'Bar' }, { name: 'Foo' }, { name: 'Foo' }, { name: 'Foo' }, { name: 'Foo' },]
        };
    },
    mounted() {
    },
    methods: {},
    components: { Search, Navbar }
};
</script>

<style scoped>
</style>