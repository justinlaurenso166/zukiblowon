<script setup>
import Header from "../components/Header.vue";
import { onMounted } from "@vue/runtime-core";

import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <div>
    <div id="zukiblowon-main" class="maincontainer flex flex-row-reverse">
      <a href="/" class="flex items-center justify-end lg:flex-1">
        <span
        style="background-color: #ff3334; font-family: 'Montserrat';"
          class="
            text-4xl
            font-bold
            text-white
            p-6
            rounded-xl
            tracking-wider
          "
          >Zukiblowon</span
        >
      </a>
      <nav class="flex-1">
        <ul>
          <li><a href="#zukiblowon-sneak_peeks">Sneak Peeks</a></li>
          <li><a href="#zukiblowon-faq">FAQ</a></li>
          <li><a href="#zukiblowon-roadmap">Roadmap</a></li>
          <li><a href="#zukiblowon-community">Community</a></li>
          <li><a href="#zukiblowon-team">Team</a></li>
        </ul>
      </nav>
    </div>

    <div class="logo-container">
      <img src="../assets/img/homepage.png" class="logo" />
    </div>
    <div id="zukiblowon-sneak_peeks" class="mt-48">
      <!-- <div class="h1-title">Sneak Peeks</div> -->
      <div class="relative flex overflow-x-hidden mt-7 marquee-container">
        <div class="py-8 animate-marquee whitespace-nowrap flex lg:h-auto">
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/1.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/2.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/3.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/4.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/5.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/6.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/7.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/8.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
        </div>

        <div
          class="absolute top-0 py-8 animate-marquee2 whitespace-nowrap flex"
        >
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/1.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/2.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/3.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/4.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/5.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/6.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/7.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/8.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
        </div>
      </div>

      <div class="relative flex overflow-x-hidden mt-7 marquee-container">
        <div class="py-8 animate-marquee3 whitespace-nowrap flex lg:h-auto">
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/9.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/10.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/11.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/12.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/13.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/14.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/15.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/16.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
        </div>

        <div
          class="absolute top-0 py-8 animate-marquee4 whitespace-nowrap flex"
        >
        <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/9.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/10.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/11.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/12.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/13.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/14.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/15.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/16.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
        </div>
      </div>
    </div>
    <div id="zukiblowon-faq">
      <div class="h1-title" style="margin-bottom: 50px">FAQ</div>
    </div>
    <div class="faq">
      <div class="mt-4" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-once="false">
        <input id="faq-a" type="checkbox" />
        <label for="faq-a">
          <p class="faq-heading">How many Zukiblowon?</p>
          <p class="faq-text">
            There is 5,555 Zukiblowon that generated from 200 Hand drawn Traits!
          </p>
        </label>
      </div>
      <div class="mt-4"  data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-once="false">
        <input id="faq-b" type="checkbox" />
        <label for="faq-b">
          <p class="faq-heading">What is the mint price?</p>
          <p class="faq-text">
            0.01 ETH. First 555 NFTs are Free to mint and the rest is 0.01 ETH
          </p>
        </label>
      </div>
      <div class="mt-4"  data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-once="false">
        <input id="faq-c" type="checkbox" />
        <label for="faq-c">
          <p class="faq-heading">Smart Contract and Gas?</p>
          <p class="faq-text">ERC721A, under 25$ to mint 10 NFTs</p>
        </label>
      </div>
      <div class="mt-4"  data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-once="false">
        <input id="settings" type="checkbox" />
        <input id="faq-d" type="checkbox" />
        <label for="faq-d">
          <p class="faq-heading">Are you affiliated with any projects?</p>
          <p class="faq-text">We are not affiliated with any projects.</p>
        </label>
      </div>
      <div class="mt-4"  data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-once="false">
        <input id="settings" type="checkbox" />
        <input id="faq-e" type="checkbox" />
        <label for="faq-e">
          <p class="faq-heading">Wen reveal?</p>
          <p class="faq-text">Instant Reveal</p>
        </label>
      </div>
    </div>
    <div id="zukiblowon-roadmap">
      <div class="h1-title">Roadmap</div>
      <!-- <img src="../assets/img/01-art.png" class="art-01" />
      <img src="../assets/img/002-utility.png" class="utility-02" />
      <img src="../assets/img/03-expand.png" class="expand-03" />
      <img src="../assets/img/04-explore.png" class="explore-04" /> -->
      <h3 class="text-center mt-24 text-4xl font-bold tracking-wider">Coming Soon</h3>
    </div>
    <div id="zukiblowon-community">
      <div class="h1-title">Community</div>
    </div>
    <div class="social-container flex items-center justify-center flex-col">
      <a href="" target="_blank"
        ><div
          class="
            discord
            flex
            items-center
            justify-center
            text-3xl
            hover:text-white
            bg-red-600
            text-white
            rounded-full
          "
        >
          Discord (Coming Soon)
        </div></a
      >
      <a href="" target="_blank"
        ><div
          class="
            twitter
            flex
            items-center
            justify-center
            text-3xl
            hover:text-white
            bg-red-600
            text-white
            rounded-full
          "
        >
          Twitter
        </div></a
      >
      <a href="" target="_blank"
        ><div
          class="
            opensea
            flex
            items-center
            justify-center
            text-3xl
            hover:text-white
            bg-red-600
            text-white
            rounded-full
          "
        >
          Opensea
        </div></a
      >
    </div>
    <div id="zukiblowon-team">
      <div class="h1-title" style="margin-bottom: 50px">THE TEAM</div>
      <div class="grid lg:grid-cols-3 md:grid-cols-1 gap-20 px-7">
        <div class="bio">
          <a
            ><img class="avatar rounded-lg w-full" src="../assets/img/1.png"
          /></a>
          <div class="team-user">Darrel</div>
          <div class="team-title">Founder</div>
        </div>
        <div class="bio">
          <a
            ><img class="avatar rounded-lg w-full" src="../assets/img/2.png"
          /></a>
          <div class="team-user">Robert Tan</div>
          <div class="team-title">Co Founder</div>
        </div>
        <div class="bio">
          <a
            ><img class="avatar rounded-lg w-full" src="../assets/img/4.png"
          /></a>
          <div class="team-user">Calvin</div>
          <div class="team-title">Artist</div>
        </div>
          <div class="bio">
          <a
            ><img class="avatar rounded-lg w-full" src="../assets/img/7.png"
          /></a>
          <div class="team-user">Dave</div>
          <div class="team-title">Artist</div>
        </div>
          <div class="bio">
          <a
            ><img class="avatar rounded-lg w-full" src="../assets/img/8.png"
          /></a>
          <div class="team-user">Mr W</div>
          <div class="team-title">Developer</div>
        </div>
      </div>
    </div>
    <div id="footer">
      <div
        id="verified-address"
        style="
          text-align: center;
          margin: 50px auto 25px auto;
          background-color: #ff3334;
          padding: 20px;
          border-radius: 10px;
        "
      >
        <span style="font-weight: bold; color: #ffffff"
          >Verified Smart Contract:
          <a
            href="https://etherscan.io/address/0xF25B304Faf5C928936969d6f368BF6Ba21270258"
            class="verified"
          ></a
        ></span>
      </div>
    </div>
  </div>
</template>