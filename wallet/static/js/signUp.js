const signUp = () =>{
    appContainer.innerHTML = (`
    <nav>
          <div class="nav-wrapper" style="background-color:white">
              <div>
           
              <a href='' class="left"><img src="./image/patlogo.png" alt="logo" class="logo"/></a>
              </div>
          <div id="mySidenav" class="sidenav">
              <a href="" class="closebtn" onclick="closeNav()">&times;</a>
              <a href="./main.html">Dashboard</a>
              <a href="./index.html">Services</a>
              <button onclick="allTransaction()">Transactions</button>
              <a href="./wallet.html">Wallet</a>
              <button onclick="walletFunding()">Wallet Funding</button>
              <a href="#">Profile</a>
              <a href="#">Logout</a>
            </div>
            
            <span onclick="openNav()"><i class="fa fa-bars"></i></span>
            <div id="main">
            </div>
      </nav>
      <section style="margin-top:90px">
      <div class="mycard">
      <div class="card auth-card input-field">
      <form action="/signUp" method="POST">
        <input
        type="text"
        placeholder="first_name"
        name="first_name"
        />
        <input
        type="text"
        placeholder="last_name"
        name="last_name"
        />
        <input
        type="text"
        placeholder="email"
        name="email"
        />
        <input
        type="password"
        placeholder="password"
        name="password"
        />
        <button class="btn-land">
            Signup
        </button>
        <h5>
            <button class="btn" onClick="signIn()">Already have an account ?</button>
        </h5>
        </form> 
           
     
        

    </div>
  </div>
         </section>
    `)
    
}

