import { getArticle } from "@yababay67/sveltekit-components/markdown"
import { ARTICLES_REPOSITORY } from "$env/static/private"

export async function load({ params, fetch }){
    const { slug } = params
    const [  html, title, description ] = await getArticle(fetch, slug, ARTICLES_REPOSITORY)
    return { html, title, description }
}
