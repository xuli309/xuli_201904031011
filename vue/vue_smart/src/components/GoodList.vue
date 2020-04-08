<template>
    <div>
        <ul>
            <li v-for="(good,index) in data" :key="index">
                {{good.title}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'goodlist',
    props: ["data"]
}
</script>