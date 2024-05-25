  /*  chapter No  ( 14 to 16 )   Arrays */

  /* QUE #01 :  Declare an empty array using JS literal notation to store
student names in future.  */
// var studentName = [ ];

/* QUE #02 : Declare an empty array using JS object notation to store
student names in future. */
//  var studentName = new Array ();

/* Que #03  :  Declare and initialize a strings array. */
// var studentName = ["Habiba", "Hajra", "Qanita", "Aiman", "Hafsa"];
// document.write("Strings Array : " + studentName);

/* Que #04 : Declare and initialize a numbers array. */
// var num = [10, 20, 30, 40, 50];
// document.write("Number Array : " + num);

/* Que #05 : Declare and initialize a boolean array. */
// var value = [true, false, true, false ];
// document.write("Boolean Array : "+ value );

/* Que #06 : Declare and initialize a mixed array. */
// var mixedVlaue = ["habiba", true, 19, "mirha", false, 1.5, "Qanita", 25, true ];
// document.write( " Mixed Array : " + mixedVlaue );

/* Que #07 : Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications in your browser like: */ 
// var qualifications = ["SSC", "HSC", "BSC",
// "BS", "BCOM", "MS", "M.phil", "Phd"];
// document.write("<h1>Qualifications</h1>");
// document.write("<br>");
// document.write("<br>");
// document.write("<ul>");
// document.write("<li>" + qualifications + "</li>");
// document.write("</ul>");

/* Que #07 : Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like: */
// var qualifications = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.phil", "Phd"];
// document.write("<h1>Qualifications</h1>");
// document.write("<ol>");
// document.write("<li>" + qualifications.join("</li><li>") + "</li>");
// document.write("</ol>");

/* que no #08 : Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like: */
// var studentName = ["Habiba", "Qanita", "Amna"];
// var score = [450, 400, 350 ];
// var total = 500;
// percentage1=(score[0]/total)*100;
// percentage2=(score[1]/total)*100;
// percentage3=(score[2]/total)*100;
// document.write("Score of  "+studentName[0]+ "is"  +score[0]+" . Percentage: "+percentage1+" % "+'<br>')
// document.write("Score of  "+studentName[1]+ "is" +score[1]+" . Percentage: "+percentage2+" % "+'<br>')
// document.write("Score of  "+studentName[2]+ "is" +score[2]+" . Percentage: "+percentage3+" % "+'<br>')
// document.write('<br>')

/* que on #09 : Initialize an array with color names. Display the array
elements in your browser. */
// var colorName = [ "Green", "yellow", "red", "grey", "orange"];
// document.write(colorName)

/* a) : a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser. */
// var userInput = prompt("Enter the color you want to add to the beginning:");
// var colorName = ["Red", "Green", "Blue", "Yellow", "Orange"];
// colorName.unshift(userInput);
// document.write("Updated Array: " + colorName);

/* b) Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser. */
// var userInput = prompt("Enter the color you want to add to the beginning:");
// var colorName = ["Red", "Green", "Blue", "Yellow", "Orange"];
// colorName.push(userInput);
// document.write("Updated Array: " + colorName);

/* c) Add two more color to the beginning of the array.
Display the updated array in your browser. */ 
// var userInput1 = prompt("Enter the first color you want to add to the beginning:");
// var userInput2 = prompt("Enter the second color you want to add to the beginning:");
// var colorName = ["Red", "Green", "Blue", "Yellow", "Orange"];
// colorName.unshift(userInput2, userInput1); 
// document.write("Updated Array: " + colorName);

/* d) Delete the first color in the array. Display the updated
array in your browser. */
// var colorName = ["Red", "Green", "Blue", "Yellow", "Orange"];
// colorName.shift();
// document.write("Updated Array: " + colorName);

/* e)  Delete the last color in the array. Display the updated
array in your browser. */ 
// var colorName = ["Red", "Green", "Blue", "Yellow", "Orange"];
// colorName.pop();
// document.write("Updated Array: " + colorName);

/* f)  f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser. */
// var colorName = ["Red", "Green", "Blue", "Yellow", "Orange"];
// var index = prompt("Enter the index where you want to add the color:");
// var newColor = prompt("Enter the color you want to add:");
// colorName.splice(index, 0, newColor);
// document.write("Updated Array: " + colorName);

/* g) Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser. */ 
// var colorName = ["Red", "Green", "Blue", "Yellow", "Orange"];
// var index = prompt("Enter the index from where you want to delete color(s):");
// var deleteCount = prompt("Enter the number of colors you want to delete:");
// colorName.splice(index, deleteCount);
// document.write("Updated Array: " + colorName);

/* que no #10 : Write a program to store student scores in an array & sort the array in ascending order using Array’s sort
method. */ 
// var score=[155,144,180,175];
// document.write("Scores of Students " + score + " <br>");
// document.write("Ordered Scores of Students " + score.sort() + "<br>")

/*  que no #11 :  Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array.  */
// var citynames=["Karachi","Lahore","Rahim yar khan", "Multan","Quetta", "Nawabshah"];
//  document.write('Cities List :'+citynames+'<br>'+'<br>')
//  var selectedCities=citynames.slice(1,3);
//  document.write('Selectedcities List :'+selectedCities+'<br>');

/* que no #12 :  Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method) */
// var arr = ["This", "is", "my", "cat"];
// document.write(" Array : "+ arr + "<br>" + "<br>")
// var combinedString = arr.join("  ");
// document.write( "String : "+combinedString + "<br>")

/* que no #13 : Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out)  */
// var nameIs = ["keyboard", "mouse", "printer", "moniter"];
// document.write("Devices : " + "<br>" + nameIs +"<br>" + "<br>" )
// document.write( "Out : " + "<br>" + nameIs[0]  );
// document.write("<br>" + "Out : " + "<br>" + nameIs[1]  );
// document.write( "<br>" + "Out : " + "<br>" + nameIs[2]  );
// document.write("<br>" +  "Out : " + "<br>" + nameIs[3]  );

/* que no #14 :  Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out) */
// var nameIs = ["keyboard", "mouse", "printer", "monitor"];
// document.write("Devices : " + "<br>" + nameIs + "<br>" + "<br>");
// document.write("Out : " + "<br>" + nameIs.pop() + "<br>");
// document.write("Out : " + "<br>" + nameIs.pop() + "<br>");
// document.write("Out : " + "<br>" + nameIs.pop() + "<br>");
// document.write("Out : " + "<br>" + nameIs.pop() + "<br>");

/* que no #15 Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:  */ 
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
document.write("<option value='" + phoneManufacturers[0] + "'>" + phoneManufacturers[0] + "</option>");
document.write("<option value='" + phoneManufacturers[1] + "'>" + phoneManufacturers[1] + "</option>");
document.write("<option value='" + phoneManufacturers[2] + "'>" + phoneManufacturers[2] + "</option>");
document.write("<option value='" + phoneManufacturers[3] + "'>" + phoneManufacturers[3] + "</option>");
document.write("<option value='" + phoneManufacturers[4] + "'>" + phoneManufacturers[4] + "</option>");
document.write("<option value='" + phoneManufacturers[5] + "'>" + phoneManufacturers[5] + "</option>");
document.write("</select>");
