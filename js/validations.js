let invalidField = 'invalid__fields';
let dateDefault = "";

function validateInitial(initialDate,dateOn,currentDate) {
    let getDateField = $("#initial_date");
    
    if (initialDate != "" && dateOn < currentDate) {
        getDateField.removeClass(invalidField);
        return true;
    }
    else {
        getDateField.addClass(invalidField);
        getDateField.val(dateDefault);
        return false;
    }
}

function validateFinal(finalDate,dateOff,dateOn,currentDate) {
    let getDateOffField = $("#final_date");

    if (finalDate != "" && dateOff > dateOn && dateOff <= currentDate) {
        getDateOffField.removeClass(invalidField);
        return true;
    }
    else {
        getDateOffField.addClass(invalidField);
        getDateOffField.val(dateDefault);
        return false;
    }
}

function validateWage(wageLast) {
    let getWageField = $("#wage_last");

    if (wageLast != "") {
        getWageField.removeClass(invalidField);
        return true;
    }
    else {
        getWageField.addClass(invalidField);
        return false;
    }
}

function validateReason(reasonTermination) {
    let getReasonField = $("#reason_for_termination");

    if (reasonTermination != "Selecione") {
        getReasonField.removeClass(invalidField);
        return true;
    }
    else {
        getReasonField.addClass(invalidField);
        return false;
    }
}

function validateVacation(expiredVacation) {
    let getVacationField = $(".vacation");

    if (expiredVacation != "") {
        getVacationField.removeClass(invalidField);
        return true;
    }
    else {
        getVacationField.addClass(invalidField);
        return false;
    }
}

function validatePrior(priorNotice) {
    let getNoticeField = $(".prior");

    if (priorNotice != "") {
        getNoticeField.removeClass(invalidField);
        return true;
    }
    else {
        getNoticeField.addClass(invalidField);
        return false;
    }
}

function validateInformation(information,dateReference) {

    let alertModal = $(".alert__modal");
    let alertDescription = $(".alert__description");
    let addInvalidClass = "invalid__information";
    let initialDateClass = $('.initial__date');
    let count = 0;

    let dateOn = dateReference.dateOn;
    let dateOff = dateReference.dateOff;
    let currentDate = dateReference.currentDate;
    let initialDate = information.initialDate;
    let finalDate = information.finalDate;
    let wageLast = information.wageLast;
    let reason = information.reasonTermination;
    let vacation = information.expiredVacation;
    let prior = information.priorNotice;
    
    if (!validateInitial(initialDate,dateOn,currentDate)) {
        alertDescription.text("Informe a data inicial!");
        initialDateClass.addClass(addInvalidClass);
        fadeModal(alertModal);
        count++;
    }
    else if (!validateFinal(finalDate, dateOff,dateOn,currentDate)) {
        alertDescription.text("Informe a data de saída!");
        fadeModal(alertModal);
        count++;
    }
    else if (!validateWage(wageLast)) {
        alertDescription.text("Informe o valor do último salário!");
        fadeModal(alertModal);
        count++;
    }
    else if (!validateReason(reason)) {
        alertDescription.text("Selecione o motivo da rescisão!");
        fadeModal(alertModal);
        count++;
    }
    else if (!validateVacation(vacation)) {
        alertDescription.text("Informe se possui férias vencidas!");
        fadeModal(alertModal);
        count++;
    }
    else if (!validatePrior(prior)) {
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