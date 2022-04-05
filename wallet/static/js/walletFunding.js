const walletFunding = () =>{
    appContainer.innerHTML = (`
    <nav>
          <div class="nav-wrapper" style="background-color:white">
              <div>
           
              <a href='' class="left"><img src="../image/patlogo.png" alt="logo" class="logo"/></a>
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
    <div class="card home-card">
        <div class="card-header">
         <button class="btn" onClick="transactionService()"><p>Pay With Card</p></button>
         <button class="btn" onClick="transactionService()"><p>Direct Bank Payment</p></button>
         </div>   
         </div>
         </section>
    `)
    
}

