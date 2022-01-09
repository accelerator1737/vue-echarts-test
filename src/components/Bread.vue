<template>
    <div class="bread">
        This is a bread
        <slot :msg="msg" :msg1="msg1">
        </slot>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg: 'peigen',
            msg1: 'liji',
        }
    },
}
</script>