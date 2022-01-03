<template v-if="petData">
  <router-link
    :to="{
      name: 'Description',
      params: { petID: petData.animal_id, petKind: petData.animal_kind },
    }"
  >
    <div class="case_card">
      <div class="case_image">
        <img
          v-if="petData.album_file"
          :src="petData.album_file"
          alt="浪浪圖片"
        />
        <img v-else src="@/assets/img/dog1.jpg" alt="替代圖片" />
      </div>
      <div class="case_info">
        <span>{{ petData.animal_kind }}</span>
        <span>{{ petData.animal_colour }}</span>
        <span>{{ petData.animal_sex }}</span>
        <p><i class="fas fa-map-marker-alt"></i> {{ petData.animal_place }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["petData"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.case {
  &_card {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 0 auto; //新增margin-auto, 讓卡片能在grid layout中置中
    padding: 16px;
    width: 270px;
    height: 170px;
    background: white;
    color: color.$gray_700; //修改顏色以設計稿
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @include breakpoint.tablet {
      flex-direction: column;
      width: 270px;
      height: 340px;
    }

    @include breakpoint.desktop {
      width: 300px;
      height: auto;
    }

    @include breakpoint.bgScreen {
      width: 300px;
      height: 350px;
    }
  }
  &_image {
    flex-basis: 60%;
    height: 100%;
    background: color.$brown_100;

    @include breakpoint.tablet {
      flex-basis: auto;
      height: 230px;
      width: auto;
    }

    @include breakpoint.bgScreen {
      height: 250px;
      width: auto;
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

    @include breakpoint.tablet {
      flex-grow: 1;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: space-between;
      margin-top: 10px;
      padding-left: 0;
      font-size: 18px;
    }

    p {
      @include breakpoint.tablet {
        flex-basis: 100%;
        text-align: left;
      }
    }
  }
}
// 新增使用者hover效果
.case_card:hover{
  transition: all 0.2s ease-in;
  position: relative;
  top: 1px;
  box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.25);
  
  .case_image{
    overflow: hidden;
  }

  img{
    transition: all 0.3s ease-out;
    transform: scale(1.3);
  }
}
</style>
