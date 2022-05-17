<script setup>
import scroll from "./assets/scroll.png";

function scrollTop() {
  window.scrollTo(0, 0);
}
</script>

<template>
  <router-view></router-view>
  <button class="fixed bottom-9 right-9 text-white" @click="scrollTop()">
    <img :src="scroll" class="w-20" />
  </button>
  <div
    class="
    bg-white
      fixed
      bottom-20
      right-0
      left-0
      2xl:w-1/2
      w-5/6
      m-auto
      shadow-lg shadow-gray-400
      lg:px-7
      rounded-lg
    "
  >
    <div class="flex lg:pr-10">
      <div class="flex-1 flex text-black items-center">
        <img src="./assets/img/Logo/5.png" class="lg:w-48 w-32">
        <p class="tracking-wider uppercase font-bold lg:text-4xl text-3xl py-5 lg:ml-10">MINT YOUR ZUKIBLOWON!</p>
      </div>
      <div class="flex-1 flex justify-end self-center">
        <a target="_blank" href="http://mintzukiblowon.com">
          <button
            class="
              mint-btn
              font-bold
              tracking-widest
              text-white
              lg:py-6
              lg:px-10
              text-3xl
              px-5
              py-5
              rounded-lg
              lg:text-4xl
              lg:mr-0
              mr-4
            "
          >
            MINT
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
#app {
  font-family: "Makuton", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  padding-bottom: 120px;
}
@media handheld, only screen and (max-width: 767px) {
  .logo {
    width: 400px !important;
  }
  .logo-container {
    width: 400px !important;
  }
  .zukiblowon-logo {
    width: 400px !important;
  }
  .zukiblowon-logo-sm {
    display: none !important;
  }
  .maincontainer {
    width: 400px !important;
    display: flex !important;
    flex-direction: column;
    margin: 0 auto !important;
    text-align: center !important;
  }
  .background-img {
    display: none;
  }
  .connect-btn {
    float: none !important;
    display: none !important;
  }
  nav {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  #zukiblowon-main a span {
    display: none !important;
  }
  ul li {
    display: block !important;
    margin: 0 auto !important;
    text-align: center !important;
    margin-left: -40 !important;
    margin-top: 10px !important;
  }
  .nav-store:hover:after {
    background: #951414;
    border-radius: 8px;
    color: #ebe7e1;
    content: attr(title);
    margin: -82px auto 0;
    margin-left: 10px;
    font-size: 0.75em;
    padding: 13px;
    width: auto;
    position: absolute;
    top: 500 !important;
  }
  #zukiblowon-mint {
    width: 400px !important;
    padding-top: 75px !important;

    height: auto !important;
  }
  .machine {
    width: 350px !important;
  }
  #zukiblowon-main {
    padding: 0px !important;
  }
  #zukiblowon-roadmap {
    width: 400px !important;
    padding-top: 0px !important;
    margin-top: -40px !important;
    /* height: 1500px !important; */
  }
  .art-01 {
    width: 350px !important;
    padding-top: 20px !important;
  }
  .utility-02 {
    width: 350px !important;
  }
  .expand-03 {
    width: 350px !important;
  }
  .explore-04 {
    width: 350px !important;
    margin-left: 10% !important;
  }
  #zukiblowon-community {
    width: 100% !important;
    padding-top: 0px !important;
    padding-bottom: 40px !important;
  }
  .social-container {
    width: 100% !important;
    height: 200px !important;
  }
  #zukiblowon-faq {
    width: 400px !important;
    margin: 0 auto !important;
    text-align: center !important;
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .faq {
    width: 100% !important;
    padding-left: 1.75rem !important/* 28px */;
    padding-right: 1.75rem !important/* 28px */;
  }
  .faq-heading {
    font-size: 1em !important;
    padding-top: 12px !important;
    padding-left: 20px !important;
    text-indent: 0 !important;
    width: 350px !important;
  }
  .timecontainer {
    width: 350px !important;
    height: auto !important;
  }
  .li-time {
    font-size: calc(1.125rem * var(--smaller)) !important;
    list-style-type: none !important;
  }

  .li-time span {
    font-size: calc(3.375rem * var(--smaller)) !important;
  }
  #zukiblowon-team, #zukiblowon-tools {
    width: 100% !important;
    margin-top: 50px !important;
  }
  .avatar {
    margin-top: 20px !important;
  }
  .marquee-container {
    width: 100% !important;
    margin: auto !important;
  }
  .discord,
  .twitter,
  .opensea {
    width: 300px !important;
  }
  #footer {
    width: 300px !important;
  }
  .marquee-item {
    width: 200px !important;
  }
  .icon {
    display: none !important;
  }
  .icon-sm {
    display: block !important;
    text-align: center !important;
  }
  .roadmap-container {
    height: auto !important;
    flex-direction: column !important;
  }
  .w-sm {
    height: 300px !important;
  }
}
</style>

