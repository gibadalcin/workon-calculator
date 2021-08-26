let detailsTable = $(".details__table");

//obtendo os valores inseridos nos inputs e enviados via sessionStorage
let dataReceived = JSON.parse(sessionStorage.getItem('dataSend'));  

//chamando as funções de inserção dos valores
addSalaryValues(dataReceived);
addNoticeValues(dataReceived);
addExpiredVacations(dataReceived);
addVacations(dataReceived);
add13salaryValues(dataReceived);
addInssValues(dataReceived);
addTotalValues(dataReceived);

//inserindo dados salario
function addSalaryValues(dataReceived) {

    let salaryIncome = dataReceived.salaryIncome;
    let salaryBalance = dataReceived.salaryBalance;

    let getSalaryBalanceField = $('#salary_balance');
    let getSalaryIncomeField = $('#salary_income');

    salaryBalance != 0 ? getSalaryBalanceField.text(salaryBalance + '/31'):
    getSalaryBalanceField.text("-");

    salaryIncome != 0 ? getSalaryIncomeField.text('R$ ' + salaryIncome.toFixed(2)):
    getSalaryIncomeField.text("-");

}

//inserindo dados aviso prévio
function addNoticeValues(dataReceived) {
    let noticeIncome = dataReceived.noticeIncome;
    let compliedPriorNotice = dataReceived.compliedPriorNotice;

    let getNoticeBalanceField = $('#notice_balance');
    let getNoticeIncomeField = $('#notice_income');

    getNoticeBalanceField.text(compliedPriorNotice);
    if(compliedPriorNotice == "Sim") getNoticeIncomeField.text('R$ ' + noticeIncome.toFixed(2));
    else getNoticeIncomeField.text('-');
}

//inserindo dados férias vencidas + 1/3
function addExpiredVacations(dataReceived) {
    let expiredVacationsIncome = dataReceived.expiredVacationsIncome;
    let aThirdVacationsIncome = dataReceived.aThirdVacationsIncome;

    let getExpiredVacationsBalanceField = $('#expiredVacations_balance');
    let getAThirdVacationsBalanceField =  $('#aThirdVacations_balance');

    let getExpiredVacationsIncomeField = $('#expiredVacations_income');
    let getAThirdVacationsIncomeField =  $('#aThirdVacations_income');

    let expiredVacationsBalance = dataReceived.expiredVacationsBalance;
    if(expiredVacationsBalance == "Sim"){ 
        getExpiredVacationsBalanceField.text('Sim');
        getAThirdVacationsBalanceField.text('Sim');
        getExpiredVacationsIncomeField.text('R$ ' + expiredVacationsIncome.toFixed(2));
        getAThirdVacationsIncomeField.text('R$ ' + aThirdVacationsIncome.toFixed(2));
    } 
    else {
        getExpiredVacationsBalanceField.text('Não');
        getAThirdVacationsBalanceField.text('Não');
        getAThirdVacationsIncomeField.text('-');
        getExpiredVacationsIncomeField.text('-');
    } 
}

//inserindo dados férias/proporcional/aviso prévio
function addVacations(dataReceived) {
    let vacationsNoticeIncome = dataReceived.vacationsNoticeIncome;
    let vacationsIncome = dataReceived.vacationsIncome;
    let propMonths = dataReceived.propMonths;

    let getProportionalVacationsBalanceField = $('#proportionalVacations_balance');
    let getProportionalVacationsIncomeField = $('#proportionalVacations_income');

    propMonths != 0 ? getProportionalVacationsBalanceField.text(propMonths + '/12'):
    getProportionalVacationsBalanceField.text("-");

    vacationsIncome != 0 ? getProportionalVacationsIncomeField.text('R$ ' + vacationsIncome.toFixed(2)):
    getProportionalVacationsIncomeField.text("-");

    let getVacationsNoticeBalanceField = $('#vacationsNotice_balance');
    let getVacationsNoticeIncomeField = $('#vacationsNotice_income');
    let propMonthsNotice = dataReceived.thirteeenthBalance;
    
    propMonthsNotice != 0 ? getVacationsNoticeBalanceField.text(propMonthsNotice + '/12'):
    getVacationsNoticeBalanceField.text("-");

    vacationsNoticeIncome != 0 ? getVacationsNoticeIncomeField.text('R$ ' + vacationsNoticeIncome.toFixed(2)):
    getVacationsNoticeIncomeField.text("-");
}

