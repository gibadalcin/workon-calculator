//obtendo os dados do form
let calculateButton = document.querySelector("#calculate");

calculateButton.addEventListener("click", function(event){
    event.preventDefault(); 
    
    //chamando as funções de tratamento de dados 
    let form = document.querySelector(".calculation__form"); 
    let information = getData(form);
    let dateReference = resolveDates(information); 
    let validate = validateInformation(information,dateReference);
    let calculate = resolveCalculate(information, dateReference);
    let dataToSend = toSend(information,calculate, dateReference);
    
    if(validate == 0) {
        calculateButton.onclick = fieldsValidated();
        
        //enviando os valores obtidos para exibição na tabela 
        let dados = JSON.stringify(dataToSend);
        sessionStorage.setItem('dataSend', dados );
    }
    // form.reset();
})

function fieldsValidated() {
    window.location.href='/result.html'
    return;
}

//obtendo os valores dos inputs
function getData(form){
     informations = {
        initialDate:form.initial_date.value,
        finalDate:form.final_date.value,
        wageLast: form.wage_last.value,
        numberDependents:form.number_of_dependents.value,
        reasonTermination:form.reason_for_termination.value,
        expiredVacation: form.expired.value,
        priorNotice: form.notice.value
    }
    return informations;
}

//valores que serão enviados para a tabela 
function toSend(information,calculate, dateReference) {
    send = {
        salaryIncome: calculate.salaryIncome,
        noticeIncome: calculate.noticeIncome,
        vacationsNoticeIncome:calculate.vacationsNoticeIncome,
        vacationsIncome:calculate.VacationsIncome,
        thirteeenthBalance: dateReference.propMonthsOff,
        thirteeenthIncome:calculate.ThirteeenthIncome,
        noticeThirteeenthIncome: calculate.noticeThirteeenthIncome,
        totalEarnings: calculate.earnings,
        totalDiscounts: calculate.discounts,

        expiredVacationsBalance: calculate.expiredVacation,
        expiredVacationsIncome:calculate.expiredVacationsIncome,
        aThirdVacationsIncome:calculate.aThirdVacationsIncome,

        inssSalaryDiscount: calculate.inssSalaryDiscount,
        inssThirteeenthDiscount: calculate.inssThirteeenthDiscount,
        
        salaryBalance: dateReference.days,
        propMonths: dateReference.propMonths,
        compliedPriorNotice: calculate.priorNotice,
        
        percentSalaryInssDiscount: calculate.percentSalaryInssDiscount,
        percentThirteeenthInssDiscount: calculate.percentThirteeenthInssDiscount,
        reasonTermination: information.reasonTermination
    }
    return send;
}













 






