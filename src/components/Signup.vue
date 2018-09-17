<template>
  <div class="user-ath">
    <div class="user-ath-page">
        <div class="container">
             <div class="row justify-content-center">
                 <div class="col-lg-6 col-md-8 text-center">
                     <div class="user-ath-logo">
                         <a href="#">
                             <img src="~images/logo-sm.png"  srcset="images/logo-sm2x.png 2x" alt="icon">
                         </a>
                     </div>
                     <div class="user-ath-box">
                         <h4>Creat New Account</h4>
                         <form action="signup-success.html" class="user-ath-form">
 <!--
                             <div class="note note-lg note-no-icon note-danger">
                                 <p>Please check your submited information for error.</p>
                             </div>
                             <div class="note note-lg note-no-icon note-success">
                                 <p>Your registration is succesfull, please check you email to confirm.</p>
                             </div>
 -->
                             <div class="input-item">
                                 <input type="text" placeholder="Your Name" class="input-bordered">
                             </div>
                             <div class="input-item">
                                 <input type="text" placeholder="Your Email" class="input-bordered">
                             </div>
                             <div class="input-item">
                                 <input type="password" placeholder="Password" class="input-bordered">
                             </div>
                             <div class="input-item">
                                 <input type="password" placeholder="Repeat Password" class="input-bordered">
                             </div>
                             <div class="input-item text-left">
                                 <input class="input-checkbox" id="term-condition" type="checkbox">
                                 <label for="term-condition">I agree to <a href="#">Terms</a> and <a href="#"> Policy.</a></label>
                             </div>
                             <div class="gaps"></div>
                             <div class="d-flex justify-content-between align-items-center">
                                 <button class="btn btn-primary">Sign Up</button>
                             </div>
                         </form>
                         <div class="or-saparator"><span>or</span></div>
                         <span class="small-heading">Sign in with:</span>

                         <ul class="btn-grp guttar-30px">
                             <li><a href="#" class="btn btn-sm btn-icon btn-facebook"><em class="fab fa-facebook-f"></em>Facebook</a></li>
                             <li><a href="#" class="btn btn-sm btn-icon btn-google"><em class="fab fa-google"></em>Google</a></li>
                         </ul>
                     </div>
                     <div class="gaps-2x"></div>
                     <div class="form-note">
                         Already a member? <a href="login.html">Login</a>
                     </div>
                 </div>
             </div>
         </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'UnknownComponent',
  data () {
    return {

    }
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
