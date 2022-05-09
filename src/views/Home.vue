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
    <div id="zukiblowon-main" class="maincontainer flex lg:flex-row-reverse">
      <div class="flex items-center justify-end lg:flex-0 icon md:flex-0 mt-2">
        <ul class="lg:flex items-center">
          <li class="">
            <a
              href="https://twitter.com/zukiblowon"
              target="_blank"
              class="
                w-full
                items-center
                block
                relative
                flex
                text-black
                px-2
                py-1
                rounded-lg
              "
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="
                  ml-auto
                  fill-current
                  stroke-current
                  h-9
                  w-9
                  text-slate-900
                "
                viewBox="0 0 40 40"
              >
                <path
                  d="M38.526 8.625a15.199 15.199 0 01-4.373 1.198 7.625 7.625 0 003.348-4.211 15.25 15.25 0 01-4.835 1.847 7.6 7.6 0 00-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 01-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 01-3.438.13 7.618 7.618 0 007.112 5.286A15.306 15.306 0 011.42 31.79a21.55 21.55 0 0011.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 15.499 0 003.799-3.941z"
                ></path></svg
            ></a>
          </li>
          <li class="">
            <a
              href=""
              target="_blank"
              class="
                w-full
                items-center
                block
                relative
                flex
                text-black
                px-2
                py-1
                rounded-lg
              "
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="
                  ml-auto
                  fill-current
                  stroke-current
                  h-9
                  w-9
                  text-slate-900
                "
                viewBox="0 0 40 40"
              >
                <path
                  d="M33.567 7.554a32.283 32.283 0 00-7.969-2.472.12.12 0 00-.128.06c-.344.613-.725 1.411-.992 2.039a29.804 29.804 0 00-8.95 0 20.625 20.625 0 00-1.008-2.038.126.126 0 00-.128-.06 32.194 32.194 0 00-7.968 2.47.114.114 0 00-.053.046C1.296 15.18-.095 22.577.588 29.88c.003.036.023.07.05.092 3.349 2.459 6.593 3.952 9.776 4.941a.127.127 0 00.137-.045 23.203 23.203 0 002-3.253.124.124 0 00-.068-.172A21.379 21.379 0 019.43 29.99a.126.126 0 01-.012-.209c.205-.153.41-.313.607-.475a.121.121 0 01.126-.017c6.407 2.925 13.343 2.925 19.675 0a.12.12 0 01.128.015c.196.162.4.324.608.477a.126.126 0 01-.011.209c-.975.57-1.99 1.051-3.055 1.454a.125.125 0 00-.067.173 26.052 26.052 0 001.998 3.252c.031.043.087.062.138.046 3.199-.99 6.442-2.482 9.79-4.941a.126.126 0 00.052-.09c.816-8.445-1.368-15.78-5.789-22.283a.1.1 0 00-.05-.046zm-20.06 17.88c-1.928 0-3.517-1.771-3.517-3.946 0-2.175 1.558-3.946 3.518-3.946 1.975 0 3.549 1.787 3.518 3.946 0 2.175-1.558 3.946-3.518 3.946zm13.01 0c-1.93 0-3.52-1.771-3.52-3.946 0-2.175 1.56-3.946 3.52-3.946 1.974 0 3.548 1.787 3.517 3.946 0 2.175-1.543 3.946-3.518 3.946z"
                ></path></svg
            ></a>
          </li>
          <li class="">
            <a
              href=""
              target="_blank"
              class="
                w-full
                items-center
                block
                relative
                flex
                text-black
                px-2
                py-1
                rounded-lg
              "
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="
                  ml-auto
                  fill-current
                  stroke-current
                  h-9
                  w-9
                  text-slate-900
                "
                viewBox="0 0 40 40"
              >
                <path
                  d="M20 1C9.508 1 1 9.508 1 20s8.508 19 19 19 19-8.508 19-19S30.496 1 20 1Zm-9.625 19.638.08-.129 4.943-7.733c.072-.11.243-.099.297.023.824 1.85 1.539 4.153 1.204 5.586-.14.589-.532 1.387-.973 2.124a3.808 3.808 0 0 1-.186.316.168.168 0 0 1-.14.072h-5.081a.168.168 0 0 1-.144-.259Zm22.028 2.66a.172.172 0 0 1-.102.16c-.384.163-1.695.768-2.239 1.524-1.39 1.934-2.45 4.7-4.826 4.7h-9.902c-3.512 0-6.354-2.853-6.354-6.376v-.114a.17.17 0 0 1 .171-.167h5.518c.11 0 .19.099.182.209-.042.357.027.726.198 1.06a1.94 1.94 0 0 0 1.74 1.08h2.732V23.24H16.82a.175.175 0 0 1-.14-.273 20.887 20.887 0 0 0 1.083-1.714c.247-.433.486-.897.68-1.36.038-.084.068-.171.103-.255.053-.148.106-.289.144-.426.038-.117.072-.239.103-.353.09-.395.129-.813.129-1.246 0-.171-.008-.35-.023-.517a6.939 6.939 0 0 0-.053-.559c-.015-.163-.046-.327-.076-.494a10.282 10.282 0 0 0-.156-.74l-.023-.096c-.045-.17-.087-.33-.14-.501a18.721 18.721 0 0 0-.521-1.54 8.252 8.252 0 0 0-.224-.562c-.114-.281-.232-.536-.338-.775a5.642 5.642 0 0 1-.149-.312c-.053-.114-.106-.228-.163-.338-.038-.083-.084-.163-.114-.24l-.334-.615c-.046-.083.03-.186.121-.16l2.09.567h.015l.274.08.304.083.11.03V9.688c0-.6.479-1.087 1.076-1.087.296 0 .566.122.756.32.194.197.315.467.315.767v1.843l.224.06c.016.008.035.016.05.027.053.038.133.099.232.175.08.06.163.137.262.217.201.163.444.372.707.611.068.061.136.122.201.187.338.315.718.684 1.083 1.094.103.118.201.232.304.357.099.126.209.247.3.369.126.163.255.334.373.513.053.083.117.17.167.254.152.225.281.456.406.688.054.107.107.224.152.338.141.312.251.627.32.947.022.068.038.14.045.209v.015c.023.091.03.19.038.292.03.323.015.65-.053.977a4.37 4.37 0 0 1-.114.407c-.05.133-.095.27-.156.402-.118.27-.254.544-.418.795-.053.095-.118.193-.178.288-.069.1-.141.194-.202.285a6.16 6.16 0 0 1-.273.35c-.084.114-.168.228-.263.33-.129.156-.254.3-.387.441-.076.092-.16.187-.247.27-.084.095-.171.179-.247.255-.133.133-.24.232-.33.319l-.217.194a.16.16 0 0 1-.114.045h-1.665v2.132h2.094c.467 0 .912-.163 1.273-.471.122-.106.657-.57 1.292-1.27a.15.15 0 0 1 .08-.049l5.78-1.672a.17.17 0 0 1 .216.164v1.223Z"
                ></path></svg
            ></a>
          </li>
        </ul>
      </div>
      <nav class="lg:flex-1 flex flex-start">
        <ul class="lg:flex items-start items-center gap-1">
          <li>
            <a href="#zukiblowon-main"
              ><img
                src="../assets/img/logo.png"
                class="inline"
                style="width: 240px"
            /></a>
          </li>
          <li class="ml-2">
            <a href="#zukiblowon-sneak_peeks">Sneak Peeks</a>
          </li>
          <li><a href="#zukiblowon-faq">FAQ</a></li>
          <li><a href="#zukiblowon-roadmap">Roadmap</a></li>
          <li><a href="#zukiblowon-team">Team</a></li>
          <li class="icon-sm">
            <a
              href=""
              target="_blank"
              class="
                w-full
                items-center
                block
                relative
                flex
                text-black
                px-2
                py-1
                rounded-lg
              "
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="
                  ml-auto
                  fill-current
                  stroke-current
                  h-9
                  w-9
                  m-auto
                  text-slate-900
                "
                viewBox="0 0 40 40"
              >
                <path
                  d="M38.526 8.625a15.199 15.199 0 01-4.373 1.198 7.625 7.625 0 003.348-4.211 15.25 15.25 0 01-4.835 1.847 7.6 7.6 0 00-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 01-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 01-3.438.13 7.618 7.618 0 007.112 5.286A15.306 15.306 0 011.42 31.79a21.55 21.55 0 0011.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 15.499 0 003.799-3.941z"
                ></path></svg
            ></a>
          </li>
          <li class="icon-sm">
            <a
              href=""
              target="_blank"
              class="
                w-full
                items-center
                block
                relative
                flex
                text-black
                px-2
                py-1
                rounded-lg
              "
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="
                  ml-auto
                  fill-current
                  stroke-current
                  h-9
                  w-9
                  m-auto
                  text-slate-900
                "
                viewBox="0 0 40 40"
              >
                <path
                  d="M33.567 7.554a32.283 32.283 0 00-7.969-2.472.12.12 0 00-.128.06c-.344.613-.725 1.411-.992 2.039a29.804 29.804 0 00-8.95 0 20.625 20.625 0 00-1.008-2.038.126.126 0 00-.128-.06 32.194 32.194 0 00-7.968 2.47.114.114 0 00-.053.046C1.296 15.18-.095 22.577.588 29.88c.003.036.023.07.05.092 3.349 2.459 6.593 3.952 9.776 4.941a.127.127 0 00.137-.045 23.203 23.203 0 002-3.253.124.124 0 00-.068-.172A21.379 21.379 0 019.43 29.99a.126.126 0 01-.012-.209c.205-.153.41-.313.607-.475a.121.121 0 01.126-.017c6.407 2.925 13.343 2.925 19.675 0a.12.12 0 01.128.015c.196.162.4.324.608.477a.126.126 0 01-.011.209c-.975.57-1.99 1.051-3.055 1.454a.125.125 0 00-.067.173 26.052 26.052 0 001.998 3.252c.031.043.087.062.138.046 3.199-.99 6.442-2.482 9.79-4.941a.126.126 0 00.052-.09c.816-8.445-1.368-15.78-5.789-22.283a.1.1 0 00-.05-.046zm-20.06 17.88c-1.928 0-3.517-1.771-3.517-3.946 0-2.175 1.558-3.946 3.518-3.946 1.975 0 3.549 1.787 3.518 3.946 0 2.175-1.558 3.946-3.518 3.946zm13.01 0c-1.93 0-3.52-1.771-3.52-3.946 0-2.175 1.56-3.946 3.52-3.946 1.974 0 3.548 1.787 3.517 3.946 0 2.175-1.543 3.946-3.518 3.946z"
                ></path></svg
            ></a>
          </li>
          <li class="icon-sm">
            <a
              href=""
              target="_blank"
              class="
                flex
                w-full
                items-center
                justify-center
                text-center text-black
                px-2
                py-1
                rounded-lg
              "
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="
                  ml-auto
                  fill-current
                  stroke-current
                  h-9
                  w-9
                  m-auto
                  text-slate-900
                "
                viewBox="0 0 40 40"
              >
                <path
                  d="M20 1C9.508 1 1 9.508 1 20s8.508 19 19 19 19-8.508 19-19S30.496 1 20 1Zm-9.625 19.638.08-.129 4.943-7.733c.072-.11.243-.099.297.023.824 1.85 1.539 4.153 1.204 5.586-.14.589-.532 1.387-.973 2.124a3.808 3.808 0 0 1-.186.316.168.168 0 0 1-.14.072h-5.081a.168.168 0 0 1-.144-.259Zm22.028 2.66a.172.172 0 0 1-.102.16c-.384.163-1.695.768-2.239 1.524-1.39 1.934-2.45 4.7-4.826 4.7h-9.902c-3.512 0-6.354-2.853-6.354-6.376v-.114a.17.17 0 0 1 .171-.167h5.518c.11 0 .19.099.182.209-.042.357.027.726.198 1.06a1.94 1.94 0 0 0 1.74 1.08h2.732V23.24H16.82a.175.175 0 0 1-.14-.273 20.887 20.887 0 0 0 1.083-1.714c.247-.433.486-.897.68-1.36.038-.084.068-.171.103-.255.053-.148.106-.289.144-.426.038-.117.072-.239.103-.353.09-.395.129-.813.129-1.246 0-.171-.008-.35-.023-.517a6.939 6.939 0 0 0-.053-.559c-.015-.163-.046-.327-.076-.494a10.282 10.282 0 0 0-.156-.74l-.023-.096c-.045-.17-.087-.33-.14-.501a18.721 18.721 0 0 0-.521-1.54 8.252 8.252 0 0 0-.224-.562c-.114-.281-.232-.536-.338-.775a5.642 5.642 0 0 1-.149-.312c-.053-.114-.106-.228-.163-.338-.038-.083-.084-.163-.114-.24l-.334-.615c-.046-.083.03-.186.121-.16l2.09.567h.015l.274.08.304.083.11.03V9.688c0-.6.479-1.087 1.076-1.087.296 0 .566.122.756.32.194.197.315.467.315.767v1.843l.224.06c.016.008.035.016.05.027.053.038.133.099.232.175.08.06.163.137.262.217.201.163.444.372.707.611.068.061.136.122.201.187.338.315.718.684 1.083 1.094.103.118.201.232.304.357.099.126.209.247.3.369.126.163.255.334.373.513.053.083.117.17.167.254.152.225.281.456.406.688.054.107.107.224.152.338.141.312.251.627.32.947.022.068.038.14.045.209v.015c.023.091.03.19.038.292.03.323.015.65-.053.977a4.37 4.37 0 0 1-.114.407c-.05.133-.095.27-.156.402-.118.27-.254.544-.418.795-.053.095-.118.193-.178.288-.069.1-.141.194-.202.285a6.16 6.16 0 0 1-.273.35c-.084.114-.168.228-.263.33-.129.156-.254.3-.387.441-.076.092-.16.187-.247.27-.084.095-.171.179-.247.255-.133.133-.24.232-.33.319l-.217.194a.16.16 0 0 1-.114.045h-1.665v2.132h2.094c.467 0 .912-.163 1.273-.471.122-.106.657-.57 1.292-1.27a.15.15 0 0 1 .08-.049l5.78-1.672a.17.17 0 0 1 .216.164v1.223Z"
                ></path></svg
            ></a>
          </li>
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
            ><img src="../assets/img/1.png" class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img src="../assets/img/2.png" class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img src="../assets/img/3.png" class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img src="../assets/img/4.png" class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img src="../assets/img/5.png" class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img src="../assets/img/6.png" class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img src="../assets/img/7.png" class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img src="../assets/img/8.png" class="lg:w-full w-full rounded-lg"
          /></span>
        </div>

        <div
          class="absolute top-0 py-8 animate-marquee2 whitespace-nowrap flex"
        >
          <span class="mx-4 marquee-item"
            ><img src="../assets/img/1.png" class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img src="../assets/img/2.png" class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img src="../assets/img/3.png" class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img src="../assets/img/4.png" class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img src="../assets/img/5.png" class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img src="../assets/img/6.png" class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img src="../assets/img/7.png" class="lg:w-full w-full rounded-lg"
          /></span>
          <span class="mx-4 marquee-item"
            ><img src="../assets/img/8.png" class="lg:w-full w-full rounded-lg"
          /></span>
        </div>
      </div>

      <div class="relative flex overflow-x-hidden mt-7 marquee-container">
        <div class="py-8 animate-marquee3 whitespace-nowrap flex lg:h-auto">
          <span class="mx-4 marquee-item"
            ><img src="../assets/img/9.png" class="lg:w-full w-full rounded-lg"
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
            ><img src="../assets/img/9.png" class="lg:w-full w-full rounded-lg"
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
      <div
        class="mt-4"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-once="false"
      >
        <input id="faq-a" type="checkbox" />
        <label for="faq-a">
          <p class="faq-heading">How many Zukiblowon?</p>
          <p class="faq-text">
            There is 5,555 Zukiblowon that generated from 400 Hand drawn Traits!
          </p>
        </label>
      </div>
      <div
        class="mt-4"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-once="false"
      >
        <input id="faq-b" type="checkbox" />
        <label for="faq-b">
          <p class="faq-heading">What is the mint price?</p>
          <p class="faq-text">
            0.01 ETH. First 555 NFTs are Free to mint and the rest is 0.01 ETH
          </p>
        </label>
      </div>
      <div
        class="mt-4"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-once="false"
      >
        <input id="faq-c" type="checkbox" />
        <label for="faq-c">
          <p class="faq-heading">Smart Contract and Gas?</p>
          <p class="faq-text">ERC721A, under 25$ to mint 10 NFTs</p>
        </label>
      </div>
      <div
        class="mt-4"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-once="false"
      >
        <input id="settings" type="checkbox" />
        <input id="faq-d" type="checkbox" />
        <label for="faq-d">
          <p class="faq-heading">Are you affiliated with any projects?</p>
          <p class="faq-text">We are not affiliated with any projects.</p>
        </label>
      </div>
      <div
        class="mt-4"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-once="false"
      >
        <input id="settings" type="checkbox" />
        <input id="faq-e" type="checkbox" />
        <label for="faq-e">
          <p class="faq-heading">Wen reveal?</p>
          <p class="faq-text">Reveal in 24 Hours after Mint</p>
        </label>
      </div>
    </div>
    <div id="zukiblowon-roadmap">
      <div class="h1-title">Roadmap</div>
      <!-- <h3 class="text-center mt-24 text-4xl font-bold tracking-wider">
        Coming Soon
      </h3> -->
      <div class="flex gap-4 mt-16 roadmap-container">
        <div class="flex flex-1 flex-col gap-4">
          <div class="relative flex items-end flex-0 bg-roadmap w-sm px-8 py-8 no-1">
            <div>
              <p class="roadmap-number">01</p>
              <p class="roadmap-text">
                Discord Server Launch
              </p>
            </div>
            <img src="../assets/img/discord.png" class="w-80 absolute right-0 bottom-0 lg:-mr-5">
          </div>
          <div class="relative flex items-end lg:flex-1 md:flex-0 bg-roadmap w-sm px-8 py-8">
            <div>
              <p class="roadmap-number">02</p>
              <p class="roadmap-text">
                Listing on Raritysniffer
              </p>
            </div>
            <img src="../assets/img/Logo/2.png" class="w-80 absolute right-0 bottom-0 lg:-mr-5">
          </div>
        </div>
        <div class="flex flex-1 flex-col gap-4">
          <div class="relative flex items-end flex-0 bg-roadmap w-sm p-8 no-3">
            <div>
              <p class="roadmap-number">03</p>
              <p class="roadmap-text">
                Weekly Giveaway & Contest
              </p>
            </div>
            <img src="../assets/img/Logo/3.png" class="w-80 absolute right-0 bottom-0 lg:-mr-5">
          </div>
          <div class="relative flex items-end lg:flex-1 md:flex-0 bg-roadmap w-sm p-8">
            <div>
              <p class="roadmap-number">04</p>
              <p class="roadmap-text">
                Alpha Group
              </p>
            </div>
            <img src="../assets/img/Logo/4.png" class="w-80 absolute right-0 bottom-0 lg:-mr-5">
          </div>
        </div>
          <div class="flex flex-1 flex-col gap-4">
          <div class="relative flex items-end flex-0 bg-roadmap w-sm p-8 no-4">
            <div>
              <p class="roadmap-number">05</p>
              <p class="roadmap-text">
                Marketing Campaign
              </p>
            </div>
            <img src="../assets/img/Logo/5.png" class="w-80 absolute right-0 bottom-0 lg:-mr-5">
          </div>
          <div class="relative flex items-end lg:flex-1 md:flex-0 bg-roadmap w-sm p-8">
            <div>
              <p class="roadmap-number">06</p>
              <p class="roadmap-text">
                Collaboration
              </p>
            </div>
            <img src="../assets/img/Logo/6.png" class="w-80 absolute right-0 bottom-0 lg:-mr-5">
          </div>
        </div>
          <div class="flex flex-1 flex-col gap-4">
          <div class="relative flex items-end flex-0 bg-roadmap w-sm p-8 no-7">
            <div>
              <p class="roadmap-number">07</p>
              <p class="roadmap-text">
                Merchandise
              </p>
            </div>
            <img src="../assets/img/Logo/7.png" class="w-80 absolute right-0 bottom-0 lg:-mr-5">
          </div>
          <div class="relative flex items-end lg:flex-1 md:flex-0 bg-roadmap w-sm p-8">
            <div>
              <p class="roadmap-number">08</p>
              <p class="roadmap-text">
                Original Project
              </p>
            </div>
            <img src="../assets/img/Logo/8.png" class="w-80 absolute right-0 bottom-0 lg:-mr-5">
          </div>
        </div>
      </div>
    </div>
    <div id="zukiblowon-team">
      <div class="h1-title" style="margin-bottom: 50px">THE TEAM</div>
      <div class="grid lg:grid-cols-3 md:grid-cols-1 gap-20 px-7">
        <div class="bio">
          <a
            ><img class="avatar rounded-lg w-full" src="../assets/img/1.png"
          /></a>
          <div class="team-user">Mike</div>
          <div class="team-title">Founder</div>
        </div>
        <div class="bio">
          <a
            ><img class="avatar rounded-lg w-full" src="../assets/img/2.png"
          /></a>
          <div class="team-user">Adr</div>
          <div class="team-title">Co Founder</div>
        </div>
        <div class="bio">
          <a
            ><img class="avatar rounded-lg w-full" src="../assets/img/4.png"
          /></a>
          <div class="team-user">Keju</div>
          <div class="team-title">Artist</div>
        </div>
        <div class="bio">
          <a
            ><img class="avatar rounded-lg w-full" src="../assets/img/7.png"
          /></a>
          <div class="team-user">Mr Ko</div>
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
        <span style="font-weight: bold; color: #ffffff; font-size: 17px; letter-spacing: 1px"
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