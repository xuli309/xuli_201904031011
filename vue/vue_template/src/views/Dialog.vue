<template>
    <div>
      
      <button id="show-modal" @click="showModal = true">Show Modal</button>
      <!-- use the Dialog component, pass in the prop -->
      <Dialog v-if="showModal" @close="showModal = false">

        <!--you can use custom content here to overwrite default content-->
        <h3 slot="header">custom header</h3>

        <template slot="footer">
            <p>新 footer</p>
        </template>

      </Dialog>

    </div>
</template>

<script>
    import Dialog from '@/components/dialog/Index.vue';
    export default {
        components: {
            Dialog,
        },
        data() {
            return {
                showModal: false
            }
        },
    }
</script>

<style scoped>

</style>