<template>
  <p class='search_full_screen'>Форма поиска</p>
  <input type="search" placeholder="Поиск" v-model="state.message" class="search_full_screen">
  <button class='search_full_screen btn' v-on:click="close_full_screen">Закрыть</button>
  <header class="container-lg header">
    <div class="row justify-content-between">
      <div class="col-md-2 col-lg-4 col-12" id="logo">
        <div><object type="image/svg+xml" data="img\newspaper-regular.svg" id="newspaper" @mouseleave="mouse_leave">Your browser does not support SVGs</object></div>
        <div>
          <span>itProger</span>
          <span>Blog</span>
        </div>
      </div>
      <div class="col-md-5 col-lg-4 col-12" id="header_search"><input type="search" placeholder="Поиск" v-on:click="full_screen" id="search" v-bind:value="state.message"></div>
      <div class="col-md-5 col-lg-4 col-12" id="headerLinks">
        <ul>
          <li><a href="/" class="btn">Главная</a></li>
          <li><a href="#" class="btn">Войти</a></li>
          <li><a href="#" class="btn">Регистрация</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>

import { reactive } from 'vue';

export default {
  name: 'topHead',
  setup() {
    const state = reactive({
      message: ''
    });

    function mouse_leave() {
      let logo = document.getElementById('newspaper');
      logo.classList.add('roteteBack');
      setTimeout("logo.classList.remove('roteteBack')", 1000);
    }

    function full_screen() {
      let body = document.querySelectorAll('.container-lg');
      console.log(body);
      body.forEach((el) => {
        el.style.opacity = '0.4';
      });
      let form = document.getElementsByClassName('search_full_screen');
      form.forEach((element) => {
        element.style.display = 'inline';
      });
    }

    function close_full_screen () {
      let body = document.querySelectorAll('.container-lg');
      body.forEach((el) => {
        el.style.opacity = '1';
      });
      let form = document.getElementsByClassName('search_full_screen');
      form.forEach(element => element.style.display = 'none');
    }

    return {
      state,
      mouse_leave,
      full_screen,
      close_full_screen
    }
  }
}
</script>