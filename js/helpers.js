
//manipulando datas
function resolveDates(information) {
    const zeroBase = 0;
    const dayMonthBase = 14;
    const monthsBase = 12;

    let getDateOn = new Date(information.initialDate);
    let dateOn = resolveUTC(getDateOn);
    let getMonthsOn = dateOn.month;
    let getYearOn = dateOn.year;
    //let dateOnBuilder = builderDate(dateOn);
    let timeOn = getDateOn.getTime();
    
    let getDateOff = new Date(information.finalDate);
    let dateOff = resolveUTC(getDateOff);
    let getDaysMonth = dateOff.day;
    let getMonthsOff = dateOff.month;
    let getYearOff = dateOff.year;
    //let dateOffBuilder = builderDate(dateOff);
    let timeOff = getDateOff.getTime();

    
    
    let monthsOff = monthsOffDiff(getMonthsOn,getMonthsOff,getDaysMonth);
    let months = monthsDiff(getMonthsOn,getMonthsOff,monthsOff,getYearOn,getYearOff);
    let years = yearsDiff(getYearOn,getYearOff,monthsOff,getDaysMonth);

    //obtendo dias,mes e ano dos inputs e convertendo para o fuso horário local
    function resolveUTC (getDate) {
        date = {
            day : getDate.getUTCDate(),
            month: getDate.getUTCMonth() + 1,
            year: getDate.getUTCFullYear(),
        }
        return date;
    }

    let getCurrentDate = new Date(Date.now());
    let currentDate = resolveCurrent(getCurrentDate);
    //let currentDateBuilder = builderDate(currentDate);
    let timeCurrent = getCurrentDate.getTime();
    
    //obtendo a data atual já convertida para fuso horario local
    function resolveCurrent (getDate) {
        date = {
            day : getDate.getDate(),
            month: getDate.getMonth() + 1,
            year: getDate.getFullYear(),
        }
        return date;
    }

    //montando a data para exibição
    function builderDate(builder) {    
        return date = ("0" + builder.day).slice(-2) +'/'+ ("0" + builder.month).slice(-2) +'/'+ builder.year;
    }

    //obtendo a diferença do número de meses entre a data de início e a data de saída
    function monthsOffDiff(getMonthsOn,getMonthsOff,getDaysMonth) {

        let diff = getMonthsOff - getMonthsOn;
        let monthsDiff = getMonthsOff;
        
        if (diff > monthsBase) {
            diff /= monthsBase;
            monthsDiff += diff;
        }else {
            monthsDiff = monthsDiff;
        }

        if (getDaysMonth > dayMonthBase) monthsDiff = monthsDiff + 1;
        else monthsDiff;
        
        return monthsDiff;
    }

    //obtendo o número de meses decorridos no ano em vigor
    function monthsDiff(getMonthsOn,getMonthsOff, months,getYearOn,getYearOff) {
        let diff = zeroBase;
        let diffOn = monthsBase - getMonthsOn;
        let diffYear = getYearOff - getYearOn;
        
        diffOn++;
        if(getYearOn != getYearOff) diff = getMonthsOff + diffOn; 
        else diff = months - getMonthsOn;

       
        if(diff > monthsBase || diffYear > 1) diff = diff - monthsBase;
        return diff;
    }

    //obtendo o número de anos
    function yearsDiff(getYearOn,getYearOff,months) {
        let diff = zeroBase;
        let diffOn = monthsBase - getMonthsOn;
        let diffYear = getYearOff - getYearOn;
        
        diffOn++;
        if(getYearOn != getYearOff) diff = getMonthsOff + diffOn; 
        else diff = months - getMonthsOn;

        if(diff > monthsBase || diffYear > 1) diffYear;
        else diffYear = 0;
        return diffYear;
    }
    
    dateReferences = {
        dateOn: timeOn,
        dateOff: timeOff,
        currentDate: timeCurrent,
        propMonths: months,
        years: years,
        propMonthsOff: monthsOff,
        days: getDaysMonth,
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