// https://api.flutterwave.com/v3/bill-categories?cables=1
const url = 'https://api.flutterwave.com/v3/bill-categories?cables=1';

let data = {
  name: []
}

let fetchData = {
  method: 'POST',
  body: JSON.stringify(data),
  headers: new Headers({
    'Authorization': `Bearer ${process.env.SECRET_KEY}`,
    'Content-Type': 'application/json; charset=UTF-8'
  })
}

fetch(url, fetchData)
  .then(function(response) {
    // Handle response you get from the API
    return response.json();
  }) .then((data) => {
    let cables = data;
    console.log(cables)
  })
  