<style>
@font-face {
  font-family: "Makuton";
  src: url("assets/font/Makuton.ttf");
}
body {
  background-color: #f0ece3;
}

html::-webkit-scrollbar {
  width: 12.5px;
}

html::-webkit-scrollbar-track {
  background-color: #d7d7d7;
}

html::-webkit-scrollbar-thumb {
  background: #951414;
}
.icon-sm {
  display: none;
}
.maincontainer {
  width: 100vw;
  margin: 0 auto;
  text-align: center;
  padding-top: 15px;
  display: flex;
}

nav {
  padding-top: 1%;
  padding-left: 0.5%;
  /*padding-right: 6%;
  text-align: center;*/
  margin: 0 auto;
  text-decoration: none !important;
}

ul li {
  display: block;
  padding: 10px 15px;
  font-size: 1.2em;
  border-radius: 10px;
  font-family: "Makuton" !important;
  font-weight: bold;
  letter-spacing: 1.5px;
  background-color: #dfdedc;
  margin: 0px 10px;
}

nav ul li:first-child {
  background: transparent;
}

ul li:hover {
  background-color: #dad8d3;
  cursor: pointer;
  /* color: white !important; */
}

a {
  color: #282828;
}

a:link {
  color: #282828;
}

a:hover {
  text-decoration: none;
  color: #282828;
  /* color: white; */
}

.nav-store {
  color: #282828;
}

.zukiblowon-logo {
  width: 1400px;
  height: 100%;
  margin: 0 auto;
  text-align: center;
}

#zukiblowon-roadmap {
  width: 96%;
  margin: 0 auto;
  padding-bottom: 20px;
}

.art-01 {
  width: 677px;
  height: auto;
}

.utility-02 {
  width: 604px;
  float: right;
}

.expand-03 {
  width: 833px;
}

.explore-04 {
  width: 757px;
  margin-left: 30%;
  padding-top: 100px;
}

#button {
  display: inline-block;
  background-color: #ff9800;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
}
#button::after {
  content: "\f077";
  font-family: FontAwesome;
  font-weight: normal;
  font-style: normal;
  font-size: 2em;
  line-height: 50px;
  color: #fff;
}
#button:hover {
  cursor: pointer;
  background-color: #333;
}
#button:active {
  background-color: #555;
}
#button.show {
  opacity: 1;
  visibility: visible;
}

.h1-title {
  font-family: "Makuton";
  font-size: 3.5em;
  color: #951414;
  padding-top: 150px;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
}

#zukiblowon-mint {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.machine {
  width: 450px;
  margin: 0 auto;
  text-align: center;
}

.coming-soon-btn {
  width: 293px;
  margin: 0 auto;
  text-align: center;
  padding-top: 25px;
}

.wrapper {
  width: 100%;
  display: table;
}

.content {
  vertical-align: middle;
}

.item {
  width: auto;
  padding: 8px;
}
.logo-container {
  max-width: 1400px;
  text-align: center;
  margin: 0 auto;
  z-index: -1;
}
.logo {
  width: 1400px;
}
.main-title {
  margin: 0 auto;
  font-family: "Makuton";
  font-size: 2.5em;
  color: #951414;
}
.main-text {
  font-family: "Makuton";
  font-size: 1.25em;
  font-weight: bold;
  color: #951414;
}
#btn-container {
  width: 1400px;
  margin: 0 auto;
  padding-top: 20px;
}
.connect-btn {
  float: right;
  background-color: transparent !important;
  border: none !important;
  overflow: hidden !important;
}
#network-name {
  display: none !important;
}
#selected-account {
  display: none !important;
}
.address {
  width: 250px !important;
  word-break: break-all;
  float: right;
  font-size: 0.75em !important;
}
.background-img {
  width: 225px;
  position: fixed;
  right: 10;
  bottom: 0;
}

