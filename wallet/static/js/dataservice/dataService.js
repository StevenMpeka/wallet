const dataService = () =>{
    // GET USER PROVIDED DETAILS FROM LOCALSTORAGE
    const retrieveNetworkProvider = localStorage.getItem("_networkProviderData")
    const retrieveBeneficiaryNumber = localStorage.getItem("_beneficiaryNumber")

    handlePreviousSection(serviceMenuData); // serviceMenu IS THE PREVIOUS FUNCTION

    // ADD THE CSS STYLE FOR THE SECTION
    appContainer.classList.add("dataPlan__section");

    const showBundles = (
        `
            <div class="card home-card">
            <p>Select your data plan by clicking on the button of the plan you like to buy</p><hr/>
                <button class="btn-land network__btn" onClick="dataPlan('daily', '${retrieveNetworkProvider}', ${retrieveBeneficiaryNumber})">DAILY</button>
                <button class="btn-land network__btn" onClick="dataPlan('weekly', '${retrieveNetworkProvider}', ${retrieveBeneficiaryNumber})">WEEKLY</button>
                <button class="btn-land network__btn" onClick="dataPlan('monthly', '${retrieveNetworkProvider}', ${retrieveBeneficiaryNumber})">MONTHLY</button>
            </div>
        `
    )
    appContainer.innerHTML = showBundles;
};

// THIS FUNCTION PROVIDES THE USER WITH THE AVAILABLE DATA PLAN FOR EACH NETWORK
const dataPlan = (planName) => {

    // ONLY UPDATE THE LOCAL-STORAGE WHEN THERE IS AN INPUT FROM THE USER
    planName && localStorage.setItem("_planName", planName)

    // GET THE PLAN NAME FROM THE LOCALSTORAGE
    const _planName = localStorage._planName

    handlePreviousSection(dataService) // dataService IS THE PREVIOUS FUNCTION
    let serviceProvider;

    switch (localStorage._networkProviderData) { // CHECK THE NETWORK OF THE CUSTOMER AND SWITCH THE DATA PLANS
        case 'airtel':
            serviceProvider = airtelDataPlans;
        case 'mtn':
            serviceProvider = mtnDataPlans;
        case 'glo':
            serviceProvider = gloDataPlans;
        default:
            break;
    }
    // GET THE PLAN BUNDLE WHICH THE USER SELECTED
    const filterOutPlan = serviceProvider.filter((dataBundle)=>dataBundle.plan === _planName);
    appContainer.innerHTML = filterOutPlan.map(({bundleName, price, value}, index)=>{
        const currentServiceProvider = filterOutPlan[index]
        return (`
        <section 
            class="accordion card home-card" 
            id="accordionForDataBundle" 
            onClick="setBundle(${JSON.stringify(currentServiceProvider).split('"').join("&quot;")})">
            <div class="accordion-item">
                <h2 class="accordion-header" id="${bundleName}">
                    <button class="accordion-button btn-land" type="button">
                        ${bundleName}: ${value} - #${price}
                    </button>
                </h2>
            </div>
        </section>
        `)
    }).join("")
    
}

// KEEP TRACK OF THE USER SELECTED BUNDLE
const setBundle = (selectedBundle) =>{

    // ADD THE CLASS NAME FOR THIS SECTION
    appContainer.classList.add("dataPlan__section");

    // STORE BUNDLE TO LOCALSTORAGE
    localStorage.setItem('_bundle', JSON.stringify(selectedBundle))

    // REDIRECT TO THE EMAIL FORM
    dataCheckoutPreview()
}