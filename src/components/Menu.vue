<template>
  <div class="menu">
    <div class="nav-bar">
      <router-link to="/iryna/"><div class="logo">iryna</div></router-link> 
      <div class="main-menu" v-if="mainMenu">
        <router-link to="#skills">skills</router-link> 
        <router-link to="#works">works</router-link> 
        <router-link to="#edu">education</router-link> 
        <router-link to="#about">about me</router-link>
        <router-link to="#cv">cv</router-link> 
      </div>
      <div v-else>
        <button class="btn" ref="menu">||</button>
      </div>
      
    </div>
   
    <transition name="fade">
        <div v-if="showMenu" class="nav-items">
          <router-link to="#skills">skills</router-link> 
          <router-link to="#works">works</router-link> 
          <router-link to="#edu">education</router-link> 
          <router-link to="#about">about me</router-link>
          <router-link to="#cv">cv</router-link> 
        </div>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      showMenu: false,
      mainMenu: true
    }
  },
  created(){
    (window.screen.width >= 800) ? (this.mainMenu = true) : (this.mainMenu = false)
  },
  mounted(){
    window.addEventListener('click', (e)=> {
      if(e.target === this.$refs.menu){
        !this.showMenu ? this.showMenu = true : this.showMenu = true
      } else {
        this.showMenu = false
      }
    })
  },
}

</script>

<style lang="sass" scoped>
.menu 
  width: 100%
  background: linear-gradient( lighten($dark, 70%), transparent)
  position: fixed
  z-index: 100
  padding: 1%
.nav-bar
    display: flex
    align-items: center
    justify-content: space-around
.nav-items 
  align-items: center
  display: flex
  flex-direction: column
  width: 60%
  justify-content: space-around
  min-height: 350px
  margin: 5% auto
  padding: 7%
  border-radius: 25%
  border: 4px double $white
  background: rgb(255 255 255 / 58%)
  a 
    color: $dark

.main-menu
  width: 80%
  display: flex
  justify-content: space-around
a, .btn 
  color: lighten($red, 20%)
  transition: 0.5s ease
  font-size: 4vh
.btn 
  transform: rotate(90deg)
  border: 0
  background: transparent
  &:hover
    transform: rotate(270deg)
a
  transition: .3s
  &:hover
    color: darken($dark, 10% )

</style>