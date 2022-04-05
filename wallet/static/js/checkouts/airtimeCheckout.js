// PROTECT THE SUCCESS PAGE FROM USERS
localStorage.setItem("_openSuccess", false)

const generateTxReg_id = () =>{
    const retrieveNetworkProvider = localStorage.getItem("_networkProvider")
    const retrieveBeneficiaryNumber = localStorage.getItem("_beneficiaryNumber")
    // GET CURRENT TIME AND APPEND CUSTOM ID AND BENEFICIARY PHONE NUMBER
    const today = Date.now()
    const formID = `${retrieveNetworkProvider}_txRech_${retrieveBeneficiaryNumber}&${today}`
    return formID
}


const airtimeCheckoutPreview = () =>{
    
    // GET USER PROVIDED DETAILS FROM THE LOCAL STORAGE
    const retrieveRechargeAmount = localStorage.getItem("_recharge_amount")
    const retrieveNetworkProvider = localStorage.getItem("_networkProvider")
    const retrieveBeneficiaryNumber = localStorage.getItem("_beneficiaryNumber")
    

    const checkoutPage = (
        `
            <div class="card home-card">
                <section class="checkout__body">
                    <p class="transaction_ref">Transaction ID: &nbsp; <span class="ref_id"> </span></p>
                    <section class="checkout__details">
                        <ul>
                            <li>Amount: <span class="checkout__data">#${retrieveRechargeAmount}</span></li>
                            <li>Network Provider: <span class="checkout__data">${retrieveNetworkProvider}</span></li>
                            <li>Service Type: <span class="checkout__data">Airtime</span></li>
                            <li> Phone Number: <span class="checkout__data">${retrieveBeneficiaryNumber}</span></li>
                    </section>
                        <button class="btn-land" onclick="makeAirtimePayment('${generateTxReg_id()}')">Confirm</button>
                </section>
            </div>
        `
    )


    handlePreviousSection(dataPlan); // dataPlan IS THE PREVIOUS FUNCTION
    appContainer.classList.add("dataPlan__section");
    appContainer.innerHTML = checkoutPage
}
