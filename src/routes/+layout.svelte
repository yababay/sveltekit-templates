<script lang="ts">
    import '../styles/layouts/dummy.scss'
    //import '../styles/layouts/publications.scss'
    //import '../styles/layouts/with-navbar.scss'
    //import '../styles/layouts/without-footer.scss'
    import './+layout.scss'
    import { Layout } from '@yababay67/sveltekit-components'
    import type { SeoProps, BootstrapSource } from '@yababay67/sveltekit-components/types'
    import { author, brand, title, subtitle, description, keywords, license, url, menu, bootstrap as WITH_BOOTSTRAP } from '../app.json'

    const bootstrap = WITH_BOOTSTRAP as BootstrapSource
    const seo: SeoProps = { author, brand, title, subtitle, description, keywords, license, url }
</script>

<Layout {seo} {bootstrap} >
    <slot />
</Layout>
