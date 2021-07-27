
let calculateButton = document.querySelector("#calculate");


calculateButton.addEventListener("click", function(event){
    event.preventDefault();

    let form = document.querySelector(".calculation__form"); 
    let information = getData(form);
    
    resolveDates(information);
    console.log(dateReferences.days)

    resolveCalculate(information);
    console.log(salaryValue.lastSalary)

    let dataToSend = toSend();

    let dados = JSON.stringify(dataToSend);
    sessionStorage.setItem('dataSend', dados );


    
    /*if(validateInformation(information)) {
        
        let dateReferences = resolveDate(information.initialDate,information.finalDate);

        form.reset();
    }*/
})


function getData(form){
     informations = {
        initialDate:form.initial_date.value,
        finalDate:form.final_date.value,
        wageLast:form.wage_last.value,
        numberDependents:form.number_of_dependents.value,
        reasonTermination:form.reason_for_termination.value,
        expiredVacation: form.expired_vacations.value,
        priorNotice: form.prior_notice.value  
    }
    return informations;
}



function resolveDates(information) {

    let dateOn = new Date(information.initialDate);
    let dateOff = new Date(information.finalDate);

    let monthOn = dateOn.getMonth() + 1;
    let monthOff = dateOff.getMonth() + 1;
    let monthDiff = monthOff - monthOn;
    while(monthDiff > 12) {
        monthDiff = monthDiff / 12;
    }
    
        dateReferences = {
            days: dateOff.getDate() + 1,
            months: monthDiff
        }
    
    return dateReferences;  
}


function resolveCalculate (information) {  

    salaryValue = {
        lastSalary : information.wageLast
    }

    return salaryValue;
}


function toSend() {
    send = {
        salaryBalance: dateReferences.days,
        expiredVacationsBalance: informations.expiredVacation,
        proportionalMonths: dateReferences.months,
        compliedPriorNotice: informations.priorNotice ,
        salaryValue: salaryValue.lastSalary
    }
    return send;
}













 






