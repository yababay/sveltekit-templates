import { getTableOfContent } from "@yababay67/sveltekit-components/markdown"
import { ARTICLES_REPOSITORY } from "$env/static/private"

export async function load({ fetch }){
    const [  html ] = await getTableOfContent(fetch, ARTICLES_REPOSITORY)
    return { html }
}
