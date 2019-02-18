<template><!-- 안부분(header,main,footer...) 컴포넌트 -->
<div id = "weat">
<p class = "unit">(단위: m/s)</p>
<dl v-for = "item in items" v-bind:class = 'item.class' :key="item.id">
<dt>{{item.place}}</dt>
<dd>
<div v-if="item.type === 'NW'"><img src = "../assets/images/NW.gif" alt = "NW"/></div>
<div v-if="item.type === 'S'"><img src = "../assets/images/S.gif" alt = "S"/></div>
<div v-if="item.type === 'SSW'"><img src = "../assets/images/SSW.gif" alt = "SSW"/></div>
<div v-if="item.type === 'WNW'"><img src = "../assets/images/WNW.gif" alt = "WNW"/></div>
<span>{{item.speed}}</span>
</dd>
</dl>
</div>
</template>

<script>
export default {
name: "wind",
data() {
  return {
  items: [
    {
    class: "po_101",
    place : "백령도",
    type: "NW",
    speed: "2.7"
    },
    {
    class: "po_102",
    place : "인천",
    type: "NW",
    speed: "2.7"
    },
    {
    class: "po_103",
    place : "서울",
    type: "SSW",
    speed: "2.7"
    },
    {
    class: "po_104",
    place : "춘천",
    type: "SSW",
    speed: "2.7"
    },
    {
    class: "po_106 dokdo",
    place : "울릉도독도",
    type: "SSW",
    speed: "2.7"
    },
    {
    class: "po_201",
    place : "수원",
    type: "SSW",
    speed: "2.7"
    },
    {
    class: "po_301",
    place : "홍성",
    type: "SSW",
    speed: "2.7"
    },
    {
    class: "po_302",
    place : "청주",
    type: "SSW",
    speed: "2.7"
    },
    {
    class: "po_303",
    place : "안동",
    type: "SSW",
    speed: "2.7"
    },
    {
    class: "po_401",
    place : "대전",
    type: "SSW",
    speed: "2.7"
    },
    {
    class: "po_501",
    place : "전주",
    type: "S",
    speed: "2.7"
    },
    {
    class: "po_502",
    place : "대구",
    type: "SSW",
    speed: "2.7"
    },
    {
    class: "po_503",
    place : "포항",
    type: "WNW",
    speed: "2.7"
    },
    {
    class: "po_601",
    place : "흑산도",
    type: "WNW",
    speed: "2.7"
    },
    {
    class: "po_602",
    place : "광주",
    type: "WNW",
    speed: "2.7"
    },
    {
    class: "po_603",
    place : "목포",
    type: "WNW",
    speed: "2.7"
    },
    {
    class: "po_604",
    place : "여수",
    type: "WNW",
    speed: "2.7"
    },
    {
    class: "po_701",
    place : "울산",
    type: "WNW",
    speed: "2.7"
    },
    {
    class: "po_702",
    place : "부산",
    type: "WNW",
    speed: "2.7"
    },
    {
    class: "po_703",
    place : "창원",
    type: "WNW",
    speed: "2.7"
    },
    {
    class: "po_801 jeju",
    place : "제주",
    type: "S",
    speed: "2.7"
    }
    ]
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.unit {
    position: absolute;
    right: 10px;
    bottom: 30px;
    font-size: 11px;
    font-weight: bold;
    color: rgb(44, 44, 44);
}
dl {
line-height: 1em;
text-align: center;
width: 36px;
height: 58px;
border: 1px solid #cdcdcd;
border-radius: 5px;
background: #fff;
padding: 0 1px;
position: absolute;
}
dl dt {font-size: 11.4px; color: #111; height: 15px; position: absolute; left: 0; top: 0; width: 100%;}
dl dd {position: absolute; top: 12px; left: 0; right: 0;}
dl dd img {vertical-align: top;}
dl dd div {margin: 8px 0 5px;}
dl dd span {width: 40px; letter-spacing: 1px; text-align: center; color: rgb(204, 0, 0); font-weight: bold; font-size: 11px;}
.dokdo dd {top: 26px;}
.po_101 {left: 9px; top: 25px;}
.po_102 {left: 50px; top: 60px;}
.po_103 {left: 97px; top: 41px;}
.po_104 {left: 145px; top: 53px;}
.po_105 {left: 205px; top: 53px;}
.po_106.dokdo {left: 254px; top: 39px; height: 72px;}
.po_201 {left: 95px; top: 103px;}
.po_301 {left: 45px; top: 125px;}
.po_302 {left: 152px; top: 128px;}
.po_303 {left: 200px; top: 130px;}
.po_401 {left: 110px; top: 164px;}
.po_501 {left: 66px; top: 197px;}
.po_502 {right: 90px; top: 200px;}
.po_503 {left: 263px; top: 180px;}
.po_601 {left: 9px; top: 235px;}
.po_602 {left: 90px; top: 258px;}
.po_603 {left: 48px; top: 300px;}
.po_604 {left: 93px; top: 320px;}
.po_701 {left: 220px; top: 207px;}
.po_702 {left: 215px; top: 280px;}
.po_703 {left: 160px; top: 267px;}
.po_801.jeju {left: 4px; bottom: 7px;}
</style>