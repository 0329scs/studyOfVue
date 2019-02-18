<template><!-- /index.html 을 보여주는 컴포넌트 (큰 컴포넌트)-->
  <div id="app">
    <div class = "wrap">
      <header>
          <h1>전국날씨</h1>
          <p>
            <a href="#"><img src="./assets/images/h1_logo_new_2.gif" alt="기상청로고" /></a>
          </p>
            <div class="side_toggle">
              <a href="#" class="side_btn open" v-on:click = "openWork">
                <span class="btn_line">
						      <span>메뉴</span>
                </span>
              </a>
                <div class="slide_menu">
                    <div class="menu_top">
                        <a href="#" class="side_btn exit" v-on:click = "exitWork">
                            <span class="btn_line"></span>
                        </a>
                    </div>
                    <div class="menu_mid">
                        <div class="setting clearfix">
                            <div><a href="#">첫 화면 설정</a></div>
                            <div><a href="#">관심지역 설정</a></div>
                        </div>
                        <div class="mid_list clearfix">
                            <div class="list_btn"><a href="#"><span class="bg_i icon01"></span>기상특보</a></div>
                            <div class="list_btn"><a href="#"><span class="bg_i icon02"></span>현재날씨</a></div>
                            <div class="list_btn"><a href="#"><span class="bg_i icon03"></span>동네예보</a></div>
                            <div class="list_btn"><a href="#"><span class="bg_i icon04"></span>중기예보</a></div>
                            <div class="list_btn"><a href="#"><span class="bg_i icon05"></span>생활기상</a></div>
                            <div class="list_btn"><a href="#"><span class="bg_i icon06"></span>날씨영상</a></div>
                            <div class="list_btn"><a href="#"><span class="bg_i icon07"></span>바다날씨</a></div>
                            <div class="list_btn"><a href="#"><span class="bg_i icon08"></span>산악날씨</a></div>
                            <div class="list_btn"><a href="#"><span class="bg_i icon09"></span>태풍정보</a></div>
                            <div class="list_btn"><a href="#"><span class="bg_i icon10"></span>황사정보</a></div>
                            <div class="list_btn"><a href="#"><span class="bg_i icon11"></span>지진정보</a></div>
                            <div class="list_btn"><a href="#"><span class="bg_i icon12"></span>전국날씨</a></div>
                            <div class="list_btn"><a href="#"><span class="bg_i icon13"></span>세계날씨</a></div>
                        </div>
                    </div>
                    <div class="menu_sns">
                        <div class="sns_list">
                            <a href="#"><img src="./assets/images/2017_img_blog.png" alt="기상청 블로그" /></a>
                            <a href="#"><img src="./assets/images/2017_img_fb.png" alt="기상청 페이스북" /></a>
                            <a href="#"><img src="./assets/images/2017_img_twitter.png" alt="기상청 트위터" /></a>
                        </div>
                    </div>
                    <div class="menu_btm">
                        <div class="btm_list">
                            <a href="#">기상콜센터<strong>131</strong></a>
                            <a href="#">PC버젼</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main>
          <div class="hov_top" v-on:click = "hovTop">
              <ul class="clearfix">
                  <li><a href="#">어제</a></li>
                  <li><a href="#" class="">현재</a></li>
                  <li><a href="#">예보</a></li>
              </ul>
          </div>
          <div class="visual">
              <div class="hov_btm" v-on:click = "hovBtm">
                  <ul class="clearfix">
                      <li><a href="http://localhost:8080/#/weat" class="">날씨</a></li>
                      <li><a href="http://localhost:8080/#/temp">기온</a></li>
                      <li><a href="http://localhost:8080/#/rain">강수</a></li>
                      <li><a href="http://localhost:8080/#/wind">바람</a></li>
                  </ul>
              </div>
              <div class="weather">
                  <div class="korea_map">
                      <p class="date">2018.07.15 15:00 현재</p>
                        <router-view/>
                  </div>
              </div>
          </div>
        </main>
        <footer>
            <div class="footer_list">
                <ul class="clearfix">
                    <li class="list_btn"><a href="#"><span class="bg_i icon01"></span>기상특보</a></li>
                    <li class="list_btn"><a href="#"><span class="bg_i icon02"></span>현재날씨</a></li>
                    <li class="list_btn"><a href="#"><span class="bg_i icon03"></span>동네예보</a></li>
                    <li class="list_btn"><a href="#"><span class="bg_i icon04"></span>중기예보</a></li>
                    <li class="list_btn"><a href="#"><span class="bg_i icon06"></span>날씨영상</a></li>
                    <li class="list_btn"><a href="#"><span class="bg_i icon05"></span>생활기상</a></li>
                    <li class="list_btn"><a href="#"><span class="bg_i icon07"></span>바다날씨</a></li>
                    <li class="list_btn"><a href="#"><span class="bg_i icon08"></span>산악날씨</a></li>
                    <li class="list_btn"><a href="#"><span class="bg_i icon09"></span>태풍정보</a></li>
                    <li class="list_btn"><a href="#"><span class="bg_i icon10"></span>황사정보</a></li>
                    <li class="list_btn"><a href="#"><span class="bg_i icon11"></span>지진정보</a></li>
                    <li class="list_btn"><a href="#"><span class="bg_i icon12"></span>전국날씨</a></li>
                    <li class="list_btn"><a href="#"><span class="bg_i icon13"></span>세계날씨</a></li>
                </ul>
            </div>
            <div class="footer_etc">
                <a href="#" class="set"><img src="./assets/images/bt_prsite.gif" alt="설정"></a>
                <p>&#169; 기상청</p>
                <a href="#" class="pc_mode"><img src="./assets/images/b_lk04.gif" alt="PC버젼"></a>
            </div>
        </footer>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
      openWork: function(e) {
          var slideMenu = document.querySelector(".slide_menu");
          if(slideMenu.classList.contains("sliding")) {
              return;
          } else {
              slideMenu.classList.add("sliding");
          }
          e.preventDefault();
      },
      exitWork: function(e) {
          var slideMenu = document.querySelector(".slide_menu");
          if(slideMenu.classList.contains("sliding")) {
              slideMenu.classList.remove("sliding");
          } else {
              return;
          }
          e.preventDefault();
      },
      hovTop: function(e) {
          var topList = document.querySelector(".hov_top")
          var topHov = topList.querySelectorAll("a");

          if(e.target.nodeName != "A") {
              return;
          } else {
              for(var i = 0; i < topHov.length; i++) {
                  topHov[i].classList.remove("on");
              }
              e.target.classList.add("on");
          }
      },
      hovBtm: function(e) {
          var btmList = document.querySelector(".hov_btm")
          var btmHov = btmList.querySelectorAll("a");

          if(e.target.nodeName != "A") {
              return;
          } else {
              for(var i = 0; i < btmHov.length; i++) {
                  btmHov[i].classList.remove("on");
              }
              e.target.classList.add("on");
          }
      }
  }
}
</script>
