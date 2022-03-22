import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openModal: false,
    skills: ['HTML5', 'CSS3 (SaSS, SCSS)' , 'JavaScript (ES6)', 'Vue.js', 'Git', 'React.js', 'Solidity', 'web3.js'],
    works: [ 
      {name: 'Calendar', pic: require('../assets/img/calendar.png'), text:'A meeting scheduler application for a meeting room.', additionalText: 'There is a pre-defined table with 5 days (Mon-Fri) for columns and 9 time slots (10:00-18:00, one hour long each) for rows. There are several people that can take part in the meetings. One meeting can take only 1 hour and obtain one cell in the “Calendar” screen.', link:'https://happy8me.github.io/calendar/'}, 
      {name: 'Totoro', pic: require('../assets/img/totoro-walking.gif'), text:'Totoro is controlled by context menu & keyboard', additionalText:'Arrows - left/right/up/down, spacebar - jumps up, ctrl+left/right arrow - crawls to the left/right. Totoro can neither jump nor move up/down when crawling. If Totoro hits the edge, he says "БЭМС!"', link:'https://happy8me.github.io/Totoro/'}, 
      {name: 'Chairland', pic: require('../assets/img/Chairland.png'), text:'Chairs catalog & Shop', additionalText: 'Home: catalog of available chairs, The 12 Chars: something to read, Shop: buy chairs.', link:'https://happy8me.github.io/chairland/'}, 
      {name: 'Find Twins', pic: require('../assets/img/findTwins.png'), text:'Cards matching game', link:'https://vitannya.herokuapp.com/#/find_twins'},
      {name: 'Vitannya', pic: require('../assets/img/vitannya.png'), text:'My first personal application', additionalText: 'Please note, information is not up to date.', link:'https://vitannya.herokuapp.com/'}, 
      {name: 'test-app-1', pic: require('../assets/img/test-app-1.png'), additionalText: 'Clicking on a card opens a modal window. A click on "Buy cheapest" opens a modal window with the cheapest product.', link:'https://happy8me.github.io/test-app-1/'},
      {name: 'Trustroll (member of development team)', pic: require('../assets/img/trustroll.png'), additionalText: 'Trustroll is a decentralized gambling platform based on the Binance Smart Chain. All games are controlled through a smart contract. This smart contract handles transactions automatically, without any human input.', link:'https://trustroll.win/'}
    ],
    itEducation: [
      {school: 'Hillel IT School', year: 'April 2020 - September 2020', study: 'Front-end Pro (JavaScript)'},
      {school: 'Hillel IT School', year: 'April 2021 - June 2021', study: 'React.js'},
      {school: 'Moralis Academy', year: 'September 2022 - October 2022', study: 'Eethereum Smart Contract 101'},
      {school: 'Moralis Academy', year: 'September 2022 - October 2022', study: 'Eethereum Programming 201'}
    ],
    otherEducation: [
      {school: 'London School of English', year: '2014 – 2015', study: 'CAE (C1 Advanced)'},
      {school: 'Odessa National Economics University', year: '2007 – 2012', study: 'Master in Finance and Credit'},
    ], 
    certificates: [ 
      {name: 'FE-Pro', pic: require('../assets/img/FE.png')},
      {name: 'CAE', pic: require('../assets/img/CAE.jpg')}
    ]
  },
  mutations: {
    openModal(state){
      state.openModal = true
    },
    closeModal(state) {
      state.openModal = false
    }
  },
  actions: {
    openModal(state) {
      state.commit('openModal')
    },
    closeModal(state) {
      state.commit('closeModal')
    }
  },
  getters: {
    modalState: state => state.openModal,
    skills: state => state.skills,
    works: state => state.works,
    itEducation: state => state.itEducation,
    otherEducation: state => state.otherEducation,
    certificates: state => state.certificates
  }

})
