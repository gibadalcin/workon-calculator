

var calculateButton = document.querySelector("#calculate");
 
calculateButton.addEventListener("click", function(event){
    event.preventDefault();
    alert("teste")
    var form = document.querySelector(".calculation__form"); 
    var information = getData(form);
    var errors = validateInformation(information);
    console.log(information);

        addValues(information);
        form.reset();
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

function validateInformation(information){
    var alertModal = $(".alert__modal");
    var alertDescription = $(".alert__description");
    var errors = [];  
    if(!validateInitial(information.initialDate)) {
        alertDescription.text("Informe a data inicial!") ;
        $('.initial__date').addClass("invalid__information")
        fadeModal(alertModal);
    } 
    if(!validateFinal(information.finalDate)) {
        alertDescription.text("Informe a data de saída!");
        fadeModal(alertModal); 
    }  
    if(!validateWage(information.wageLast)){
        alertDescription.text("Informe o valor do último salário!");
        fadeModal(alertModal);   
    }
    if(!validateReason(information.reasonTermination)){
        alertDescription.text("Selecione o motivo da rescisão!");
        fadeModal(alertModal); 
    }    
    if(!validateVacation(information.expiredVacation)) {
        alertDescription.text("Informe se possui férias vencidas!");
        fadeModal(alertModal);   
    }  
    if(!validatePrior(information.priorNotice)) {
        alertDescription.text("Informe se cumpriu o aviso prévio!");
        fadeModal(alertModal); 
        
    }
    return errors;
}

function fadeModal(alertModal) {
    alertModal.fadeIn(200).removeClass('invisible');
    setTimeout(function(){
        alertModal.addClass('invisible').fadeOut(200);
    },3000);  
}




