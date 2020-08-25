let selectedLanguage = 0;

let monthly_payment = 1973;
const decimal_point = 2;
let table_header = ["No", "Principal", "Balance"];
let duration = 30 * 12;

let home_price;
let down_payment;
let principal;
let mpr;
let balance;
let utility;
let property_tax;
let home_insurance;
let miscellaneous;
let total_other_expenses = 0.0;
let calculate_btn;

let form = document.forms.home_form;
let table_div = document.getElementById("section-table");

let app_title;
let selected_lang_btn;
let home_price_label;
let apr_label;
let down_payment_label;
let fifteen_years_label;
let thirty_years_label;
let other_expenses_label;
let utility_label;
let property_tax_label;
let home_insurance_label;
let miscellaneous_label;
let loan_payment_label;
let total_monthly_payment_label;
let show_detail_label;

function generateTable(){
  clearTable();
  setLoanParameters();
  setOtherExpenses();
  calPaymentDuration();
  
  calPrincipal(home_price, down_payment);
  calBalance(); 
  
  calMonthlyPayment();
  
  setLoanMonthlyPayment();
  setTotalMonthlyPayment();
  
  
  
  var table = document.createElement("TABLE");
  var tbody = document.createElement("TBODY");
  
  setTableHeader(table);
  setTableBody(tbody);
  
  table.appendChild(tbody);
  table_div.appendChild(table);
}

function setLoanParameters(){  
  home_price = parseFloat(form.home_price.value);
  down_payment = home_price * parseFloat(form.down_payment.value) / 100;
  mpr = parseFloat(form.apr.value) / (100 * 12);
}

function setOtherExpenses(){
  utility = parseFloat(form.utilities.value);
  property_tax = parseFloat(form.property_tax.value);
  home_insurance = parseFloat(form.home_insurance.value);
  miscellaneous = parseFloat(form.other_exp.value);
  
  calTotalOtherExpenses();
}

function clearTable(){
  if(table_div.firstElementChild){
    table_div.removeChild(table_div.firstElementChild);
  }
}

function setTableHeader(table){
  var thead = document.createElement("THEAD");
  var tr = document.createElement("TR");
  for(const h of table_header){
    var th = document.createElement("TH");
    var cell = document.createTextNode(h);
    th.appendChild(cell);
    tr.appendChild(th);
  }
  thead.appendChild(tr);
  table.appendChild(thead);
}

function setTableBody(tbody){
  for(var i = 1; i <= duration; ++i)
  {
    let tb_tr = document.createElement("TR");
    if(i % 2 == 0)
    {
      tb_tr.setAttribute("class", "even-row");    
    }
    for(var j = 0; j < table_header.length; ++j)
    {
         let tb_td = document.createElement("TD");
         let content = document.createTextNode("");
         if(j == 0){
           content = document.createTextNode(i);
         }else if(j == 1){
           content = document.createTextNode(principal.toFixed(decimal_point));
         }else if(j == 2){
           content = document.createTextNode(balance.toFixed(decimal_point));
         }
         
         tb_td.appendChild(content);
         tb_tr.appendChild(tb_td);         
    }
    
    calPrincipal(balance, monthly_payment);
    calBalance();
    
    tbody.appendChild(tb_tr);
  }
}

function calPrincipal(bal, payment){
  principal = bal - payment;
}

function calBalance(){
   balance = principal * (1 + mpr);
}

function setLoanMonthlyPayment(){
  var loan_monthly_payment = document.getElementById("loan-monthly-payment");
  loan_monthly_payment.innerHTML = monthly_payment.toFixed(decimal_point);
}

function setTotalMonthlyPayment(){
  var total_monthly_payment = document.getElementById("total-monthly-payment");
  total_monthly_payment.innerHTML = (monthly_payment + total_other_expenses).toFixed(decimal_point);
}

function calTotalOtherExpenses(){
  total_other_expenses = utility + property_tax + home_insurance + miscellaneous;
}

function calPaymentDuration(){
  let radios = document.getElementsByName("years");
  for (const year of radios){
    if(year.checked){
      if(year.value == "30"){
        duration = 30 * 12;
      }else{
        duration = 15 * 12;
      } 
    }
  }
}

