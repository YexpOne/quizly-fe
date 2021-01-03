<template>
  <div class="login__box">
    <div class="login-card">
      <h1>Hesap Şifreni Sıfırla</h1>
      <hr class="hr" />
      <br />
      <form onSubmit="{this.handleSubmit}">
        <input
          type="text"
          name="userName"
          placeholder="Kullanıcı Adı"
          value="{this.state.userName}"
          onChange="{this.handleInputChange}"
        />
        <input
          type="submit"
          name="login"
          class="login login-submit"
          value="Sıfırlama Maili GÖnder"
        />
      </form>
      <hr class="hr2" />
      <br />
      <div class="back">
        <router-link to="/index"
          ><img
            src="https://img.icons8.com/ios/24/000000/back--v1.png"
          />Anasayfaya Dön</router-link
        >
      </div>
    </div>
  </div>
</template>

<style>
@import url(http://fonts.googleapis.com/css?family=Roboto:400, 100);

.login__box {
  background-color: #f7f7f7;
  margin: auto;

  text-align: center;
}

.login-card {
  padding: 40px;
  background-color: #f7f7f7;
  margin: 0 auto 10px;
  border-radius: 2px;
  box-shadow: 0px 15px 15px rgba(68, 62, 62, 0.37);
  overflow: hidden;
  width: 500px;
  height: 550px;
}

.hr {
  border: 2px solid rgb(0, 0, 0);
}

.login-card h1 {
  font-weight: 300;
  text-align: center;
  font-size: 2.3em;
}

.login-card input[type="submit"] {
  width: 100%;
  display: block;
  margin-bottom: 10px;
  position: relative;
}

.login-card input[type="text"],
input[type="password"] {
  height: 44px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
  -webkit-appearance: none;
  background: #fff;
  border: 1px solid #c0c0c0;
  padding: 0 8px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}

.login-card input[type="text"]:hover,
input[type="password"]:hover {
  border: 1px solid #b9b9b9;
  border-top: 1px solid #a0a0a0;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

.login {
  text-align: center;
  font-size: 14px;
  font-family: "Arial", sans-serif;
  font-weight: 700;
  height: 36px;
  padding: 0 8px;
}

.login-submit {
  border: 0px;
  color: #fff;
  text-shadow: 0 1px rgba(0, 0, 0, 0.1);
  background-color: #4d90fe;
}

.login-submit:hover {
  border: 0px;
  text-shadow: 0 1px rgba(0, 0, 0, 0.1);
  background-color: #357ae8;
}

.login-card a {
  text-decoration: none;
  color: #666;
  font-weight: 400;
  text-align: center;
  display: inline-block;
  opacity: 0.6;
  transition: ease 0.5s;
}

.login-card a:hover {
  opacity: 1;
}

.login-help {
  width: 100%;
  text-align: center;
  font-size: 16px;
}

.social-icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}

.social-icon a {
  padding: 5px;
}

.or {
  text-decoration: none;
  color: #666;
  font-weight: 400;
  text-align: center;
  display: inline-block;
  opacity: 0.6;
  transition: ease 0.5s;
}

.back {
  text-align: center;
}
</style>
