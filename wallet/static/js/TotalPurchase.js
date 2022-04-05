const TotalPurchase = () => {
    const retrieveRechargeAmount = localStorage.getItem("_recharge_amount")

    retrieveRechargeAmount.map(total => {
            totalPrice += `
           <div>
           <h5><strong style="color:black">${total.amount}</strong></h5>
           <p>Today's Total Purchase</p>
           </div>
            `
        })
        document.getElementById("todayTotal").innerHTML = totalPrice
}