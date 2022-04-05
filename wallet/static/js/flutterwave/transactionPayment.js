const transactionPayment = (transaction_ref) =>{
    // ENABLE THE SUCCESS PAGE
    localStorage.setItem("_openSuccess", true)

    // GET PURCHASE DETAILS FROM THE LOCAL STORAGE
    const retrieveFundAmount = localStorage.getItem("_fund_amount")


        FlutterwaveCheckout({
          public_key: "FLWPUBK-1199deed2ab876b2bc5f8394ef433b59-X",
          tx_ref: transaction_ref,
          amount: retrieveFundAmount,
          currency: "NGN",
          country: "NG",
          payment_options: "card",

          // specified redirect URL
          redirect_url: "http://localhost:4001/response",

          // use customer details if user is not logged in, else add user_id to the request
          customer: {
            email: "test@gmail.com",
            name: "Patrick",
          },
          callback: function (data) {
            console.log(data);
          },
          onclose: function () {
            // close modal
          },
          customizations: {
            title: "Flutterwave",
            description: "Flutterwave Payment",
            logo: "https://cdn.iconscout.com/icon/premium/png-256-thumb/payment-2193968-1855546.png",
          },
        });
      
}
