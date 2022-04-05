const transactionService = () =>{
    appContainer.innerHTML = (`
    <form action="/response" onSubmit="getFundAmount(event)">
      <div class="card home-card">
        <div class="card-content">
            <div>
            <p>
                -Make payment using your card. You will be required to securely fill
                in your card information. Please follow all instructions carefully and
                your wallet will be funded immediately and automatically once completed successfully
            </p>
                </div>
                <input 
                minlength="1" 
                type="number"
                name="Amount"
                placeholder="Enter Amount" 
                class="number-input" 
                autocomplete="on" 
                required
                />
      <button class="btn-land" type="submit">Submit</button>
      </div>
    </form>
    `)
    
}


const getFundAmount = (event) =>{
    event.preventDefault()
    const fundAmount = document.querySelector(".number-input").value;
    fundAmount && localStorage.setItem("_fund_amount", fundAmount)
    // transactionPayment("transactionCheckoutPreview")
    transactionCheckoutPreview()
}

