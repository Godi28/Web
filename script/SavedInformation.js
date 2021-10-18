// alert on page load to give user page instruction
alert(
  "reload page to see recently saved items. To like an item, enter a rating out of 5 and click like"
);
// on storage event for window to update any changes made to local storage
window.onstorage = function () {};
// for loop that itirates through the local storage length
for (let i = 0; i < localStorage.length; i++) {
  /*  if statement checking for condition when local storage saved key is "mainImage" 
then that key is fetched from local storage and the image is added to the html page. */
  if (localStorage.key(i) === "mainImage") {
    // getting body tag from html page by ID to append created elements and storing it in a varible
    let bodyTag = document.getElementById("bodySavedInformation");
    // creating a img tag to add image from local storage and storing it in a variable
    let Image = document.createElement("img");
    // creating input tag for text input to allow user to enter data to rate the image and storing it in a variable
    let input = document.createElement("input");
    // creating button tag for button to submit input text value and storing it in a variable
    let button = document.createElement("button");
    // getting "mainImage" from local storage to add to hmtl page and storing it in a variable
    let mainImageURL = localStorage.getItem("mainImage");
    Image.src = mainImageURL;
    input.type = "number";
    input.setAttribute("max", "5");
    input.setAttribute("min", "0");
    input.placeholder = "\u2191";
    bodyTag.appendChild(Image);
    bodyTag.appendChild(input);
    bodyTag.appendChild(button);
    button.innerHTML = "Like";
    // function to alert the user inputted rating runs on button click
    button.onclick = function () {
      // if statement for when user tries to submit an empty value it alerts user to enter valid number
      if (input.value === "") {
        alert("Enter a valid number");
      }

      // else statement to alert rating for valid numbers
      else {
        alert(`Your rating for this item is :

         ${input.value}/5

         \uD83D\uDC4D `);
      }
    }; /*  else if statement checking for condition when local storage saved key is "chiefsBadge" 
    then that key is fetched from local storage and the image is added to the html page. */
  } else if (localStorage.key(i) === "chiefsBadge") {
    // getting body tag from html page by ID to append created elements and storing it in a varible
    let bodyTag = document.getElementById("bodySavedInformation");
    // creating a img tag to add image from local storage and storing it in a variable
    let Image = document.createElement("img");
    // creating input tag for text input to allow user to enter data to rate the image and storing it in a variable
    let input = document.createElement("input");
    // creating button tag for button to submit input text value and storing it in a variable
    let button = document.createElement("button");
    // getting "chiefsBadge" from local storage to add to hmtl page and storing it in a variable
    let chiefsBadgeURL = localStorage.getItem("chiefsBadge");
    Image.src = chiefsBadgeURL;
    input.type = "number";
    input.setAttribute("max", "5");
    input.setAttribute("min", "0");
    input.placeholder = "\u2191";
    bodyTag.appendChild(Image);
    bodyTag.appendChild(input);
    bodyTag.appendChild(button);
    button.innerHTML = "Like";
    // function to alert the user inputted rating runs on button click
    button.onclick = function () {
      // if statement for when user tries to submit an empty value it alerts user to enter valid number
      if (input.value === "") {
        alert("Enter a valid number");
      }

      // else statement to alert rating for valid numbers
      else {
        alert(`Your rating for this item is :

         ${input.value}/5

         \uD83D\uDC4D `);
      }
    }; /*  else if statement checking for condition when local storage saved key is "fnbStadium" 
    then that key is fetched from local storage and the image is added to the html page. */
  } else if (localStorage.key(i) === "fnbStadium") {
    // getting body tag from html page by ID to append created elements and storing it in a varible
    let bodyTag = document.getElementById("bodySavedInformation");
    // creating a img tag to add image from local storage and storing it in a variable
    let Image = document.createElement("img");
    // creating input tag for text input to allow user to enter data to rate the image and storing it in a variable
    let input = document.createElement("input");
    // creating button tag for button to submit input text value and storing it in a variable
    let button = document.createElement("button");
    // getting "fnbStadium" from local storage to add to hmtl page and storing it in a variable
    let fnbStadiumURL = localStorage.getItem("fnbStadium");
    Image.src = fnbStadiumURL;
    input.type = "number";
    input.setAttribute("max", "5");
    input.setAttribute("min", "0");
    input.placeholder = "\u2191";
    bodyTag.appendChild(Image);
    bodyTag.appendChild(input);
    bodyTag.appendChild(button);
    button.innerHTML = "Like";
    // function to alert the user inputted rating runs on button click
    button.onclick = function () {
      // if statement for when user tries to submit an empty value it alerts user to enter valid number
      if (input.value === "") {
        alert("Enter a valid number");
      }

      // else statement to alert rating for valid numbers
      else {
        alert(`Your rating for this item is :

         ${input.value}/5

         \uD83D\uDC4D `);
      }
    }; /*  else if statement checking for condition when local storage saved key is "ManUBadge" 
    then that key is fetched from local storage and the image is added to the html page. */
  } else if (localStorage.key(i) === "ManUBadge") {
    // getting body tag from html page by ID to append created elements and storing it in a varible
    let bodyTag = document.getElementById("bodySavedInformation");
    // creating a img tag to add image from local storage and storing it in a variable
    let Image = document.createElement("img");
    // creating input tag for text input to allow user to enter data to rate the image and storing it in a variable
    let input = document.createElement("input");
    // creating button tag for button to submit input text value and storing it in a variable
    let button = document.createElement("button");
    // getting "ManUBadge" from local storage to add to hmtl page and storing it in a variable
    let ManUBadgeURL = localStorage.getItem("ManUBadge");
    Image.src = ManUBadgeURL;
    input.type = "number";
    input.setAttribute("max", "5");
    input.setAttribute("min", "0");
    input.placeholder = "\u2191";
    bodyTag.appendChild(Image);
    bodyTag.appendChild(input);
    bodyTag.appendChild(button);
    button.innerHTML = "Like";
    // function to alert the user inputted rating runs on button click
    button.onclick = function () {
      // if statement for when user tries to submit an empty value it alerts user to enter valid number
      if (input.value === "") {
        alert("Enter a valid number");
      }

      // else statement to alert rating for valid numbers
      else {
        alert(`Your rating for this item is :

         ${input.value}/5

         \uD83D\uDC4D `);
      }
    }; /*  else if statement checking for condition when local storage saved key is "Oldtrafford" 
    then that key is fetched from local storage and the image is added to the html page. */
  } else if (localStorage.key(i) === "Oldtrafford") {
    // getting body tag from html page by ID to append created elements and storing it in a varible
    let bodyTag = document.getElementById("bodySavedInformation");
    // creating a img tag to add image from local storage and storing it in a variable
    let Image = document.createElement("img");
    // creating input tag for text input to allow user to enter data to rate the image and storing it in a variable
    let input = document.createElement("input");
    // creating button tag for button to submit input text value and storing it in a variable
    let button = document.createElement("button");
    // getting "Oldtrafford" from local storage to add to hmtl page and storing it in a variable
    let OldtraffordURL = localStorage.getItem("Oldtrafford");
    Image.src = OldtraffordURL;
    input.type = "number";
    input.setAttribute("max", "5");
    input.setAttribute("min", "0");
    input.placeholder = "\u2191";
    bodyTag.appendChild(Image);
    bodyTag.appendChild(input);
    bodyTag.appendChild(button);
    button.innerHTML = "Like";
    // function to alert the user inputted rating runs on button click
    button.onclick = function () {
      // if statement for when user tries to submit an empty value it alerts user to enter valid number
      if (input.value === "") {
        alert("Enter a valid number");
      }

      // else statement to alert rating for valid numbers
      else {
        alert(`Your rating for this item is :

         ${input.value}/5

         \uD83D\uDC4D `);
      }
    }; /*  else statement for if none of the previous conditions are true, 
    that takes the remaining saved keys from local storage and adds them to a list in the html page  */
  } else {
    // getting the ul tag by ID in order to append created elements and storing it in variable
    let ul = document.getElementById("ul");
    // creating li tag to hold items saved in local storage and storing it in a variable
    let li = document.createElement("li");
    // creating input tag for text input to allow user to enter data to rate the items and storing it in a variable
    let input = document.createElement("input");
    // creating button tag for button to submit input text value and storing it in a variable
    let button = document.createElement("button");
    input.type = "number";
    input.setAttribute("max", "5");
    input.setAttribute("min", "0");
    input.placeholder = "\u2191";
    ul.appendChild(li);
    ul.appendChild(input);
    li.innerHTML = localStorage.getItem(localStorage.key(i));
    ul.appendChild(button);
    button.innerHTML = "Like";
    // function to alert the user inputted rating runs on button click
    button.onclick = function () {
      // if statement for when user tries to submit an empty value it alerts user to enter valid number
      if (input.value === "") {
        alert("Enter a valid number");
      }

      // else statement to alert rating for valid numbers
      else {
        alert(`Your rating for this item is :

         ${input.value}/5

         \uD83D\uDC4D `);
      }
    };
  }
}
// getting body tag by ID to append created elements and storing it in a variable
let bodyTag = document.getElementById("bodySavedInformation");
// creating h2 tag for the comments section heading and storing it in a variable
let heading = document.createElement("h2");
// creating button tag for button to hide comments section and storing it in a variable
let hide = document.createElement("button");
// creating button tag for button to show comments section and storing it in a variable
let show = document.createElement("button");
// creating br tag for a page break and storing it in a variable
let br = document.createElement("br");
bodyTag.appendChild(heading);
bodyTag.appendChild(br);
bodyTag.appendChild(hide);
bodyTag.appendChild(show);
heading.innerHTML = "Comments:";
hide.innerHTML = "Hide comments";
show.innerHTML = "Show comments";
hide.id = "hide";
show.id = "show";
heading.id = "comments";
/* on button click, function adds text enterted in the comments text area
 to a list under the comments section on the html page */
