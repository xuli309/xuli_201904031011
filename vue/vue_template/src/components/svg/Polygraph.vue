<template>
    <g>
        <polygon :points="points"></polygon>
        <circle cx="100" cy="100" r="80"></circle>
        <axis-label
            v-for="(stat, index) in stats"
            :stat="stat"
            :index="index"
            :total="stats.length"
            :key="index"
        >
        </axis-label>
    </g>
</template>

<script>
    import AxisLabel from './AxisLabel';
    export default {
        props: ["stats"],
        components: {
            AxisLabel,
        },
        computed: {
            points() {
                const total = this.stats.length;
                const newStats = this.stats.map((stat,i)=>{
                   const param = {
                        value:stat.value,
                        index:i,
                        total
                    }

                    this.$store.commit('valueToPoint',param);
                    const point = this.$store.state.point;          
                    
                    return point.x + "," + point.y;

                }).join(" ")
                console.log(newStats);
                return newStats;
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    polygon {
        fill: #42b983;
        opacity: 0.75;
    }

    circle {
        fill: transparent;
        stroke: #999;
    }

</style>