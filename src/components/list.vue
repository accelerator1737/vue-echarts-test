<template>
    <div class="list">
        {{msg}}
        <button class="layRight" @click="onClick">Delete</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msgFromChild : 'hello parents',
        }
    },
    props:{
        callback : Function,
        msg: String,
    },
    methods:{
        onClick(){
            this.$emit('my-func',this.msg);
        },
    },
    mounted(){
        
    },
}
</script>
<style>
    body{
    margin: 0;
    }
    .list{
        height: 50px;
        width: 190px;
        background: turquoise;
        margin-top: 10px;
        position: relative;
    }
    .layRight{
        position: absolute;
        left: 130px;
        top: 10px;
    }
</style>