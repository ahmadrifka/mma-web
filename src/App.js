import './App.css';
import { Column, Container, Row } from './components/ComponentStyle';
import appLogo from './assets/images/AppStore.png';
import androidLogo from './assets/images/GooglePlay.png';
import mockupAndroid from './assets/images/mockupAndroid.png';
import mockupIos from './assets/images/mockupIos.png';
import { BrowserView, MobileView } from 'react-device-detect';

function App() {
  return (
    <>
      <BrowserView>
      <div className="App">
      <Container>
        <Row>
          <Column style={{flex: 1, backgroundColor:'white'}}>
        <h1 style={{fontSize: '80px', fontWeight: '800'}}>
          Mau Makan Apa
        </h1>
        <div style={{width: '80%'}}>
        <p style={{fontSize: '30px', fontFamily: 'Poppins'}}>Kami siap bantu kamu untuk mengatasi masalah kata <span style={{fontWeight: '700'}}>terserah</span> </p></div>
        <div style={{width: '80%'}}>
        <p style={{fontSize: '28px', fontWeight: '600'}}>Download Mau Makan Apa sekarang! </p></div>
          <Row style={{justifyContent: 'start'}}>
          <a href="https://play.google.com/store/apps/details?id=com.maumakanapa">
         <img alt="Google Playstore" src={androidLogo} height="70"/></a>
         <div style={{width: '50px'}}/>
           <a href="https://apps.apple.com/id/app/maumakanapa/id1588253266">
         <img alt="App Store" src={appLogo} height="70" /></a>
          </Row>
          <img alt="image1" src={mockupIos} height="40%" width="50%" class="mockup"/>
          </Column>
         <div style={{flex: 1}}>
        <div class="right-box">
          <img alt="image2" src={mockupAndroid} height="700" class="mockupB"/>
        </div>
         </div>
        </Row>
      </Container>
      
      <div className="footer">
        <p>Copyright 2021 - Dev Team Developer and  contact us in <a href="mailto:maumakanapa.dev@gmail.com">maumakanapa.dev@gmail.com</a></p>
      </div>
    </div>
      </BrowserView>


      <MobileView>
      <div className="App">
      <Container style={{padding: '0px'}}>
          <Column style={{flex: 1, backgroundColor:'white', padding: '0', margin: '40px'}}>
        <h1 style={{fontSize: '40px', fontWeight: '800'}}>
          Mau Makan Apa
        </h1>
        <div style={{width: '80%'}}>
        <p style={{fontSize: '20px', fontFamily: 'Poppins'}}>Kami siap bantu kamu untuk mengatasi masalah kata <span style={{fontWeight: '700'}}>terserah</span> </p></div>
        <div style={{width: '80%'}}>
        <p style={{fontSize: '18px', fontWeight: '600'}}>Download Mau Makan Apa sekarang! </p></div>
          <Column style={{justifyContent: 'start', margin: '0px'}}>
          <a href="https://play.google.com/store/apps/details?id=com.maumakanapa">
         <img alt="Google Playstore" src={androidLogo} height="70"/></a>
         <div style={{height: '20px'}}/>
           <a href="https://apps.apple.com/id/app/maumakanapa/id1588253266">
         <img alt="App Store" src={appLogo} height="70" /></a>
          </Column>
          <img alt="image1" src={mockupIos} height="40%" width="50%" class="mockup"/>
          </Column>
      </Container>
      <div style={{padding: '10px'}}>
        <p style={{fontFamily:'Poppins'}}>Copyright 2021 - Dev Team Developer and  contact us in <a href="mailto:maumakanapa.dev@gmail.com">maumakanapa.dev@gmail.com</a></p>
      </div>
    </div>
      </MobileView>
    </>
  );
}

export default App;
