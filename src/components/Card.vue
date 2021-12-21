<template>
  <router-link :to="{ name: 'Description' }">
    <div class="case_card">
      <div class="case_image">
        <img src="@/assets/img/cat2.svg" alt="">
      </div>
      <div class="case_info">
        <span>貓狗</span>
        <span>毛花色</span>
        <span>性別</span>
        <p><i class="fas fa-map-marker-alt"></i>澎湖縣馬公市收容所</p>
      </div>
    </div>

    <div class="case_card">
      <div class="case_image">
        <img src="@/assets/img/dog1.svg" alt="">
      </div>
      <div class="case_info">
        <span>貓狗</span>
        <span>毛花色</span>
        <span>性別</span>
        <p><i class="fas fa-map-marker-alt"></i>澎湖縣馬公市收容所</p>
      </div>
    </div>

    <div class="case_card">
      <div class="case_image">
        <img src="@/assets/img/cat1.svg" alt="">
      </div>
      <div class="case_info">
        <span>貓狗</span>
        <span>毛花色</span>
        <span>性別</span>
        <p><i class="fas fa-map-marker-alt"></i>澎湖縣馬公市收容所</p>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>

.case{
  &_card {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 16px;
    margin: 0 auto;
    width: 270px;
    height: 170px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @include breakpoint.mobile{
      flex-direction: column;
      width: 270px;
      height: 340px;
    }

    @include breakpoint.desktop{
      width: 400px;
      height: 425px;
    }

  }
  &_image {
    flex-basis: 60%;
    height: 100%;
    background: color.$brown_100;
    
    @include breakpoint.mobile{
      flex-basis: auto;
      height: 230px;
      width: auto;
    }
    
    @include breakpoint.desktop{
      width: 370px;
      height: 300px;
    }

    img {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    object-fit: contain;
    }
  }

  &_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 5px;
    font-size: 16px;

    @include breakpoint.mobile{
      flex-grow: 1;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: space-between;
      margin-top: 10px;
      font-size: 18px;
    }

    p{
      @include breakpoint.mobile{
        flex-basis: 100%;
        text-align: left;
      }
    }
  }
}

</style>
