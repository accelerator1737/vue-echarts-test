<template>
    <span>
        <el-button>
            <slot></slot>
        </el-button>
    </span>
</template>
<script>
export default {
    props: {
        msg: String,
    },
    data(){
        return{
            
        };
    },
}
</script>