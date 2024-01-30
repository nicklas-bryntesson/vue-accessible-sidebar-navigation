<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import SidebarMenu from './SidebarMenu.vue';

const router = useRouter();

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

</script>


<template>
    <aside role="complementary">
        <nav role="navigation" aria-label="Main navigation">
            <SidebarMenu :links="sidebarLinks" />
        </nav>
    </aside>
</template>


<style scoped>

    aside {
        background-color: var(--color--N00);
        padding: 1rem;
        border-radius: 0.5rem;
        margin-block-end: auto;
    }

    nav {
        display: flex;
        flex-direction: column;       
    }

</style>