let money = 0;

function CalculateMoney(amount) {
    amount = Number(amount);

    if (amount <= 20000 && amount % 100 === 0) 
    {
        let thousand = Math.floor(amount / 1000);
        let remainingAfterThousand = amount % 1000;
        let fiveHundred = Math.floor(remainingAfterThousand / 500);
        let remainingAfterFiveHundred = remainingAfterThousand % 500;
        let hundred = Math.floor(remainingAfterFiveHundred / 100);

        return "Money = " + amount + "\n" +
               "1,000 Banknotes : " + thousand + "\n" +
               "500 Banknotes : " + fiveHundred + "\n" +
               "100 Banknotes : " + hundred;
    } 
    else 
    {
        return "End Program";
    }
}

function SubmitButton() 
{
    money = Number(document.getElementById("moneyInput").value);
    const result = CalculateMoney(money);
    sessionStorage.setItem("atmResult", result);
}

function ShowResult() 
{
    const resultText = sessionStorage.getItem("atmResult");
    const resultElement = document.getElementById("resultText");

    if (resultElement) 
    {
        resultElement.innerText = resultText || "No result available";
    }
}

function LoadPageOne()
{
    document.getElementById("LinkOne").click();
}

function LoadPageTwo()
{
    document.getElementById("LinkTwo").click();
}

function LoadPageThree()
{
    document.getElementById("LinkThree").click();
}