//inserindo dados ao 13° salário
function add13salaryValues(dataReceived) {
    let thirteeenthBalance = dataReceived.thirteeenthBalance;
    let thirteeenthIncome = dataReceived.thirteeenthIncome;
    let noticeThirteeenthIncome = dataReceived.noticeThirteeenthIncome;
    let inssThirteeenthDiscount = dataReceived.inssThirteeenthDiscount;
    let percentThirteeenthDiscount = dataReceived.percentThirteeenthInssDiscount;


    let get13NoticeBalanceField = $('#thirteeenthNotice_balance');
    let get13NoticeIncomeField = $('#thirteeenthNotice_income');

    thirteeenthBalance != 0 ? get13NoticeBalanceField.text(thirteeenthBalance + '/12'):
    get13NoticeBalanceField.text("-");

    noticeThirteeenthIncome != 0 ? get13NoticeIncomeField.text('R$ ' + noticeThirteeenthIncome.toFixed(2)):
    get13NoticeIncomeField.text("-");


    let get13ProportionalBalanceField = $('#thirteeenthProportional_balance');
    let get13ProportionalIncomeField = $('#thirteeenthProportional_income')

    thirteeenthBalance != 0 ? get13ProportionalBalanceField.text(thirteeenthBalance + '/12'):
    get13ProportionalBalanceField.text("-");

    thirteeenthIncome != 0 ? get13ProportionalIncomeField.text('R$ ' + thirteeenthIncome.toFixed(2)):
    get13ProportionalIncomeField.text("-");


    let get13InssPercentField = $('#thirteeenthInss_percent');
    let get13InssDiscountField = $('#thirteeenthInss_discount');
    
    percentThirteeenthDiscount != 0 ? get13InssPercentField.text(percentThirteeenthDiscount + '%'):
    get13InssPercentField.text("-");

    inssThirteeenthDiscount != 0 ? get13InssDiscountField.text('R$ ' + inssThirteeenthDiscount.toFixed(2)):
    get13InssDiscountField.text("-");

}

//inserindo dados inss
function addInssValues(dataReceived) {
    let percentSalaryDiscount = dataReceived.percentSalaryInssDiscount;
    let inssSalaryDiscount = dataReceived.inssSalaryDiscount;

    let getInssPercentField = $('#inss_percent');
    let getInssDiscountField = $('#inss_discount');

    percentSalaryDiscount != 0 ? getInssPercentField.text(percentSalaryDiscount + '%'):
    getInssPercentField.text("-");

    inssSalaryDiscount != 0 ? getInssDiscountField.text('R$ ' + inssSalaryDiscount.toFixed(2)):
    getInssDiscountField.text("-");

}

//inserindo valor total
function addTotalValues(dataReceived) {  
    let totalEarnings = dataReceived.totalEarnings;
    let totalDiscounts = dataReceived.totalDiscounts;

    let gatTotalIncomeField = $('#total_income');
    let gatTotalDiscountField = $('#total_discount');

    totalEarnings != 0 ? gatTotalIncomeField.text('R$ ' + totalEarnings.toFixed(2)):
    gatTotalIncomeField.text('-');

    totalDiscounts != 0 ? gatTotalDiscountField.text('R$ ' + totalDiscounts.toFixed(2)):
    gatTotalDiscountField.text("-");
}


    
   







       