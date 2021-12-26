<template>
  <main>
    <h2>領養前的那些事</h2>
    <!-- <div class="container"> -->
      <div class="FAQ">
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
    <!-- </div> -->
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

main{
  margin-top: 60px;
  padding: 10px 20px;
  background: color.$brown_100;
  min-height: 100vh;

  @include breakpoint.tablet{
    margin-top: 103px;
  }

  h2{
    @extend %title_h2;
    color: color.$gray_700;
  }
}

.container{
  display: flex;
  width: 100%;
}

.FAQ {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  height: 90%;
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

  &.wrap_much{
    flex-basis: 100%;
    padding: 20px 10px;

    @include breakpoint.desktop{
      padding: 25px;
    }
    
    &> div{
      flex-grow: 1;
      justify-items: center;
    }
  }

  &.wrap_when{
    padding: 10px 10px;
    flex-basis: 70%;
    flex-direction: row;
    justify-content: center;
  
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
      font-size: 26px;
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

@include breakpoint.desktop{
  .trigger:hover .toggler{
    // visibility: visible;
  }
}

</style>