
let title;
let artist;
let date_displayed;
let art_type;

/**
 * 
 * @param img_index 
 * 
 */


function getData(img_index){
    let artworkId = document.getElementsByTagName('img')[img_index].attributes[1].value

    fetch (`https://api.artic.edu/api/v1/artworks/${artworkId}?fields=title,artist_title,date_display,artwork_type_title`)
    .then(response => response.json())
    .then(aicdata => {
        let title = aicdata.data.title
        let artist = aicdata.data.artist_title
        let date_displayed = aicdata.data.date_display 
        let art_type = aicdata.data.artwork_type_title
        const html = `\nArtwork Title: ${title} \nArtist: ${artist} \nDate: ${date_displayed} \nType of Artwork: ${art_type}`;
        document.querySelector('.inner-header').innerHTML = html
    })    
}

/**
 * @param id 
 * @param event 
 * 
 * id = image id for gallery image
 * event = mouse event given by the action from our user
 * 
 * Our function will get the info from the clickedEvent based on the 
 * index of the image.
 */

 function getInfo(id, event){
    switch(id){
        case 'fig1': {
            event.stopPropagation();
            getData(0);
            break;
        }
        case 'fig2': { 
            event.stopPropagation();
            getData(1)
            break;
        }
        case 'fig3': { 
            event.stopPropagation();
            getData(2)
            break;
        }
        case 'fig4': { 
            event.stopPropagation();
            getData(3)
            break;
        }
        case 'fig5': { 
            event.stopPropagation();
            getData(4)
            break;
        }
        case 'fig6': { 
            event.stopPropagation();
            getData(5)
            break;
        }
    }
}

