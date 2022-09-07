<template>
    <nav :class="{ active: navIsActive }">
        <div class="nav" ref="nav">
            <div class="brand">
                <span> {{ navIsActive ? "Vue" : "V" }} </span>
                <span> {{ navIsActive ? "Sample" : "S" }} </span>
            </div>
            <div class="nav-icon">
                <font-awesome-icon icon="fa-solid fa-house-user" />
                <span class="nav-text" :class="{ 'show-text': navIsActive }"
                    >Home</span
                >
            </div>
            <div class="nav-icon">
                <font-awesome-icon icon="fa-solid fa-gear" />
                <span class="nav-text" :class="{ 'show-text': navIsActive }"
                    >Setup</span
                >
            </div>
            <div class="nav-icon">
                <font-awesome-icon icon="fa-solid fa-book" />
                <span class="nav-text" :class="{ 'show-text': navIsActive }"
                    >Contacts</span
                >
            </div>
            <div class="nav-icon">
                <font-awesome-icon icon="fa-solid fa-pen" />
                <span class="nav-text" :class="{ 'show-text': navIsActive }"
                    >Message</span
                >
            </div>
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

.brand {
    font-size: 3rem;
    color: white;
    font-weight: 800;
    line-height: 1.1;

    padding: 1rem;
    margin: 0 calc(50px - 2rem) 5rem;

    display: flex;
    flex-direction: column;
}

.fa-angles-right {
    font-size: 2rem;
    color: white;

    margin: auto 1rem 1rem;
    align-self: flex-end;

    transition: 0.4s all ease;

    cursor: pointer;
}

.active {
    width: 250px;
}

.rotate {
    transform: rotate(-180deg);
}

.nav {
    display: flex;
    flex-direction: column;
}

.nav-icon {
    width: 100%;
    height: 100px;

    margin-bottom: 1rem;

    display: flex;
    align-items: center;

    cursor: pointer;
}

.nav-icon:hover {
    background-color: var(--color-hover);
}
.nav-icon > svg {
    font-size: 3rem;
    color: white;
    margin: calc(50px - 1.5rem);
}

.nav-text {
    display: none;
}

.show-text {
    display: inline-block;
    color: white;
    font-size: 1.3rem;
}
</style>
