// object containing a number of sample comics with data
var sampleComics = {
    //comic sample character block from Avengers Vol 1 1. second version of characters catching works but also get donald blake. I could just remove those later.
    "1": {
        title: "Avengers Vol 1 1",
        sampleText: "* {{apn|[[Avengers (Earth-616)|Avengers]]|-}} {{1st}} {{Origin}}\n** {{apn|[[Thor Odinson (Earth-616)|Thor (Odinson)]]|Journey into Mystery #96|Avengers: The Origin Vol 1 1}} / {{a|[[Donald Blake (Earth-616)|Dr. Donald Blake]]}} {{Joins}}\n** {{apn|[[Bruce Banner (Earth-616)|Hulk / Mechano (Bruce Banner)]]|Incredible Hulk #6|Avengers: The Origin Vol 1 1}} {{Joins}}\n** {{apn|[[Henry Pym (Earth-616)|Ant-Man (Hank Pym)]]|Tales to Astonish #46|Avengers: The Origin Vol 1 1}} {{Joins}}\n** {{apn|[[Janet Van Dyne (Earth-616)|Wasp (Janet Van Dyne)]]|Tales to Astonish #46|Avengers: The Origin Vol 1 1}} {{Joins}}\n** {{apn|[[Anthony Stark (Earth-616)|Iron Man (Tony Stark)]]|Tales of Suspense Vol 1 44|Avengers: The Origin Vol 1 1}} {{Joins}}"
    },
    //comic sample character block from Avengers Vol 1 2
    "2":{
        title: "Avengers Vol 1 2",
        sampleText: "* {{a|[[Avengers (Earth-616)|Avengers]]}}\n** {{apn|[[Bruce Banner (Earth-616)|Hulk (Bruce Banner)]]|Avengers #1.5|Avengers Classic #2}} {{Leaves}}\n** {{apn|[[Thor Odinson (Earth-616)|Thor (Odinson)]]|Avengers #1.5|Journey Into Mystery #99}} / {{apn|[[Donald Blake (Earth-616)|Donald Blake]]|Avengers #1.5|Avengers #3}}\n** {{apn|[[Anthony Stark (Earth-616)|Iron Man (Tony Stark)]]|Avengers #1.5|Tales of Suspense Vol 1 48}}\n** {{apn|[[Henry Pym (Earth-616)|Giant-Man (Henry Pym)]]|Avengers #1.5|Tales to Astonish # 50}}\n** {{apn|[[Janet Van Dyne (Earth-616)|Wasp (Janet Van Dyne)]]|Avengers #1.5|Tales to Astonish # 50}}"
    },
    //comic sample character block from Avengers Vol 1 19
    "19":{
        title: "Avengers Vol 1 19",
        sampleText: "* {{a|[[Avengers (Earth-616)|Avengers]]}}\n** {{apn|[[Pietro Maximoff (Earth-616)|Quicksilver (Pietro)]]|Fantastic Four Annual #3}}\n** {{apn|[[Wanda Maximoff (Earth-616)|Scarlet Witch (Wanda)]]|Fantastic Four Annual #3}}\n** {{apn|[[Steven Rogers (Earth-616)|Captain America (Steve Rogers)]]|Marvel: Heroes & Legends #1}}\n** {{apn|[[Clinton Barton (Earth-616)|Hawkeye]]|Marvels #2}} {{Flashback}}"
    },
    "26":{
        title: "Avengers Vol 1 26",
        sampleText: "* {{a|[[Avengers (Earth-616)|Avengers]]}}\n** {{apn|[[Steven Rogers (Earth-616)|Captain America (Steve Rogers)]]|Tales of Suspense #76}}\n** {{apn|[[Clinton Barton (Earth-616)|Hawkeye]]|Tales of Suspense #72}}\n** {{apn|[[Pietro Maximoff (Earth-616)|Quicksilver (Pietro)]]|Tales of Suspense #72}}\n** {{apn|[[Wanda Maximoff (Earth-616)|Scarlet Witch (Wanda)]]|Tales of Suspense #72}}"
    },
    "27":{
        title: "Avengers Vol 1 27",
        sampleText: "* {{a|[[Avengers (Earth-616)|Avengers]]}}\n** {{apn|[[Clinton Barton (Earth-616)|Hawkeye]]}}\n** {{apn|[[Steven Rogers (Earth-616)|Captain America (Steve Rogers)]]}}\n** {{apn|[[Pietro Maximoff (Earth-616)|Quicksilver (Pietro)]]}}\n** {{apn|[[Wanda Maximoff (Earth-616)|Scarlet Witch (Wanda)]]}}"
    },
    "89":{
        title: "Avengers Vol 1 89",
        sampleText: "* {{Flashback|[[Avengers (Earth-616)|Avengers]]}}\n** {{apn|[[Pietro Maximoff (Earth-616)|Quicksilver (Pietro)]]|Sub-Mariner #35}} {{Flashback}}\n** {{apn|[[Wanda Maximoff (Earth-616)|Scarlet Witch (Wanda)]]|Sub-Mariner #35}} {{Flashback}}\n** {{apn|[[Vision (Earth-616)|Vision]]|Sub-Mariner #35}} {{Flashback}}"
    },
    "136":{
        title: "Avengers Vol 1 136",
        sampleText: ""
    },
    // issues with parsing characters still. first parsing method fails to capture the final 2 characters. The second method captures them all
    "184":{
        title: "Avengers Vol 1 184", 
        sampleText: "* {{a|[[Avengers (Earth-616)|Avengers]]}}\n** {{apn|[[Carol Danvers (Earth-616)|Ms. Marvel (Carol Danvers)]]|Avengers Vol 1 183|Marvel Comics Presents Vol 1 160}}\n** {{a|[[Anthony Stark (Earth-616)|Iron Man (Tony Stark)]]}}\n** {{apn|[[Janet Van Dyne (Earth-616)|Wasp (Janet Van Dyne)]]||Marvel Comics Presents #160}}\n** {{apn|[[Vision (Earth-616)|Vision]]||Marvel Comics Presents #160}}\n** {{apn|[[Henry McCoy (Earth-616)|Beast (Hank McCoy)]]||Marvel Comics Presents #160}}\n** {{apn|[[Steven Rogers (Earth-616)|Captain America (Steve Rogers)]]}} {{Flashback}}\n** {{Joins|[[Samuel Wilson (Earth-616)|Falcon (Sam Wilson)]]}} {{Flashback}}"
    },
    // seems to work with both methods of parsing characters
    "186":{
        title: "Avengers Vol 1 186",
        sampleText: ""
    },
    "190":{
        title: "Avengers Vol 1 190",
        sampleText: ""
    },
    "192":{
        title: "Avengers Vol 1 192",
        sampleText: ""
    },

}

