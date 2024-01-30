import { RouterLink } from 'vue-router'

<template>
    <aside>
        <nav>
            <RouterLink to="/page-1">Page 1</RouterLink>
            <RouterLink to="/page-1/page-1-2">Page 1-2</RouterLink>
        </nav>
    </aside>
</template>


<style scoped>
    aside {
        background-color: var(--color--N00);
        padding: 1rem;
        border-radius: 0.5rem;
    }

    nav {
        display: flex;
        flex-direction: column;
    }
</style>