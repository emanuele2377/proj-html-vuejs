<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg colore  ">
      <img src="./assets/images (1)/logo.png" alt="">
      <div class="collapse navbar-collapse" id="navbarNavDropdown" style="display: flex; justify-content: space-around;">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a style="color: white;" class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a style="color: white;" class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Game
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a style="color: white;" class="dropdown-item" href="#">Action</a>
              <a style="color: white;" class="dropdown-item" href="#">Another action</a>
              <a style="color: white;" class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a style="color: white;" class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Shop
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a style="color: white;" class="dropdown-item" href="#">Action</a>
              <a style="color: white;" class="dropdown-item" href="#">Another action</a>
              <a style="color: white;" class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a style="color: white;" class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Pages
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a style="color: white;" class="dropdown-item" href="#">Action</a>
              <a style="color: white;" class="dropdown-item" href="#">Another action</a>
              <a style="color: white;" class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a style="color: white;" class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Blog
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a style="color: white;" class="nav-link" href="#">contact</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#"><img src="./assets/images (1)/icon/cart-icon.png" alt=""></a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#"><img class="logo" src="./assets/hover-20231211T144941Z-001/hover/btn.JPG"
                alt=""></a>
          </li>
        </ul>
      </div>

    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: rgb(21, 25, 35);

}
</style>

<style scoped>
.logo {
  width: 40%;
}
</style>

<style scoped>
.colore {
  color: white;
}
</style>