const sideNav = () =>{
    appContainer.innerHTML = (`
    <div id="mySidenav" class="sidenav">
  <a href="" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

<span onclick="openNav()">open</span>
<div id="main">
  ...
</div>
    `)
    
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }





