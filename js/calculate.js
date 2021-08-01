
function resolveCalculate(information, dateReference) {
    let propMonths = dateReference.propMonths;
    let days = dateReference.days;
    let years = dateReference.years;
    let wageLast = information.wageLast;
    let reasonTermination = information.reasonTermination;
    let priorNotice = information.priorNotice;
    let expiredVacation = information.expiredVacation;
    //valor do último salário
    let formatSalary = parseFloat(wageLast);
    console.log(formatSalary);
    let salary = formatSalary;


    //cálculo saldo salário 
    let lastSalary = salary * (days / 30);

    //cálculo do aviso prévio indenizado
    let addMonths = 0;
    let avi;
    if (priorNotice == "Não") {
        for (var i = 0; i < years; i++) {
            addMonths = addMonths + 3;
        };
        priorNotice = "Sim";
        avi = salary * ((30 + addMonths) / 30);
        if (reasonTermination == "Pedido de Demissão"
            || reasonTermination == "Por Justa Causa") {
            priorNotice = "Não";
            avi = 0;
        }
    } else {
        priorNotice = "Não";
        avi = 0;
    }

    //cálculo 1/3 de férias e férias vencidas
    let oneThreeVacations;
    let oneExpiredVacations;
    if (expiredVacation == "Sim" && years >= 1) {
        oneThreeVacations = (salary * 1 / 3);
        oneExpiredVacations = salary + (oneThreeVacations);
        expiredVacation = "Sim";
    } else {
        oneThreeVacations = 0;
        oneExpiredVacations = 0;
        expiredVacation = "Não";
    }

    //cálculo férias proporcionais e sobre aviso prévio
    //cálculo 13° proporcional e sobre aviso prévio
    let proportionalVacations;
    let proportionalNoticeVacations;
    let thirteeenthProportional;
    let thirteeenthNotice;

    switch (reasonTermination) {
        case "Por Justa Causa":
            proportionalVacations = 0;
            proportionalNoticeVacations = 0;
            thirteeenthProportional = 0;
            thirteeenthNotice = 0;
            break;

        case "Pedido de Demissão":
            proportionalVacations = propMonths / 12 * (salary + (oneThreeVacations));
            proportionalNoticeVacations = 0;
            thirteeenthProportional = (propMonths / 12) * salary;
            thirteeenthNotice = 0;
            break;

        case "Sem Justa Causa":
            proportionalVacations = propMonths / 12 * (salary + (oneThreeVacations));
            proportionalNoticeVacations = 1 / 12 * (salary + (oneThreeVacations));
            thirteeenthProportional = (propMonths / 12) * salary;
            if (priorNotice == "Sim") {
                thirteeenthNotice = (1 / 12) * salary;
            } else {
                proportionalNoticeVacations = 0;
                thirteeenthNotice = 0;
            }
            break;
        case "Consensual":
            proportionalVacations = propMonths / 12 * (salary + (oneThreeVacations));
            proportionalNoticeVacations = 1 / 12 * (salary + (oneThreeVacations));
            thirteeenthProportional = (propMonths / 12) * salary;
            thirteeenthNotice = (1 / 12) * salary;
            break;
    }

    //cálculo desconto INSS sobre saldo salário e percentual sobre faixa salarial
    let inssAdjusts;
    let percentCalculateSalary;
    let percentSalaryShow;

    if (lastSalary > 0 && lastSalary <= 1100) {
        percentCalculateSalary = 0.075;
        percentSalaryShow = 7.5;
        inssAdjusts = percentCalculateSalary * lastSalary;
    }
    else if (lastSalary > 1100 && lastSalary <= 2203.48) {
        percentCalculateSalary = 0.09;
        percentSalaryShow = 9;
        inssAdjusts = percentCalculateSalary * lastSalary;
    }
    else if (lastSalary > 2203.48 && lastSalary <= 3305.22) {
        percentCalculateSalary = 0.12;
        percentSalaryShow = 12;
        inssAdjusts = percentCalculateSalary * lastSalary;
    }
    else if (lastSalary > 3305.22) {
        percentCalculateSalary = 0.14;
        percentSalaryShow = 14;
        inssAdjusts = percentCalculateSalary * lastSalary;
    } else inssAdjusts = 0;


    //cálculo desconto INSS sobre 13° salário e percentual sobre faixa salarial
    let inssThirteeenthAdjusts;
    let percentCalculateThirteeenth;
    let percentThirteeenthShow;

    if (thirteeenthProportional > 0 && thirteeenthProportional <= 1100) {
        percentCalculateThirteeenth = 0.075;
        percentThirteeenthShow = 7.5;
        inssThirteeenthAdjusts = percentCalculateThirteeenth * thirteeenthProportional;
    }
    else if (thirteeenthProportional > 1100 && thirteeenthProportional <= 2203.48) {
        percentCalculateThirteeenth = 0.09;
        percentThirteeenthShow = 9;
        inssThirteeenthAdjusts = percentCalculateThirteeenth * thirteeenthProportional;
    }
    else if (thirteeenthProportional > 2203.48 && thirteeenthProportional <= 3305.22) {
        percentCalculateThirteeenth = 0.12;
        percentThirteeenthShow = 12;
        inssThirteeenthAdjusts = percentCalculateThirteeenth * thirteeenthProportional;
    }
    else if (thirteeenthProportional > 3305.22) {
        percentCalculateThirteeenth = 0.14;
        percentThirteeenthShow = 14;
        inssThirteeenthAdjusts = percentCalculateThirteeenth * thirteeenthProportional;
    } else inssThirteeenthAdjusts = 0;


    //cálculo total de proventos e descontos
    let earning;
    let discount;
    switch (reasonTermination) {

        case "Consensual":
            earning = (
                lastSalary
                + avi
                + proportionalNoticeVacations
                + proportionalVacations
                + thirteeenthProportional
                + thirteeenthNotice
                + oneExpiredVacations
                + oneThreeVacations
            )
            discount = (
                inssAdjusts
                + inssThirteeenthAdjusts
            )
            earning = earning - discount;
            break;

        case "Sem Justa Causa":
            earning = (
                lastSalary
                + avi
                + proportionalNoticeVacations
                + proportionalVacations
                + thirteeenthProportional
                + thirteeenthNotice
                + oneExpiredVacations
                + oneThreeVacations
            )
            discount = (
                inssAdjusts
                + inssThirteeenthAdjusts
            )
            earning = earning - discount;
            break;

        case "Pedido de Demissão":
            earning = (
                lastSalary
                + oneExpiredVacations
                + oneThreeVacations
                + proportionalVacations
                + thirteeenthProportional
            )
            discount = (
                inssAdjusts
                + inssThirteeenthAdjusts
            )
            earning = earning - discount;
            break;

        case "Por Justa Causa":
            earning = (
                lastSalary
                + oneExpiredVacations
                + oneThreeVacations
            )
            discount = (
                inssAdjusts
                + inssThirteeenthAdjusts
            )
            earning = earning - discount;
            break;
    }

    salaryValues = {
        salaryIncome: lastSalary,
        noticeIncome: avi,
        vacationsNoticeIncome: proportionalNoticeVacations,
        VacationsIncome: proportionalVacations,
        ThirteeenthIncome: thirteeenthProportional,
        noticeThirteeenthIncome: thirteeenthNotice,

        earnings: earning,
        discounts: discount,

        expiredVacationsIncome: oneExpiredVacations,
        aThirdVacationsIncome: oneThreeVacations,

        inssSalaryDiscount: inssAdjusts,
        inssThirteeenthDiscount: inssThirteeenthAdjusts,

        percentSalaryInssDiscount: percentSalaryShow,
        percentThirteeenthInssDiscount: percentThirteeenthShow,
        priorNotice: priorNotice,
        expiredVacation: expiredVacation
    }
    return salaryValues;

}
