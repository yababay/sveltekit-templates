<script lang="ts">
    import type { WithHtml } from '@yababay67/sveltekit-components/types'
    import { Article } from '@yababay67/sveltekit-components'
    import { base } from '$app/paths'
    export let data: WithHtml
    const { html } = data
</script>

<Article {html} />
