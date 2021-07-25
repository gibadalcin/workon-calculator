
function validateInitial(initialDate){
    if(initialDate != "")  {
        $("#initial_date").removeClass('invalid__fields');
        return true;
    }      
    else {
        $("#initial_date").addClass('invalid__fields');
        return false;
    }
}

function validateFinal(finalDate){
    if(finalDate != "" ) {
        $("#final_date").removeClass('invalid__fields');
        return true;
    }      
    else {
        $("#final_date").addClass('invalid__fields');
        return false;
    }
}

function validateWage(wageLast){
    if(wageLast > 0){
        $("#wage_last").removeClass('invalid__fields');
        return true;
    }      
    else {
        $("#wage_last").addClass('invalid__fields');
        return false;
    }
}

function validateReason(reasonTermination){
    if(reasonTermination != "Selecione") {
        $("#reason_for_termination").removeClass('invalid__fields');
        return true;
    }      
    else {
        $("#reason_for_termination").addClass('invalid__fields');
        return false;
    }
}

function validateVacation(expiredVacation){
    if(expiredVacation != "") {
        $(".vacation").removeClass('invalid__fields');
        return true;
    }      
    else {
        $(".vacation").addClass('invalid__fields');
        return false;
    }
}

function validatePrior(priorNotice){
    if(priorNotice != "") {
        $(".prior").removeClass('invalid__fields');
        return true;
    }      
    else {
        $(".prior").addClass('invalid__fields');
        return false;
    }
}

/*
function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}*/