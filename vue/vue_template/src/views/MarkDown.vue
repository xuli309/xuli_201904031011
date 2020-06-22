<template>
    <div id="editor">
      <textarea :value="input" @input="update"></textarea>
      <div v-html="compiledMarkdown"></div>
    </div>
</template>

<script>
    import marked from 'marked';
    export default {

        data() {
            return {
                input: "# hello"
            }
        },
        computed: {
            compiledMarkdown() {
                return marked(this.input, { sanitize: true });
            }
        },
        methods: {
            update(e){
               // _.debounce((e) => {
                    this.input = e.target.value;
            //}, 300)
            }
        },
    }
</script>

<style scoped>
textarea,
    #editor div {
        display: inline-block;
        width: 49%;
        height: 100%;
        vertical-align: top;
        box-sizing: border-box;
        padding: 0 20px;
    }
</style>