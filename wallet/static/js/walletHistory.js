const walletHistory = () => {
    fetch("/response").then(data => {
        return data.json()
    }).then(tableData => {
        let tables = ""
        tableData.map(item => {
            tables = `
            <table class="card home-card-table">
          <div class="card home-card">
          <div class="sub-btns">
            <button class="btn">
              Wallet ID 
              </button>
            <button class="btn" onClick="transactionService()">
              +  Fund
              </button>
          </div>
        </div>
            <caption>Wallet History</caption>
            <tr class="table">
              <th style="padding: 10px;">REFERENCE</th>
              <th style="padding: 10px;">AMOUNT</th>
              <th style="padding: 10px;">DESCRIPTION</th>
              <th style="padding: 10px;">TYPE</th>
            </tr>
            <tr>
              <td>${item.transactionId}</td>
              <td>${item.amount}</td>
              <td>${item.description}</td>
              <td>${item.status}</td>
            </tr>
            <tr>
              <td>hello</td>
              <td>hello</td>
              <td>hello</td>
              <td>hello</td>
            </tr>
            <tr>
              <td>hello</td>
              <td>hello</td>
              <td>hello</td>
              <td>hello</td>
            </tr>
            <tr>
                <td>hello</td>
                <td>hello</td>
                <td>hello</td>
                <td>hello</td>
              </tr>
          </table>
            `
        })
        document.getElementById("wallet").innerHTML = tables
    }).catch(err => {
        console.log(err)
    })
}