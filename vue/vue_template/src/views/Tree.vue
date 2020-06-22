<template>
    <div>
        <ul>
            <tree-item
                class="item"
                :item="treeData"
                @make-folder="makeFolder"
                @add-item="addItem"
            ></tree-item>
        </ul>
    </div>
</template>

<script>
    import TreeItem from '@/components/tree/TreeItem.vue';
    export default {
        components: {
            TreeItem,
        },
        data() {
            return {
                treeData: {
                    name: "My Tree",
                    children: [
                        { name: "hello" },
                        { name: "wat" },
                        {
                            name: "child folder",
                            children: [
                                {
                                    name: "child folder",
                                    children: [{ name: "hello" }, { name: "wat" }]
                                },
                                { name: "hello" },
                                { name: "wat" },
                                {
                                    name: "child folder",
                                    children: [{ name: "hello" }, { name: "wat" }]
                                }
                            ]
                        }
                    ]
                }
            }
        },
        methods: {
            makeFolder: function(item) {
                Vue.set(item, "children", []);
                this.addItem(item);
            },
            addItem: function(item) {
                item.children.push({
                    name: "new stuff"
                });
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>