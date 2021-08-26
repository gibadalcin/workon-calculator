let dataReceived = JSON.parse(sessionStorage.getItem('dataSend'));  

addValues(dataReceived);

function addValues(dataReceived) {
    let totalEarnings = dataReceived.totalEarnings;
    let result = $('.result__value');
    
    result.text('R$ ' + totalEarnings.toFixed(2))
}

