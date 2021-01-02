<template>
  <div className="App">
    <video autoplay loop muted>
      <source src="./bacc.mp4" type="video/mp4" />
    </video>
    <div class="container">
      <div class="formg">
        <div>
          <label for="usr" class="text" id="x">QUİZLY KODUN:</label>
        </div>
        <div>
          <input type="number" class="form1" id="usr" />
        </div>
        <div class="start-button">
          <router-link to="#"
            ><button id="start"><span> Quize Başla</span></button></router-link
          >
        </div>

        <div class="footer">
          <router-link to="/index"
            ><a class="a"
              ><h3 class="text" id="footer">Kendine Uygun Quiz Bul</h3></a
            ></router-link
          >

          <!-- linkli yazıyla url oluşturulup onclick ile yönlendirme fonksiyonu
          çalıştırıldı. -->
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
#x {
  text-align: center;
  font-weight: 900;
  font-size: xx-large;
  margin-bottom: 60px;
  color: #f4511e;
}

.formg {
  text-align: center;
  margin-top: 150px;
  width: 100%;
}

.form1 {
  width: 200px;
  height: 40px;
  font-size: xx-large;
  margin-bottom: 20px;
  margin-top: 30;
  text-align: center;
}

#start {
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  padding: 20px;
  width: 180px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

#start span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

#start span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

#start:hover span {
  padding-right: 25px;
}

#start:hover span:after {
  opacity: 1;
  right: 0;
}

.start-button {
  text-align: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  background-size: cover;
  overflow: hidden;
  -webkit-filter: blur(8px);
  -moz-filter: blur(8px);
  -o-filter: blur(8px);
  -ms-filter: blur(8px);
  filter: blur(20px);
}

.footer {
  text-align: center;
  float: bottom;
  color: #f4511e;
  font-weight: bold;
  font-size: 20px;
}

.a {
  line-height: 1;
  display: inline-block;
  color: #f4511e;
  text-decoration: none;
  margin-top: 100px;
}

.a:after {
  display: block;
  content: "";
  height: 5px;
  width: 0%;
  background-color: #f4511e;
  transition: width 0.3s ease-in-out;
}

.a:hover {
  color: #f4511e;
  text-decoration: none;
}

/*title after ve hover kısmı ile linklere animasyon eklendi.*/
.a:hover:after {
  color: #f4511e;
  width: 100%;
}

.a:focus:after {
  width: 100%;
  color: #f4511e;
  text-decoration: none;
}
</style>
