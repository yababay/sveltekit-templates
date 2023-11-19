<script lang="ts">
    import '@yababay67/sveltekit-components/styles/dummy.scss'
    //import '@yababay67/sveltekit-components/styles/publications.scss'
    //import '@yababay67/sveltekit-components/styles/with-navbar.scss'
    //import '@yababay67/sveltekit-components/styles/without-footer.scss'
    import { Layout } from '@yababay67/sveltekit-components'
    import type { SeoProps } from '@yababay67/sveltekit-components/types'
    import { author, brand, title, subtitle, description, keywords, license, url, menu } from '../app.json'

    const seo: SeoProps = { author, brand, title, subtitle, description, keywords, license, url }
</script>

<Layout {seo}>
    <slot />
</Layout>
