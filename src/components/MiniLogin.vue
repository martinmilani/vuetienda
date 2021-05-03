<template>
  <div class="login-container">
    <div id="loginSidebar" class="sidebar" :class="{ mobileLogin: onMobile }">
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeLogin"
        >×</a
      >
      <div>
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
          <li role="presentation" class="active">
            <a
              :href="onMobile ? '#loginMobile' : '#login'"
              :aria-controls="onMobile ? 'loginMobile' : 'login'"
              role="tab"
              data-toggle="tab"
              >Iniciar Sesión</a
            >
          </li>
          <li role="presentation">
            <a
              :href="onMobile ? '#registerMobile' : '#register'"
              :aria-controls="onMobile ? 'registerMobile' : 'register'"
              role="tab"
              data-toggle="tab"
              >Registrarse</a
            >
          </li>
        </ul>

        <!-- Tab panes -->
        <!-- Login Tab -->
        <div class="tab-content">
          <div
            role="tabpanel"
            class="tab-pane fade in active"
            :id="onMobile ? 'loginMobile' : 'login'"
          >
            <!-- Login Form -->
            <div class="form-container">
              <form @submit.prevent="handleSignIn">
                <div class="form-group">
                  <label for="InputEmail">Email</label>
                  <input
                    v-model="signInForm.email"
                    type="email"
                    class="form-control"
                    id="InputEmail"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="InputPassword">Contraseña</label>
                  <input
                    v-model="signInForm.password"
                    type="password"
                    class="form-control"
                    id="InputPassword"
                    placeholder="Contraseña"
                    required
                  />
                </div>
                <div class="form-group">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" v-model="signInForm.rememberMe" />
                      Recordarme
                    </label>
                  </div>
                </div>

                <div class="form-group btn-login-footer">
                  <button type="submit" class="btn btn-default">
                    Iniciar sesión
                  </button>
                </div>

                <div class="forgotpassword">
                  <span>
                    <a href="#">
                      Olvidaste tu contraseña?
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </div>

          <!-- Register Tab -->
          <div
            role="tabpanel"
            class="tab-pane fade"
            :id="onMobile ? 'registerMobile' : 'register'"
          >
            <!-- Register Form -->
            <div class="form-container">
              <form @submit.prevent="handleRegister">
                <div class="form-group">
                  <label for="InputEmail">Nombre</label>
                  <input
                    v-model="registerForm.name"
                    type="text"
                    class="form-control"
                    id="InputName"
                    placeholder="Nombre"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="InputEmail">Email</label>
                  <input
                    v-model="registerForm.email"
                    type="email"
                    class="form-control"
                    id="InputEmail"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="InputPassword">Contraseña</label>
                  <input
                    v-model="registerForm.password"
                    type="password"
                    class="form-control"
                    id="InputPassword"
                    placeholder="Contraseña"
                    required
                  />
                </div>

                <div class="form-group btn-login-footer">
                  <button
                    id="register-btn"
                    type="submit"
                    class="btn btn-default"
                  >
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="user-icon" id="user-icon">
      <a v-on:click="openLogin" :class="{ hide: onMobile }"
        ><i class="fal fa-user"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniLogin",

  props: ["onMobile"],

  data() {
    return {
      signInForm: {
        email: "",
        password: "",
        rememberMe: false,
      },
      registerForm: {
        name: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    handleSignIn() {
      console.log("Singed In!");
      console.log(this.signInForm);
      this.$store.commit("SET_SIGNIN_FORM_VALUES", this.signInForm);
    },

    handleRegister() {
      console.log("Registered!");
      console.log(this.registerForm);
      this.$store.commit("SET_REGISTER_FORM_VALUES", this.registerForm);
    },

    openLogin() {
      document.getElementById("loginSidebar").style.width = "400px";
    },

    closeLogin() {
      if (this.onMobile) {
        document.getElementsByClassName("mobileLogin")[0].style.width = "0";
      } else {
        document.getElementById("loginSidebar").style.width = "0";
      }
    },
  },
};
</script>

<style scoped>
.nav-tabs > li > a {
  border-bottom: none;
  border: none;
  padding: 10px 0;
  margin-left: 1em;
}

.nav-tabs {
  border-bottom: none;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:focus,
.nav-tabs > li.active > a:hover {
  border: none;
  border-bottom-color: transparent;
  border-bottom: 2px solid #ddd;
  border-bottom-color: #6cc;
}
.nav-tabs > li > a {
  border-radius: none;
}
.nav-tabs > li > a:hover {
  border-color: none;
  border-color: transparent;
}
.nav > li > a:focus,
.nav > li > a:hover {
  background-color: transparent !important;
}

.disabled {
  background-color: grey !important;
}

.hide {
  display: none;
}

.login-main {
  height: calc(100% - 130px);
  overflow: auto;
  padding: 1em;
}

.sidebar {
  height: 100vh;
  width: 0;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  background-color: #ffff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 70px;
  box-shadow: 0 3px 18px 0 rgba(0, 0, 0, 0.1);
  overflow: auto;
}

.nav {
  position: absolute;
  top: 7px;
  left: 16px;
  width: 90%;
  font-size: 16px;
}

.sidebar .closebtn {
  position: absolute;
  top: 15px;
  right: 10px;
  font-size: 36px;
  margin-left: 50px;
  color: #888888;
  z-index: 10;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}

.user-icon {
  transition: margin-left 0.5s;
  padding: 16px 6px;
  cursor: pointer;
}

.login-main ul {
  position: relative;
}

.mini_login_item {
  list-style: none;
  overflow: hidden;
  padding: 20px 0;
  padding-right: 1em;
  border-bottom: 1px solid #f1f1f1;
}

.user-icon > a {
  font-size: 2em;
  padding: 0.25em;
}

/* Forms Styles */
.form-container {
  margin-top: 1em !important;
  max-width: 338px;
  margin: 0 auto;
}

.checkbox {
  margin-top: 2em;
}

.btn-login-footer {
  margin-top: 2em !important;
  width: 100%;
}

.btn-login-footer > .btn-default {
  width: 100%;
  height: 40px;
}

#register-btn {
  margin-top: 1.25em;
}

.forgotpassword {
  margin-top: 2em;
}

.forgotpassword > span {
  font-weight: 700;
  font-size: 1.5rem;
}
</style>
