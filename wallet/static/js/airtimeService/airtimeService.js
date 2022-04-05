const airtimeService = () =>{
    const retrieveBeneficiaryNumber = localStorage.getItem("_beneficiaryNumber")
    appContainer.innerHTML = (`
    <div class="card home-card">
    <h6>PURCHASE AIRTIME</h6><hr/>
        <form class="tel__input" onSubmit="getRechargeAmount(event)">
           ${ retrieveBeneficiaryNumber}
            <input 
                minlength="1" 
                type="number"
                placeholder="Enter Amount" 
                class="airtime_amount" 
                autocomplete="on" 
                required
                />
            <button class="btn-land" type="submit">Submit</button>
        <form>        
       </div> 
    `)
    
}


const getRechargeAmount = (event) =>{
    event.preventDefault()
    const rechargeAmount = document.querySelector(".airtime_amount").value;
    rechargeAmount && localStorage.setItem("_recharge_amount", rechargeAmount)
    // makeAirtimePayment("airtimeCheckoutPreview")
    airtimeCheckoutPreview()
}

