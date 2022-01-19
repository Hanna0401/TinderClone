import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton'


function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButton_repeat">
        <ReplayIcon font-size='large'/>
      </IconButton>
      <IconButton className="swipeButton_left">
        <CloseIcon font-size='large'/>
      </IconButton>
      <IconButton className="swipeButton_star">
        <StarRateIcon font-size='large'/>
      </IconButton>
      <IconButton className="swipeButton_right">
        <FavoriteIcon font-size='large'/>
      </IconButton>
      <IconButton className="swipeButton_lightening">
        <FlashOnIcon font-size='large'/>
      </IconButton>
    </div>
  )
}

export default SwipeButtons

