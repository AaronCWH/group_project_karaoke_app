import react from 'react';
import {useState} from 'react';
import { render } from 'react-dom';
import API from "../API";
import API2 from "../API2";

function MainScreen(props) {
    const [songNumber, setSong] = useState(1);
    const [songDetails, setSongDetails] = useState([]);

    async function retrieveLyrics(){
        const lyrics = await API.get(`/songs/378195`);
        // need to adjust song id here^ according to whatever song user selects
        console.log ("inside lyrics", lyrics);
        const {data} = lyrics;
        setSongDetails(data.response.song)
    }

    async function retrieveReferents(){
        const referents = await API2.get(`referents?song_id=378195`);
        //same as above ^ adjust song id here ^
        console.log ("inside refernts", referents);
    }

    async function retrieveSearchFunction(){
        
    }

    const renderLyricsResponse = (res) => {
        if(res.length === 0){
            return null;
        } ;

        return (

            <>

                <h1>Song's Full Title {res.full_title}</h1>

                <h1>Album Image</h1>
                <img src={res.header_image_thumbnail_url} alt =''/>
                {/* returns image link so use img tag */}

                <h1>Album Image 2 </h1>
                <img src = {res.header_image_url} alt=''/>
                {/* returns image link so use img tag */}

                <h1>Music Video</h1>
                <video src={res.media[0].url}>Test</video>
                <video src="https://www.youtube.com/embed/2vjPBrBU-TM">Test2</video>

                {/* just returns a URL..  have to try i-frames maybe?*/}

                <h1>Attemping to draw lyrics {res.path}</h1>

                {/* returns me a path.. not sure what to do with this.. Maybe use API.get and insert path?? */}
                
                <h1>Album {res.media[0].url}</h1>

            </>
        )
    }
    return (
        <>

        <h1 onClick= {retrieveLyrics}> 
        API.get(`/songs/378195`) {renderLyricsResponse(songDetails)}
        </h1>

        <h2 onClick = {retrieveReferents}>
            API2.get(`referents?song_id=378195`)
        </h2>
        
        </>
    )
}

export default MainScreen;