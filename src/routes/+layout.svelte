<script lang="ts">
    import '@yababay67/sveltekit-components/styles/dummy.scss'
    //import '@yababay67/sveltekit-components/styles/publications.scss'
    //import '@yababay67/sveltekit-components/styles/with-navbar.scss'
    //import '@yababay67/sveltekit-components/styles/without-footer.scss'
    import { Layout } from '@yababay67/sveltekit-components'
    import type { SeoProps, BootstrapSource } from '@yababay67/sveltekit-components/types'
    import { author, brand, title, subtitle, description, keywords, license, url, menu } from '../app.json'
    import { PUBLIC_WITH_BOOTSTRAP } from '$env/static/public'

    const bootstrap = PUBLIC_WITH_BOOTSTRAP as BootstrapSource
    const seo: SeoProps = { author, brand, title, subtitle, description, keywords, license, url }
</script>

<Layout {seo} {bootstrap} >
    <slot />
</Layout>
