<template>
    <div id="demo">
      <form id="search">
        Search <input name="query" v-model="searchQuery"  placeholder='请输入要搜索的内容' class="s-input" />
      </form>
      <demo-grid
        :heroes="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery"
      >
      </demo-grid>
    </div>
</template>

<script>
    import DemoGrid from '@/components/grid/GridTemplate.vue';
    export default {
        data() {
            return {
                searchQuery: "",
                gridColumns: ["name", "power"],
                gridData: [
                    { name: "Chuck Norris", power: Infinity },
                    { name: "Bruce Lee", power: 9000 },
                    { name: "Jackie Chan", power: 7000 },
                    { name: "Jet Li", power: 8000 }
                ]
            }
        },
        components: {
            DemoGrid,
        },
    }
</script>

<style scoped>
    .s-input {
        border:1px solid blue;
        height:30px;
        line-height:30px;
    }
    
</style>