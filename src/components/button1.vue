<template>
    <span>
        <el-button>
            {{msg}}
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