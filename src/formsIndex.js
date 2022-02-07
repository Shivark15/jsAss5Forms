function myForm()
{
  var userName = document.getElementById("uName").value;
  var age= document.getElementById("age").value;
  
  var weight =document.getElementById("wt").value;
  var msg = result(userName,age,weight);
  console.log(msg);
  document.getElementById("output").innerHTML= msg
  
 
}
function result(uName1,age1, wght )
{      
    
      console.log("check");
      console.log(age1>=5 && age1<=7);
       if(((age1>=5 && age1<=7) && (wght>=15 && wght<=20)) || ((age1>=8 && age1<=10) && (wght>=21 && wght<=25)) || ((age1>=11 && age1<=15) && (wght>=26 && wght<=30)) || ((age1>=16 && age1<=20) && (wght>=31 && wght<=40)))
       {
         return msg ="hello " + uName1 + "!!! your weight is perfect";
       }
       else if (((age1>=5 && age1<=7) && (wght<15)) || ((age1>=8 && age1<=10) && (wght<21)) || ((age1>=11 && age1<=15) && (wght<26)) || ((age1>=16 && age1<=20) && (wght<31)))
       {
         return msg ="hello " + uName1 + "!!! your weight is less than the recommended value" + wght+ "Kg at an age of "+ age1;
       }
       else if (((age1>=5 && age1<=7) && (wght>20)) || ((age1>=8 && age1<=10) && (wght>25)) || ((age1>=11 && age1<=15) && (wght>30)) || ((age1>=16 && age1<=20) && (wght>40)))
       {
          return msg ="hello" + uName1 + "!!! your weight is greater than the recommended value" + wght+ "Kg at an age of "+ age1; 
       } 
       else
       {
         return msg = "an error occured"  ;
       }

    
} 
