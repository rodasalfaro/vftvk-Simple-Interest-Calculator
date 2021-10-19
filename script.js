function compute()
{
    //Getting information from input form
    var principal = document.getElementById("principal").value;

    if (principal>0){//Only positive numbers
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        //Calculating future year
        year = new Date().getFullYear()+parseInt(years);
        //Calculation of interest to gain
        interest = (principal * years * rate)/100;
        
        //HTML information for result
        result ="<br/>If you deposit :<mark>" + principal + "</mark><br/>at an interest rate of : <mark>"  + rate +"% </mark><br/>You will receive an amount of :<mark>" + interest + "</mark><br/> in the year <mark>"+ year + "</mark>";

        document.getElementById("result").innerHTML=result; // input the information in the span result
    }else{
        alert("Amount is empty, negative or equal 0");
        document.getElementById("principal").focus();
    }
    
}

//This function let change automatically the value of interest
 function updateRate(){
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval + "%";
}
