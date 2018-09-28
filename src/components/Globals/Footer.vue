<template>
  <div class="app-footer">
    <div class="footer-bar">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <span class="footer-copyright">Copyright 2018, <a href="#">Dsion</a>.  All Rights Reserved.</span>
          </div>
          <!-- .col -->
          <div class="col-md-5 text-md-right">
            <ul class="footer-links">
              <li><a href="https://dsion.io/static/conditions_privacy.pdf" target="_blank">Privacy Policy</a></li>
              <li><a href="https://dsion.io/static/sale_policy.pdf" target="_blank">Terms of Sales</a></li>
            </ul>
          </div>
          <!-- .col -->
        </div>
        <!-- .row -->
      </div>
      <!-- .container -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'UnknownComponent',
  mounted () {
    let jqueryScript = document.createElement('script')
    jqueryScript.setAttribute('src', '/static/assets/js/jquery.bundle.js')
    document.head.appendChild(jqueryScript)

    let dropzoneScript = document.createElement('script')
    dropzoneScript.setAttribute('src', '/static/assets/js/dropzone.js')
    document.head.appendChild(dropzoneScript)

    let dashboardScript = document.createElement('script')
    dashboardScript.setAttribute('src', '/static/assets/js/script.js')
    document.head.appendChild(dashboardScript)
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .debugger {
    border: 2px solid red;
  }
</style>
