
function resolveCalculate(information, dateReference) {
    const yes = "Sim";
    const not = "Não";

    const zeroBase = 0;
    const dayMonthBase = 30;
    const monthsBase = 12;

    const salaryRangeBase = 0;
    const salaryRangeOne = 1100;
    const salaryRangeTwo = 2203.48;
    const salaryRangeThree = 3305.22;

    const percentRangeOne = 0.075;
    const percentRangeTwo = 0.09;
    const percentRangeThree = 0.12;
    const percentRangeFour = 0.14;

    const percentShowOne = 7.5;
    const percentShowTwo = 9;
    const percentShowThree = 12;
    const percentShowFour = 14;

    const reasonOne = "Acordo";
    const reasonTwo = "Pedido de Demissão";
    const reasonThree = "Por Justa Causa";
    const reasonFour = "Sem Justa Causa";

    let propMonths = dateReference.propMonths;
    let propMonthsCurrent = dateReference.propMonthsOff;
    let days = dateReference.days;
    let years = dateReference.years;
    
    let reasonTermination = information.reasonTermination;
    let salary = lastSalaryFormat(information.wageLast);
    let lastSalary = salaryBalance(salary,days);

    let objectNotice = notice(information.priorNotice,years,reasonTermination);
    let noticeStatus = objectNotice.status;
    let noticeValue = objectNotice.value; 

    let objectExpired = expiredVacations(information.expiredVacation,years,salary);
    let expiredAThird = objectExpired.aThird;
    let expiredOneVacation = objectExpired.oneVacation;
    let expiredVacationStatus = objectExpired.vacationStatus; 

    let objectProportional = propVacations(reasonTermination,salary,expiredAThird, propMonths,noticeStatus);
    let proportionalVacations = objectProportional.vacations;
    let proportionalNoticeVacations = objectProportional.noticeVacations;

    let objectProportional13 = prop13(propMonthsCurrent,salary,noticeStatus,reasonTermination);
    let proportional13Value = objectProportional13.value;
    let proportional13Notice = objectProportional13.notice;

    let objectPercent = inssBalance(lastSalary);
    let percentInssAdjusts = objectPercent.adjusts;
    let percentInssShow = objectPercent.salaryShow;

    let objectPercent13 = inss13(proportional13Value);
    let percent13InssAdjusts = objectPercent13.adjusts;
    let percent13InssShow = objectPercent13.salary13Show;
    
    let objectTotal = total(reasonTermination);
    let earning = objectTotal.earning;
    let discount = objectTotal.discount;

    console.log(propMonths)
    // formatando valor do último salário
    function lastSalaryFormat(wageLast) {
        let formatSalary = parseFloat(wageLast);
        return formatSalary;
    }
   
    //cálculo saldo salário 
    function salaryBalance(salary,days) {
        let lastSalary = salary * (days / dayMonthBase);
        return lastSalary;
    }

    //cálculo do aviso prévio indenizado
    function notice(status,years,reason) {
        let addMonths = zeroBase;
        let value = zeroBase;
        if (status == not) {
            for (var i = 0; i < years; i++) {
                addMonths += 3;
            };
            status = yes;
            value = salary * ((dayMonthBase + addMonths) / dayMonthBase);
            if (reason == reasonTwo || reason == reasonThree ) {
                status = not;
                value;
            }
        } else {
            if (status == yes) {
                value = salary * ((dayMonthBase + addMonths) / dayMonthBase);
            }
            status = not;
            value;
        }

        result = {
            value: value,
            status: status
        }
        return result;
    }
    
    //cálculo 1/3 de férias e férias vencidas
    function expiredVacations(status, years, salary) {
        let aThird = zeroBase;
        let oneVacation = zeroBase;
        if (status == yes && years >= 1) {
            aThird = (salary * 1 / 3);
            oneVacation = salary + (aThird);
            status = yes;
        } else {
            aThird = zeroBase;
            oneVacation = zeroBase;
            status = not;
        }

        result = {
            aThird: aThird,
            oneVacation: oneVacation,
            vacationStatus: status
        }
        return result;
    }

    //cálculo férias proporcionais e ferias sobre aviso prévio
    function propVacations(reason,salary,aThird,months,status) {
        let vacation = zeroBase;
        let notice = zeroBase;
        switch(reason) {
            case reasonOne:
                    vacation = months / monthsBase * (salary + (aThird));
                    if(status == yes) notice = 1 / monthsBase * (salary + (aThird));
                    else notice;
                    break;

            case reasonTwo:
                    vacation = months / monthsBase * (salary + (aThird));
                    notice;
                    break;

            case reasonThree:
                    vacation;
                    notice;
                    break;

            case reasonFour:
                    vacation = months / monthsBase * (salary + (aThird));
                    if(status == yes) notice = 1 / monthsBase * (salary + (aThird));
                    else notice;
                    break;
        }
        result = {
            vacations: vacation,
            noticeVacations: notice
        }
        return result;
    }
   
    //cálculo 13° proporcional e sobre aviso prévio
    function prop13(months,salary,status,reason) {
        let proportional = zeroBase;
        let notice = zeroBase;
        switch (reason) {
            case reasonOne:
                proportional = (months / monthsBase) * salary;
                notice = (1 / monthsBase) * salary;
                break;

            case reasonTwo:
                proportional = (months / monthsBase) * salary;
                notice;
                break;

            case reasonThree:
                proportional;
                notice;
                break;
    
            case reasonFour:   
                if (status == yes) {
                    proportional = (months / monthsBase) * salary;
                    notice = (1 / monthsBase) * salary;
                } else{
                    proportional = (months / monthsBase) * salary;;
                    notice;
                }
                break;
        }
        result = {
            value: proportional,
            notice: notice
        }
        return result;
    }

    //cálculo desconto INSS sobre saldo salário e percentual sobre faixa salarial
    function inssBalance(salary) {
        let percentCalculate = zeroBase;
        let percentShow = zeroBase;
        let adjusts = zeroBase;
        if (salary > salaryRangeBase && salary <= salaryRangeOne) {
            percentCalculate = percentRangeOne;
            percentShow = percentShowOne;
            adjusts = percentCalculate * salary;
        }
        else if (salary > salaryRangeOne && salary <= salaryRangeTwo) {
            percentCalculate = percentRangeTwo;
            percentShow = percentShowTwo;
            adjusts = percentCalculate * salary;
        }
        else if (salary > salaryRangeTwo && salary <= salaryRangeThree) {
            percentCalculate = percentRangeThree;
            percentShow = percentShowThree;
            adjusts = percentCalculate * salary;
        }
        else if (salary > salaryRangeThree) {
            percentCalculate = percentRangeFour;
            percentShow = percentShowFour;
            adjusts = percentCalculate * salary;
        } else adjusts = zeroBase;

        result = {
            salaryShow: percentShow,
            adjusts: adjusts
        }
        return result;
    }

    //cálculo desconto INSS sobre 13° salário e percentual sobre faixa salarial
    function inss13(proportional) {
        let percentCalculate = zeroBase;
        let percentShow = zeroBase;
        let adjusts = zeroBase;
        if (proportional > salaryRangeBase && proportional <= salaryRangeOne) {
            percentCalculate = percentRangeOne;
            percentShow = percentShowOne;
            adjusts = percentCalculate * proportional;
        }
        else if (proportional > salaryRangeOne && proportional <= salaryRangeTwo) {
            percentCalculate = percentRangeTwo;
            percentShow = percentShowTwo;
            adjusts = percentCalculate * proportional;
        }
        else if (proportional > salaryRangeTwo && proportional <= salaryRangeThree) {
            percentCalculate = percentRangeThree;
            percentShow = percentShowThree;
            adjusts = percentCalculate * proportional;
        }
        else if (proportional > salaryRangeThree) {
            percentCalculate = percentRangeFour;
            percentShow = percentShowFour;
            adjusts = percentCalculate * proportional;
        } else adjusts;

        result = {
            salary13Show: percentShow,
            adjusts: adjusts
        }
        return result;
    }

    //cálculo total de proventos e descontos
    function total(reason) {
        let earning = zeroBase;
        let discount = zeroBase;
        switch (reason) {
            case reasonOne:
                earning = (
                    lastSalary
                    + noticeValue
                    + proportionalNoticeVacations
                    + proportionalVacations
                    + proportional13Value
                    + proportional13Notice
                    + expiredOneVacation
                    + expiredAThird
                )
                discount = (
                    percentInssAdjusts
                    + percent13InssAdjusts
                )
                earning = earning - discount;
                break;

            case reasonTwo:
                earning = (
                    lastSalary
                    + expiredOneVacation
                    + expiredAThird
                    + proportionalVacations
                    + proportional13Value
                )
                discount = (
                    percentInssAdjusts
                    + percent13InssAdjusts
                )
                earning = earning - discount;
                break;

            case reasonThree:
                    earning = (
                        lastSalary
                        + expiredOneVacation
                        + expiredAThird
                    )
                    discount = (
                        percentInssAdjusts
                        + percent13InssAdjusts
                    )
                    earning = earning - discount;
                    break;

            case reasonFour:
                earning = (
                    lastSalary
                    + noticeValue
                    + proportionalNoticeVacations
                    + proportionalVacations
                    + proportional13Value
                    + proportional13Notice
                    + expiredOneVacation
                    + expiredAThird
                )
                discount = (
                    percentInssAdjusts
                    + percent13InssAdjusts
                )
                earning = earning - discount;
                break;
        } 
        result = {
            earning: earning, 
            discount: discount
        }
        return result;
    }

    salaryValues = {
        salaryIncome: lastSalary,
        noticeIncome: noticeValue,
        vacationsNoticeIncome: proportionalNoticeVacations,
        VacationsIncome: proportionalVacations,
        ThirteeenthIncome: proportional13Value,
        noticeThirteeenthIncome: proportional13Notice,

        earnings: earning,
        discounts: discount,

        expiredVacationsIncome: expiredOneVacation,
        aThirdVacationsIncome: expiredAThird,

        inssSalaryDiscount: percentInssAdjusts,
        inssThirteeenthDiscount: percent13InssAdjusts,

        percentSalaryInssDiscount: percentInssShow,
        percentThirteeenthInssDiscount: percent13InssShow,
        priorNotice: noticeStatus,
        expiredVacation: expiredVacationStatus
    }
    return salaryValues;

}
