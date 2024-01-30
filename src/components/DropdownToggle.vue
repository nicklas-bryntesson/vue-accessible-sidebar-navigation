<script setup>
import { computed } from 'vue';
import ChevronDown from './icons/ChevronDown.vue';

const props = defineProps({
    ariaExpanded: {
        type: Boolean,
        default: false
    },
    ariaControls: {
        type: String,
        default: ''
    }
});

// These Could come from a translate file somewhere...
const LABEL_EXPAND = 'Expand submenu';
const LABEL_COLLAPSE = 'Collapse submenu';

// Compute the label based on the ariaExpanded prop
const ariaLabel = computed(() => props.ariaExpanded ? LABEL_COLLAPSE : LABEL_EXPAND);
</script>

<template>
    <button 
        :aria-expanded="props.ariaExpanded.toString()" 
        :aria-controls="props.ariaControls" 
        :aria-label="ariaLabel"
    >
        <ChevronDown :ariaHidden="true" />
    </button>
</template>


<style scoped>
    button {
        background-color: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
        display: grid;
        place-items: center;
    }

    svg {
        width: 1rem;
        height: 1rem;
        color: inherit;
    }

    button[aria-expanded="true"] svg {
        transform: rotate(180deg);
    }
</style>