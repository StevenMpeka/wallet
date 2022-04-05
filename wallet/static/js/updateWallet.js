const updateWallet = () => {
let userId = dataset.userId
fetch(`/wallet/${userId}/balance`).then(data => {
    return data.json();
}).then(completedata => {
    console.log(completedata)
    let items = "";
    completedata.map(item => {
        items = `
        <div>
        <h5><strong style="color:black";>${item.balance}</strong></h5>
        <p>Wallet Balance</p>
        <p>Previous Balance : ${item.balance}</p>
        </div>
        `
    })
    document.getElementById("balance").innerHTML = items
}).catch(err => {
    console.log(err)
})
}