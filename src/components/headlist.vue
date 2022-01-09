<template>
    <span class="list" @mouseenter="onClick">
        {{msg}}
    </span>
</template>

<script>
export default {
    data(){
        return {
            msgFromChild : 'hello parents',
        }
    },
    props:{
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
        background: rgb(83, 110, 108, 0);
        margin-top: 20px;
        position: relative;
        margin-left: 30px;
        margin-top: 30px;
        /* margin-right: 100px; */
        /* display: inline; */
        /* float: left; */
    }
</style>