function Comments() {
  // getting body tag by ID to append created elements and storing it in a variable
  let bodyTag = document.getElementById("bodySavedInformation");
  // creating li tag to hold user input from the comments text area
  let li = document.createElement("li");
  li.className = "commentsListItem";
  // getting textarea tag by ID to access its value and storing it in a variable
  let textarea = document.getElementById("commentsText");
  bodyTag.appendChild(li);
  li.innerHTML = textarea.value;
}
/*on button click, function alerts user inputted contact details from the form on the html page */
function Details() {
  // getting "fullname" input tag by ID then returning its value to access user input and storing it a variable
  let fullName = document.getElementById("fullName").value;
  // getting "surname" input tag by ID then returning its value to access user input and storing it a variable
  let surname = document.getElementById("surname").value;
  // getting "contactnumber" input tag by ID then returning its value to access user input and storing it a variable
  let num = document.getElementById("contactNumber").value;
  alert(`${fullName} ${surname} you will be contacted on ${num}`);
}
/*Jquery code that adds css to the comments text area and "add comments" button */
$("#commentsText")
  .css("position", "fixed")
  .css("bottom", "100px")
  .css("width", "200")
  .css("right", "235px");
$("#addCommentsButton")
  .css("position", "fixed")
  .css("bottom", "100px")
  .css("right", "80px");
$("#clear").css("position", "fixed").css("bottom", "100px").css("right", "5px");
/*on button click, function hides the "Comments" heading and the list items containing the comments */
$("#hide").click(function () {
  $("#comments").hide("slow");
  $(".commentsListItem").hide("slow");
});
/*on button click, function shows the "Comments" heading and the list items containing the comments */
$("#show").click(function () {
  $("#comments").show("slow");
  $(".commentsListItem").show("slow");
});
