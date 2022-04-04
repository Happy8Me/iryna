<template>
  <div class="home">

    <div id="intro">
      <div class="intro-content">
        <Word :word=" 'iryna' "/> 
        <h1>Hladchenko</h1> 

        <p> Glad you stopped by. I am a junior Front-end  & dApps developer and I'm interested in everything in the field. If you have any ideas of how we can be useful for each other, just drop me a line! </p>
        <p>P.S. maybe we'll end up being good friends :)</p>

        <div class="mail">
          <a href="mailto:iryna.hladchenko.iryna@gmail.com">
            <img :src="envelopeGrey" alt="envelope" class="envelope-grey">
            <img :src="envelopeRed" alt="envelope" class="envelope-red">
          </a> 
          <img :src="arrow">
        </div>
              
      </div>

      <div class="intro-pic">
        <img :src="photo" alt="photo of me">
      </div>
    </div>


    <div id="skills">
      <Tittle :tittle=" 'skills' " :delay=" '4s'"/>  
      <ul>
        <li v-for="skill in skills" :key="skill"> {{ skill }} </li> 
      </ul>
    </div>

    <div id="works">
      <Tittle :tittle=" 'works' " :delay=" '3s'"/> 
      <div>
        <Card v-for="work in works" :key="work.name" :name="work.name" :pic="work.pic" :text="work.text" :link="work.link" :additionalText="work.additionalText" />
      </div>  
      <p>The source code for the apps above can be found <a href="https://github.com/Happy8Me" target="_black">here</a> </p>
    </div>

    <div id="edu">
        <Tittle :tittle=" 'education' " :delay=" '2s'"/> 
        <div class="itEdu" v-for=" (edu, i) in itEducation" :key="i">
          <p class="edu-study"> {{ edu.study }} </p>
          <p class="edu-school"> {{ edu.school }} <span> {{ edu.year }} </span> </p> 
        </div>
        <p class="additionalEdu">Additional education</p>
        <div class="otherEdu" v-for="edu in otherEducation" :key="edu.study">
          <p class="edu-study"> {{ edu.study }} </p>
          <p class="edu-school"> {{ edu.school }} <span> {{ edu.year }} </span> </p>
        </div>
        <div class="certificates" id="cv">
          <p class="additionalEdu">Certificates & CV</p>
          <div>
            <a v-for="(certificate, index) in certificates" :key="certificate.name"  @click="showModal(index)" >{{ certificate.name }}</a>
            <a href="https://docs.google.com/document/d/1uzJFj4dx8H3dHvVbBlPubMsAeoPaQPLpkIt6oOxe7QQ/edit?usp=sharing" target="_blank"> CV </a>
          </div>
            <Modal v-if="openModal" :pic="certificates[picIndex].pic" />
        </div>
    </div>

    <div id="about">
      <Tittle :tittle=" 'about me' " :delay=" '1s'"/> 
      <p> Many years ago, when I was a schoolgirl, my parents bought me a PC. Numerous boxes filled half of our corridor. My first thought was "Why on earth do I need all this?!" :) Once all the parts were out of the boxes and created one whole working system, it looked much better. Little by little my fear in front of the alien machine faded away and curiosity took over me. The more I used my PC, the more I liked it but...</p>
      <p> First stone on my way: parents insisted on entering economic university. It took a number of years to realize how wrong that decision was for me and step over it. </p>
      <p> My IT education started in 2020 with a JavaScript course, getting familiar with Vue.js and React.js. In September 2021 I found my first internship with the following employment. Our team was working on a decentralized gambling platform <a href="https://trustroll.win/" target="_blank"> TrustRoll </a>  based on the Binance Smart Chain. We planned to lunch our own token and implement reward and referral programmes at the gambling platform. Unfortunately, we had to terminate on 24th February 2022. </p>
      <p> Second stone: war. Due to the Russian invasion and continuous rocket attacks aimed at civilians all over Ukraine, I had to leave my home country. </p>
      <p> Being a person who would rather need protection than provide one I made a decision to leave my country and to look for a place in the European working community under the safe sky. I want to keep on growing as a professional and add my value to the European IT field. I am happy to share Ukrainian culture and learn more about other cultures. </p>
      <p> P.S. I like dogs, sun, rain, green grass, all the moods of a sea, new places, coffee and tea, sometimes I crochet or knit. I am searching for a balance inside and outside of me and I plan to speak Spanish and German one day </p>
      <p> Hope for the soonest end of the war and proud of our army 💙💛 </p>
    </div>

  </div>
</template>

