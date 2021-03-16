<template>
  <div class="block-account block-header tanajil-dropdown">
    <a href="javascript:void(0);" data-tanajil="tanajil-dropdown">
      <span class="flaticon-user"></span>
    </a>
    <div class="header-account tanajil-submenu">
      <div class="header-user-form-tabs">
        <ul class="tab-link">
          <li class="active">
            <a data-toggle="tab" aria-expanded="true" href="#header-tab-login"
              >Login</a
            >
          </li>
          <li>
            <a
              data-toggle="tab"
              aria-expanded="true"
              href="#header-tab-rigister"
              >Register</a
            >
          </li>
        </ul>
        <div class="tab-container">
          <div id="header-tab-login" class="tab-panel active">
            <form method="post" class="login form-login">
              <p class="form-row form-row-wide">
                <input type="email" placeholder="Email" class="input-text" />
              </p>
              <p class="form-row form-row-wide">
                <input
                  type="password"
                  class="input-text"
                  placeholder="Password"
                />
              </p>
              <p class="form-row">
                <label class="form-checkbox">
                  <input type="checkbox" class="input-checkbox" />
                  <span>
                    Remember me
                  </span>
                </label>
                <input type="submit" class="button" value="Login" />
              </p>
              <p class="lost_password">
                <a href="#">Lost your password?</a>
              </p>
            </form>
          </div>
          <div id="header-tab-rigister" class="tab-panel">
            <form method="post" class="register form-register">
              <p class="form-row form-row-wide">
                <input type="email" placeholder="Email" class="input-text" />
              </p>
              <p class="form-row form-row-wide">
                <input
                  type="password"
                  class="input-text"
                  placeholder="Password"
                />
              </p>
              <p class="form-row">
                <input type="submit" class="button" value="Register" />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniLogin",
};
</script>

<style></style>
