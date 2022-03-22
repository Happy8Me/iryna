<template>
  <div class="footer">

    <a href="https://github.com/Happy8Me" target="_blank"> 
      <div class="icon-wrapper"> 
        <img :src="icon" alt="GitHub" class="github"> 
      </div>
    </a>
    <a href="https://www.facebook.com/IrynaHladchenko/" target="_blank"> 
      <div class="icon-wrapper"> 
        <img :src="icon" alt="Facebook" class="facebook"> 
      </div>
    </a>
    <a href="https://www.linkedin.com/in/iryna-h-65a63312b/" target="_blank"> 
      <div class="icon-wrapper"> 
        <img :src="icon" alt="LinkedIn" class="linkedin"> 
      </div>
    </a>
    <a href="mailto:iryna.hladchenko.iryna@gmail.com" target="_blank"> 
      <div class="icon-wrapper"> 
        <img :src="icon" alt="email" class="email"> 
      </div>
    </a>
  </div>
</template>

<script>
import icon from '../assets/img/icons.png'
export default {
  data(){
    return {
      icon
    } 
  }
}
</script>

<style lang="sass" scoped>
  .footer
    box-sizing: border-box
    height: 50px
    background: #d3d3d366
    display: flex
    justify-content: center
    align-items: center
    position: absolute
    bottom: 0
    width: 100%
    a:last-of-type div
      width: 33px
    a:hover > .icon-wrapper
      box-shadow: 0px 0px 2px 2px #d3d3d3
    .icon-wrapper 
      width: 26px
      height: 25px
      margin: 1vh
      overflow: hidden
      border-radius: 15%
      position: relative 
      border: 1px solid #fffff
      transition: .5s
      img
        height: 265%
        position: absolute
  .facebook
    top: 0
    left: -33.5px
  .linkedin
    top: 0
    left: -67px
  .github
    top: -41px
    left: -139.2px
  .email
    top: 0
    left: -132.6px
</style>