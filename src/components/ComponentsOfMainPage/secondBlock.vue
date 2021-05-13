<template>
  <div class="row" id ='secondBlock'>
    <div class="col-lg-4 col-md-6 col-12" id="firstLine">
      <h2>Новости</h2>
      <div class="secondBlock_blocks">
        <img src="https://itproger.com/img/news/1534765244.jpg">
        <h5>Сравнение движков: Unreal Engine 4 против Unity 5</h5>
        <p>Выбрать движок дело не простое, а особенно когда оба очень хороши.
          В статье мы проведем сравнение двух программ и выясним какой движок
          использовать именно Вам!</p>
        <a href="https://itproger.com/news/sravnenie-dvizhkov-unreal-engine-4-protiv-unity-5" class="btn btn-warning" target="_blank">Читать дальше</a>
      </div>
      <div class="secondBlock_blocks">
        <img src="https://itproger.com/img/news/1532948245.jpg">
        <h5>11 полезных инструментов для веб-разработчика</h5>
        <p>Разработчики постоянно пытаются сделать свою жизнь проще или расширить
          собственные возможности. Мы подготовили 11 инструментов, которые это обеспечат.</p>
        <a href="https://itproger.com/news/11-poleznih-instrumentov-dlya-veb-razrabotchika" class="btn btn-warning" target="_blank">Читать дальше</a>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-12" id="secondLine">
      <h2 id="invisible">Новости</h2>
      <div class="secondBlock_blocks">
        <img src="https://itproger.com/img/news/1534137690.jpg">
        <h5>7 девушек айтишниц из фильмов и сериалов</h5>
        <p>Много ли вы знаете фильмов и сериалов, где главные персонажы это
          девушки программисты? Мы подобрали 7 фильмов с такой концепцией.</p>
        <a href="https://itproger.com/news/7-devushek-aytishnits-iz-filmov-i-serialov" class="btn btn-warning" target="_blank">Читать дальше</a>
      </div>
      <div class="secondBlock_blocks">
        <img src="https://itproger.com/img/news/1534139040.jpg">
        <h5>Что такое Deep Learning? Как работает глубокое обучение?</h5>
        <p>Как работает глубокое обучение и что оно из себя представляет?
          В ходе статьи мы расскажем про Deep Learning и разберемся с его
          ключевыми понятиями.</p>
        <a href="https://itproger.com/news/chto-takoe-deep-learning-kak-rabotaet-glubokoe-obuchenie" class="btn btn-warning" target="_blank">Читать дальше</a>
      </div>
    </div>
    <div class="col-lg-4 col-12" id="sideBlock">
      <h2>Анонсы</h2>
      <div id="sideBlock1">
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqu</span>
      </div>
      <div id="sideBlock2">
        <img src="https://androidlime.ru/wp-content/uploads/2018/04/android-processor.jpg">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
        <a href="#" class="btn">Читать дальше</a>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xl-3 col-3"></div>
    <div class="col-xl-3 col-4" id="button_place"><button class="btn btn-danger" v-on:click="add_articles" id="load_articles">Подгрузть больше</button></div>
  </div>
</template>

<script>

//Здесь решил сделать блоки со статьями на одном уровне, не меняя HTML и CSS. довавляя marginBottom 20px +
// разница в высоте меньшему элементу
function add_margin(){
  let first_blocks = document.querySelectorAll('#firstLine .secondBlock_blocks');
  let second_blocks = document.querySelectorAll('#secondLine .secondBlock_blocks');
  let len;

  if (first_blocks.length == second_blocks.length) {
    len = first_blocks.length;
  } else {
    len = second_blocks.length;
  }

  for (let j = 0; j < len; j++) {
    let difference = Math.abs(first_blocks[j].clientHeight - second_blocks[j].clientHeight);
    if (first_blocks[j].clientHeight > second_blocks[j].clientHeight) {
      first_blocks[j].style.marginBottom = '30px';
      second_blocks[j].style.marginBottom = (30 + difference) + "px";
    } else if (first_blocks[j].clientHeight < second_blocks[j].clientHeight) {
      first_blocks[j].style.marginBottom = (30 + difference) + "px";
      second_blocks[j].style.marginBottom = '30px';
    } else {
      first_blocks[j].style.marginBottom = "30px";
      second_blocks[j].style.marginBottom = '30px';
    }
  }
}

//Встраиваю кнопку в другое место. чтоб была после новостей, перед анонсами
function replace_button (a) {
  let btn = document.getElementById('load_articles');

  if (a < 992) {
    let div = document.createElement('div');
    div.setAttribute('id', 'btn_holder');
    btn.style.marginBottom = '20px';
    btn.style.marginLeft = '30%';
    let side_block = document.getElementById('sideBlock');
    div.append(btn);
    document.getElementById('secondBlock').insertBefore(div, side_block);
  } else if (document.getElementById('btn_holder')) {
    let elem = document.getElementById('button_place');
    elem.append(btn);
    let btn_holder = document.getElementById('btn_holder');
    btn_holder.parentNode.removeChild(btn_holder);
  }
}
//
window.addEventListener("load", function() {
  add_margin();
  let size = document.body.clientWidth;
  replace_button(size);
});

