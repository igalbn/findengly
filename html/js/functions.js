console.log("hi functions");

"user strict"; ////

/// functions ///

 function drawSearchEnginesIcons() {
    let stringSearchEngineIconTag;
   


      //show all search engines icons. Those that disabled in user preferences, was with reduced opacity.
     
     for (let i = 0; i < userPreferences.whatEnginesToUse.length; i++) {
        engineImageId = 'img_'  + enginesParameters.engineName[i][ENGINE_NAME_LOWER_CASE];
//$("#img_duckduckgo").css('opacity', '0.2'); console.log("hi fufddfdfnctions");
        stringSearchEngineIconTag = '<a href="' + enginesParameters.engineImageSearchUrl[i][ENGINE_IMAGE_SEARCH_LINK] + '"  target="_blank" ><img id="' + engineImageId +'" src="images/engines_icons/' + 
                     enginesParameters.engineIconImageName[i][ENGINE_ICON_IMAGE_NAME] + '" alt="' +  enginesParameters.engineName[i][ENGINE_NAME]+ '"></a>';
        console.log(stringSearchEngineIconTag);


         $("#searchengines").append(stringSearchEngineIconTag);

     }
      // opacity //
     for (let i = 0; i < userPreferences.whatEnginesToUse.length; i++)
     if (userPreferences.whatEnginesToUse[i][ALLOW_THIS_ENGINE]) {
            
        $("#" + engineImageId).css('opacity', OPACITY_ENABLED_ENGINE); 
           
    } else {
        $("#" + engineImageId).css('opacity', OPACITY_DISABLED_ENGINE); 
    }

     
 } 

 function drawPropertiesMenu() {
     let engineInPropertiesMenuTag;
    

     $("#propertiesmenu").append('<hr>');

     for (let i = 0; i < userPreferences.whatEnginesToUse.length; i++) {
        engineInPropertiesIconId = 'img_properties_icon_'  + enginesParameters.engineName[i][ENGINE_NAME_LOWER_CASE];
        engineInPropertiesMenuTag = '<img id="' + engineInPropertiesIconId +'" src="images/engines_icons/' + 
        enginesParameters.engineIconImageName[i][ENGINE_ICON_IMAGE_NAME] + '" alt="' +  enginesParameters.engineName[i][ENGINE_NAME]+ '">';
         //<img src="images/engines_icons/google.png" alt="Google">
        $("#propertiesmenu").append(engineInPropertiesMenuTag);
     }

     for (let i = 0; i < userPreferences.whatEnginesToUse.length; i++)
     if (userPreferences.whatEnginesToUse[i][ALLOW_THIS_ENGINE]) {
            
        $("#" + engineInPropertiesIconId).css('opacity', OPACITY_ENABLED_ENGINE); 
           
    } else {
        $("#" + engineInPropertiesIconId).css('opacity', OPACITY_DISABLED_ENGINE); 
    }

 }

 /* open all search engines */
 function openAll() {  
     // for Goolge appear from the left, the search engines need be in reversed order.
   //  $("#btn-open-all").trigger("click");
     
    //draw all engines, that allowd in user preferences
 
        for (let i = userPreferences.whatEnginesToUse.length - 1; i >= 0; i--) {  // for open in reverse order. So Google will be near the app tab   //  for (let i = 0; i < userPreferences.whatEnginesToUse.length; i++) {
       if (userPreferences.whatEnginesToUse[i][ALLOW_THIS_ENGINE]) {
           window.open(enginesParameters.engineImageSearchUrl[i][ENGINE_IMAGE_SEARCH_LINK], enginesParameters.engineName[i][ENGINE_NAME]);
       }
   }

//     window.open("https://duckduckgo.com/?q=-&iax=images&ia=images", "DuckDuckGo");
//     window.open("https://yandex.com/images", "Yandex");
//     window.open("https://search.aol.com/aol/image?query=-", "Aol");
//     window.open("https://www.bing.com/images", "Bing");
//     window.open("https://images.google.com", "Google");
//
 }

