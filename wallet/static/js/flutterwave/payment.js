const makePayment = (transaction_ref) =>{
    // ENABLE THE SUCCESS PAGE
    localStorage.setItem("_openSuccess", true)

    // GET BENEFICIARY NUMBER FROM THE LOCAL STORAGE
    const retrieveBeneficiaryNumber = localStorage.getItem("_beneficiaryNumber")
   

    // GET PURCHASE DETAILS FROM THE LOCAL STORAGE
    const  { price, bundleName, value} = JSON.parse(localStorage.getItem("_bundle"))
    FlutterwaveCheckout({
        public_key: process.private.PAYMENT_KEY,
        tx_ref: transaction_ref,
        amount: price,
        currency: "NGN",
        country: "NG",
        payment_options: "card, mobilemoneyghana, ussd",
        redirect_url: // REDIRECT TO SUCCESS PAGE
        "./../../../public/success.html",
        customer: {
            email:'test@gmail.com',
            phone_number: retrieveBeneficiaryNumber,
            name: retrieveBeneficiaryNumber,
        },
        callback: function (data) {
            localStorage.clear()
        },
        onclose: function() {
        // WHAT SHOULD HAPPEN WHEN THE MODAL CLOSES
        },
        customizations: {
           
            description: `Payment of ${price} for ${bundleName} ${value}`,
            
        },
    });
}
