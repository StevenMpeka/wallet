const Admin = () => {
    fetch(`/response`).then(data => {
        return data.json()
    }).then(tableData => {
        let tables = ""
        tableData.createWalletTransaction.map(table => {
            tables = `
            <div>
            <td>${table.transactionId}</td>
            <td>${table.description}</td>
            <td>${table.status}</td>
            <td>${table.action}</td>
            </div>
            `
        })
        document.getElementById("transactionTable").innerHTML = tables
    }).catch(err => {
        console.log(err)
    })
}