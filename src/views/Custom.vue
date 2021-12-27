<template>
  <main>
    <div class="custom">
      <img class="track2" src="@/assets/img/logo.svg">
      <img class="track1" src="@/assets/img/logo.svg">
      <img class="track3" src="@/assets/img/logo.svg">
      <h2>
        領養前的那些事
        <!-- <img class="track1" src="@/assets/img/logo.svg"> -->
        </h2>
      <div class="FAQ_group1">
        <div class="question wrap_why">
          <div class="trigger">
            <span>Why</span>
            <i class="fas fa-question-circle"></i>
          </div>
          <div class="toggler">
            對生活的期待是什麼？<br/>
            為什麼想要毛孩加入原本的生活？
          </div>
        </div>
        <div class="question wrap_who">
          <div class="trigger">
            <span>Who</span>
            <i class="fas fa-question-circle"></i>
          </div>
          <div class="toggler">
            主要照護者是誰？<br/>
            未來家庭組成改變怎麼辦？
          </div>
        </div>
      
        <div class="question wrap_when">
          <div class="trigger">
            <span>When</span>
            <i class="fas fa-question-circle"></i>
          </div>
          <div class="toggler">
            目前的時間真的足夠能照顧好牠嗎？
          </div>
        </div>
        <div class="question wrap_much">
          <div class="trigger">
            <span>How much</span>
            <i class="fas fa-question-circle"></i>
          </div>
          <div class="toggler">
            能付出的金錢、時間、耐心有多少？
          </div>
        </div>
      </div>
      <div class="FAQ_group2">
        <div class="question wrap_how">
          <div class="trigger">
            <span>How</span>
            <i class="fas fa-question-circle"></i>
          </div>
          <div class="toggler">
            毛孩的食、衣、住、行、育、樂該如何規劃？
          </div>
        </div>
        <div class="question wrap_where">
          <div class="trigger">
            <span>Where</span>
            <i class="fas fa-question-circle"></i>
          </div>
          <div class="toggler">
            我住在套房、公寓、大樓？<br/>
            空間足夠嗎？
          </div>
        </div>
        <div class="question wrap_what">
          <div class="trigger">
            <span>What</span>
            <i class="fas fa-question-circle"></i>
          </div>
          <div class="toggler">
            我自己的個性比較適合哪種毛孩？
          </div>
        </div>
      </div>
      <!-- <img class="track2" src="@/assets/img/logo.svg"> -->
    </div>
  </main>
</template>

<style lang="scss" scoped>

%title_h2 {
  font-size: 24px;
  color: color.$brown_500;

  @include breakpoint.tablet {
    font-size: 36px;
  }
  @include breakpoint.desktop {
    font-size: 50px;
  }
}

.custom{
  position: relative;
  // margin-top: 60px;
  padding: 10px 20px;
  background: color.$brown_100;
  // height: calc(100vh - 120px);
  min-height: 100vh;

  @include breakpoint.tablet{
    // height: calc(100vh - 163px);
    // margin-top: 103px;
  }

  h2{
    @extend %title_h2;
    color: color.$gray_700;
    position: relative;
  }
}

.container{
  display: flex;
  width: 100%;
}

.FAQ_group1 {
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  margin-top: 20px;
  height: 45%;
}

.FAQ_group2 {
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  margin-top: 20px;
  height: 45%;
}

.question{

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 50%;
  padding: 5px;

  &:nth-child(4n + 1){
    align-self: center;
    justify-content: flex-end;
  }

  &:nth-child(4n + 2){
    align-self: flex-end;
    justify-content: flex-end;

    @include breakpoint.tablet{
      justify-content: center;
    }
  }

  &:nth-child(4n - 1 ){
    align-self: flex-start;
    justify-content: center;
  }

  &.wrap_why{
    flex-direction: column-reverse;
  }

  &.wrap_much{
    flex-basis: 85%;

    @include breakpoint.desktop{
    }
    
    &> div{
      flex-grow: 1;
      justify-items: center;
    }
  }

  &.wrap_when{
    flex-basis: 90%;
    flex-direction: row-reverse;
    justify-content: center;
  }

  &.wrap_where{
    flex-basis: 45%;
    flex-direction: column-reverse;}
  
  
  &.wrap_what{
    flex-basis: 65%;
  }
}

.question{
  &> *{  
    font-size: 16px;
    
    @include breakpoint.tablet{
    font-size: 22px;
    }
  }
} 

.trigger{
  span{
    font-size: 24px;
    font-weight: 600;

    @include breakpoint.tablet{
      font-size: 30px;
    }

    @include breakpoint.desktop{
      font-size: 36px;
    }
  }

  i{
    margin-left: 10px;
    font-size: 26px;
    color: burlywood;
  }
}

.toggler{
  visibility: hidden;
  padding: 10px;
  text-align: left;
  color: color.$gray_700;

  @include breakpoint.tablet{
    padding: 15px;
  }
  @include breakpoint.desktop{
    padding: 20px;
  }
}

.trigger:focus + .toggler{
  visibility: visible;
}

.trigger:hover + .toggler{
  visibility: visible;
  }


// 腳印動畫
@keyframes shine{
  from  { opacity: 0 };
  to  { opacity: 1 }
}
// 位置相對於容器
// 左邊的腳印
.track1 {
  // display: none;
  width: 40px;
  position: absolute; //相對於h2
  top: 45%;
  // bottom: 35%;
  left: 5%;
  transform: rotate(30deg);
  opacity: 0;
  animation: shine 1s ease-in-out forwards;
  // animation: footprintL 2s steps(7, end) infinite;
  // animation-delay: 0.5s;
}

.track2{
  // 靜態位置樣式
  // width: 40px;
  // position: absolute;
  // bottom: 40%;
  // right: 20px;
  // transform: rotate(-15deg);
  
  // 動畫參數
  position: absolute;
  top: 30%;
  left: 7%;
  width: 40px;
  opacity: 0;
  transform: rotate(-30deg);
  animation: shine 1s ease-in-out forwards;
  animation-delay: 0.5s;
}

.track3{
  position: absolute;
  top: 10%;
  left: 5%;
  opacity: 0;
  transform: rotate(25deg);
  animation: shine 1s ease-in-out forwards;
  animation-delay: 1.5s;
}

@keyframes footprint {
  to {
    transform: translateY(-100px) translateX(-10px);
  }
}

// 開頭動畫
@keyframes fadeIn  {
  from  { opacity: 0 };
  to  { opacity: 1 }
  }


.question{
  .trigger{
    opacity: 0;
    animation: fadeIn 0.5s forwards;
  }
}
.wrap_much{
  .trigger{
    animation-delay: 0s;
  }
}

.wrap_when{
  .trigger{
    animation-delay: 0.2s;
  }
}

.wrap_how, .wrap_who{
  .trigger{
    animation-delay: 0.5s;
}}

.wrap_where, .wrap_why{
  .trigger{
    animation-delay: 0.6s;
  }
}

.wrap_what{
  .trigger{
    animation-delay: 0.3s;
  }
}

</style>