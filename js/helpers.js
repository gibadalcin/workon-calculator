//obtendo os valores das datas necessárias
function resolveDates(information) {

    let daysOn = new Date(information.initialDate);
    let daysOff = new Date(information.finalDate);

    let daysOffAdjusts = daysOff.getUTCDate();

    let monthsOn = daysOn.getUTCMonth() + 1;
    let monthsOff = daysOff.getUTCMonth() + 1;
    let monthsDiff = monthsOff - monthsOn;

    let yearsOn = daysOn.getUTCFullYear();
    let yearsOff = daysOff.getUTCFullYear();
    let yearsDiff = yearsOff - yearsOn;

    while (monthsDiff > 12) {
        monthsDiff = monthsDiff / 12;
    }

    if (daysOffAdjusts > 14) monthsDiff = monthsDiff + 1;
    else monthsDiff;

    dateReferences = {
        days: daysOffAdjusts,
        propMonths: monthsDiff,
        years: yearsDiff,
        propMonthsOff: monthsOff
    }
    return dateReferences;
}

//formatando o input de valor do salário
function formatCurrency() {
    var element = document.getElementById('wage_last');
    var value = element.value;

    value = value + '';
    value = parseInt(value.replace(/[\D]+/g, ''));
    value = value + '';
    value = value.replace(/([0-9]{2})$/g, ",$1");

    if (value.length > 10) {
        value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    element.value = value;
    if (value == 'NaN') element.value = '';
}