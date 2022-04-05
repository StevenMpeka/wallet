

const product = () =>{
    // GET USER NUMBER
    const price = (
        `
        
        `
    )
   
    document.getElementById('price').innerHTML = price;
}

const getEnteredValues = (event) =>{
    event.preventDefault()
    const enteredPrice = document.querySelector(".priceValue").value;
    enteredPrice && localStorage.setItem("_enteredPrice", enteredPrice)
    
}