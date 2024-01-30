<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SidebarMenu from './SidebarMenu.vue';

const router = useRouter();
const route = useRoute();

const filterRoutes = (routes, basePath = '') => {
    return routes
        .filter(r => r.meta && r.meta.title && !r.path.includes(':pathMatch(')) // Exclude routes without titles and the 404 route
        .map(r => ({
            path: basePath + '/' + r.path.replace(/^\//, ''), // Construct the full path
            meta: r.meta,
            children: r.children ? filterRoutes(r.children, basePath + '/' + r.path.replace(/^\//, '')) : []
        }));
};

const sidebarLinks = computed(() => filterRoutes(router.options.routes));

const isActiveRoute = (path) => {
    const normalizePath = p => p.startsWith('/') ? p : '/' + p;
    return normalizePath(route.path) === normalizePath(path);
};
</script>


<template>
    <aside role="complementary" class="sidebarNavigation">
        <nav role="navigation" aria-label="Main navigation">
            <SidebarMenu :links="sidebarLinks" />
        </nav>
    </aside>
</template>


<style scoped>
    .sidebarNavigation {
        background-color: var(--color--N00);
        padding: 1rem;
        border-radius: 0.5rem;
    }

    nav {
        display: flex;
        flex-direction: column;
    }
</style>