#zukiblowon-community {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
}
.social-container {
  margin: 0 auto;
  text-align: center;
}
.discord {
  width: 432px;
  height: 73px;
  background: url("images/btn-discord.png") no-repeat;
  background-size: 432px 73px;
  margin-top: 50px;
}
.discord:hover {
  background: rgb(121, 12, 12) no-repeat;
  background-size: 432px 73px;
}
.twitter {
  width: 432px;
  height: 73px;
  background: url("images/btn-twitter.png") no-repeat;
  background-size: 432px 73px;
  margin-top: 15px;
}
.twitter:hover {
  background: rgb(121, 12, 12) no-repeat;
  background-size: 432px 73px;
}
.opensea {
  width: 432px;
  height: 73px;
  background: url("images/btn-opensea.png") no-repeat;
  background-size: 432px 73px;
  margin-top: 15px;
}
.opensea:hover {
  background: rgb(121, 12, 12) no-repeat;
  background-size: 432px 73px;
}

.faq-heading {
  font-family: "Makuton";
  font-weight: bold;
  font-size: 1.3em;
  -webkit-transition: text-indent 0.2s;
  text-indent: 20px;
  color: #ebe7e1;
  border-radius: 16px;
  padding-top: 16px;
  letter-spacing: 3px;
}

.faq-text {
  font-family: "Makuton", sans-serif;
  font-weight: 400;
  font-size: 1.25em;
  color: #fff;
  width: 95%;
  padding-left: 20px;
  margin-bottom: 30px;
  margin-top: 10px;
  letter-spacing: 1px;
}

.faq {
  width: 800px;
  margin: 0 auto;
  background: transparent;
  position: relative;
}
.faq label {
  height: auto !important;
  width: 100%;
  cursor: pointer;
  padding-top: 10px;
  margin-top: 10px;
  border-radius: 14px;
  background-color: #282828;
}

.faq input[type="checkbox"] {
  display: none;
}

.marquee-item {
  width: 350px;
}

.faq .faq-arrow {
  font-size: 2em;
  font-weight: bold;
  float: right;
  position: relative;
  top: -44px;
  right: 20px;
  color: white;
}

.nav-store:hover:after {
  background: #951414;
  border-radius: 8px;
  color: #ebe7e1;
  content: attr(title);
  margin: -82px auto 0;
  margin-left: 10px;
  font-size: 0.75em;
  padding: 13px;
  width: auto;
  position: absolute;
  top: 150;
}

#footer {
  width: 432px;
  height: auto;
  margin: 0 auto;
  margin-top: 50px;
  padding-bottom: 25px;
}

#zukiblowon-main {
  width: 100%;
  display: flex;
  margin-bottom: 20px !important;
  padding: 10px 70px 0px 20px;
}

.zukiblowon-logo-sm {
  width: 250px;
  margin-top: -5px;
  margin-left: 16px;
  margin-right: 350.7px;
}

.timecontainer {
  color: #333;
  margin: 0 auto;
  text-align: center;
  font-family: "Helvetica Neue";
}

.li-time {
  display: inline-block;
  font-size: 1.5em;
  list-style-type: none;
  padding: 1em;
  text-transform: uppercase;
}

.li-time:hover {
  color: #333;
  cursor: default;
}

.li-time span {
  display: block;
  font-size: 4.5rem;
}

#zukiblowon-team, #zukiblowon-tools {
  width: 1200px;
  text-align: center;
  margin: 0 auto;
  margin-top: 12px;
}

.bio {
  display: inline-block;
}

.avatar {
  width: 250px;
}

.team-user {
  font-family: "Makuton";
  font-weight: 800;
  font-size: 2em;
  color: #951414;
  display: block;
  text-align: left;
  margin-left: 5px;
  margin-top: 10px;
  letter-spacing: 1px;
}

.team-title {
  font-family: "Makuton";
  font-size: 1.8rem;
  display: block;
  text-align: left;
  margin-left: 5px;
  margin-top: 3px;
  letter-spacing: 1px;
}
.verified {
  color: #ffffff;
}

.verified:hover {
  color: #282828;
}
.marquee-container {
  margin: auto;
}
.roadmap-container {
  height: 700px;
  /* background-image: url("assets/img/1_1.png"); */
  background-repeat: no-repeat;
  background-position: center;
  color: #282828;
}
.bg-roadmap {
  background-color: #d7cdb5;
}
.bg-roadmap:hover {
  cursor: pointer;
  opacity: 0.8;
}
.bg-special {
  background-image: url("assets/img/1_1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
}
.roadmap-number {
  font-size: 4em;
}
.roadmap-text {
  font-size: 1.6em;
}
.no-1 {
  height: 300px;
}
.no-3 {
  height: 400px;
}
.no-4 {
  height: 200px;
}
.no-7 {
  height: 500px;
}
.mint-btn{
  background-color: #951414;

}
</style>
