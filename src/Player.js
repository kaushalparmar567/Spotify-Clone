import React from 'react'
import './Player.css'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './footer'

function Player({ spotify }) {
    return (
        <div className='player'>
            <div className='player_body'>
            {/*Sidebar*/}
             <Sidebar />
               
            {/*Body*/}
            <Body spotify={spotify} />
            </div> 
            {/*footer*/} 
            <Footer />
        </div>
    )
}

export default Player
