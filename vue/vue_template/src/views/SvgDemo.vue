<template>
    <div>
        <!-- Use the component -->
        <svg width="200" height="200">
            <polygraph :stats="stats"></polygraph>
        </svg>
        <!-- controls -->
        <div v-for="(stat,index) in stats" :key="index">
            <label>{{stat.label}}</label>
            <input type="range" v-model="stat.value" min="0" max="100" />
            <span>{{stat.value}}</span>
            <button @click="remove(stat)" class="remove">X</button>
        </div>
        <form id="add">
            <input name="newlabel" v-model="newLabel" class="new-label" />
            <button @click="add">Add a Stat</button>
        </form>
        <pre id="raw">{{ stats }}</pre>
        

    </div>
</template>

<script>
import Polygraph from '@/components/svg/Polygraph.vue';
export default {
    data() {
        return {
            newLabel: "",
            stats:  [
                { label: "A", value: 100 },
                { label: "B", value: 100 },
                { label: "C", value: 100 },
                { label: "D", value: 100 },
                { label: "E", value: 100 },
                { label: "F", value: 100 }
            ]
        }
    },
    methods: {
        add: function(e) {
            e.preventDefault();
            if (!this.newLabel) return;
            this.stats.push({
                label: this.newLabel,
                value: 100
            });
            this.newLabel = "";
        },
        remove: function(stat) {
            if (this.stats.length > 3) {
                this.stats.splice(this.stats.indexOf(stat), 1);
            } else {
                alert("Can't delete more!");
            }
        }
    },
    components: {
        Polygraph,
    },
}
</script>

<style scoped>
    label {
        display: inline-block;
        margin-left: 10px;
        width: 20px;
    }
    #raw{
        /* position: absolute;
        top: 0;
        left: 300px; */
        width:100%;
    }


    .new-label{
        border:1px solid blue;
        height:30px;
        line-height:30px;
    }

</style>