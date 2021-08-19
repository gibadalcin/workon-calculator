
//manipulando datas
function resolveDates(information) {

    let getDateOn = new Date(information.initialDate);
    let dateOn = resolveUTC(getDateOn);
    let getMonthsOn = dateOn.month;
    let getYearOn = dateOn.year;
    let dateOnBuilder = builderDate(dateOn);
    
    let getDateOff = new Date(information.finalDate);
    let dateOff = resolveUTC(getDateOff);
    let getDaysMonth = dateOff.day;
    let getMonthsOff = dateOff.month;
    let getYearOff = dateOff.year;
    let dateOffBuilder = builderDate(dateOff);

    let months = monthsDiff(getMonthsOn,getMonthsOff,getDaysMonth);
    let monthsOff = monthsOffDiff(getMonthsOn,getMonthsOff,months,getYearOn,getYearOff);
    let years = yearsDiff(getYearOn,getYearOff);

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
    let currentDateBuilder = builderDate(currentDate);

    function resolveCurrent (getDate) {
        date = {
            day : getDate.getDate(),
            month: getDate.getMonth() + 1,
            year: getDate.getFullYear(),
        }
        return date;
    }

    function builderDate(builder) {    
        return date = ("0" + builder.day).slice(-2) +'/'+ ("0" + builder.month).slice(-2) +'/'+ builder.year;
    }

    function monthsDiff(getMonthsOn,getMonthsOff,getDaysMonth) {

        let diff = getMonthsOff - getMonthsOn;
        let monthsDiff = getMonthsOff;
        
        if (diff > 12) {
            diff /= 12;
            monthsDiff += diff;
        }else {
            monthsDiff = monthsDiff;
        }

        if (getDaysMonth > 14) monthsDiff = monthsDiff + 1;
        else monthsDiff;
        
        return monthsDiff;
    }

    function monthsOffDiff(getMonthsOn,getMonthsOff, months,getYearOn,getYearOff) {
        let diff = 0;
        let diffOn = 12 - getMonthsOn;
        let diffYear = getYearOff - getYearOn;
        
        diffOn++;
        if(getYearOn != getYearOff) diff = getMonthsOff + diffOn; 
        else diff = months - getMonthsOn;

       
        if(diff > 12 || diffYear > 1) diff = 12;
        return diff;
    }

    function yearsDiff(getYearsOn,getYearsOff) {
        let yearsDiff = getYearsOff - getYearsOn;
        return yearsDiff;
    }
    
    dateReferences = {
        dateOn: dateOnBuilder,
        dateOff: dateOffBuilder,
        currentDate: currentDateBuilder,
        propMonths: monthsOff,
        years: years,
        propMonthsOff: months,
        days: getDaysMonth,
    }
    return dateReferences;
}

console.log(monthsOff)

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