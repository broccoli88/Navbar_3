<template>
    <nav :class="{ active: navIsActive }">
        <div class="nav">
            <font-awesome-icon icon="fa-solid fa-house-user" />
            <font-awesome-icon icon="fa-solid fa-gear" />
            <font-awesome-icon icon="fa-solid fa-book" />
            <font-awesome-icon icon="fa-solid fa-pen" />
        </div>
        <font-awesome-icon
            icon="fa-solid fa-angles-right"
            @click="toggleNav"
            :class="{ rotate: navIsActive }"
        />
    </nav>
</template>
<script setup>
import { ref } from "vue";

const navIsActive = ref(false);
const toggleNav = () => {
    navIsActive.value = !navIsActive.value;
};
</script>
<style scoped>
nav {
    position: fixed;

    height: 100vh;
    width: 100px;
    top: 0;
    left: 0;

    background-color: var(--color-bg);

    display: flex;
    flex-direction: column;

    transition: 0.4s all ease;
}

.fa-angles-right {
    font-size: 2rem;
    color: white;

    margin-top: auto;
    align-self: flex-end;

    transition: 0.4s all ease;
}

.active {
    width: 200px;
}

.rotate {
    transform: rotate(-180deg);
}

.nav {
    display: flex;
    flex-direction: column;
}
.nav > svg {
    width: 100%;
    /* height: 100px; */

    margin: 2rem 0;
    font-size: 2.5rem;
    color: white;

    background-color: var(--color-hover);
}
</style>
