

function validateInitial(initialDate) {
    if (initialDate != "") {
        $("#initial_date").removeClass('invalid__fields');
        return true;
    }
    else {
        $("#initial_date").addClass('invalid__fields');
        return false;
    }
}

function validateFinal(finalDate) {
    if (finalDate != "") {
        $("#final_date").removeClass('invalid__fields');
        return true;
    }
    else {
        $("#final_date").addClass('invalid__fields');
        return false;
    }
}

function validateWage(wageLast) {
    if (wageLast != "") {
        $("#wage_last").removeClass('invalid__fields');
        return true;
    }
    else {
        $("#wage_last").addClass('invalid__fields');
        return false;
    }
}

function validateReason(reasonTermination) {
    if (reasonTermination != "Selecione") {
        $("#reason_for_termination").removeClass('invalid__fields');
        return true;
    }
    else {
        $("#reason_for_termination").addClass('invalid__fields');
        return false;
    }
}

function validateVacation(expiredVacation) {
    if (expiredVacation != "") {
        $(".vacation").removeClass('invalid__fields');
        return true;
    }
    else {
        $(".vacation").addClass('invalid__fields');
        return false;
    }
}

function validatePrior(priorNotice) {
    if (priorNotice != "") {
        $(".prior").removeClass('invalid__fields');
        return true;
    }
    else {
        $(".prior").addClass('invalid__fields');
        return false;
    }
}


function validateInformation(information) {

    let alertModal = $(".alert__modal");
    let alertDescription = $(".alert__description");
    let count = 0;

    if (!validateInitial(information.initialDate)) {
        alertDescription.text("Informe a data inicial!");
        $('.initial__date').addClass("invalid__information")
        fadeModal(alertModal);
        count++;
    }
    else if (!validateFinal(information.finalDate)) {
        alertDescription.text("Informe a data de saída!");
        fadeModal(alertModal);
        count++;
    }
    else if (!validateWage(information.wageLast)) {
        alertDescription.text("Informe o valor do último salário!");
        fadeModal(alertModal);
        count++;
    }
    else if (!validateReason(information.reasonTermination)) {
        alertDescription.text("Selecione o motivo da rescisão!");
        fadeModal(alertModal);
        count++;
    }
    else if (!validateVacation(information.expiredVacation)) {
        alertDescription.text("Informe se possui férias vencidas!");
        fadeModal(alertModal);
        count++;
    }
    else if (!validatePrior(information.priorNotice)) {
        alertDescription.text("Informe se cumpriu o aviso prévio!");
        fadeModal(alertModal);
        count++;
    }

    return count;


}


function fadeModal(alertModal) {
    alertModal.fadeIn(200).addClass('invisible');
    setTimeout(function () {
        alertModal.addClass('invisible').fadeOut(200);
    }, 3000);
}