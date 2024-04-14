import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const {onSent, prevPrompts,setRecentPrompt}=useContext(Context)

    const loadPrompt = async(prompt)=>{
      setRecentPrompt(prompt)
      await onSent(prompt)
    }

  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt=''/>
        <div className='new-chat'>
            <img src={assets.plus_sign} alt=''/>
            {extended?<p>New Chat</p>:null}
        </div>
        {extended?
            <div className='recent'>
                <p className='recent-title'>Recent</p>
                {prevPrompts.map((item,index)=>{
                  return(
                    <div onClick={()=>loadPrompt(item)} className='recent-entry' key={index}>
                      <img src={assets.msg_icon} alt="" />
                      <p>{item.slice(0,18)}...</p>
                    </div>
                  )
                })}
                
            </div>
        
        :null
        }
    </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.quesmark_icon} alt=''/>
            {extended?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.activity_icon} alt=''/>
            {extended?<p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.settings_icon} alt=''/>
            {extended?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
