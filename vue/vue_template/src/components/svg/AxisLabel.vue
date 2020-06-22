<template>
    <text :x="point.x" :y="point.y">{{stat.label}}</text>
</template>

<script>
    export default {
        props: {
            stat: {
                type: Object,
            },
            index: {
                type: Number,
            },
            total: {
                type: Number,
            },
        },
        computed: {
            point() {
                const param = {
                    value: +this.stat.value + 10,
                    index: this.index,
                    total: this.total
                }
                this.$store.commit('valueToPoint',param);
                return this.$store.state.point;
            }
        }
    }
</script>

<style lang="scss" scoped>
  text {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 10px;
        fill: #666;
    }
</style>