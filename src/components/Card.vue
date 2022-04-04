<template>
    <a :href="link" target="_blank" >
        <h4> {{ name }} </h4>
        <!-- <img :src="pic" alt="photo"> -->
        <p> {{ text }} </p>
        <p> {{ additionalText }} </p>
    </a>
</template>

<script>
export default {
    props: ['name', 'pic', 'text', 'additionalText', 'link'],
}
</script>

<style lang='sass' scoped>
    a
        min-width: 150px
        text-align: center
        border: 1px double $dark
        padding: 15px 10px
        width: 30%
        min-width: 280px
        border-radius: 15px
        display: flex
        flex-direction: column
        background-color: $white
        margin: 1.5%
        &:hover
            box-shadow: 0 0 5px $red
        img 
            margin: 10px auto
            max-height: 150px
            max-width: 150px
            width: 100%
        p:nth-child(3) 
            // line-height: 180%
            padding: 10px 0
            font-size: 110%
        p:last-child
            font-size: 80%
            text-align: justify
        h4 
            margin-bottom: 10px

</style>