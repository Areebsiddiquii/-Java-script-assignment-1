//Q1. Write a script to greet your website visitor using JS alert box. (Welcome to Our Website) 

//alert("Welcome to Our Website");




// Q2. Write a script to display message on your web page. (Error! Please Enter avalid password) 

// alert("Error! Please Enter a valid password");




//Q3. Write a script to display message on your web page: (Hint : Use line break)

// alert("This is the first line.\nThis is the second line.");




//Q4. Write a script to display messages in sequence (3 Alerts)

// alert("Alert 1");
// alert("Alert 2");
// alert("Alert 3");




//Q5. Make use of alerts in your new/existing HTML & CSS project.

// alert("This alert is in the head section");




// Q7. Declare a variable called username. 

//var username;



//Q8. Declare a variable called myName & assign to it a string that represents your Full Name.  

//var myName = "Areeb Siddiqui";



// Q9. Write script to  
// Qa) Declare a JS variable, titled message.  
// Qb) Assign “Hello World” to variable message  
// Qc) Display the message in alert box. 

// a)
//var message;

// b)
//message = "Hello World";

// c)
//alert(message);




//Q10. Write a script to save student’s bio data in JS variables and show the data in alert boxes. 


//var studentName = "Areeb Siddiqui";
// var age = 20;
// var grade = "A";
// var address= " liaquatabad No 6"; 

// alert("Student Name: " + studentName + "\nAge: " + age + "\nGrade: " + grade + "\nAddress:"+ address);



// Q11. Declare a variable called email and assign to it a string that represents your 
// Email Address(e.g. example@example.com). Show the blow mentioned 
// message in an alert box.(Hint: use string concatenation) 

//var email = "areeb.rahid12123@gmail.com";
//alert("My email address is: " + email);


//Q12. Write a script to display this in browser through JS. 


//document.write("This is displayed through JS");



//Q 13. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” 

// var specialString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(specialString);




// Q14. Declare a variable called age & assign to it your age. Show your age in an 
// alert box. 

// var age = 19;
// alert("I am " + age + " years old");




// Q15. Declare & initialize a variable to keep track of how many times a visitor has 
// visited a web page. Show his/her number of visits on your web page. For 
// example: “You have visited this site N times”. 


// var visitCount = 5;
// alert("You have visited this site " + visitCount + " times");





// Q16. Declare a variable called birthYear & assign to it your birth year. Show the 
// following message in your browser: 

// var birthYear = 2004;
// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is " + typeof(birthYear));




// Q17. A visitor visits an online clothing store www.xyzClothing.com . Write a script 
// to store in variables the following information: a. Visitor’s name b. Product 
// title c. Quantity i.e. how many products a visitor wants to order Show the 
// following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ 
// Clothing store”. 



// var visitorName = "Areeb Siddiqui";
// var productTitle = "T-shirt";
// var quantity = 5;

// alert(visitorName + "\nordered" + quantity +"\n" + productTitle + "\n(s) on XYZ Clothing store");




// Q18. Declare 3 variables in one statement. 

//var var1, var2, var3;


// Q19. Declare 5 legal & 5 illegal variable names. 

// Legal variable names
//var myVar, _myVar, $myVar, camelCaseVar, PascalCaseVar;

// Illegal variable names
// var 1stVar; (starts with a number)
// var my-var; (contains a hyphen)
// var my var; (contains a space)
// var break; (reserved keyword)
// var new; (reserved keyword)



//Q21. Write a program that take two numbers & add them in a new variable.Show the result in your browser. 

// var num1 = 5;
// var num2 = 10;
// var sum = num1 + num2;

// alert("The sum of " + num1 + " and " + num2 + " is: " + sum);



//Q22. Repeat task21 for subtraction, multiplication, division & modulus.

// var num1 = 10;
// var num2 = 5;

// alert("Subtraction: " + (num1 - num2));
// alert("Multiplication: " + (num1 * num2));
// alert("Division: " + (num1 / num2));
// alert("Modulus: " + (num1 % num2));




//Q23. Do the following using JS Mathematic Expressions  
// a. Declare a variable.  
// b. Show the value of variable in your browser like “Value after variable 
// declaration is: ??”.  
// c.  Initialize the variable with some number.  
// d. Show the value of variable in your browser like “Initial value: 5”.  
// e.  Increment the variable.  
// f.  Show the value of variable in your browser like “Value after 
// increment is: 6”.  
// g. Add 7 to the variable.  
// h. Show the value of variable in your browser like “Value after addition 
// is: 13”.  
// i.  Decrement the variable.  
// j.  Show the value of variable in your browser like “Value after 
// decrement is: 12”.  
// k.  Show the remainder after dividing the variable’s value by 3.  
// l.  Output : “The remainder is : 0”. 


// // a.
// var myVar;

// // b.
// document.write("Value after variable declaration is: " + myVar + "<br>");

// // c.
// myVar = 5;

// // d.
// document.write("Initial value: " + myVar + "<br>");

// // e.
// myVar++;

// // f.
// document.write("Value after increment is: " + myVar + "<br>");

// // g.
// myVar += 7;

// // h.
// document.write("Value after addition is: " + myVar + "<br>");

// // i.
// myVar--;

// // j.
// document.write("Value after decrement is: " + myVar + "<br>");

// // k.
// document.write("The remainder after dividing the variable’s value by 3 is: " + (myVar % 3) + "<br>");

// // l.
// document.write("Output: The remainder is: 0");



//Q24. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

// var ticketPrice = 800;
// var numberOfTickets = 5;
// var totalCost = ticketPrice * numberOfTickets;

// alert("The cost of buying " + numberOfTickets + " tickets is: " + totalCost + " PKR");


//Q25. Write a script to display multiplication table of any number in your browser. 

// var num = prompt("Enter a number to display its multiplication table:");
// num = parseInt(num);

// document.write("<h2>Multiplication Table of " + num + "</h2>");

// for (var i = 1; i <= 10; i++) {
//     document.write(num + " x " + i + " = " + (num * i) + "<br>");
// }


