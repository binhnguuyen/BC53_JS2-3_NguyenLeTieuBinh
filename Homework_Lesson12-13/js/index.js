// Global variables
var style = "currency";
var currenry = "VND"

// Bài số 1
function salaryCounting() {
    // B1
    var salaryPerDay = 100000;

    // B2
    var workdays = +document.getElementById("workdays").value;
    var salary = salaryPerDay * workdays;
    var result1 = document.getElementById("result1");

    // B3
    // console.log("Lương nhân viên là", salaryPerDay, "VND trên một ngày thì làm", workdays, "được tổng lương là:", salary.toLocaleString('it-IT', { style: style, currency: currenry }))
    result1.innerHTML = `
    <div>
        <span>Với mức lương ${salaryPerDay.toLocaleString('it-IT', { style: style, currency: currenry })} trên ngày</span>
        <span>làm ${workdays} trên tháng thì </span>
        <span>tiền lương là: ${salary.toLocaleString('it-IT', { style: style, currency: currenry })}</span>
    </div> 
    `
    result1.classList.add("bg-primary", "text-white");
}



// Bài số 2
// B1
function averageValueCounting() {
    // B1
    var number1 = +document.getElementById("number1").value;
    var number2 = +document.getElementById("number2").value;
    var number3 = +document.getElementById("number3").value;
    var number4 = +document.getElementById("number4").value;
    var number5 = +document.getElementById("number5").value;
    var result2 = document.getElementById("result2");

    // B2
    var averageValue = (number1 + number2 + number3 + number4 + number5) / 5;

    // B3
    result2.innerHTML = `
    <div>
        <span>Giá trị trung bình của 5 số thực ${number1},${number2},${number3},${number4},${number5} là: ${averageValue}</span>
    </div> 
    `
    result2.classList.add("bg-primary", "text-white");
}

// Bài số 3
function USDtoVNDCounting() {
    // B1
    var VNDperUSD = 23500;
    var moneyInUSD = +document.getElementById("moneyInUSD").value;
    var result3 = document.getElementById("result3");

    // B2
    var moneyInVND = VNDperUSD * moneyInUSD;

    // B3
    result3.innerHTML = `
    <div>
        <span>Với ${moneyInUSD} USD</span>
        <span>thì có thể đổi đc ${moneyInVND.toLocaleString('it-IT', { style: style, currency: currenry })}</span>
    </div> 
    `
    result3.classList.add("bg-primary", "text-white");
}


// Bài số 4
function area_PerimeterCounting() {
    // B1
    var longEdge = +document.getElementById("longEdge").value;
    var shortEdge = +document.getElementById("shortEdge").value;
    var result4 = document.getElementById("result4");

    // B2
    var perimeter = (longEdge + shortEdge) * 2;
    var area = longEdge * shortEdge;

    // B3
    result4.innerHTML = `
    <div>
        <span>Với chiều dài là ${longEdge} và chiều rộng là ${shortEdge}</span>
        <span>thì chu vi của HCN đó là ${perimeter} và diện tích của nó là ${area}</span>
    </div> 
    `
    result4.classList.add("bg-primary", "text-white");
}

// Bài số 5
function sumOfTwoDigNum() {
    // B1
    var twoDigNumber = document.getElementById("twoDigNumber").value;
    var result5 = document.getElementById("result5");

    // B2
    var num_string = twoDigNumber.split("");
    var sum = 0;
    for (var i = 0; i < twoDigNumber.length; i++) {
        num_string[i] = num_string[i] * 1;
        sum += num_string[i];
    }
    // B3
    result5.innerHTML = `
    <div>
        <span>Số có 2 chữ số là ${twoDigNumber} thì có tổng của 2 chữ số là ${sum}</span>
    </div> 
    `
        result5.classList.add("bg-primary", "text-white");
}