/**
 * Summary: Main function.
 * 
 * @see applyEventHandlers
 * @see setFocus
 */
$(document).ready(function(){
    submitForm();
    // characterParserTester(sampleComics["2"]);
});


function submitForm(){

    // var batchNumber = 1;
    // var batchSize = 10;

    var batchNumber = 1;
    var batchSize = 25;

    var startIssue = (batchNumber - 1) * batchSize + 1;
    var endIssue = batchNumber * batchSize;
    
    // for individual issues in case they were missed
    // var issue = 2;
    // var startIssue = issue;
    // var endIssue = issue;
    
    runWikiQueryBatch(startIssue, endIssue);
}

//create
function runWikiQueryBatch(startIssue, endIssue){
    
    for(var i = startIssue; i <= endIssue; i++){
        var comicTitle = "Avengers Vol 1 " + i;
        searchWikiForComic(comicTitle);
    }
}

function characterParserTester(sampleComic){
    var charactersBlock = sampleComic.sampleText;

    // //original comic object
    // var comicObj = {
    //     title: sampleComic.title,
    //     characters: []
    // };
    
    //original comic object
    var comicObj = {
        title: sampleComic.title,
        featuredCharacters: [],
        supportingCharacters: [],
        antagonists: []
    };

    comicObj.characters = parseFeaturedCharacters(charactersBlock);
    console.log('comicObj', comicObj)
    addComicInfoToDOM(comicObj);

}


