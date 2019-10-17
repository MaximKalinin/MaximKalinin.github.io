import * as React from 'react';

import AnnounceGrid from '../components/AnnounceGrid/AnnounceGrid';
import dortable from '../img/dortable-1.png';
import Footer from '../components/Footer/Footer';
import IntlText from '../components/IntlText/IntlText';
import('./MainPage.css');

// const losevwear = 'https://lh3.googleusercontent.com/h3odG-iZYPinCBqBfoIGdT94wOPVmcO2LOFmbsPD1ngxNXDuxhH3YYEX9UnWU5uY55KLH-5E6fANj3fe05qhW52C-hNi7gDvbc4a9abEmK4TyLE542Pvh21ALZXxBeePwa-MSvIAJjRbUfmG9Y6A8LcloOysv8a3uZwXsyGp8fIOYpnU4b9USQXi7QBMN_vgTKIRlcb2S1pboUnI_8joHFoC9_jR0KDWkCZqON8kI1ZuLecojjNOHjSdCMNwhxe0vKZKkGOyMZLGIU5U4eHVaCyNt1AuYh3yjYQBgH2aWh-Xn9aJq3BmynILcwlSQobdHFlSpe9aYIxDf-o-7tIJCZEs39PgxOOBXMhhYUwghaX_r_3cuZoJqGx2mrV-68-f2Yrbwgq_2Qu-_0RkrEzQthl4n7j20tWE1wRW6BO_Z5YGy8vsvhtZmtqOreyxgLo7FrVNoJkOAry3YtVxlhhLoyUgLiemYwu5afqeIyRedjgpeaQQLsIpbxce1x2sNwjAKPEm9CO7mg0HmcPgTyuc8CXsqjp8jzUOXI7L7U7IPe4qdGKTWIbsM-DhK10NFCz13go3AAcRq25kD3ukhMQhAGl-1VYWH2JI0MxqVWbe03_VOOBsjpyj-WNRtoaCyigrjSU9tSPkqQ1qQEe-pFJKA4hfkhbmfZM=w1920-h1080-no';
// import remember from '../img/remember-intro.gif';

class MainPage extends React.Component {
  render () {
    return (
      <div className="main-page">
        <AnnounceGrid announces={ [
          {
            img: dortable, title: 'DOR Table', date: <IntlText id="dortable.date" />, likes: '33', link: '/dortable'
          },
          // {
          //   img: remember, title: 'Запомнишь все!', date: '15 июля', likes: '33', link: '/remember'
          // }
        ] } />
        { false && <Footer /> }
      </div>
    );
  }
}

export default MainPage;

//
