<template>
    <select>
        <slot></slot>
    </select>
</template>

<script>
    import $ from 'jquery';
    import select2 from './select2.js';
    export default {
        props: ["options", "value"],
        mounted () {
            var vm = this;
            $(this.$el)
            // init select2
            .select2({ data: this.options })
            .val(this.value)
            .trigger("change")
            // emit event on change.
            .on("change", function() {
                vm.$emit("input", this.value);
            });
        },
        watch: {
            value(value, oldValue) {
                // update value
                $(this.$el).val(value).trigger("change");
            },
            options(options) {
                // update options
                $(this.$el).empty().select2({ data: options });
            }
        },
        destroyed () {
            $(this.$el).off().select2("destroy");
        }
    }
</script>

<style  scoped>
    select {
        min-width: 300px;
        min-height:25px;
    }
</style>