<template>
    <div>
        <draggable-header-view>
            <template slot="header">
                <h1>Elastic Draggable SVG Header <!-- 可灵活拖动的SVG的头部 --></h1>
                <p>
                    with <a href="http://vuejs.org">Vue.js</a> +
                    <a href="http://dynamicsjs.com">dynamics.js</a>
                </p>
            </template>

            <template slot="content">
                <p>
                    Note this is just an effect demo - there are of course many
                    additional details if you want to use this in production, e.g.
                    handling responsive sizes, reload threshold and content scrolling.
                    Those are out of scope for this quick little hack. However, the idea
                    is that you can hide them as internal details of a Vue.js component
                    and expose a simple Web-Component-like interface.

                    <!-- 当然有很多如果你想在生产中使用它，还有更多的细节。
                    处理响应大小、重新加载阈值和内容滚动。
                    这些都超出了这个快速小技巧的范围。
                    然而,这个想法是否可以将它们隐藏为Vue.js组件的内部细节
                    并公开一个简单的类似web组件的接口。 -->
                </p>
            </template>
      </draggable-header-view>     
        
    </div>
</template>

<script>
    import DraggableHeaderView from '@/components/flexcom/Index.vue';
    export default {
        components: {
            DraggableHeaderView,
        }
    }
</script>

<style scoped>
h1 {
  font-weight: 300;
  font-size: 1.8em;
  margin-top: 0;
}
a {
  color: #fff;
}
</style>