// ***** WIKI QUERY METHODS *****

function searchWikiForComic(comicTitle){

    var extraDataOptions = {
        prop: 'revisions',
        rvprop: 'content',
        rvsection: '0',
    };
    comicTitle = comicTitle.replace('#', '');
    var queryString = constructQueryString(comicTitle, extraDataOptions);
    // doesn't require a closure
    // (function(){
        // comicTitle = comicTitle;
    // })()

    $.ajax({
        type: "GET",
        url: `https://marvel.fandom.com/api.php?${queryString}`,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            //parser should return success or failure upon determining if correct information was retrieved
            var comicInfo = generalParser(data, comicTitle);
            
            if(comicInfo.success){
                var comicObj = {
                    title: comicTitle,
                    featuredCharacters: [],
                    supportingCharacters: [],
                    antagonists: []
                };
                // page information was received
                // FOR MARVEL API
                var content  = comicInfo.content.revisions[0]['*'];

                // console.log('content info:', content);

                // extract featured characters list
                try{
                    (function(){
                        var charactersBlock = extractCharactersBlock(content);

                        parseCharactersBlocks(charactersBlock, comicObj);

                        // comicObj.characters = parseFeaturedCharacters(charactersBlock);
                        // console.log('comicObj', comicObj)

                        // add comic to batch
                        
                        // once batch is complete, add 
                        addComicInfoToDOM(comicObj);
                    })();
                }catch{
                    displayError(`Search for ${comicTitle} yielded an error.`);
                    // catchReprintError(content);
                }
                
            }else{
                console.log(`error ${comicTitle}`)
            }
        },
        error: function (errorMessage) {
            // need to return something in case there is an error
            // if page for comic is not found than neither is the image for it
            // $img.attr('src', './resources/image_not_found.png');
        }
    });
}

/**
 * capture the entire block of characters (featured, supporting, and antagonists; excludes Other Characters)
 * @param {*} content 
 * @returns 
 */
function extractCharactersBlock(content){
    // var pattern = /Appearing1 += \n(((.+)\n)+)'''Other Characters:'''/g;
    var pattern = /Appearing1 += \n(((.+)\n)+'''Other Characters:''')/g;

    // basic pattern for specific character set
    // var pattern = /(?<='''Featured Characters:''' ?\n)((.+)\n)+(?=(\<!---?)?'''Supporting Characters:''')|(?<='''Featured Characters:'''\n)((.+)\}?\n)+(?=(\<!---?)?'''Antagonists:''')/g;
    var charactersBlock = pattern.exec(content)[1];

    // if(charactersBlock == null){
    //     pattern = /(?<='''Featured Characters:'''\n)((.+)\n)+(?=(\<!---?)?'''Antagonists:''')/g;
    //     charactersBlock = pattern.exec(content)[0];
    // }

    // console.log('char block:', charactersBlock);

    return charactersBlock;
}

/**
 * create separate blocks for featured, supporting, and antagonists
 * @param {} charactersBlock 
 */
