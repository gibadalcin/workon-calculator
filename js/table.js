let detailsTable = $(".details__table");
let dataReceived = JSON.parse(sessionStorage.getItem('dataSend'));  
console.log(dataReceived);
addValues(dataReceived);


function readValues(){
    readValues = {
        salaryBalance : $('#salary_balance').text(),
   }
   return readValues;
}


function addValues(dataReceived) {  
    dataReceived.salaryBalance != null ? $('#salary_balance').text(dataReceived.salaryBalance + '/31'):
    $('#salary_balance').text("-");

    if(dataReceived.expiredVacationsBalance == "Sim") $('#expiredVacations_balance').text('Sim');
    else if(dataReceived.expiredVacationsBalance == "Não") $('#expiredVacations_balance').text('Não');
    else $('#expiredVacations_balance').text("-");

    if(dataReceived.compliedPriorNotice == "Sim") $('#notice_balance').text('Não');
    else if(dataReceived.expiredVacationsBalance == "Não") $('#notice_balance').text('Sim');
    else $('#notice_balance').text("-");

    dataReceived.proportionalMonths != null ? $('#thirteeenthProporcional_balance').text(dataReceived.proportionalMonths + '/12'):
    $('#thirteeenthProporcional_balance').text("-");

    dataReceived.proportionalMonths != null ? $('#thirteeenthNotice_balance').text(dataReceived.proportionalMonths + '/12'):
    $('#thirteeenthNotice_balance').text("-");

    dataReceived.proportionalMonths != null ? $('#proportionalVacations_balance').text(dataReceived.proportionalMonths + '/12'):
    $('#proportionalVacations_balance').text("-");

    dataReceived.proportionalMonths != null ? $('#vacationsNotice_balance').text(dataReceived.proportionalMonths + '/12'):
    $('#vacationsNotice_balance').text("-");

    console.log(dataReceived.proportionalMonths);
}







       