

var calculateButton = document.querySelector("#calculate");
 
calculateButton.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector(".calculation__form"); 
    var information = getData(form);
    console.log(information);

    if(errors.length > 0){    
        showErrors(errors);
        return;
    }
        addValues(information);
        form.reset();
})



function getData(form){
    let informations = {
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


