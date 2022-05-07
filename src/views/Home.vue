<script setup>
import Header from "../components/Header.vue";
</script>

<template>
  <div>
    <div id="zukiblowon-main" class="maincontainer flex flex-row-reverse">
      <a href="/" class="flex items-center justify-end lg:flex-1">
        <span
        style="background-color: #ff3334; font-family: 'Fredoko One', cursive;"
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
          <li><a href="#zukiblowon-store">Merch</a></li>
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
              src="../assets/img/ace.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/mre.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/mre.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/ace.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/ace.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/mre.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/mre.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/ace.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
        </div>

        <div
          class="absolute top-0 py-8 animate-marquee2 whitespace-nowrap flex"
        >
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/ace.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/mre.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/mre.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/ace.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/ace.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/mre.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/mre.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/ace.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
        </div>
      </div>

      <div class="relative flex overflow-x-hidden mt-7 marquee-container">
        <div class="py-8 animate-marquee3 whitespace-nowrap flex lg:h-auto">
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/mre.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/mre.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/ace.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/ace.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/mre.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/mre.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/ace.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/ace.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
        </div>

        <div
          class="absolute top-0 py-8 animate-marquee4 whitespace-nowrap flex"
        >
        <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/mre.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/mre.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/ace.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/ace.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/mre.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/mre.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/ace.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img
              src="../assets/img/ace.png"
              class="lg:w-full w-full rounded-lg"
          /></span>
        </div>
      </div>
    </div>
    <div id="zukiblowon-faq">
      <div class="h1-title" style="margin-bottom: 50px">FAQ</div>
    </div>
    <div class="faq">
      <div>
        <input id="faq-a" type="checkbox" />
        <label for="faq-a">
          <p class="faq-heading">How many Zukiblowon?</p>
          <p class="faq-text">
            There is 5,555 Zukiblowon that generated from 200 Hand drawn Traits!
          </p>
        </label>
      </div>
      <div>
        <input id="faq-b" type="checkbox" />
        <label for="faq-b">
          <p class="faq-heading">What is the mint price?</p>
          <p class="faq-text">
            0.01 ETH. First 555 NFTs are Free to mint and the rest is 0.01 ETH
          </p>
        </label>
      </div>
      <div>
        <input id="faq-c" type="checkbox" />
        <label for="faq-c">
          <p class="faq-heading">Smart Contract and Gas?</p>
          <p class="faq-text">ERC721A, under 25$ to mint 10 NFTs</p>
        </label>
      </div>
      <div>
        <input id="settings" type="checkbox" />
        <input id="faq-d" type="checkbox" />
        <label for="faq-d">
          <p class="faq-heading">Are you affiliated with any projects?</p>
          <p class="faq-text">We are not affiliated with any projects.</p>
        </label>
      </div>
      <div>
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
      <img src="../assets/img/01-art.png" class="art-01" />
      <img src="../assets/img/002-utility.png" class="utility-02" />
      <img src="../assets/img/03-expand.png" class="expand-03" />
      <img src="../assets/img/04-explore.png" class="explore-04" />
    </div>
    <div id="zukiblowon-community">
      <div class="h1-title">Community</div>
    </div>
    <div class="social-container">
      <a href="https://discord.gg/zukiblowon" target="_blank"
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
          Discord
        </div></a
      >
      <a href="https://twitter.com/zukiblowon_nft" target="_blank"
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
      <a href="https://opensea.io/collection/zukiblowon" target="_blank"
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
      <div class="bio" style="margin-right: 18px">
        <a href="https://twitter.com/AceyNft"
          ><img class="avatar" src="../assets/img/ace.png"
        /></a>
        <div class="team-user">AceySpades (ace)</div>
        <div class="team-title">Co-founder</div>
      </div>
      <div class="bio" style="margin-right: 18px">
        <a href="https://twitter.com/Mre_NFT"
          ><img class="avatar" src="../assets/img/mre.png"
        /></a>
        <div class="team-user">MrE</div>
        <div class="team-title">Co-founder</div>
      </div>
      <div class="bio" style="margin-right: 18px">
        <a href="https://twitter.com/VeryStonedTweet"
          ><img class="avatar" src="../assets/img/ace.png"
        /></a>
        <div class="team-user">Verium</div>
        <div class="team-title">Developer</div>
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