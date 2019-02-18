<template><!-- 안부분(header,main,footer...) 컴포넌트 -->
<div id = "weat">
<p class = "unit">(단위: ℃)</p>
<dl v-for = "item in items" v-bind:class = 'item.class' :key="item.id">
<dt>{{item.place}}</dt>
<dd><span>{{item.temp}}</span></dd>
</dl>
</div>
</template>

<script>
export default {
name: 'temp',
data() {
  return {
  items: [
    {
    class: "po_101",
    place: "백령도",
    temp: "29.8"
    },
    {
    class: "po_102",
    place : "인천",
    temp: "33.5"
    },
    {
    class: "po_103",
    place : "서울",
    temp: "36.1"
    },
    {
    class: "po_104",
    place : "춘천",
    temp: "34.0"
    },
    {
    class: "po_106 dokdo",
    place : "울릉도독도",
    temp: "29.8"
    },
    {
    class: "po_201",
    place : "수원",
    temp: "35.2"
    },
    {
    class: "po_301",
    place : "홍성",
    temp: "33.9"
    },
    {
    class: "po_302",
    place : "청주",
    temp: "33.1"
    },
    {
    class: "po_303",
    place : "안동",
    temp: "35.1"
    },
    {
    class: "po_401",
    place : "대전",
    temp: "35.7"
    },
    {
    class: "po_501",
    place : "전주",
    temp: "34.1"
    },
    {
    class: "po_502",
    place : "대구",
    temp: "33.0"
    },
    {
    class: "po_503",
    place : "포항",
    temp: "29.4"
    },
    {
    class: "po_601",
    place : "흑산도",
    temp: "32.0"
    },
    {
    class: "po_602",
    place : "광주",
    temp: "35.1"
    },
    {
    class: "po_603",
    place : "목포",
    temp: "34.1"
    },
    {
    class: "po_604",
    place : "여수",
    temp: "32.2"
    },
    {
    class: "po_701",
    place : "울산",
    temp: "30.4"
    },
    {
    class: "po_702",
    place : "부산",
    temp: "33.0"
    },
    {
    class: "po_703",
    place : "창원",
    temp: "32.9"
    },
    {
    class: "po_801 jeju",
    place : "제주",
    temp: "30.6" 
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
height: 35px;
border: 1px solid #cdcdcd;
border-radius: 5px;
background: #fff;
padding: 0 1px;
position: absolute;
}
dl dt {font-size: 11.4px; color: #111; height: 15px; position: absolute; left: 0; top: 2px; width: 100%;}
dl dd {position: absolute; top: 18px; left: -6px; width: 50px; height: 17px;}
dl dd img {vertical-align: top;}
dl dd span {width: 40px; letter-spacing: 1px; text-align: center; color: rgb(204, 0, 0); font-weight: bold; font-size: 11px;}
.dokdo dd {top: 28px;}
.po_101 {left: 9px; top: 25px;}
.po_102 {left: 50px; top: 60px;}
.po_103 {left: 97px; top: 61px;}
.po_104 {left: 145px; top: 53px;}
.po_105 {left: 205px; top: 53px;}
.po_106.dokdo {left: 254px; top: 49px; height: 47px;}
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