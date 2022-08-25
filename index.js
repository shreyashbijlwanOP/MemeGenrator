const root = ReactDOM.createRoot(document.getElementById('root'));

import memeData from "./memesData.js";




root.render(
    <>
        <Header />
        <Meme />
    </>
)

function Header() {
    return (
        <div className="header">
            <div className="company">
                <div className="logo"><img src="./src/Troll Face.png" alt="" /></div>

                <div className="logo-title">MemeGenrator</div>
            </div>

            <div className="course">
                <div className="course-title">React Course-Project 3</div>
            </div>
        </div>
    )
}
function Meme() {
    let [imgsrc, setSrc] = React.useState('https://i.imgflip.com/4acd7j.png');
    let [topText, setTopText] = React.useState('Top-text');
    let [bottomText, setBottomText] = React.useState('Bottom-text');

    function getMemeImage() {
        const memesArray = memeData.data.memes;         // array of objs of meme
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const { url } = memesArray[randomNumber]
        setSrc(`${url}`)
    }

    function onInputTop() {
        setTopText(event.target.value);
    }
    function onInputBottom()
    {
        setBottomText(event.target.value);
    }

    return (
        <div className="meme">
            <div className="input-div">
                <input
                    type="text"
                    className='fist-line'
                    placeholder="top-text"
                    onInput={onInputTop} />

                <input
                    type="text"
                    className='second-line'
                    placeholder="bottom-text"
                    onInput={onInputBottom}
                />
            </div>

            <button
                onClick={getMemeImage}
            >
                Get a new Meme Image
            </button>

            <div className="img-box">
                <img src={imgsrc} alt="" />
                <span
                    className="top-text"
                    
                >{topText}</span>
                <span
                    className="bottom-text"
                   
                >
                    {bottomText}</span>
            </div>
        </div>
    )
}
