function inputvalueByID(id) {
    return Number(document.getElementById(id).value);
}

function valueFormText(id) {
    const value = document.getElementById(id).innerText;
    return Number(value);
}
let GrandTotal = valueFormText("grand-total");


const historySection = document.getElementById("History-section");
const donationSection = document.getElementById("donation-section") ;
const historyBtn = document.getElementById("history-btn") ;
const donationBtn = document.getElementById("donation-btn") ;

historyBtn.addEventListener('click', function(){
    historyBtn.classList.add("bg-btnPrimary")
    donationSection.classList.add("hidden");
    historySection.classList.remove("hidden") ;
    donationBtn.classList.remove("bg-btnPrimary");
});

donationBtn.addEventListener('click', function(){
    donationBtn.classList.add("bg-btnPrimary");
    historySection.classList.add("hidden");
    historyBtn.classList.remove("bg-btnPrimary") ;
    donationSection.classList.remove("hidden");
});



document.getElementById("donate-noakhali").addEventListener("click", function () {

    const donateAmount = inputvalueByID("amount-noakhali");
    if (donateAmount <= 0) {
        alert("Please enter a valid amount");
        document.getElementById("amount-noakhali").value = "";
        return;
    }
    else if (donateAmount >GrandTotal) {
        alert("You don't have enough balance to donate this amount");
        document.getElementById("amount-noakhali").value = "";
        return;
    }
    else {
        const noakhaliTotal = valueFormText("noakhali-total");
        const noakhaliAmount = noakhaliTotal + donateAmount;
        document.getElementById("noakhali-total").innerText = noakhaliAmount;
        GrandTotal = GrandTotal - donateAmount;
        document.getElementById("grand-total").innerText = GrandTotal;

        const div = document.createElement('div') ;
        div.classList.add("w-11/12", "mx-auto","border-2" ,"rounded-lg" ,"shadow-xl", "px-5", "py-3") ;
        div.innerHTML = ` <h2 class="text-xl font-semibold opacity-90">${donateAmount} Taka is donated for Donate for Flood at Noakhali, Bangladesh</h2>
                        <p class="text-md opacity-80">Date: ${Date()} </p>`
        console.log(div);
        historySection.insertBefore(div, historySection.firstChild);
    }

});

document.getElementById("donate-feni").addEventListener("click", function () {

    const donateAmount = inputvalueByID("amount-feni");
    if (donateAmount <= 0) {
        alert("Please enter a valid amount");
        document.getElementById("amount-noakhali").value = "";
        return;
    }
    else if (donateAmount >GrandTotal) {
        alert("You don't have enough balance to donate this amount");
        document.getElementById("amount-noakhali").value = "";
        return;
    }
    else{

        const noakhaliTotal = valueFormText("feni-total");
        const feniAmount = noakhaliTotal + donateAmount;
        document.getElementById("feni-total").innerText = feniAmount;
        GrandTotal = GrandTotal - donateAmount;
        document.getElementById("grand-total").innerText = GrandTotal;
    
        const div = document.createElement('div') ;
        div.classList.add("w-11/12", "mx-auto","border-2" ,"rounded-lg" ,"shadow-xl", "px-5", "py-3") ;
        div.innerHTML = ` <h2 class="text-xl font-semibold opacity-90">${donateAmount} Taka is donated for Donate for Flood Relief in Feni,Bangladesh</h2>
                        <p class="text-md opacity-80">Date: ${Date()} </p>`
        console.log(div);
        historySection.insertBefore(div, historySection.firstChild);
    }


});

document.getElementById("donate-qouta").addEventListener("click", function () {

    const donateAmount = inputvalueByID("amount-quota");
    if (donateAmount <= 0) {
        alert("Please enter a valid amount");
        document.getElementById("amount-noakhali").value = "";
        return;
    }
    else if (donateAmount >GrandTotal) {
        alert("You don't have enough balance to donate this amount");
        document.getElementById("amount-noakhali").value = "";
        return;
    }

    else{

        const noakhaliTotal = valueFormText("quota-total");
        const noakhaliAmount = noakhaliTotal + donateAmount;
        document.getElementById("qouta-total").innerText = noakhaliAmount;
        GrandTotal = GrandTotal - donateAmount;
        document.getElementById("grand-total").innerText = GrandTotal;
    
        const div = document.createElement('div') ;
        div.classList.add("w-11/12", "mx-auto","border-2" ,"rounded-lg" ,"shadow-xl", "px-5", "py-3") ;
        div.innerHTML = ` <h2 class="text-xl font-semibold opacity-90">${donateAmount} Taka is donated for Aid for Injured in the Quota Movement</h2>
                        <p class="text-md opacity-80">Date: ${Date()} </p>`
        console.log(div);
        historySection.insertBefore(div, historySection.firstChild);
    }


});