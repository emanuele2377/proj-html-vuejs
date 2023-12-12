<script>
import { store } from "../store.js" //state management


export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    },
    mounted() {
        this.doThings();


    },
    methods: {
        doThings() {

        }
    }
}
</script>

<template>
    <header>
        <section>

            <nav class="navbar navbar-expand-lg colore  ">
                <img class="ps-5" src="../assets/images (1)/logo.png" alt="">
                <div class="collapse navbar-collapse" id="navbarNavDropdown"
                    style="display: flex; justify-content: center;">
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
                            <a class="nav-link ps-4" href="#"><img src="../assets/images (1)/icon/cart-icon.png" alt=""></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#"><img class="logo"
                                    src="../assets/hover-20231211T144941Z-001/hover/btn.JPG" alt=""></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>

        <section>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-7" style="position: relative; top: 5rem; left: 4rem;">
                        <div class="controllerVerde" style="background-image: url();">
                            <div style="color: rgb(148, 203, 83); font-size: x-large;">Game With Live Stearming</div>
                            <div style="color: white; font-size:4rem;">Future Of <br> Esports</div>
                            <div style="color: rgb(204, 199, 199); font-size:large;">Sed ut perspiciatis unde omnis iste
                                natus error sit voluptatem <br> accusantium doloremque
                                laudantium</div>
                        </div>
                    </div>
                    <div class="col-5 ">
                        <div><img class="soldier" src="../assets/images (1)/index-banner-illus.png" alt=""></div>
                    </div>
                </div>
            </div>
        </section>
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
    padding-left: 5%;
}
</style>
  
<style scoped>
.colore {
    color: white;
}
</style>

<style scoped>
.soldier {
    width: 100%;
}
</style>

<style scoped>
.controllerVerde {}
</style>

