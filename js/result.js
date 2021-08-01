let dataReceived = JSON.parse(sessionStorage.getItem('dataSend'));  
console.log(dataReceived);
addValues(dataReceived);

function addValues(dataReceived) {
    let totalEarnings = dataReceived.totalEarnings;
    console.log(totalEarnings)

    $('.result__value').text('R$ ' + totalEarnings.toFixed(2))
}