function calMonthlyPayment(){
  monthly_payment = (principal * mpr) / (1 - Math.pow((1 + mpr), -duration));
}

function setLanguage(){
  selectedLanguage = selectedLanguage == 0 ? 1 : 0;
  changeLanguage();
}

function changeLanguage(){
  const kh_eng = {
  "title": ["Mortgage Loan Calculator", "គិតលុយជំពាក់ទិញផ្ទះ"],
  "homeprice": ["Home Price", "តម្លៃផ្ទះ"],
  "language" : ["ខ្មែរ", "English"],
  "apr" : ["APR (%)", "អត្រា​ការ​ប្រាក់ (%)"],
  "downpayment" : ["Down Payment (%)", "លុយ​កក់ (%)"],
  "15yrs" : ["15 Years", "15 ឆ្នាំ"],
  "30yrs" : ["30 Years", "30 ឆ្នាំ"],
  "otherMonExp" : ["Other Monthly Expenses", "ចំណាយប្រចាំខែផ្សេងទៀត"],
  "utility" : ["Utlities", "ទឹក ភ្លើង"],
  "propertyTax" : ["Property Tax", "ពន្ធផ្ទះ"],
  "homeInsurance" : ["Homeowner's Insurance", "ធានារ៉ាប់រងផ្ទះ"],
  "miscellaneous" : ["Miscellaneous", "ការចំណាយផ្សេងៗ"],
  "loanMonPayment" : ["Loan Monthy Payment","បង់ប្រចាំខែ"],
  "totalMonPayment" : ["Total Monthly Payment","បង់សរុបប្រចាំខែ"],
   "detail_btn" : ["Show Detail", "បង្ហាញលម្អិត"],
   "calculate_btn" : ["calculate", "គណនា"] 
};
  app_title.innerHTML = kh_eng["title"][selectedLanguage];
  selected_lang_btn.innerHTML = kh_eng["language"][selectedLanguage];
  home_price_label.innerHTML = kh_eng["homeprice"][selectedLanguage];
  apr_label.innerHTML = kh_eng["apr"][selectedLanguage];
  down_payment_label.innerHTML = kh_eng["downpayment"][selectedLanguage];
  fifteen_years_label.innerHTML = kh_eng["15yrs"][selectedLanguage];
  thirty_years_label.innerHTML = kh_eng["30yrs"][selectedLanguage];
  other_expenses_label.innerHTML = kh_eng["otherMonExp"][selectedLanguage];
  utility_label.innerHTML = kh_eng["utility"][selectedLanguage];
  property_tax_label.innerHTML = kh_eng["propertyTax"][selectedLanguage];
  home_insurance_label.innerHTML = kh_eng["homeInsurance"][selectedLanguage];
  miscellaneous_label.innerHTML = kh_eng["miscellaneous"][selectedLanguage];
  loan_payment_label.innerHTML = kh_eng["loanMonPayment"][selectedLanguage];
  total_monthly_payment_label.innerHTML = kh_eng["totalMonPayment"][selectedLanguage];
  show_detail_label.innerHTML = kh_eng["detail_btn"][selectedLanguage];
  calculate_btn.value = kh_eng["calculate_btn"][selectedLanguage];
}

document.addEventListener('DOMContentLoaded', function(){
  var lang = document.getElementById("select-language-btn");
  lang.addEventListener('click', setLanguage);
  
app_title = document.getElementById("app-title");
selected_lang_btn = document.getElementById("select-language-btn");
home_price_label = document.getElementById("home_price_label");
apr_label = document.getElementById("apr_label");
down_payment_label = document.getElementById("down_payment_label");
fifteen_years_label = document.getElementById("15_years_label");
thirty_years_label = document.getElementById("30_years_label");
other_expenses_label = document.getElementById("other_expenses");
utility_label = document.getElementById("utility_label");
property_tax_label = document.getElementById("property_tax_label");
home_insurance_label = document.getElementById("home_insurance_label");
miscellaneous_label = document.getElementById("miscellaneous_label");
loan_payment_label = document.getElementById("loan_payment_label");
total_monthly_payment_label = document.getElementById("total_payment_label");
show_detail_label = document.getElementById("show_detail_label");
calculate_btn = document.getElementById("submit");
 setLanguage();
}, false);