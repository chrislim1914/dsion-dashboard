<template>
  <div class="user-ath">
    <div class="user-ath-page">
        <div class="container">
             <div class="row justify-content-center">
                 <div class="col-lg-6 col-md-8  text-center">
                     <div class="user-ath-logo">
                         <a href="#">
                             <img src="~images/logo-sm.png"  srcset="~images/logo-sm2x.png 2x" alt="icon">
                         </a>
                     </div>
                     <div class="user-ath-box">
                         <h4>Login to Your Account</h4>
                         <form action="index.html" class="user-ath-form">
 <!--
                             <div class="note note-lg note-no-icon note-danger">
                                 <p>Your email and password is invalid.</p>
                             </div>
 -->
                             <div class="input-item">
                                 <input type="text" placeholder="Your Email" class="input-bordered">
                             </div>
                             <div class="input-item">
                                 <input type="password" placeholder="Password" class="input-bordered">
                             </div>
                             <div class="gaps"></div>
                             <div class="d-flex justify-content-between align-items-center">
                                 <button class="btn btn-primary">Log in</button>
                                 <a href="recovery.html" class="simple-link">Forgot password?</a>
                             </div>
                         </form>
                         <div class="or-saparator"><span>or</span></div>
                         <span class="small-heading">Log in with:</span>

                         <ul class="btn-grp guttar-30px">
                             <li><a href="#" class="btn btn-sm btn-icon btn-facebook"><em class="fab fa-facebook-f"></em>Facebook</a></li>
                             <li><a href="#" class="btn btn-sm btn-icon btn-google"><em class="fab fa-google"></em>Google</a></li>
                         </ul>
                     </div>
                     <div class="gaps-2x"></div>
                     <div class="form-note">
                         Not a member? <a href="signup.html">Sign up now</a>
                     </div>
                 </div>
             </div>
         </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {

    }
  }
}
</script>
