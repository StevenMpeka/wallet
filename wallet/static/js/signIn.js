const signIn = () => {
    appContainer.innerHTML=(`
    <div class="mycard">
    <h5>Login</h5>
    <div class="card auth-card ">
    <form action="/signin" method="POST">
      <input
      type="text"
      class="input-field"
      placeholder="email"
      name="email"
      />
      <input
      type="password"
      class="input-field"
      placeholder="password"
      name="password"
      />
      <button class="btn-land">
          Login
      </button>
      <h5>
          <button onClick="signUp()">Dont have an account ?</button>
      </h5>
      <h6>
          <a to="/reset">Forgot password ?</a>
      </h6>
</form>
  </div>
</div>
    `)
}

const getSignInCredential = (event) =>{
    event.preventDefault()
    const signInCredential = document.querySelectorAll(".input-field").value;
    signInCredential  && localStorage.setItem("_recharge_amount", signInCredential)
    // makeAirtimePayment("airtimeCheckoutPreview")
    // airtimeCheckoutPreview()
}
