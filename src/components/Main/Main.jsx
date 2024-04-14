import React, {useContext} from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
    const {onSent,loading, setInput,input,showResult,recentPrompt,resultData,prevPrompts,setRecentPrompt}= useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt=''/>
        </div>

        <div className="main-container">

            {
            !showResult
            ?<>
            <div className="greet">
                <p><span>Hello, Pixar</span></p>
                <p>How can I help today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest some beautiful places</p>
                    <img src={assets.compass_icon} alt=''/>
                </div>
        
            
                <div className="card">
                    <p>Suggest some beautiful places</p>
                    <img src={assets.compass_icon} alt=''/>
                </div>
            
            
                <div className="card">
                    <p>Suggest some beautiful places</p>
                    <img src={assets.compass_icon} alt=''/>
                </div>
            
            
                <div className="card">
                    <p>Suggest some beautiful places</p>
                    <img src={assets.compass_icon} alt=''/>
                </div>
            </div>
            </>
            :<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt=''/>
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt=''/>
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                    
                </div>
            </div>
            }

            
            <div className='main-bottom'>
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a promt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt=''/>
                        <img src={assets.mic_icon} alt=''/>
                        <img onClick={()=>onSent()} src={assets.send_icon} alt=''/>

                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini may display inaccurate info, including about people, so double check its responses.<a href=''>Your privacy and Gemini Apps</a>
                </p>
            </div>

        </div>
    </div>
  )
}

export default Main
