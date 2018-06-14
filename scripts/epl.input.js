//Website header settings
var website_title = "Entertin Public Library";
var website_keyword_list = "library, books, study, wisconsin";

// Main menu settings
var menu_link2 = "ABOUT";
var menu_link3 = "PROGRAMS";
var menu_link4 = "CATALOG";
var menu_link5 = "CALENDAR";

// library info or section 1 settings
var company_name ="Entertin Public Library";
var company_tagline = "READ. IMAGINE. CREATE.";
var company_phone = "(715) 900-9999"; 
var company_email = "webmaster@entertin.org"; 

// social media settings
var social_url1 = "https://www.facebook.com";
var social_url2 = "https://www.twitter.com";
var social_url3 = "https://www.youtube.com";
var social_icon1 = "facebook.png";
var social_icon2 = "twitter.png";
var social_icon3 = "youtube.png";

// picture settings 
var logo_pic = "logo.png"
var background_pic_section1 = "top-purple.jpg";
var background_pic_section3 = "middle-purple.jpg";
var background_pic_footer = "middle-purple.jpg";
var side_pic_section2 = "friends_logo.png";
var side_pic_section4 = "rays.jpg";


//////////////////////////////
//Content settings
//////////////////////////////
//Enter the content for section 2 in this var/
var section2_content = "<h2><center> ABOUT US </center></h2><p> For over 100 years, EPL has served the City of Entertin and County of Washburn. EPL is the resource library for the Washburn Library System. ECLS is a two member library system including EPL and the Community Library, which serves the residents of Washburn County. The library is maintained by volunteer staff and part time librarian, Rosary Blight."; 
//rosary blight is an anagram of ghost library

//Enter the content for section 3 in
var section3_content = "<h2><center> OUR PROGRAMS </center></h2><p> EPL offers a series of programs and services to the local Washburn County community. Our programs include: <br> <ul><li> After-school and care events</li> <li>Book clubs and writers groups </li><li> Career and job search workshops </li><li> Computer and Internet/Entertin trainings</li> <li> ESL and newcomer programs </li> <li> Small Business and personal finance seminars </li> <li> Exhibitions and displays </li>";

//Enter the content for section 4 in this var/
var section4_content = "<h2><center> OUR CATALOG </center></h2><p> Our physical catalog is available in the library during opening hours (M-F, 10-4pm); we are proud partners of the Wisconsin Digital Library and are working toward incorporating our collection into their catalog. For now, we feature a collection of over 1500 books and materials across genres and media types: <ul><li>Fiction </li><li>Non-fiction</li><li>Biography</li><li>Music in multiple formats (CD, casette, vinyl)</li> <li>Film (videos, dvds...)</li></p>";


/////////////////////////////////////////////////////////////////
//---------DO NOT TOUCH OR DELETE THIS AREA--------------------//
/////////////////////////////////////////////////////////////////

document.getElementById("title1").innerHTML = website_title;
document.getElementById("keyword").content = website_keyword_list;
document.getElementById("link2").innerHTML = menu_link2;
document.getElementById("link3").innerHTML = menu_link3;
document.getElementById("link4").innerHTML = menu_link4;
document.getElementById("namec").innerHTML = company_name;
document.getElementById("tagline").innerHTML = company_tagline;
document.getElementById("phone").innerHTML = company_phone;
document.getElementById("email").innerHTML = company_email;
document.getElementById("socialicon1").src= "images/social/"+social_icon1;
document.getElementById("socialicon2").src= "images/social/"+social_icon2;
document.getElementById("socialicon3").src= "images/social/"+social_icon3;
document.getElementById("sociallink1").href= social_url1;
document.getElementById("sociallink2").href= social_url2;
document.getElementById("sociallink3").href= social_url3;
document.getElementById("logoid1").src= "images/logo/"+logo_pic;
document.getElementById("logoid2").src= "images/logo/"+logo_pic;
document.getElementById("logoid3").src= "images/logo/"+logo_pic;
document.getElementById("namecfoot").innerHTML = company_name;
document.getElementById("phonefoot").innerHTML = company_phone;
document.getElementById("emailfoot").innerHTML = company_email;
document.getElementById("emailfoot").href = "mailto:"+company_email;
document.getElementById("linkfoot2").innerHTML = menu_link2;
document.getElementById("linkfoot3").innerHTML = menu_link3;
document.getElementById("linkfoot4").innerHTML = menu_link4;
document.getElementById("phonefoot").innerHTML = company_phone;
document.getElementById("powered").innerHTML = "Washburn Community Web Development";
document.getElementById("footerimage").style.backgroundImage="url(images/marketing/"+background_pic_footer+")";
document.getElementById("section2").innerHTML = section2_content;
document.getElementById("section3").innerHTML = section3_content;
document.getElementById("section4").innerHTML = section4_content;
document.getElementById("sectionrow1").style.backgroundImage="url(images/marketing/"+background_pic_section1+")"; 
document.getElementById("sectionrow3").style.backgroundImage="url(images/marketing/"+background_pic_section3+")";
document.getElementById("section2image").src= "images/marketing/"+side_pic_section2;
document.getElementById("section4image").src= "images/marketing/"+side_pic_section4;

////////////////////////////////////////////////////////////////
//-----------------------------End---------------------------//
///////////////////////////////////////////////////////////////



