function inputMoney(inputField){
    const input = document.getElementById(inputField);
    const inputValue = input.value;
    const inputAmount = parseFloat(inputValue);
    input.value = '';
    return inputAmount;
}
function getInnerText(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldText = fieldTag.innerText;
    const filedAmount = parseFloat(fieldText);
    return filedAmount;
}
function updateTotal(fieldId, amount){
   /*  const inputFiled = document.getElementById(fieldId);
    const inputFiledInText = inputFiled.innerText;
    const inputAmount = parseFloat(inputFiledInText); */
    const inputAmount = getInnerText(fieldId);
    const totalAmount = inputAmount + amount;
    document.getElementById(fieldId).innerText = totalAmount;
}
function updateBalance(amount, isAdd){
    /* const balance = document.getElementById('current-total');
    const balanceInText = balance.innerText;
    const balanceAmount = parseFloat(balanceInText);
     */
    const balanceAmount = getInnerText('current-total');
    let totalAmount;
    if(isAdd){
        totalAmount = balanceAmount + amount;
    }else{
        totalAmount = balanceAmount - amount;
    }
    
    document.getElementById('current-total').innerText = totalAmount;
}
const depositButton = document.getElementById('deposit-btn');
depositButton.addEventListener('click', function(){
    const money = inputMoney('depositField');
    if(money > 0){
        updateTotal('current-deposit', money);
        updateBalance(money, true);
    }

});
const widthdrawButton = document.getElementById('widthdraw-btn');
widthdrawButton.addEventListener('click', function(){
    const money = inputMoney('widthwrawField');
    const balance = getInnerText('current-total');

    if(money > 0 && balance >= money){
        updateTotal('current-widthdraw', money);
        updateBalance(money, false);
    }
    
});