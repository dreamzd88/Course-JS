"use strict";
let money, time;

function start() {
     money = +prompt("Ваш бюджет на месяц?", "");
     time = prompt("Введите дату в формате YYYY-MM-DD");

     while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
     }
}
start();

let appData = {
    cash: money,
    timeData: time,
    optionalExpenses: {},
    expenses: {},
    income: [],
    savings: true
}

function chooseExpenses () {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
            appData.expenses[a] = b;
        } else {                            
            console.log ("bad result");
            i--; 
        }
    
    };
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.cash / 30).toFixed();
    alert('Ежедневный заработок: '+ appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Маленький уровень заработка");
    } else if(appData.moneyPerDay > 100) {
        console.log("Средний уровень заработка");
    } else if(appData.moneyPerDay > 2000) {
        console.log("Высокий уровень заработка");
    } else {
        console.log("Ошибка")
    }
}
detectLevel();


function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt ("Какая сумма накоплений?", "");
        let percent = +prompt ("Каков процент?", "");
        appData.income = save/100/12*percent;
        alert(appData.income);
    }
}
checkSavings();

function ChooseOptionalExpenses() {
    for(let i = 1; i<=3; i++) {
        let notNesses = +prompt ("Введите необязательную статью расходов в этом месяце", "");
        appData.optionalExpenses[i] = notNesses; 
        console.log(appData.optionalExpenses)
    }
}
ChooseOptionalExpenses();