<template lang="html">
  <header>
      <div class="container">
        <div class="header">
          <div class="left">
            <a href="#">Link</a>
          </div>
          <div class="right">
            <ul>
              <li>
                <a href="#">
                  <i class="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-youtube-square" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
}
</script>

<style lang="scss">

  header {
    background: #000;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .right {
        ul {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;

          li {
            margin-left: 10px;
          }
        }
      }

      .right li a,
      .left a {
        color: lightgray;
        font-size: 30px;
      }

      .right li a:hover,
      .right li a:focus,
      .left a:hover,
      .left a:focus {
        color: gray;
        text-decoration: none !important;
      }
    }
  }
</style>
