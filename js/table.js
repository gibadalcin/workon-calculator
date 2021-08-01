let detailsTable = $(".details__table");

//obtendo os valores inseridos nos inputs e enviados via sessionStorage
let dataReceived = JSON.parse(sessionStorage.getItem('dataSend'));  
console.log(dataReceived);

//chamando a função de inserção dos valores
addValues(dataReceived);


// mostrando os valores na tabela
function addValues(dataReceived) {  

    //total de proventos sem férias vencidas
    let salaryIncome = dataReceived.salaryIncome;
    let noticeIncome = dataReceived.noticeIncome;
    let vacationsNoticeIncome = dataReceived.vacationsNoticeIncome;
    let VacationsIncome = dataReceived.VacationsIncome;
    let ThirteeenthIncome = dataReceived.ThirteeenthIncome;
    let noticeThirteeenthIncome = dataReceived.noticeThirteeenthIncome;
    let totalEarnings = dataReceived.totalEarnings;
    let totalDiscounts = dataReceived.totalDiscounts;

    //acrescentar ao total de proventos se existirem ferias vencidas
    let expiredVacationsIncome = dataReceived.expiredVacationsIncome;
    let aThirdVacationsIncome = dataReceived.aThirdVacationsIncome;

    //total de descontos do INSS
    let inssSalaryDiscount = dataReceived.inssSalaryDiscount;
    let inssThirteeenthDiscount = dataReceived.inssThirteeenthDiscount;

    //referencias de datas e percentuais
    let salaryBalance = dataReceived.salaryBalance;
    let propMonths = dataReceived.propMonths;
    let compliedPriorNotice = dataReceived.compliedPriorNotice;
    let expiredVacationsBalance = dataReceived.expiredVacationsBalance;
    let ThirteeenthBalance = dataReceived.ThirteeenthBalance;
    
    //percentuais de desconto INSS
    let percentSalaryDiscount = dataReceived.percentSalaryInssDiscount;
    let percentThirteeenthDiscount = dataReceived.percentThirteeenthInssDiscount;

    salaryBalance != null ? $('#salary_balance').text(salaryBalance + '/31'):
    $('#salary_balance').text("-");

    salaryIncome != null ? $('#salary_income').text('R$ ' + salaryIncome.toFixed(2)):
    $('#salary_income').text("-");
    
    $('#notice_balance').text(compliedPriorNotice);
   
    if(compliedPriorNotice == "Sim") $('#notice_income').text('R$ ' + noticeIncome.toFixed(2));

    if(expiredVacationsBalance == "Sim"){ 
        $('#expiredVacations_balance').text('Sim');
        $('#aThirdVacations_balance').text('Sim');
        $('#expiredVacations_income').text('R$ ' + expiredVacationsIncome.toFixed(2));
        $('#aThirdVacations_income').text('R$ ' + aThirdVacationsIncome.toFixed(2));
    } 
    else {
        $('#expiredVacations_balance').text('Não');
        $('#aThirdVacations_balance').text('Não');
        $('#aThirdVacations_income').text('-');
        $('#expiredVacations_income').text('-');
    } 
    
    ThirteeenthBalance != null ? $('#thirteeenthProportional_balance').text(ThirteeenthBalance + '/12'):
    $('#thirteeenthProportional_balance').text("-");

    ThirteeenthBalance != null ? $('#thirteeenthNotice_balance').text(ThirteeenthBalance + '/12'):
    $('#thirteeenthNotice_balance').text("-");

    propMonths != null ? $('#proportionalVacations_balance').text(propMonths + '/12'):
    $('#proportionalVacations_balance').text("-");

    propMonths != null ? $('#vacationsNotice_balance').text(propMonths + '/12'):
    $('#vacationsNotice_balance').text("-");

    vacationsNoticeIncome != null ? $('#vacationsNotice_income').text('R$ ' + vacationsNoticeIncome.toFixed(2)):
    $('#vacationsNotice_income').text("-");

    VacationsIncome != null ? $('#proportionalVacations_income').text('R$ ' + VacationsIncome.toFixed(2)):
    $('#proportionalVacations_income').text("-");

    ThirteeenthIncome != null ? $('#thirteeenthProportional_income').text('R$ ' + ThirteeenthIncome.toFixed(2)):
    $('#thirteeenthProportional_income').text("-");

    noticeThirteeenthIncome != null ? $('#thirteeenthNotice_income').text('R$ ' + noticeThirteeenthIncome.toFixed(2)):
    $('#thirteeenthNotice_income').text("-");

    percentSalaryDiscount != null ? $('#inss_percent').text(percentSalaryDiscount + '%'):
    $('#inss_percent').text("-");

    inssSalaryDiscount != null ? $('#inss_discount').text('R$ ' + inssSalaryDiscount.toFixed(2)):
    $('#inss_discount').text("-");

    percentThirteeenthDiscount != null ? $('#thirteeenthInss_percent').text(percentThirteeenthDiscount + '%'):
    $('#thirteeenthInss_percent').text("-");

    inssThirteeenthDiscount != null ? $('#thirteeenthInss_discount').text('R$ ' + inssThirteeenthDiscount.toFixed(2)):
    $('#thirteeenthInss_discount').text("-");

    totalEarnings != null ? $('#total_income').text('R$ ' + totalEarnings.toFixed(2)):
    $('#total_income').text('-');

    totalDiscounts != null ? $('#total_discount').text('R$ ' + totalDiscounts.toFixed(2)):
    $('#total_discount').text("-");
}


    
   







       