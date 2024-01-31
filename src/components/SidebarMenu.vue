<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import DropdownToggle from './DropdownToggle.vue';

// Method to format path into a valid and clean ID
const formatId = (path) => {
    return `submenu-ul-${path.replace(/\//g, '-')}`; // Replace slashes with dashes
};

const props = defineProps({
    links: Array,
    id: String // Accept an ID prop to be used for the submenu container
});

const route = useRoute();
const openSubmenus = ref({}); // Tracks which submenus are open

const toggleSubmenu = (path) => {
    openSubmenus.value[path] = !openSubmenus.value[path];
};

const isActiveRoute = (path) => {
    const normalizePath = p => p.startsWith('/') ? p : '/' + p;
    return normalizePath(route.path) === normalizePath(path);
};
</script>

<template>
    <ul :id="props.id">
        <li 
            v-for="link in props.links" 
            :key="link.path" class="menuItem"
            :class="{ 'hasSubmenu': link.children && link.children.length }"
        >
            <RouterLink 
                :to="link.path" 
                :aria-current="isActiveRoute(link.path) ? 'page' : null"
            >
                {{ link.meta.title }}
            </RouterLink>
            <DropdownToggle 
                v-if="link.children && link.children.length" 
                :aria-expanded="!!openSubmenus[link.path]"
                :aria-controls="formatId(link.path)" 
                @click="toggleSubmenu(link.path)" 
            />
            
            <div 
                v-if="link.children && link.children.length" 
                class="submenuContainer"
                :class="{ 'isOpen': openSubmenus[link.path] }" 
                :aria-hidden="!openSubmenus[link.path]"
            >
                <SidebarMenu 
                    :links="link.children" 
                    :id="formatId(link.path)" 
                />
            </div>
        </li>
    </ul>
</template>



<style scoped>
    ul {
        list-style: none;
        padding-inline-start: 0.75rem;
    }

    a {
        grid-area: link;
        color: var(--color--N80);
        text-decoration: none;
        display: inline-block;
        padding-block: 0.25rem;
    }

    a[aria-current="page"] {
        font-weight: bold;
        color: blue;
    }

    li {

    }

    .hasSubmenu {
        display: grid;
        grid-template-columns: auto 1.5rem;
        grid-template-areas: 
        "link button"
        "submenu submenu";
    }

    .submenuContainer {
        grid-area: submenu;
        flex-direction: column;
    }

    .submenuContainer[aria-hidden="true"] {
        display: none;
    }

    .submenuContainer[aria-hidden="false"] {
        display: flex;
    }
</style>
