<template>
  <section class="container">
    <div class="progress_icon">
      <span class="first"></span><span class="inner"></span><span></span>
    </div>
    <h2>步驟二 認養申請</h2>
    <div class="accept_container">
      <input type="checkbox" />
      <span>本人願遵守以下規定，並提出申請</span>
    </div>
    <ol>
      <li>
        依法辦理寵物登記、晶片植入等事項。並同意為認養隻動物絕育，避免不必要之繁殖。
      </li>
      <li>
        無論何時都以人道方式對待認養動物，提供牠適當之食物、飲水及空間，並絕不任意棄養認養的動物。
      </li>
      <li>
        若認養動物年齡未滿8週或不宜施打疫苗者，必須完成狂犬病預防注射，並將注射證明影本郵寄或傳真回本所備查。
      </li>
      <li>
        定期幫牠進行狂犬病預防注射、驅蟲及健康檢查，受傷或罹病時，必請獸醫師給予醫療。
      </li>
      <li>妥善照顧牠，防止其無故侵害他人之生命，身體、自由、財產或安寧。</li>
      <li>
        不再隨便放縱牠於戶外，牠出入公共場所或公眾出入之場所時，必由7歲以上之人伴同，並採取適當之防衛措施，如繫犬鍊、帶口罩等，始得攜出戶外。
      </li>
      <li>
        當牠轉讓、死亡或住所異動時，於1個月內依規定辦理變更登記；遺失時，於5天內依規定申報。
      </li>
      <li>本人願接受貴所之追蹤訪視及飼養輔導。</li>
      <li>
        如有違反上述認養規定，貴所有權收回該動物，並終止認養人對該認養動物之權利。
      </li>
      <li>
        如因任何原因無法續養，本人願為牠找到新的認養家庭，或送至動物保護團體所屬收容所，或再送至貴所辦理不擬續養手續並依收容所規定繳交規費。
      </li>
      <li>
        依據「動物保護法」第33-1條之規定:完成不擬續養手續後將不得飼養寵物及認養收容動物。
      </li>
      <li>
        本認養申請資料送出後，不代表已完成所選動物之認養，亦不代表您已具認養本動物的第一優先權，認養以收容所現場完成程序為準。
      </li>
    </ol>
    <form>
      <h2>申請資料</h2>
      <label for=""
        >飼養地點:
        <input type="text" />
      </label>
      <label for=""
        >空間大小:
        <input type="text" />
      </label>
      <label for="" class="pet_number"
        >現有動物支數:
        <input type="text" />
      </label>
      <label for=""
        >認養人名稱:
        <input type="text" />
      </label>
      <label for=""
        >認養人出生日期:
        <input type="text" />
      </label>
      <label for=""
        >認養人聯絡電話:
        <input type="text" />
      </label>
      <label for=""
        >電子信箱:
        <input type="text" />
      </label>
      <label for="" class="adress"
        >通訊地址:
        <input type="text" />
      </label>
    </form>
    <div class="confirm_button_container">
      <button disabled></button><input type="submit" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
body {
  margin: 0;
}

.progress_icon {
  color: #af9380;

  position: relative;

  text-align: center;
  .first {
    margin-right: 140px;
  }
  span {
    display: inline-block;

    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: #af9380;
    border: 0;
  }
  span.inner {
    width: 140px;
    height: 5px;

    position: absolute;
    top: 19px;
    right: 0;
    left: 0;
    margin: 0 auto;
  }
}

.container {
  display: flex;
  flex-direction: column;
  padding: 16px;

  width: auto;
  height: 90vh;
  background-color: #fbf8f5;

  .accept_container {
    text-align: center;

    margin-top: 65px;
  }

  h2 {
    margin: 0 auto;
    font-family: Roboto;
    text-align: center;
    font-size: 40px;

    margin-top: 60px;
    // position: absolute;
    // width: 363px;
    // height: 59px;
    // left: 539px;
    // top: 226px;

    // font-family: Roboto;
    // font-style: normal;
    // font-weight: 900;
    // font-size: 50px;
    // line-height: 59px;
  }
}
form {
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  background-color: #fbf8f5;
  h2 {
    flex: 100%;
    // color:red;
  }
  label {
    flex: 1 1 45%;

    input {
      display: block;
      width: 100%;
      border: 2px solid #dec39e;
      height: 42px;
    }
  }
  .pet_number {
    flex: 1 1 100%;
    input {
      width: 49%;
    }
  }
  .adress {
    flex: 1 1 100%;
    input {
      width: 49%;
    }
  }
}
.confirm_button_container {
  display: flex;

  text-align: center;

  input[type="button"] {
    color: red;
  }
  input[type="submit"] {
    background: #dec39e;
    border-radius: 10px;
  }
}
</style>