function parseCharactersBlocks(charactersBlock, comicObj){

    // find featured characters
    // if there are supporting characters, search from Featured Characters to Supporting Characters; else if there are no supporting characters then search from Featured Characters to Antagonists
    // var pattern = /(?<='''Featured Characters:''' ?\n)((.+)\n)+(?=(\<!---?)?'''Supporting Characters:''')|(?<='''Featured Characters:'''\n)((.+)\}?\n)+(?=(\<!---?)?'''Antagonists:''')/g;
    try{
        var pattern = /'''Featured Characters:'''\n(((.+)\n)+)(?='''Supporting)/;
        var matchedPattern = charactersBlock.match(pattern)[1];

        comicObj.featuredCharacters = parseCharactersInBlock(matchedPattern);
        // var featured = parseCharactersInBlock(matchedPattern);
    }catch{
        try{
            var pattern = /'''Featured Characters:'''\n(((.+)\n)+)(?='''Antagonists)/;
            var matchedPattern = charactersBlock.match(pattern)[1];

            // console.log('matchedPattern', matchedPattern)
    
            comicObj.featuredCharacters = parseCharactersInBlock(matchedPattern);
        }catch{
            displayError(`Search for featured characters in ${comicTitle} yielded an error.`); 
        }
    }
    // find supporting characters
    // if there are supporting characters, search from Supporting Characters to Antagonists; else there are no supporting characters and leave this empty
    try{
        var pattern = /'''Supporting Characters:'''\n(((.+)\n)+)(?='''Antagonists)/;
        var matchedPattern = charactersBlock.match(pattern)[1];

        comicObj.supportingCharacters = parseCharactersInBlock(matchedPattern);
    }catch{
        displayError(`Search for supporting characters in ${comicTitle} yielded an error.`); 
    }

    // find antagonists
    // search from 
    try{
        var pattern = /'''Antagonists:'''\n(((.+)\n)+)(?=''')/;
        var matchedPattern = charactersBlock.match(pattern)[1];

        comicObj.antagonists = parseCharactersInBlock(matchedPattern);
    }catch{
        displayError(`Search for ${comicTitle} yielded an error.`); 
    }

    console.log('comicObj', comicObj);

}

