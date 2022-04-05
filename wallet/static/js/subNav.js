const subNav = () => {
    
        const nav = (`
           <div>
           <p>${state?state.name:"loading"}</p>
           </div>
            `
        )
        document.getElementById("todayTotal").innerHTML = nav
}