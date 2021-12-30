import React from 'react'
import './footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { Grid, Slider } from "@material-ui/core"
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

function Footer() {
    return (
        <div className='footer'>
          <div className='footer__left'>
           <img className='footer__albumLogo' src="https://upload.wikimedia.org/wikipedia/commons/0/02/Trey_Songs_%287082264395%29.jpg" alt="" />
           <div className='footer__songInfo'>
            <h4>Oh God!</h4>
            <p>Usher</p>
            </div>   
          </div>
          <div className='footer__center'>
             <ShuffleIcon className='footer__green' />
             <SkipPreviousIcon className='footer__icon' />
             <PlayCircleOutlineIcon fontSize="large" className='footer__icon' />
             <SkipNextIcon className='footer__icon' />
             <RepeatIcon className='footer__green' />
          </div>
           <div className='footer__right'>
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon  className='footer__icon' />
                </Grid>
                <Grid item>
                    <VolumeUpIcon   className='footer__icon' />
                </Grid>
                <Grid item xs>
                    <Slider />
                </Grid>
            </Grid>
          </div>
        </div>
    )
}

export default Footer