window.addEventListener("resize", function() {
  let size = document.body.clientWidth;
  replace_button(size);
});

  export default {
    name: 'secondBlock',
    data: function() {
      return {
        count : 0,
        articles : [
          {
            foto : "https://itproger.com/img/news/1517501131.jpg",
            title : 'Устаревшие языки, которые уже не стоит изучать',
            intro : 'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. ' +
                'В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, ' +
                'хотя многие до сих пор делают это.',
            link : 'https://itproger.com/news/ustarevshie-yaziki-kotorie-uzhe-ne-stoit-izuchat'
          },
          {
            foto : "https://itproger.com/img/news/1520152698.jpg",
            title : 'Зачем нужен язык программирования Rust?',
            intro : 'Rust набирает популярность, но при этом многие до сих пор не понимают его ценности и функций.' +
                ' Мы расскажем про основные преимущества языка программирования Rust.',
            link : "https://itproger.com/news/zachem-nuzhen-yazik-programmirovaniya-rust"
          },
          {
            foto : "https://itproger.com/img/news/1518258565.jpg",
            title : 'Что выбрать C++ или C#? С чего лучше начать?',
            intro : 'Между собой оба языка очень похожи, при отсутствии опыта разобраться в различиях очень сложно. ' +
                'Статья поможет расставить всё по своим местам и укажет верный язык на основании поставленных задач.',
            link : "https://itproger.com/news/chto-vibrat-c-ili-c-s-chego-luchshe-nachat"
          },
          {
            foto : "https://itproger.com/img/tasks/1516438067.jpg",
            title : '3 логические задачи для настоящего программиста',
            intro : 'Компании любят проверять молодых специалистов на различные логические задачи. ' +
                'Мы подобрали три интересных задачи, которые заставят вас задуматься.',
            link : "https://itproger.com/tasks/3-logicheskie-zadachi-dlya-nastoyashtego-programmista"
          },
          {
            foto : "https://itproger.com/img/news/1517495970.jpg",
            title : 'Как создать свою криптовалюту?',
            intro : 'Создание собственной криптовалюты это сложная задача, на которую уйдет не мало сил и времени. ' +
                'Мы расскажем вам общий алгоритм создания своей собственной криптовалюты!',
            link : 'https://itproger.com/news/kak-sozdat-svoyu-kriptovalyutu'
          },
          {
            foto : "https://itproger.com/img/news/1516439711.jpg",
            title : 'ТОП 10: Подборка хобби для программиста',
            intro : 'Мы подобрали 10 хороших хобби, чтобы можно было с удовольствием провести время вне работы, ' +
                'а также улучшить логические и креативные способности мозга.',
            link : "https://itproger.com/news/top-10-podborka-hobbi-dlya-programmista"
          },
          {
            foto : "https://itproger.com/img/news/1516890380.jpg",
            title : 'СЕО-продвижение – верный способ улучшить свой бизнес',
            intro : 'Продвижение сайта это сложная работа, требующая вложений как денег, так и времени. ' +
                'Мы расскажем про верные способы СЕО-продвижения, позволяющие раскрутить сайт!',
            link : "https://itproger.com/news/seo-prodvizhenie-verniy-sposob-uluchshit-svoy-biznes"
          },
          {
            foto : "https://itproger.com/img/news/1516366532.jpg",
            title : '10 самых популярных сайтов написанных на Django',
            intro : 'Django набирает популярность и многие крупные компании используют его для создания веб проектов. ' +
                'Мы подобрали 10 популярных сайтов, написанных на Django.',
            link : "https://itproger.com/news/10-samih-populyarnih-saytov-napisannih-na-django"
          }
        ]
      }
    },
    methods : {

      //Создаю элементы с нужными классами для стилей и встраиваю по очереди в первую и вторую колонку, по 4 за клик
      //массив статей может быть любой длинны. Можно просто добавлять или удалять статьи и всё, код трогать не надо
      add_articles: function () {
        let len = this.articles.length
        let i = 0;
        for (this.count; this.count<len; ) {//если статья 1 или 7, то подгрузится 1, или 4 + ещё 3 2й раз
          if (i>3) break//по 4 за раз
          i++
          let new_article = document.createElement(`div`);
          let img = document.createElement(`img`);
          let a = document.createElement(`a`);
          let h5 = document.createElement(`h5`);
          let p = document.createElement(`p`);
          h5.innerHTML = `${this.articles[this.count]['title']}`;
          p.innerHTML = `${this.articles[this.count]['intro']}`;
          img.setAttribute('src', `${this.articles[this.count]['foto']}`);
          a.setAttribute('href', `${this.articles[this.count]['link']}`);
          a.setAttribute('class', `btn btn-warning`);
          a.setAttribute('target', `_blank`);
          a.innerHTML = 'Читать дальше';
          new_article.setAttribute('class', 'secondBlock_blocks');
          new_article.append(img);
          new_article.append(h5);
          new_article.append(p);
          new_article.append(a);
          if (this.count%2==0) {
            document.getElementById('firstLine').append(new_article);
          } else {
            document.getElementById('secondLine').append(new_article);
          }
          this.count++
          if (this.count == len) {
            document.getElementById("load_articles").style.display = 'none';
          }
        }
        add_margin();
      }
    }
  }
</script>
