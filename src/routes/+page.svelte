<script lang="ts">
    import showdown from 'showdown'
    import README from '../../README.md?raw'
    const converter = new showdown.Converter()
    const html = converter.makeHtml(README)
</script>

{@html html}