function performSearch() {
    searchWord =  $("#input-user-search").val();

    let stringGoogleSearch;
    let stringBingSearch;
    let stringAolSearch;
    let stringYandexSearch; 
    let stringDuckDuckGoSearch;

      // create links with search words, for all anabled engines
    seachParameters.fullSearchLink[GOOGLE][ENGINE_IMAGE_SEARCH_LINK] =  'https://www.google.com/search?tbm=isch&q=' + searchWord ;
    seachParameters.fullSearchLink[BING][ENGINE_IMAGE_SEARCH_LINK] = 'https://www.bing.com/images/search?q=' + searchWord;
    seachParameters.fullSearchLink[YANDEX][ENGINE_IMAGE_SEARCH_LINK] =  'https://yandex.ru/images/search?text=' + searchWord;

            //Aol and DuckDuckGo image search page, can't be open with blank search
            
    if (searchWord !== ''){
        seachParameters.fullSearchLink[AOL][ENGINE_IMAGE_SEARCH_LINK] =  'https://search.aol.com/aol/image?query=' + searchWord;
        seachParameters.fullSearchLink[DUCKDUCKGO][ENGINE_IMAGE_SEARCH_LINK] = 'https://duckduckgo.com/?q=' + searchWord + '&iax=images&ia=images';
    
    } else {
        seachParameters.fullSearchLink[AOL][ENGINE_IMAGE_SEARCH_LINK]  = enginesParameters.engineImageSearchUrl[AOL][ENGINE_IMAGE_SEARCH_LINK];   
        seachParameters.fullSearchLink[DUCKDUCKGO][ENGINE_IMAGE_SEARCH_LINK]  = enginesParameters.engineImageSearchUrl[DUCKDUCKGO][ENGINE_IMAGE_SEARCH_LINK];   
    }


    for (let i = userPreferences.whatEnginesToUse.length - 1; i >= 0; i--) {  
        if (userPreferences.whatEnginesToUse[i][ALLOW_THIS_ENGINE]) {
            window.open(seachParameters.fullSearchLink[i][ENGINE_IMAGE_SEARCH_LINK], enginesParameters.engineName[i][ENGINE_NAME]);
         }
    }

}

function keyboardEvents() {


   if ( userPressedKey === 13) {  // 13 = enter
    performSearch();
   }

}

  ///   user properties  ///
  function changeUserPreferences() {
     
    engineImageId = 'img_'  + enginesParameters.engineName[indexPropertiesMenuIcon][ENGINE_NAME_LOWER_CASE];

        userPreferences.whatEnginesToUse[indexPropertiesMenuIcon][ALLOW_THIS_ENGINE] = !  userPreferences.whatEnginesToUse[indexPropertiesMenuIcon][ALLOW_THIS_ENGINE];
       console.log( "userPreferences.whatEnginesToUse[indexPropertiesMenuIcon][ALLOW_THIS_ENGINE]" + userPreferences.whatEnginesToUse[indexPropertiesMenuIcon][ALLOW_THIS_ENGINE]);

       engineInPropertiesIconId = 'img_properties_icon_'  + enginesParameters.engineName[indexPropertiesMenuIcon][ENGINE_NAME_LOWER_CASE];
       //update opacity of properties icon of engine and search icon
        if (userPreferences.whatEnginesToUse[indexPropertiesMenuIcon][ALLOW_THIS_ENGINE]) {
                
            $("#" + engineInPropertiesIconId).css('opacity', OPACITY_ENABLED_ENGINE); 
            
            $("#" + engineImageId).css('opacity', OPACITY_ENABLED_ENGINE); 
            
        } else {
            $("#" + engineInPropertiesIconId).css('opacity', OPACITY_DISABLED_ENGINE); 

            $("#" + engineImageId).css('opacity', OPACITY_DISABLED_ENGINE); 
        }

        
   
        
  }

