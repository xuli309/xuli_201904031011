<template>
    <div>
        <p>Selected: {{ selected }}</p>
        <select2 :options="options" v-model="selected">
            <option disabled value="0">Select one</option>
        </select2>
    </div>
</template>

<script>
    import Select2 from '@/components/myselect/Select2';
    export default {
        components: {
            Select2,
        },
        data() {
            return {
                selected: 2,
                options: [{ id: 1, text: "Hello" }, { id: 2, text: "World" }]
            }
        }       
        
    }
    
</script>

<style lang="scss" scoped>

</style>