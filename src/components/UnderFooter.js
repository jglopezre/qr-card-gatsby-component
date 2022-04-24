import React from 'react'

const style = {
    width: '100%',
    background: 'white',
    textAlign: 'center',
    fontSize: '11px',
    fontFamily: 'Helvetica, Arial, sans-serif'
}

const aStyle = {
    textDecoration: 'none',
    color: 'hsl(228, 45%, 44%)'
}

const UnderFooter = () => {
  return (
    <div style={ style }>
        <p>
	        Challenge by <a style={ aStyle } href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
	        Coded by <a style={ aStyle } href="http://javierlo.site" target="_blank">Javier López</a>.
        </p>
    </div>
  )
}

export default UnderFooter;