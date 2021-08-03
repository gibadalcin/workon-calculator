let dataReceived = JSON.parse(sessionStorage.getItem('dataSend'));  

addValues(dataReceived);

function addValues(dataReceived) {
    let totalEarnings = dataReceived.totalEarnings;

    $('.result__value').text('R$ ' + totalEarnings.toFixed(2))
}

