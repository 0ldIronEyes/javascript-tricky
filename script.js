function guessingGame()
{
    const number = Math.floor(Math.random() *100);

    return function guess(num)
    {
        if (num === number)
        {
            return "You won!";
        }
        else if( num < number)
        {
            return "Your guess is too low!"
        }
        else if (num > number)
        {
            return "Your guess is too high!"
        }
    }
}

function createAccount(pin, amount = 0)
{
    return {
        checkBalance(inputPin){
            if (inputPin !== pin) return "Invalid PIN";
            return `Your balance is ${amount}.`;
        },
        deposit(inputPin, newAmount)
        {
            if (inputPin !== pin) return "Invalid PIN";
            amount += newAmount;
            return `Successfully deposited ${newAmount}. Current balance is ${amount}.`;
        },
        withdraw(inputPin, withdrawalAmount) {
            if (inputPin !== pin) return "Invalid PIN.";
            if (withdrawalAmount > amount)
              return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            amount -= withdrawalAmount;
            return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`;
          },
          changePin(oldPin, newPin) {
            if (oldPin !== pin) return "Invalid PIN.";
            pin = newPin;
            return "PIN successfully changed!";
          }
    };
}

module.exports = { createAccount };

function curriedAdd(total) {
    if (total === undefined) return 0;
    return function addNext(num) {
      if (num === undefined) return total;
      total += num;
      return addNext;
    };
  }
  
  module.exports = { curriedAdd };
  