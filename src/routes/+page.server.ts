import README from '../../README.md?raw'
import { fromString } from "@yababay67/sveltekit-components/markdown"
//import { name as repo } from "../../package.json"

export function load(){
    const [  html ] = fromString(README)
    return { html }
}
