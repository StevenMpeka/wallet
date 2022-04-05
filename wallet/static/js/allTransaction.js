const allTransaction = () =>{
  fetch(`/response`).then(data => {
    return data.json();
}).then(completedata => {
    console.log(completedata)
    appContainer.innerHTML = completedata.createTransaction.map(item => {
      return(`
      <div>
    <nav>
    <div class="nav-wrapper" style="background-color:white">
        <div>
     
        <a href='' class="left"><img src="../image/patlogo.png" alt="logo" class="logo"/></a>
        </div>
    <div id="mySidenav" class="sidenav">
        <a href="" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="./">Dashboard</a>
        <a href="./main.html">Services</a>
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
    <table class="card home-card-table">
            <caption>All transaction</caption>
            <tr class="table">
              <th style="padding: 10px;">REFERENCE</th>
              <th style="padding: 10px;">DESCRIPTION</th>
              <th style="padding: 10px;">STATUS</th>
              <th style="padding: 10px;">ACTION</th>
            </tr>
            <tr>
              <td>${item.id}</td>
              <td>${item.amount}</td>
              <td>${item.status}</td>
              <td>${item.currency}</td>
            </tr>
            <tr>
              <td>hello</td>
              <td>hello</td>
              <td>hello</td>
              <td>hello</td>
            </tr>
            <tr>
              <td>hello</td>
              <td>hello</td>
              <td>hello</td>
              <td>hello</td>
            </tr>
            <tr>
                <td>hello</td>
                <td>hello</td>
                <td>hello</td>
                <td>hello</td>
              </tr>
          </table>
          </section>
          </div>
    `)
    })
    })
    }  
