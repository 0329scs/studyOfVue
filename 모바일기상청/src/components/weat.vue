<template><!-- 안부분(header,main,footer...) 컴포넌트 -->
<div id = "weat">
<dl v-for = "item in items" v-bind:class = 'item.class' :key="item.id">
<dt>{{item.place}}</dt>
<dd>
<a href="#" v-if="item.type === '맑음'"><img src = "../assets/images/NB01.png" alt = "맑음"/></a>
<a href="#" v-if="item.type === '구름낌'"><img src = "../assets/images/NB02.png" alt = "구름낌"/></a>
<a href="#" v-if="item.type === '흐림'"><img src = "../assets/images/NB04.png" alt = "흐림"/></a>
</dd>
</dl>
</div>
</template>

<script>
export default {
name: "weat",
data() {
  return {
  items: [
    {
    class: "po_101",
    place : "백령도",
    type: "흐림"
    },
    {
    class: "po_102",
    place : "인천",
    type: "구름낌"
    },
    {
    class: "po_103",
    place : "서울",
    type: "맑음"
    },
    {
    class: "po_104",
    place : "춘천",
    type: "맑음"
    },
    {
    class: "po_106 dokdo",
    place : "울릉도독도",
    type: "구름낌"
    },
    {
    class: "po_201",
    place : "수원",
    type: "맑음"
    },
    {
    class: "po_301",
    place : "홍성",
    type: "맑음"
    },
    {
    class: "po_302",
    place : "청주",
    type: "맑음"
    },
    {
    class: "po_303",
    place : "안동",
    type: "맑음"
    },
    {
    class: "po_401",
    place : "대전",
    type: "맑음"
    },
    {
    class: "po_501",
    place : "전주",
    type: "맑음"
    },
    {
    class: "po_502",
    place : "대구",
    type: "맑음"
    },
    {
    class: "po_503",
    place : "포항",
    type: "맑음"
    },
    {
    class: "po_601",
    place : "흑산도",
    type: "맑음"
    },
    {
    class: "po_602",
    place : "광주",
    type: "맑음"
    },
    {
    class: "po_603",
    place : "목포",
    type: "맑음"
    },
    {
    class: "po_604",
    place : "여수",
    type: "맑음"
    },
    {
    class: "po_701",
    place : "울산",
    type: "맑음"
    },
    {
    class: "po_702",
    place : "부산",
    type: "맑음"
    },
    {
    class: "po_703",
    place : "창원",
    type: "맑음"
    },
    {
    class: "po_801 jeju",
    place : "제주",
    type: "맑음"
    }
    ]
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
dl {
line-height: 1em;
text-align: center;
width: 33px;
height: 42px;
border: 1px solid #cdcdcd;
border-radius: 5px;
background: #fff;
padding: 0 1px;
position: absolute;
}
dl dt {font-size: 11.4px; color: #111; height: 15px; position: absolute; left: 0; top: 0; width: 100%;}
dl dd {position: absolute; top: 12px;}
dl dd img {vertical-align: top;}
.dokdo dd {top: 26px;}
.po_101 {left: 9px; top: 25px;}
.po_102 {left: 50px; top: 60px;}
.po_103 {left: 97px; top: 61px;}
.po_104 {left: 145px; top: 53px;}
/*.po_105 {left: 205px; top: 53px;}*/
.po_106.dokdo {left: 254px; top: 49px; height: 55px;}
.po_201 {left: 95px; top: 105px;}
.po_301 {left: 45px; top: 125px;}
.po_302 {left: 137px; top: 130px;}
.po_303 {left: 197px; top: 130px;}
.po_401 {left: 90px; top: 160px;}
.po_501 {left: 90px; top: 205px;}
.po_502 {right: 90px; top: 200px;}
.po_503 {left: 245px; top: 184px;}
.po_601 {left: 9px; top: 255px;}
.po_602 {left: 70px; top: 258px;}
.po_603 {left: 30px; top: 305px;}
.po_604 {left: 90px; top: 302px;}
.po_701 {left: 235px; top: 229px;}
.po_702 {left: 225px; top: 274px;}
.po_703 {left: 160px; top: 267px;}
.po_801.jeju {left: 40px; bottom: 7px;}
</style>