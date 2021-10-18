/*  on button click the function stores the heading "Football" in local storage ,
alerts the amount of items saved from the page then animates the heading */
function Football() {
  // getting "Football" h1 tag by ID to access the innerhtml and putting it into a variable
  let h1tag = document.getElementById("Football");
  localStorage.setItem("Football Heading", h1tag.innerHTML);
  alert(`items saved from the page:
 ${localStorage.length} `);
  $("#Football").css("color", "lawngreen");
  $("#Football").animate({ right: "60px" }, "slow");
  $("#Football").animate({ right: "0px" }, "slow");
  $("#Football").animate({ left: "60px" }, "slow");
  $("#Football").animate({ left: "0px" }, "slow");
}
/*  on button click the function stores the heading "Most Popular Sports Globally" in local storage ,
alerts the amount of items saved from the page then animates the heading */
function PopularSports() {
  // getting "Most Popular Sports Globally" h2 tag by ID to access the innerhtml and putting it into a variable
  let h2tag = document.getElementById("PopularSports");
  localStorage.setItem("PopularSports Heading", h2tag.innerHTML);
  alert(`items saved from the page:
 ${localStorage.length} `);
  $("#PopularSports").css("color", "lawngreen");
  $("#PopularSports").animate({ right: "60px" }, "slow");
  $("#PopularSports").animate({ right: "0px" }, "slow");
  $("#PopularSports").animate({ left: "60px" }, "slow");
  $("#PopularSports").animate({ left: "0px" }, "slow");
}
/*  on button click the function stores all table elements' data in local storage,
alerts the amount of items saved from the page then animates the table */
function Table() {
  // getting "Rank" th tag by ID to access the innerhtml and putting it into a variable
  let tableHeading1 = document.getElementById("tableHeading1");
  localStorage.setItem("tableHeading1", tableHeading1.innerHTML);
  // getting "Sport" th tag by ID to access the innerhtml and putting it into a variable
  let tableHeading2 = document.getElementById("tableHeading2");
  localStorage.setItem("tableHeading2", tableHeading2.innerHTML);
  // getting "Estimated Global Following" th tag by ID to access the innerhtml and putting it into a variable
  let tableHeading3 = document.getElementById("tableHeading3");
  localStorage.setItem("tableHeading3", tableHeading3.innerHTML);
  // getting "1st ranked" td tag by ID to access the innerhtml and putting it into a variable
  let tableDataRank1 = document.getElementById("rank1");
  localStorage.setItem("rank1", tableDataRank1.innerHTML);
  // getting "1st sport" td tag by ID to access the innerhtml and putting it into a variable
  let tableDataSport1 = document.getElementById("sport1");
  localStorage.setItem("sport1", tableDataSport1.innerHTML);
  // getting "1st estimated global following" td tag by ID to access the innerhtml and putting it into a variable
  let tableDataFollowing1 = document.getElementById("following1");
  localStorage.setItem("following1", tableDataFollowing1.innerHTML);
  // getting "2nd ranked" td tag by ID to access the innerhtml and putting it into a variable
  let tableDataRank2 = document.getElementById("rank2");
  localStorage.setItem("rank2", tableDataRank2.innerHTML);
  // getting "2nd sport" td tag by ID to access the innerhtml and putting it into a variable
  let tableDataSport2 = document.getElementById("sport2");
  localStorage.setItem("sport2", tableDataSport2.innerHTML);
  // getting "2nd estimated global following" td tag by ID to access the innerhtml
  let tableDataFollowing2 = document.getElementById("following2");
  localStorage.setItem("following2", tableDataFollowing2.innerHTML);
  // getting "3rd ranked" td tag by ID to access the innerhtml and putting it into a variable
  let tableDataRank3 = document.getElementById("rank3");
  localStorage.setItem("rank3", tableDataRank3.innerHTML);
  // getting "3rd sport" td tag by ID to access the innerhtml and putting it into a variable
  let tableDataSport3 = document.getElementById("sport3");
  localStorage.setItem("sport3", tableDataSport3.innerHTML);
  // getting "3rd estimated global following" td tag by ID to access the innerhtml and putting it into a variable
  let tableDataFollowing3 = document.getElementById("following3");
  localStorage.setItem("following3", tableDataFollowing3.innerHTML);
  alert(`items saved from the page:
 ${localStorage.length} `);
  $("th").css("color", "lawngreen");
  $("td").css("color", "lawngreen");
  $("table").animate({ width: "50%" }, "slow");
  $("table").css("border", "1px solid lawngreen");
  $("table").animate({ width: "80%" }, "slow");
}
/*  on button click the function stores the heading "Most Popular Football Players" in local storage ,
alerts the amount of items saved from the page then animates the heading */
function PopularPlayers() {
  // getting "Most Popular Football Players" h2 tag by ID to access the innerhtml and putting it into a variable
  let h2tag = document.getElementById("PopularPlayers");
  localStorage.setItem("PopularPlayers Heading ", h2tag.innerHTML);
  alert(`items saved from the page:
 ${localStorage.length} `);
  $("#PopularPlayers").css("color", "lawngreen");
  $("#PopularPlayers").animate({ right: "60px" }, "slow");
  $("#PopularPlayers").animate({ right: "0px" }, "slow");
  $("#PopularPlayers").animate({ left: "60px" }, "slow");
  $("#PopularPlayers").animate({ left: "0px" }, "slow");
}
/*  on button click the function stores the list items in local storage ,
alerts the amount of items saved from the page then changes the color of the list items */
function List() {
  // getting "1st player on the list" li tag by ID to access the innerhtml and putting it into a variable
  let listItem1 = document.getElementById("player1");
  localStorage.setItem("player1", listItem1.innerHTML);
  //getting "2nd player on the list" li tag by ID to access the innerhtml and putting it into a variable
  let listItem2 = document.getElementById("player2");
  localStorage.setItem("player2", listItem2.innerHTML);
  //getting "3rd player on the list" li tag by ID to access the innerhtml and putting it into a variable
  let listItem3 = document.getElementById("player3");
  localStorage.setItem("player3", listItem3.innerHTML);
  alert(`items saved from the page:
 ${localStorage.length} `);
  $("ul").css("color", "lawngreen");
}
/*  on button click the function stores the image "Football" in local storage ,
alerts the amount of items saved from the page then animates the image */
function mainImage() {
  // getting the image "Football" img tag by ID to access the image and putting it into a variable
  let Image = document.getElementById("mainImage");
  //creating a canvas element to draw image onto and storing it in a variable
  let Canvas = document.createElement("canvas"),
    Context = Canvas.getContext("2d");

  Canvas.width = Image.width;
  Canvas.height = Image.height;

  Context.drawImage(Image, 0, 0, Image.width, Image.height);
  // converting image drawn onto the canvas into URL data and storing in a variable for storage in local storage
  let imgAsDataURL = Canvas.toDataURL("image/jpeg");

  localStorage.setItem("mainImage", imgAsDataURL);
  alert(`items saved from the page:
 ${localStorage.length} `);
  $("#mainImage").animate({ opacity: "0.5" }, "slow");
  $("#mainImage").animate({ opacity: "0.75" }, "slow");
  $("#mainImage").animate({ opacity: "1" }, "slow");
}
/*  on button click the function stores the heading "Kaizer Chiefs" in local storage ,
alerts the amount of items saved from the page then animates the heading */
function Chiefs() {
  // getting "Kaizer Chiefs"  h1 tag by ID to access innerhtml and putting it into a variable
  let h1tag = document.getElementById("chiefs");
  localStorage.setItem("KaizerChiefs Heading", h1tag.innerHTML);
  alert(`items saved from the page:
 ${localStorage.length} `);
  $("#chiefs").css("color", "lawngreen");
  $("#chiefs").animate({ right: "60px" }, "slow");
  $("#chiefs").animate({ right: "0px" }, "slow");
  $("#chiefs").animate({ left: "60px" }, "slow");
  $("#chiefs").animate({ left: "0px" }, "slow");
}
/*  on button click the function stores the paragraph about Kaizer Chiefs in local storage ,
alerts the amount of items saved from the page then animates the paragraph */
function AboutChiefs() {
  // getting the "about chiefs" paragraph p tag by ID to access innerhtml and storing it into a variable
  let paragraph = document.getElementById("chiefsParagraph");
  localStorage.setItem("aboutChiefs", paragraph.innerHTML);
  alert(`items saved from the page:
 ${localStorage.length} `);
  $("#chiefsParagraph").css("color", "lawngreen");
  $("#chiefsParagraph").slideUp("slow").slideDown("slow");
}
/*  on button click the function stores the image "Chiefs Badge" in local storage ,
alerts the amount of items saved from the page then animates the image */
function ChiefsBadge() {
  // getting the image "Chiefs Badge" img tag by ID to access the image and putting it into a variable
  let Image = document.getElementById("chiefsBadge");
  // creating a canvas element to draw image into and storing it in a variable
  let Canvas = document.createElement("canvas"),
    Context = Canvas.getContext("2d");

  Canvas.width = Image.width;
  Canvas.height = Image.height;

  Context.drawImage(Image, 0, 0, Image.width, Image.height);
  // converting image drawn onto the canvas into URL data and storing in a variable for storage in local storage
  let imgAsDataURL = Canvas.toDataURL("image/jpeg");

  localStorage.setItem("chiefsBadge", imgAsDataURL);
  alert(`items saved from the page:
 ${localStorage.length} `);
  $("#chiefsBadge").animate({ opacity: "0.5" }, "slow");
  $("#chiefsBadge").animate({ opacity: "0.75" }, "slow");
  $("#chiefsBadge").animate({ opacity: "1" }, "slow");
}
/*  on button click the function stores the image "Fnb Stadium" in local storage ,
alerts the amount of items saved from the page then animates the image */
function FnbStadium() {
  // getting the image "Fnb Stadium" img tag by ID to access innerhtml and putting it into a variable
  let Image = document.getElementById("fnbStadium");
  // creating a canvas element to draw image onto and storing it in a variable
  let Canvas = document.createElement("canvas"),
    Context = Canvas.getContext("2d");

  Canvas.width = Image.width;
  Canvas.height = Image.height;

  Context.drawImage(Image, 0, 0, Image.width, Image.height);
  // converting image drawn onto the canvas into URL data and storing in a variable for storage in local storage
  let imgAsDataURL = Canvas.toDataURL("image/jpeg");

  localStorage.setItem("fnbStadium", imgAsDataURL);
  alert(`items saved from the page:
 ${localStorage.length} `);
  $("#fnbStadium").animate({ opacity: "0.5" }, "slow");
  $("#fnbStadium").animate({ opacity: "0.75" }, "slow");
  $("#fnbStadium").animate({ opacity: "1" }, "slow");
}
/*  on button click the function stores the Kaizer Chiefs Wikipedia link in local storage ,
alerts the amount of items saved from the page then changes the color of the link */
function ChiefsLink() {
  localStorage.setItem(
    "chiefsWikipedia",
    "https://en.wikipedia.org/wiki/Kaizer_Chiefs_F.C."
  );
  alert(`items saved from the page:
 ${localStorage.length} `);
  $("#ChiefsLink").css("color", "lawngreen");
}
/*  on button click the function stores a Kaizer Chiefs quote in local storage ,
alerts the amount of items saved from the page then animates the quote */
function ChiefsQuote() {
  // getting the "chiefs quote" paragraph p tag by ID to access innerhtml and storing it into a variable
  let paragraph = document.getElementById("Chiefsquote");
  localStorage.setItem("chiefsQuote", paragraph.innerHTML);
  alert(`items saved from the page:
 ${localStorage.length} `);
  $("#Chiefsquote").css("color", "lawngreen");
  $("#Chiefsquote").slideUp("slow").slideDown("slow");
}
/*  on button click the function stores the heading "Manchester United" in local storage ,
alerts the amount of items saved from the page then animates the heading */
function ManU() {
  // getting "Manchester United" h1 tag by ID to access innerhtml and putting it into a variable
  let h1tag = document.getElementById("ManU");
  localStorage.setItem("ManchesterUnited Heading", h1tag.innerHTML);
  alert(`items saved from the page:
 ${localStorage.length} `);
  $("#ManU").css("color", "lawngreen");
  $("#ManU").animate({ right: "60px" }, "slow");
  $("#ManU").animate({ right: "0px" }, "slow");
  $("#ManU").animate({ left: "60px" }, "slow");
  $("#ManU").animate({ left: "0px" }, "slow");
}
/*  on button click the function stores the paragraph about Manchester United in local storage ,
alerts the amount of items saved from the page then animates the paragraph */
function aboutManU() {
  // getting the "about ManU" paragraph p tag by ID to access innerhtml and storing it into a variable
  let paragraph = document.getElementById("ManUParagraph");
  localStorage.setItem("aboutManU", paragraph.innerHTML);
  alert(`items saved from the page:
 ${localStorage.length} `);
  $("#ManUParagraph").css("color", "lawngreen");
  $("#ManUParagraph").slideUp("slow").slideDown("slow");
}
/*  on button click the function stores the image "ManU Badge" in local storage ,
alerts the amount of items saved from the page then animates the image */
function ManUBadge() {
  // getting the image "ManU Badge" img tag by ID to access image and putting it into a variable
  let Image = document.getElementById("ManUBadge");
  // creating a canvas element to draw image onto and storing it in a variable
  let Canvas = document.createElement("canvas"),
    Context = Canvas.getContext("2d");

  Canvas.width = Image.width;
  Canvas.height = Image.height;

  Context.drawImage(Image, 0, 0, Image.width, Image.height);
  // converting image drawn onto the canvas into URL data and storing in a variable for storage in local storage
  let imgAsDataURL = Canvas.toDataURL("image/jpeg");

  localStorage.setItem("ManUBadge", imgAsDataURL);
  alert(`items saved from the page:
 ${localStorage.length} `);
  $("#ManUBadge").animate({ opacity: "0.5" }, "slow");
  $("#ManUBadge").animate({ opacity: "0.75" }, "slow");
  $("#ManUBadge").animate({ opacity: "1" }, "slow");
}
/*  on button click the function stores the image "Oldtrafford" in local storage ,
alerts the amount of items saved from the page then animates the image */
function Oldtrafford() {
  //getting the image "Oldtrafford" img tag by ID to access image and storing in a variable
  let Image = document.getElementById("Oldtrafford");
  // creating a canvas element to draw image onto and storing it in a variable
  let Canvas = document.createElement("canvas"),
    Context = Canvas.getContext("2d");

  Canvas.width = Image.width;
  Canvas.height = Image.height;

  Context.drawImage(Image, 0, 0, Image.width, Image.height);
  // converting image drawn onto the canvas into URL data and storing in a variable for storage in local storage
  let imgAsDataURL = Canvas.toDataURL("image/jpeg");

  localStorage.setItem("Oldtrafford", imgAsDataURL);
  alert(`items saved from the page:
 ${localStorage.length} `);
  $("#Oldtrafford").animate({ opacity: "0.5" }, "slow");
  $("#Oldtrafford").animate({ opacity: "0.75" }, "slow");
  $("##Oldtrafford").animate({ opacity: "1" }, "slow");
}
/*  on button click the function stores the Manchester United Wikipedia link in local storage ,
alerts the amount of items saved from the page then changes the color of the link */
function ManULink() {
  localStorage.setItem(
    "ManUWikipedia",
    "https://en.wikipedia.org/wiki/Manchester_United_F.C."
  );
  alert(`items saved from the page:
 ${localStorage.length} `);
  $("#ManULink").css("color", "lawngreen");
}
/*  on button click the function stores a Manchester United quote in local storage ,
alerts the amount of items saved from the page then animates the quote */
function ManUQuote() {
  // getting the "ManU quote" paragraph p tag by ID to access innerhtml and storing it into a variable
  let paragraph = document.getElementById("ManUquote");
  localStorage.setItem("ManUquote", paragraph.innerHTML);
  alert(`items saved from the page:
 ${localStorage.length} `);
  $("#ManUquote").css("color", "lawngreen");
  $("#ManUquote").slideUp("slow").slideDown("slow");
}
/* Jquery code that creates a drop down list for the user to choose their favorite football league */
$("body").append("<label>Choose Favorite Football League</labele>");
$("label").attr("id", "dropDownLabel");
$("body").append("<select></select>");
$("select").append("<option>EPL</option>");
$("select").append("<option>La Liga</option>");
$("select").append("<option>Bundesliga</option>");
$("select").append("<option>Ligue un</option>");