<script>
import Word from '../components/Word.vue'
import Tittle from '../components/Tittle.vue'
import Card from '../components/Card.vue'
import Modal from '../components/AppModal.vue'
import photo from '../assets/img/picofme.png'
import envelopeGrey from '../assets/img/envelope_grey.png'
import envelopeRed from '../assets/img/envelope_red.png'
import arrow from '../assets/img/arrow_line.png'
import fe from '../assets/img/FE.png'
import cae from '../assets/img/CAE.jpg'

export default { 
  name: 'Home',
  components: {
    Word, 
    Tittle,
    Card, 
    Modal
  },

  data() {
    return {
      picIndex: 0,
      photo, 
      arrow, 
      envelopeGrey,
      envelopeRed,
      fe,
      cae
    }
  }, 
  computed: {
    openModal() { return this.$store.getters.modalState },
    skills() { return this.$store.getters.skills },
    works() { return this.$store.getters.works },
    itEducation() { return this.$store.getters.itEducation },
    otherEducation() { return this.$store.getters.otherEducation },
    certificates() { return this.$store.getters.certificates }
  },
  methods: {
    showModal(index) {
      this.picIndex = index;
      this.$store.dispatch("openModal")
    }
  }
}
</script>

<style lang="sass" scoped>
.home
  padding-top: 20px
  display: flex
  flex-direction: column
h1 
  font-size: 6.3vw
  font-family: $main-font2
  margin: 20px 0
p 
  font-size: 120%
  margin: 15px 0

#intro 
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23144955' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E")
  display: flex
  flex-wrap: wrap
  flex-direction: row
  align-items: center
  justify-content: center
  .intro-content 
    min-width: 250px
    width: 50%
    .mail
      display: flex 
      align-items: center  
      img 
        width: 80%
      a 
        position: relative
        img.envelope-red 
          position: absolute
          top: 0
          left: 0
          opacity: 0
          transition: .3s
      &:hover .envelope-red
        opacity: 1
  .intro-pic
    display: flex
    align-items: center
    justify-content: center
    width: 50%
    img
      width: 80%
      min-width: 250px

#skills
  ul 
    list-style: none
    padding: 10px
    display: flex
    flex-wrap: wrap
    justify-content: center
    li 
      padding: 2vw
      font-size: 3vh

#works
  div 
    display: flex
    flex-wrap: wrap
    justify-content: center
  p a 
    color: $red
    &:hover 
      color: $dark
#edu 
  .itEdu, .otherEdu 
    p 
      &:nth-child(2)
        justify-content: space-between
        display: flex
  .edu-study
    color: $red
  .certificates 
    display: flex
    flex-direction: column
    div 
      display: flex
      justify-content: center
      a 
        border: 1px double grey
        border-radius: 15px
        padding: 2%
        font-size: 100%
        margin: 1%
        color: $dark
        cursor: pointer
        &:hover
          box-shadow: 0 0 5px #f14c38
          background: $white
          background: #ffffff59

.additionalEdu
  position: relative
  text-align: center
  font-size: 150%
  &:before, &:after
    content: ''
    border-bottom: 1px solid $dark
    width: 30%
    display: flex
    position: absolute
    top: 50%
  &:after
    right: 0
  
#about
  text-align: justify

#intro, #skills, #works, #edu, #about
  padding: 5%
