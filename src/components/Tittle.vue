<template>
    <p class="tittle" :style="delayTime"> {{tittle}} </p>
</template>

<script>
export default {
    name: 'tittle',
    props: ['tittle', 'delay'],
    computed: {
        delayTime(){ 
            return 'animation-delay: ' + this.delay;
        }
    }
}
</script>

<style lang='sass' scoped>
    .tittle 
        animation: tittle-in-out 20s linear infinite
        overflow: hidden
        font-family: $main-font2
        font-size: 7vh
        letter-spacing: 3vw
        color: $red
        width: 100%
        white-space: nowrap
    
    @keyframes tittle-in-out
        0%, 30%, 100%  
            width: 100%
        10%, 20% 
            width: 0%
</style>