<script lang="ts">
    import '../styles/layout.scss';
    import { brand, menu, title } from '../app.json'
    import WithMenu from '$lib/components/Header.svelte'
</script>

<header>
    <WithMenu {menu} {brand} />
</header>

<main>
    <slot />
</main>

<svelte:head>
    <title>{title}</title>
</svelte:head>
