import * as React from 'react'
import Card from '../components/Card';
import colors from '../assets/colors';
import UnderFooter from "../components/UnderFooter";
import './style.css';

const mainBox = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  minWidth: '100vw',
  background: colors.lightGray,
  margin: '0',
  paddingTop: '4rem',
  paddingBottom: '4rem'
}

const text1 = 'Improve your front-end skills by building projects';
const text2 = 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level';

const IndexPage = () => (
  <>
    <div style={ mainBox }>
      <Card titleText={ text1 } descText={ text2 } />
    </div>
    <UnderFooter />
  </>
)

export default IndexPage
