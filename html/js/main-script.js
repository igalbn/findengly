console.log("hi Findengly");

// variables declaration //
 
const GOOGLE = 0;
const BING = 1;
const AOL = 2;
const YANDEX = 3;
const DUCKDUCKGO = 4;

 const ALLOW_THIS_ENGINE = 1; //place in array
 const  ENGINE_IMAGE_SEARCH_LINK = 1;
 const ENGINE_ICON_IMAGE_NAME = 1;
 const ENGINE_NAME = 1;

 const ENGINE_NAME_LOWER_CASE = 0;

 const OPACITY_ENABLED_ENGINE = '1';
 const OPACITY_DISABLED_ENGINE = '0.2';


 let searchWord = ''; // waht user type in input
 let userPressedKey;

 let indexPropertiesMenuIcon;
 let engineInPropertiesIconId;
 let  engineImageId;
 
// draw app //
drawSearchEnginesIcons();
drawPropertiesMenu();


// search buttons //


$("#btn-search").click(function(){
    performSearch();
});



$("html").keydown(function(key){
    userPressedKey = key.which;
    console.log("userPressedKey" + userPressedKey);
    keyboardEvents();
}); 
/*     // for solve problem in Chrome. That multiple pressing on Enter not open all anabled engins
$("html").keydown(
    function(){
        performSearch();
        }
); */




$("#propertiesmenu img").click(function() {
    
     indexPropertiesMenuIcon = $("#propertiesmenu img").index(this);
    console.log("Index " + indexPropertiesMenuIcon + " was clicked");
    changeUserPreferences();
});

