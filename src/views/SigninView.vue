<template>
    <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
            <div class="col-12">
                <!-- Navbar -->
                <nav
                    class="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                    <div class="container-fluid pe-0">
                        <a class="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="../pages/dashboard.html">
                            Soft UI Dashboard
                        </a>
                        <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon mt-2">
                                <span class="navbar-toggler-bar bar1"></span>
                                <span class="navbar-toggler-bar bar2"></span>
                                <span class="navbar-toggler-bar bar3"></span>
                            </span>
                        </button>
                        <div class="collapse navbar-collapse" id="navigation">
                            <ul class="navbar-nav mx-auto ms-xl-auto me-xl-7">
                                <li class="nav-item">
                                    <a class="nav-link d-flex align-items-center me-2 active" aria-current="page"
                                        href="../pages/dashboard.html">
                                        <i class="fa fa-chart-pie opacity-6 text-dark me-1"></i>
                                        {{lang.menu.dashboard}}
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link me-2" href="../pages/profile.html">
                                        <i class="fa fa-user opacity-6 text-dark me-1"></i>
                                        {{lang.menu.profile}}
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link me-2" href="../pages/sign-up.html">
                                        <i class="fas fa-user-circle opacity-6 text-dark me-1"></i>
                                        {{lang.menu.signup}}
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link me-2" href="../pages/sign-in.html">
                                        <i class="fas fa-key opacity-6 text-dark me-1"></i>
                                        {{lang.menu.signin}}
                                    </a>
                                </li>
                            </ul>
                            <li class="nav-item d-flex align-items-center">
                                <a class="btn btn-round btn-sm mb-0 btn-outline-primary me-2" target="_blank"
                                    href="https://www.creative-tim.com/builder/soft-ui?ref=navbar-dashboard">{{lang.builder_btn}}</a>
                            </li>
                            <ul class="navbar-nav d-lg-block d-none">
                                <li class="nav-item">
                                    <a href="https://www.creative-tim.com/product/soft-ui-dashboard"
                                        class="btn btn-sm btn-round mb-0 me-1 bg-gradient-dark">{{lang.download_btn}}</a>
                                </li>

                            </ul>

                            <select v-model="selected">
                                <option value="en">EN</option>
                                <option value="bn">BN</option>
                                <option value="es">ES</option>
                            </select>

                        </div>
                    </div>
                </nav>
                <!-- End Navbar -->
            </div>
        </div>
    </div>
    <main class="main-content  mt-0">
        <section>
            <div class="page-header min-vh-75">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                            <div class="card card-plain mt-8">
                                <div class="card-header pb-0 text-left bg-transparent">
                                    <h3 class="font-weight-bolder text-info text-gradient">{{lang.welcome_msg}}</h3>
                                    <p class="mb-0">{{lang.signin_instruction}}</p>
                                </div>
                                <div class="card-body">
                                    <form role="form">
                                        <label>{{lang.email_label}}</label>
                                        <div class="mb-3">
                                            <input type="email" class="form-control" placeholder="Email"
                                                aria-label="Email" aria-describedby="email-addon">
                                        </div>
                                        <label>{{lang.password_label}}</label>
                                        <div class="mb-3">
                                            <input type="email" class="form-control" placeholder="Password"
                                                aria-label="Password" aria-describedby="password-addon">
                                        </div>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="rememberMe" checked="">
                                            <label class="form-check-label" for="rememberMe">{{lang.remember_label}}</label>
                                        </div>
                                        <div class="text-center">
                                            <button type="button" class="btn bg-gradient-info w-100 mt-4 mb-0">Sign
                                                in{{lang.signin_btn}}</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer text-center pt-0 px-lg-2 px-1">
                                    <p class="mb-4 text-sm mx-auto">
                                      {{lang.no_account_ques}}
                                        <a href="javascript:;" class="text-info text-gradient font-weight-bold">{{lang.signup_link}}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                                <div class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                                    style="background-image:url('img/curved-6.jpg')"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <!-- -------- START FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- -->
    <footer class="footer py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mb-4 mx-auto text-center">
                    <a href="javascript:;" target="_blank" class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                        {{lang.footer.company_link}}
                    </a>
                    <a href="javascript:;" target="_blank" class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                         Us{{lang.footer.aboutus_link}}
                    </a>
                    <a href="javascript:;" target="_blank" class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                        {{lang.footer.team_link}}
                    </a>
                    <a href="javascript:;" target="_blank" class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                        {{lang.footer.products_link}}
                    </a>
                    <a href="javascript:;" target="_blank" class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                        {{lang.footer.blog_link}}
                    </a>
                    <a href="javascript:;" target="_blank" class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                        {{lang.footer.pricing_link}}
                    </a>
                </div>
                <div class="col-lg-8 mx-auto text-center mb-4 mt-2">
                    <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-4">
                        <span class="text-lg fab fa-dribbble"></span>
                    </a>
                    <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-4">
                        <span class="text-lg fab fa-twitter"></span>
                    </a>
                    <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-4">
                        <span class="text-lg fab fa-instagram"></span>
                    </a>
                    <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-4">
                        <span class="text-lg fab fa-pinterest"></span>
                    </a>
                    <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-4">
                        <span class="text-lg fab fa-github"></span>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-8 mx-auto text-center mt-1">
                    <p class="mb-0 text-secondary">
                        <!-- Copyright © 
              {{ ()=>new Date().getFullYear()) }}
            Soft by Creative Tim. -->
                    </p>
                </div>
            </div>
        </div>
    </footer>

</template>

<script setup>
import { ref } from 'vue';
import en from "../lang/en";
import bn from "../lang/bn"
import { computed } from '@vue/reactivity';
import es from '../lang/es';


let selected = ref("en");
const lang = computed(()=>{
    switch (selected.value) {
        case "en":
            return en;
        case "bn":
            return bn
        case "es":
            return es
    }

})

console.log(selected.value)



</script>

<style scoped lang="css">
@import "../assets/css/nucleo-icons.css";
@import  "../assets/css/nucleo-svg.css";
@import "../assets/css/soft-ui-dashboard.css";

</style>