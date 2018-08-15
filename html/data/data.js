let userPreferences = {
        whatEnginesToUse: [
             ["google", true ],
            ["bing",true], 
            ["aol", true], 
            ["yandex", true],
            ["duckduckgo", true]
        ]
};
                     // engines order from left to right: Google, Bing, aol, Yandex, DuckDuckGo 
let enginesParameters = {
    
    engineName: [
        ["google","Goolge" ],
        ["bing", "Bing",], 
        ["aol", "Aol"], 
        ["yandex", "Yandex",],
        ["duckduckgo", "DuckDuckGo"]
    ],

    engineImageSearchUrl: [
      ["google","https://images.google.com" ],
        ["bing", "https://www.bing.com/images",], 
        ["aol", "https://search.aol.com/aol/image?query=-"], 
        ["yandex", "https://yandex.ru/images",],
        ["duckduckgo", "https://duckduckgo.com/?q=-&iax=images&ia=images"]
     ],

     engineIconImageName: [
        ["google","google.png" ],
        ["bing", "bing.png",], 
        ["aol", "aol.png"], 
        ["yandex", "yandex.png",],
        ["duckduckgo", "duckduckgo.png"]
    ]

    

    
};
            // enginesParameters will be for constant values of engines and seachParameters will be for changed values, for example current full search link
let seachParameters = {

           //on start of app equal to values of    enginesParameters -  engineImageSearchUrl    //
    fullSearchLink: [
        ["google","https://images.google.com" ],
        ["bing", "https://www.bing.com/images",], 
        ["aol", "https://search.aol.com/aol/image?query=-"], 
        ["yandex", "https://yandex.ru/images",],
        ["duckduckgo", "https://duckduckgo.com/?q=-&iax=images&ia=images"]
    ]

}