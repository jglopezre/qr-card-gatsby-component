import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import colors from '../assets/colors';

const cardWrapper = {
    background: colors.white,
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'space-between',
    borderRadius: '20px',
    padding: '1.2rem'
}

const textWrapper = {
    padding: '1rem',
    textAlign: 'center'
}

const qrImage = {
    width: '100%',
}

const titleStyle = {
    fontSize: '1.5rem',
    color: colors.darkBlue
}
const descStyle = {
    color: colors.grayishBlue
}

const Card = ({titleText, descText}) => (
    <div style={ cardWrapper }>
        <div style={ qrImage }>
            <StaticImage src='../images/image-qr-code.png' style={{borderRadius: '10px'}} alt='QR code' />
        </div>
        <div style={ textWrapper }>
            <h1 style={ titleStyle }>{ titleText }</h1>
            <p style={ descStyle  }>{ descText }</p>
        </div>
    </div>
)


export default Card;
