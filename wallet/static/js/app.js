const appContainer = document.querySelector(".app__container"); 
// const previousButton = document.querySelector(".back__btn"); 

const handlePreviousSection = (callback) =>{
    // previousButton.style.display = "block";
    // previousButton.addEventListener('click', ()=>callback())
}


// GET USER NETWORK TYPE 
const getNetworkType = () =>{
    handlePreviousSection(init) // init IS THE PREVIOUS FUNCTION
    appContainer.innerHTML = (`
    <div class ="card home-card">
    <button class="btn-land network__btn" onClick="serviceMenu('mtn')">MTN</button>
    <button class="btn-land network__btn" onClick="serviceMenu('airtel')">AIRTEL</button>
    <button class="btn-land network__btn" onClick="serviceMenu('glo')">GLO</button>
    <button class="btn-land network__btn" onClick="serviceMenu('9-mobile')">9-MOBILE</button>
    </div>
    `)
}

// GET USER NETWORK TYPE 
const getNetworkDataType = () =>{
    handlePreviousSection(initData) // init IS THE PREVIOUS FUNCTION
    appContainer.innerHTML = (`
    <div class ="card home-card">
    <button class="btn-land network__btn" onClick="serviceMenuData('mtn')">MTN</button>
    <button class="btn-land network__btn" onClick="serviceMenuData('airtel')">AIRTEL</button>
    <button class="btn-land network__btn" onClick="serviceMenuData('glo')">GLO</button>
    <button class="btn-land network__btn" onClick="serviceMenuData('9-mobile')">9-MOBILE</button>
    </div>
    `)
}

// DISPLAY MENU TO USER
const serviceMenu = (networkType) =>{
    handlePreviousSection(getNetworkType) // getNetworkType IS THE PREVIOUS FUNCTION
    networkType && localStorage.setItem("_networkProvider", networkType)
    const retrieveBeneficiaryNumber = localStorage.getItem("_beneficiaryNumber")
    const retrieveNetworkProvider = localStorage.getItem("_networkProvider")
    appContainer.innerHTML = (`
        <div class="card home-card">
        <p>${retrieveNetworkProvider} Airtime will be funded in ${retrieveBeneficiaryNumber} phone number,click proceed button to Enter amount</p>
            <button class="btn-land menu__btn" onClick="airtimeService()">Proceed</button>
        </div>
    `)
}

// DISPLAY MENU TO USER DATA
const serviceMenuData = (networkDataType) =>{
    handlePreviousSection(getNetworkDataType) // getNetworkType IS THE PREVIOUS FUNCTION
    networkDataType && localStorage.setItem("_networkProviderData", networkDataType)
    const retrieveBeneficiaryNumber = localStorage.getItem("_beneficiaryNumber")
    const retrieveNetworkProvider = localStorage.getItem("_networkProviderData")
    appContainer.innerHTML = (`
        <div class="card home-card">
        <p>${retrieveNetworkProvider} Data will be funded in ${retrieveBeneficiaryNumber} phone number,click proceed button to Enter amount</p>
            <button class="btn-land menu__btn" onClick="dataService()">Proceed</button>
        </div>
    `)
}


// GET BENEFICIARY PHONE NUMBER
const getPhoneNumber = (event) =>{
    event.preventDefault()
    const beneficiaryNumber = document.querySelector(".phone__number").value;
    beneficiaryNumber && localStorage.setItem("_beneficiaryNumber", beneficiaryNumber)
    getNetworkType()
    
}

// GET BENEFICIARY PHONE NUMBER
const getDataPhoneNumber = (event) =>{
    event.preventDefault()
    const beneficiaryNumber = document.querySelector(".phone__number").value;
    beneficiaryNumber && localStorage.setItem("_beneficiaryNumber", beneficiaryNumber)
    getNetworkDataType()
    
}

// APP INIT
const init = () =>{
    // GET USER NUMBER
    const getBeneficiaryNumber = (
        `
            <form class="tel__input card home-card" onSubmit="getPhoneNumber(event)">
                <input value="" type="tel" pattern="[0-9]{11}" maxlength="12" minlength="11" placeholder="Enter phone number" class="phone__number" autocomplete="on" />
                <button class="btn-land" type="submit">Proceed</button>
            <form>
        `
    )
   
    appContainer.classList.add("phone__section");
    appContainer.innerHTML = getBeneficiaryNumber;
}
// APP INIT
const initData = () =>{
    // GET USER NUMBER
    const getBeneficiaryNumber = (
        `
            <form class="tel__input card home-card" onSubmit="getDataPhoneNumber(event)">
                <input value="" type="tel" pattern="[0-9]{11}" maxlength="12" minlength="11" placeholder="Enter phone number" class="phone__number" autocomplete="on" />
                <button class="btn-land" type="submit">Proceed</button>
            <form>
        `
    )
   
    appContainer.classList.add("phone__section");
    appContainer.innerHTML = getBeneficiaryNumber;
}

