// Get Input Value Function
function getInputValue(inputId){
    const inputFiled = document.getElementById(inputId);
    const inputText = inputFiled.value;
    const inputAmount = parseFloat(inputText);
    inputFiled.value = '';
    return inputAmount;
}
// update Amount Filed Function
function updateAmountFiled(depositAmount, inputId){
    const previousDeposit = document.getElementById(inputId);
    const previousDepositText = previousDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    if(depositAmount > 0){
        previousDeposit.innerText = previousDepositAmount + depositAmount;
    }
    

}
// update balance Function
function updateBalance(depositAmount, isAdd){
    const balance = document.getElementById('current-total');
    const balanceText  = balance.innerText;
    const balanceAmount = parseFloat(balanceText)
    if(depositAmount > 0){
        if(isAdd){
            balance.innerText = balanceAmount + depositAmount;
        }else{
            if(balance.innerText < depositAmount){
                 alert('Sorry! Your Balance Is Low');
            }else{
                balance.innerText = balanceAmount - depositAmount;
            }
            
        }
    }
    
    
    
}
// deposit button area
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function(){
    // deposit input value 
    const depositAmount = getInputValue('deposit')
    // update deposit amount
    updateAmountFiled(depositAmount, 'current-deposit');
    // update Banalace
    updateBalance(depositAmount, true);
})

// widthdraw button area
const widthdrawBtn = document.getElementById('widthdraw-btn')
widthdrawBtn.addEventListener('click', function (){
    // widthdraw input value 
    const widthdrawAmount = getInputValue('widthwraw');
    // update widthdraw Amount
    updateAmountFiled(widthdrawAmount, 'current-widthdraw');
    // update Balance
    updateBalance(widthdrawAmount, false);   
})