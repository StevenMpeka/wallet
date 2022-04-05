// PROTECT THE SUCCESS PAGE FROM USERS
localStorage.setItem("_openSuccess", false)

const generateTxTab_id = () =>{
    const retrieveFundAmount = localStorage.getItem("jwt")

    // GET CURRENT TIME AND APPEND CUSTOM ID AND BENEFICIARY PHONE NUMBER
    const today = Date.now()
    const formID = `_txRech_${retrieveFundAmount}&${today}`
    return formID
}


const transactionCheckoutPreview = () =>{
    
    // GET USER PROVIDED DETAILS FROM THE LOCAL STORAGE
    const retrieveFundAmount = localStorage.getItem("_fund_amount")

    const checkoutPage = (
        `
            <div class="card home-card">
                <section class="checkout__body">
                    <p class="transaction_ref">Transaction ID: &nbsp; <span class="ref_id"> </span></p>
                    <section class="checkout__details">
                        <ul>
                            <li>Amount: <span class="checkout__data">#${retrieveFundAmount}</span></li>
                    </section>
                        <button class="btn-land" onclick="transactionPayment('${generateTxTab_id()}')">Confirm</button>
                </section>
            </div>
        `
    )


    // handlePreviousSection(dataPlan); // dataPlan IS THE PREVIOUS FUNCTION
    appContainer.classList.add("dataPlan__section");
    appContainer.innerHTML = checkoutPage
}
