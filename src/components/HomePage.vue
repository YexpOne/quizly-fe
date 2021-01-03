<template>
  <header>
    <nav>
      <a href="#" id="menu-icon"></a>
      <ul>
        <li><a href="#" class="current">Anasayfa</a></li>
        <li>
          <router-link to="/register"><a>Kayıt ol</a></router-link>
        </li>
        <li>
        <router-link to="/login"><a>Giriş</a></router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}

body {
  background: #f0f0f0;
  color: #555;
  margin: 0;
}

a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  text-transform: capitalize;
}

a:hover {
  color: #fff;
  text-decoration: underline;
}

header {
  background: #791879;
  width: 100%;
  height: 86px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  opacity: 0.9;
}

nav {
  float: right;
  padding: 20px 20px 20px 0;
}

#menu-icon {
  display: hidden;
  width: 40px;
  height: 40px;
  background: url(http://www.w3newbie.com/wp-content/uploads/icon.png) center;
}

a:hover#menu-icon {
  border-radius: 4px 4px 0 0;
}

ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
  float: left;
  padding: 15px;
  text-transform: capitalize;
}

.current {
  color: #fff;
  text-decoration: underline;
}
/* ------------------MADIN!!!------------------*/
@media screen and (max-width: 478px) {
  body {
    position: absolute;
  }
}

@media screen and (max-width: 740px) {
  header {
    position: absolute;
  }
  #menu-icon {
    display: inline-block;
  }
  nav ul,
  nav:active ul {
    display: none;
    position: absolute;
    padding: 20px;
    background: #791879;
    border: 1px solid #fff;
    right: 20px;
    top: 60px;
    width: 50%;
    border-radius: 2px 0 2px 2px;
  }
  nav li {
    text-align: center;
    width: 100%;
    padding: 10px 0;
    margin: 0;
    animation: all 2s ease-in-out;
  }
  nav:hover ul {
    display: block;
  }
}
</style>
