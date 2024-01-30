<script setup>
import { RouterLink, useRoute } from 'vue-router';

const props = defineProps({
    links: Array
});

const route = useRoute();

const isActiveRoute = (path) => {
    const normalizePath = p => p.startsWith('/') ? p : '/' + p;
    return normalizePath(route.path) === normalizePath(path);
};
</script>

<template>
    <ul>
        <li v-for="link in props.links" :key="link.path" class="menuItem">
            <RouterLink :to="link.path" :aria-current="isActiveRoute(link.path) ? 'page' : null" active-class=""
                exact-active-class="">
                {{ link.meta.title }}
            </RouterLink>
            <SidebarMenu v-if="link.children && link.children.length" :links="link.children" />
        </li>
    </ul>
</template>

<style scoped>
    ul {
        list-style: none;
        padding-inline-start: 0.75rem;
    }

    a {
        color: var(--color--N80);
        text-decoration: none;
        display: inline-block;
        padding-block: 0.25rem;
    }

    a[aria-current="page"] {
        font-weight: bold;
        color: blue;
    }
</style>
