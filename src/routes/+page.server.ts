import { getTableOfContent } from "@yababay67/sveltekit-components/markdown"
import { name as repo } from "../../package.json"
import { base } from '$app/paths'

export async function load({ fetch }){
    let [  html ] = await getTableOfContent(fetch, repo)
    html = html.replace(/href=\"\/articles/g, `href=\"${base}/articles`)
    return { html }
}
