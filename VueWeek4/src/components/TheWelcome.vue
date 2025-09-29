<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import TheForm from './FormItem.vue'
import useLocalStorage from '@/composables/useLocalStorage'
import { defineStore } from 'pinia'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
    <!-- <TheForm></TheForm> -->
    <WelcomeItem myCustomText="Hello from prop!">
        <template #icon>
            <DocumentationIcon />
        </template>
        <template #heading>Documentation</template>
        Find in-depth information about Vue features and API.
    </WelcomeItem>
</template>