// takes a block for specific character type and parses out the characters
function parseCharactersInBlock(characterBlock){
    // var pattern = /\* \{\{(.+)?\|\[\[([^\|]+\))\|(?!=.\|)/g;

    // first test
    // var pattern = /(?<! \/ )\{\{.+\|\[\[([^\/}|]+)\|.+\]\]\|([^\/}]+)\}\}/g
    // var matchedPattern = charactersBlock.match(pattern);
    
    // // var matchedPattern = pattern.exec(charactersBlock);
    // // console.log('matched pattern', matchedPattern);

    // if(matchedPattern == null){
    //     pattern = /(?<! \/ )\{\{.+\|\[\[([^\/}|]+)\|.+\]\](\|([^\/}]+))?\}\}/g;
    //     matchedPattern = charactersBlock.match(pattern);
    // }

    // second test
    pattern = /(?<! \/ )\{\{.+\|\[\[([^\/}|]+)\|.+\]\](\|([^\/}]+))?\}\}/g;
    matchedPattern = characterBlock.match(pattern);


    var charArray = [];
    // pattern = /\[\[(.*)\|/g;
    pattern = /\[\[([^|]*)\|/g
    matchedPattern.forEach(element => {
        var result;
        while((result = pattern.exec(element)) !== null){
            charArray.push(result[1]);
        }
    });

    return charArray;

    // console.log('charArray', charArray);
}


// ***** METHODS FOR PARSING *****

// NOTE: pass another argument in, the term searched for so error message can contain it
/**
 * Summary: Searches wiki response for specific term.
 * 
 * @param {object} response   JSON response object from wiki.
 * @param {object} searchTerm Term searched in query to the wiki. Important 
 *                               for error messages.
 * 
 * @returns {object} object with properties:
 *           {boolean} success - description of the call
 *           {string} content - content of the page queried from the wiki
 *           {string} errorMessage - message if query was unsuccessful
 */
function generalParser(response, searchTerm){
    var key = 0;
    var data = {
        success: false
    }
    for(i in response.query.pages)
    key = i;

    if(key < 0){
        // call was unsuccessful
        if(searchTerm !== undefined){
            data.errorMessage = `Could not find page for search term: ${searchTerm}`;
        }else{
            data.errorMessage = `Could not find page for search term.`;
        }
        
    }else{
        // call was successful
        data.success = true;
        data.content = response.query.pages[key];
    }
    // console.log(data);
    return data;
}

/**
 * Summary: Returns an array of objects holding information on disambiguation
 *    pages including title and image.
 * 
 * Description: Parses page number and image title information.
 * 
 * @param {object} pattern Regex pattern object to test.
 * @param {string} content Content from the wiki to check against regex pattern.
 * 
 * @returns {array} Array of objects containing titles of the pages found and the
 *                    titles of the images associated with them. NOTE: if no 
 *                    matches of pattern caught, method will return an empty
 *                    array.
 */
function parseDisambiguation(pattern, content){
    var tempMatchArr = null;
    matchArr = [];
    while( (tempMatchArr = pattern.exec(content)) !== null){
        tempObj = {};
        tempObj.page = tempMatchArr[1];
        tempObj.imageTitle = tempMatchArr[2];
        matchArr.push(tempObj);
    }
    return matchArr;
}


// ***** HELPER METHODS *****

/**
 * Summary: Parses together data options to create query string for calls
 *    to wikia API.
 * 
 * @param {string} titlesValue      Title of the page to be searched for.
 * @param {object} extraDataOptions An object holding key value pairs for
 *                                     extra data options not standard to 
 *                                     all calls.
 * 
 * @returns {string} Query string to send to the wiki.
 */
function constructQueryString(titlesValue, extraDataOptions){
    // base data incorporated in all calls to wikia API
    var data = {
        format: 'json',
        action: 'query',
        callback: '?',
        titles: encodeURIComponent(titlesValue),
        redirects: ''
    };
    // add extra key value pairs into data object
    for(var key in extraDataOptions){
        if(extraDataOptions.hasOwnProperty(key)){
            data[key] = extraDataOptions[key];
        }
    }
    // construct query string from data object's key value pairs
    var queryString = "";
    for(var i = 0; i < Object.keys(data).length; i++){
        queryString += Object.keys(data)[i] + "=" + data[Object.keys(data)[i]] + "&";
    }
    // remove final ampersand from end of query string
    queryString = queryString.substring(0, queryString.length - 1);
    return queryString;
}

/**
 * Summary: Adds an error message to the list of error messages.
 * 
 * @param {string} message Text of the error message to display.
 */
function displayError(message){
    console.log(message)

}

function catchReprintError(content){
    var pattern = /ReprintOf1.+= (.+)/g
 
    // comicTitle
    var reprintTitle = null
    reprintTitle = pattern.exec(content)[0];

    console.log(`Is a reprint of ${reprintTitle}.`);
}


//comicInfo is a comicObj with title and list of characters broken up into featured characters, supporting characters, and antagonists
function addComicInfoToDOM(comicInfo){
    var $comic = $('<div>').addClass('comic');
    var $title = $('<div>').addClass('title');
    var $featuredCharSection = $('<div>').addClass('section featured').html('Featured Characters<br>');
    var $supportingCharSection = $('<div>').addClass('section supporting').html('Supporting Characters<br>');
    var $antagonistSection = $('<div>').addClass('section antagonist').html('Antagonists<br>');

    $title.append(comicInfo.title);
    comicInfo.featuredCharacters.forEach(element => {
        $featuredCharSection.append(element, "<br>");
    });
    comicInfo.supportingCharacters.forEach(element => {
        $supportingCharSection.append(element, "<br>");
    });
    comicInfo.antagonists.forEach(element => {
        $antagonistSection.append(element, "<br>");
    });

    $comic.append($title, $featuredCharSection, $supportingCharSection, $antagonistSection);
    $('body').append($comic);
}