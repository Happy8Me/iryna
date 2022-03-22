<template>
<div>
  <transition name="fade"> 
  <div class="modal-layout" @click="closeModal">
  </div>
  </transition>
  <transition name="fade"> 
      <div class="modal">
        <button @click="closeModal">X</button>
        <img :src="pic" alt="photo">
      </div>
  </transition>
</div>
 
</template>

<script>
export default {
  props: ['pic'],
  methods: {
    closeModal() {
      this.$store.dispatch("closeModal")
      console.log()
    }
  },
}
</script>

<style lang="sass" scoped>
.modal-layout
  position: fixed
  top: 0
  left: 0
  bottom: 0
  right: 0
  background: $dark
  z-index: 99
  opacity: 0.2
.modal 
  background: rgb(238, 242, 243, 0.58)
  max-width: 80vw
  max-height: 80vh
  border: 1px double $dark
  padding: 15px
  border-radius: 5px
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  z-index: 100
  overflow: auto
  -ms-overflow-style: none
  scrollbar-width: none  
  &::-webkit-scrollbar 
    display: none
  img
    width: 100%
  button
    position: absolute
    top: 5px
    right: 5px
    background: transparent
    border: 0
    color: $white
    text-shadow: 1px 1px 2px $dark
    &:hover
      color: $red
</style>