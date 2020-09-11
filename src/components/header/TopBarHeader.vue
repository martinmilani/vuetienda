<template>
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-left">
        <div class="header-message">
          Welcome to our online store!
        </div>
      </div>
      <div class="top-bar-right">
        <div class="header-language">
          <div class="tanajil-language tanajil-dropdown">
            <a
              href="#"
              class="active language-toggle"
              data-tanajil="tanajil-dropdown"
            >
              <span>
                English (USD)
              </span>
            </a>
            <ul class="tanajil-submenu">
              <li class="switcher-option">
                <a href="#">
                  <span>
                    French (EUR)
                  </span>
                </a>
              </li>
              <li class="switcher-option">
                <a href="#">
                  <span>
                    Japanese (JPY)
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ul class="header-user-links">
          <li>
            <a href="login.html">Login or Register</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'TopBarHeader'
};
</script>

<style></style>
