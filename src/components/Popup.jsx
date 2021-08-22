import React from 'react';
import '../styles/components/Popup.modules.scss'

export default function Popup(props) {
  const { Poster = '', Title = '' } = props.data
  const handleClose = () => {
    props.handleClose()
  }
  return (
    <div onClick={handleClose} className="popup">
      <div className="popup__content">
        <img src={Poster} alt={Title}/>
      </div>
    </div>
  )
}