#works, #edu, #skills, #about
  position: relative
  background-color: #eef2f3
  &::before
    content: ''
    position: absolute
    top: 20px
    left: 0
    width: 100%
    height: 45px
    transform: translateY(-50%)
    background-image: url("data:image/svg+xml,%3Csvg width='2646' height='48' viewBox='0 0 2646 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M952.041 0L951.732 0.250439L908.215 35.4768L850.792 0.212994L850.552 0.0653874L850.301 0.194769L781.884 35.5119L726.393 0.217173L726.109 0.0364394L725.834 0.231829L676.374 35.4652L630.887 0.243726L630.274 1.03441L676.056 36.4833L676.349 36.7107L676.652 36.4952L726.14 1.2417L781.59 36.5098L781.832 36.664L782.088 36.5323L850.509 1.21274L907.993 36.514L908.295 36.6991L908.57 36.4766L952.051 1.27813L997.022 36.4817L997.381 36.7631L997.694 36.4305L1030.79 1.24153L1109.09 36.5438L1109.35 36.6618L1109.59 36.4952L1159.07 1.24169L1214.52 36.5098L1214.81 36.6906L1215.08 36.4952L1264.58 1.23759L1322.52 36.515L1323.04 35.6609L1264.81 0.211997L1264.53 0.0405432L1264.26 0.231829L1214.78 35.4853L1159.33 0.217173L1159.04 0.0364394L1158.77 0.231829L1109.24 35.5141L1030.88 0.183252L1030.55 0.0365992L1030.31 0.296508L997.279 35.4128L952.354 0.245353L952.041 0ZM952.041 5.37104L951.732 5.62148L908.215 40.8479L850.792 5.58404L850.552 5.43643L850.301 5.56581L781.884 40.8829L726.393 5.58822L726.109 5.40748L725.834 5.60287L676.374 40.8363L630.887 5.61477L630.275 6.40428L629.781 5.72407L588.407 35.7853L543.418 5.71289L543.155 5.53727L542.884 5.69923L492.403 35.8272L430.161 5.67859L429.923 5.56319L429.693 5.69536L377.458 35.7957L337.877 5.73042L337.579 5.5045L337.278 5.72561L296.42 35.7379L266.387 5.77461L266.149 5.53702L265.839 5.66809L194.547 35.8291L149.493 5.71289L149.23 5.53727L148.959 5.69923L98.518 35.8034L53.502 5.71289L53.2448 5.54095L52.9761 5.69443L0 35.9606L0.496066 36.8288L53.2035 6.71621L98.225 36.8104L98.4877 36.986L98.7591 36.8241L149.2 6.71988L194.216 36.8104L194.44 36.9603L194.689 36.8552L265.919 6.72014L296.018 36.7487L296.321 37.0515L296.667 36.7977L337.569 6.75265L377.117 36.7929L377.382 36.9937L377.669 36.8279L429.963 6.69397L492.21 36.8447L492.452 36.9622L492.684 36.8241L543.125 6.71989L588.141 36.8104L588.43 37.0041L588.712 36.7992L630.369 6.53308L630.278 6.40856L676.056 41.8543L676.349 42.0817L676.652 41.8662L726.14 6.61275L781.59 41.8809L781.832 42.0351L782.088 41.9033L850.509 6.58379L907.993 41.8851L908.295 42.0701L908.57 41.8476L952.051 6.64918L997.022 41.8527L997.381 42.1342L997.694 41.8016L1030.79 6.61257L1109.09 41.9148L1109.35 42.0328L1109.59 41.8662L1159.07 6.61274L1214.52 41.8809L1214.81 42.0616L1215.08 41.8662L1264.58 6.60863L1322.52 41.8861L1323.03 41.0372L1323.45 41.7723L1376.16 11.6596L1421.18 41.7538L1421.44 41.9294L1421.72 41.7675L1472.16 11.6633L1517.17 41.7538L1517.4 41.9037L1517.65 41.7986L1588.88 11.6636L1618.97 41.6921L1619.28 41.9949L1619.62 41.7411L1660.53 11.6961L1700.07 41.7363L1700.34 41.9371L1700.63 41.7713L1752.92 11.6374L1815.17 41.7881L1815.41 41.9057L1815.64 41.7675L1866.08 11.6633L1911.1 41.7538L1911.39 41.9475L1911.67 41.7426L1953.33 11.4765L1953.24 11.3519L1999.01 46.7978L1999.31 47.0252L1999.61 46.8097L2049.1 11.5562L2104.55 46.8243L2104.79 46.9785L2105.05 46.8467L2173.47 11.5272L2230.95 46.8285L2231.25 47.0136L2231.53 46.791L2275.01 11.5926L2319.98 46.7961L2320.34 47.0776L2320.65 46.745L2353.75 11.556L2432.05 46.8582L2432.31 46.9762L2432.54 46.8097L2482.03 11.5562L2537.48 46.8243L2537.77 47.005L2538.04 46.8097L2587.53 11.5521L2645.47 46.8295L2645.99 45.9754L2587.77 10.5265L2587.49 10.355L2587.22 10.5463L2537.73 45.7998L2482.28 10.5316L2482 10.3509L2481.73 10.5463L2432.2 45.8286L2353.83 10.4977L2353.51 10.3511L2353.26 10.611L2320.24 45.7272L2275.31 10.5598L2275 10.3145L2274.69 10.5649L2231.17 45.7913L2173.75 10.5275L2173.51 10.3799L2173.26 10.5092L2104.84 45.8263L2049.35 10.5316L2049.07 10.3509L2048.79 10.5463L1999.33 45.7797L1953.84 10.5582L1953.23 11.3477L1952.74 10.6675L1911.36 40.7287L1866.37 10.6563L1866.11 10.4807L1865.84 10.6426L1815.36 40.7706L1753.12 10.622L1752.88 10.5066L1752.65 10.6388L1700.42 40.7391L1660.83 10.6738L1660.54 10.4479L1660.24 10.669L1619.38 40.6813L1589.34 10.718L1589.11 10.4804L1588.8 10.6115L1517.5 40.7725L1472.45 10.6563L1472.19 10.4807L1471.92 10.6426L1421.48 40.7468L1376.46 10.6563L1376.2 10.4844L1375.93 10.6379L1322.96 40.904L1323.03 41.0261L1264.81 5.58304L1264.53 5.41159L1264.26 5.60287L1214.78 40.8564L1159.33 5.58822L1159.04 5.40748L1158.77 5.60287L1109.24 40.8852L1030.88 5.5543L1030.55 5.40764L1030.31 5.66755L997.279 40.7838L952.354 5.6164L952.041 5.37104ZM337.579 0.918734L337.877 1.14465L377.458 31.2099L429.693 1.10959L429.923 0.977424L430.161 1.09282L492.403 31.2414L542.884 1.11347L543.155 0.951507L543.418 1.12713L588.407 31.1996L629.781 1.13831L630.369 1.94732L588.712 32.2135L588.43 32.4183L588.141 32.2246L543.125 2.13412L492.684 32.2383L492.452 32.3765L492.21 32.2589L429.963 2.10821L377.669 32.2422L377.382 32.4079L377.117 32.2071L337.569 2.16689L296.667 32.2119L296.321 32.4658L296.018 32.1629L265.919 2.13437L194.689 32.2694L194.44 32.3745L194.216 32.2246L149.2 2.13412L98.7591 32.2383L98.4877 32.4003L98.225 32.2246L53.2035 2.13045L0.496066 32.2431L0 31.3748L52.9761 1.10867L53.2448 0.955182L53.502 1.12713L98.518 31.2176L148.959 1.11347L149.23 0.951507L149.493 1.12713L194.547 31.2434L265.839 1.08233L266.149 0.951258L266.387 1.18885L296.42 31.1521L337.278 1.13985L337.579 0.918734ZM2275 4.94342L2274.69 5.19386L2231.17 40.4202L2173.75 5.15641L2173.51 5.00881L2173.26 5.13819L2104.84 40.4553L2049.35 5.16059L2049.07 4.97986L2048.79 5.17525L1999.33 40.4086L1953.84 5.18715L1953.23 5.97783L1999.01 41.4267L1999.31 41.6541L1999.61 41.4386L2049.1 6.18512L2104.55 41.4533L2104.79 41.6075L2105.05 41.4757L2173.47 6.15616L2230.95 41.4575L2231.25 41.6425L2231.53 41.42L2275.01 6.22155L2319.98 41.4251L2320.34 41.7066L2320.65 41.3739L2353.75 6.18495L2432.05 41.4872L2432.31 41.6052L2432.54 41.4386L2482.03 6.18511L2537.48 41.4533L2537.77 41.634L2538.04 41.4386L2587.53 6.18101L2645.47 41.4584L2645.99 40.6043L2587.77 5.15542L2587.49 4.98396L2587.22 5.17525L2537.73 40.4288L2482.28 5.16059L2482 4.97986L2481.73 5.17525L2432.2 40.4575L2353.83 5.12667L2353.51 4.98002L2353.26 5.23993L2320.24 40.3562L2275.31 5.18877L2275 4.94342ZM1660.54 5.86215L1660.83 6.08807L1700.42 36.1534L1752.65 6.05301L1752.88 5.92085L1753.12 6.03624L1815.36 36.1848L1865.84 6.05689L1866.11 5.89493L1866.37 6.07055L1911.36 36.143L1952.74 6.08173L1953.33 6.89074L1911.67 37.1569L1911.39 37.3617L1911.1 37.168L1866.08 7.07755L1815.64 37.1817L1815.41 37.3199L1815.17 37.2024L1752.92 7.05163L1700.63 37.1856L1700.34 37.3514L1700.07 37.1505L1660.53 7.11031L1619.62 37.1553L1619.28 37.4092L1618.97 37.1063L1588.88 7.0778L1517.65 37.2128L1517.4 37.318L1517.17 37.168L1472.16 7.07754L1421.72 37.1817L1421.44 37.3437L1421.18 37.168L1376.16 7.07387L1323.45 37.1865L1322.96 36.3182L1375.93 6.05209L1376.2 5.8986L1376.46 6.07055L1421.48 36.1611L1471.92 6.05689L1472.19 5.89493L1472.45 6.07055L1517.5 36.1868L1588.8 6.02575L1589.11 5.89468L1589.34 6.13227L1619.38 36.0956L1660.24 6.08327L1660.54 5.86215Z' fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")

</style>
