const songTitleText = document.getElementById('song-title');
const songArtistText = document.getElementById('song-artist');

const songMeaningLink = document.getElementById('song-meaning-link');

var songInformation = {
    title: null,
    artist: null
}

chrome.tabs.query({ active: true, lastFocusedWindow: true }, async function (tabs) {
    //tabs[0].url;     //url
    //tabs[0].title;   //title

    let value = tabs[0].title;

    let songTitle = value.substring(0, value.indexOf('•'));
    songInformation.title = songTitle.substring(0, songTitle.length - 1);
    let songArtist = value.substring(value.indexOf('•'));
    songInformation.artist = songArtist.substring(2);

    songTitleText.innerText = songInformation.title;
    songArtistText.innerText = songInformation.artist;

    let url = `https://songmeanings.com/query/?query=${songInformation.title.replace(" ","-").toLowerCase()}-${songInformation.artist.replace(" ","-").toLowerCase()}&type=all`;
    songMeaningLink.href = url;
});