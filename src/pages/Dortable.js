import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import Footer from '../components/Footer/Footer';
// import MainBackground from '../components/MainBackground/MainBackground';
import Image from '../components/Image/Image';
// import Text from '../components/Text/Text';
import Title from '../components/Title/Title';
import Page from '../components/Page/Page';
// import img1 from '../img/dortable-1.png';
// import img2 from '../img/dortable-2.png';
// import img3 from '../img/dortable-3.png';
// import img4 from '../img/dortable-4.png';
// import img5 from '../img/dortable-5.png';
// import img6 from '../img/dortable-6.png';
// import img7 from '../img/dortable-7.png';
// import img8 from '../img/dortable-8.png';
// import img9 from '../img/dortable-9.png';
// import img10 from '../img/dortable-10.png';
// import img11 from '../img/dortable-11.png';
// import img12 from '../img/dortable-12.png';
// import img13 from '../img/dortable-13.png';
// import img14 from '../img/dortable-14.png';
// import img15 from '../img/dortable-15.png';
// import img16 from '../img/dortable-16.png';
// import img17 from '../img/dortable-17.png';

import {
  dortable1 as img1,
  dortable2 as img2,
  dortable3 as img3,
  dortable4 as img4,
  dortable5 as img5,
  dortable6 as img6,
  dortable7 as img7,
  dortable8 as img8,
  dortable9 as img9,
  dortable10 as img10,
  dortable11 as img11,
  dortable12 as img12,
  dortable13 as img13,
  dortable14 as img14,
  dortable15 as img15,
  dortable16 as img16,
  dortable17 as img17
} from '../img/images';

import Store from '../context';

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #2e2b31;
  transform: ${({ cover }) => (cover === 'normal' && 'translateY(0)')
    || (cover === 'up' && ' translateY(-100%)')
    || 'translateY(100%)'};
  transition: transform 0.3s;
  will-change: transform;
  /* transform: scaleY(0); */
`;

const Header = styled.h2`
  font-family: 'Merriweather', serif;
`;

const fadingImageAnim = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10%);
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: scale(1.1);
  }
`;

const FadingImage = styled.img`
  position: absolute;
  animation-name: ${fadingImageAnim};
  animation-timing-function: ease-in-out;
  opacity: 0;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  z-index: 100;
  &.one {
    top: 10vh;
    left: 10vw;
    height: 15rem;
    animation-delay: 1s;
    animation-duration: 1.5s;
  }
  &.two {
    top: 55vh;
    left: 70vw;
    height: 20rem;
    animation-delay: 0.5s;
    animation-duration: 2s;
  }
  &.three {
    top: 5vh;
    left: 74vw;
    height: 30rem;
    animation-delay: 0.7s;
    animation-duration: 1.8s;
  }
  &.four {
    top: 54vh;
    left: 3vw;
    height: 30rem;
    animation-delay: 1.3s;
    animation-duration: 1.2s;
  }
  &.five {
    top: 4vh;
    left: 45vw;
    height: 20rem;
    animation-delay: 1.5s;
    animation-duration: 1s;
  }
  @media (max-width: 800px) {
    display: ${({ size }) => (size === 'big' && 'none') || 'block'};
    &.one {
      top: 3vh;
      left: 2vw;
      height: 13rem;
    }
    &.two {
      display: none;
    }
    &.three {
      left: 51vw;
    }
    &.four {
      top: 48vh;
      left: 2vw;
      height: 24rem;
    }
    &.five {
      display: none;
    }
  }
  @media (max-width: 500px) {
    display: ${({ size }) => ((size === 'medium' || size === 'big') && 'none') || 'block'};
    &.two {
      display: none;
    }
    &.three {
      top: 35vh;
      left: 21vw;
    }
    &.four {
      display: none;
    }
    &.five {
      display: none;
    }
  }
`;

const upperImageAnim = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const UpperImage = styled.img`
  width: 100%;
  position: absolute;
  animation: ${upperImageAnim} 3s ease-in-out infinite;
  top: 0;
  left: 0;
  padding: 3.33% 4.92%;
  box-sizing: border-box;
`;

class Dortable extends React.Component {

  static contextType = Store;

  constructor(props) {
    super(props);

    this.coverRef = React.createRef();
    this.startDarkThemeRef = React.createRef();
    this.endDarkThemeRef = React.createRef();
  }

  state = {
    coverImageHeight: 0,
    blackCover: 'down',
    isImagesLoaded: false,
    startDarkThemePos: 0,
    endDarkThemePos: 0
  };

  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollHandler);
  };

  onDarkThemeImageLoaded = () => {
    const { isImagesLoaded } = this.state;
    if (!isImagesLoaded) {
      return this.setState({ isImagesLoaded: true });
    }

    const startDarkThemeImg = this.startDarkThemeRef.current;
    const endDarkThemeImg = this.endDarkThemeRef.current;
    if (!startDarkThemeImg || !endDarkThemeImg) {
      return;
    }

    this.setState({
      startDarkThemePos: startDarkThemeImg.getBoundingClientRect().top + window.pageYOffset - 3 * window.innerHeight / 4,
      endDarkThemePos: endDarkThemeImg.getBoundingClientRect().bottom + window.pageYOffset + window.innerHeight / 2,
    });
    window.addEventListener('scroll', this.scrollHandler);
  };

  onCoverLoad = () => {
    const coverImage = this.coverRef.current;
    if (!coverImage) {
      return;
    }

    this.setState({
      coverImageHeight: coverImage.clientHeight
    });
  };

  scrollHandler = () => {
    const yPosTop = window.pageYOffset;
    const yPosBottom = yPosTop + window.innerHeight;
    const { startDarkThemePos, endDarkThemePos, blackCover } = this.state;
    let newBlackCover = '';
    if (yPosTop < startDarkThemePos && blackCover !== 'down') {
      newBlackCover = 'down';
    } else if (yPosTop > startDarkThemePos && yPosBottom < endDarkThemePos && blackCover !== 'normal') {
      newBlackCover = 'normal';
    } else if (yPosBottom > endDarkThemePos && blackCover !== 'up') {
      newBlackCover = 'up';
    } else {
      return;
    }
    this.setState({ blackCover: newBlackCover });
  };

  render () {
    const { blackCover } = this.state;
    const { lang } = this.context;
    return (
      <article style={ { position: 'relative', overflowX: 'hidden' } }>
        <Background cover={ blackCover } />
        <Page coverImg={ img1 } textProps={ { white: blackCover === 'normal' } } >
          { (lang === 'ru' && (
            <React.Fragment>
              <Title>DOR Table</Title>
              <p><i>Задача. Сделать приложение для HR-менеджеров, которое заменит Excel.</i></p>
              <p>
                HR-агенты используют таблицы. Много таблиц. Таблицы с работниками, таблицы с задачами, с ролями, правилами и много много всего. Сейчас они используют Excel для этого. DOR Table объединит все эти таблицы в одно приложение, свяжет все сущности воедино.
              </p>
              <p>
                Для написания приложения использовался Electron, потому что позволяет писать веб приложения, а компилировать нативные под все платформы (Windows, Linux, macOS). Из библиотек выбрали React, потому что с ним легко отслеживать все изменения, Redux, потому что приложение большое и нужно эффективно управлять состоянием, а также чтобы вынести бизнес-логику в отдельные модули, для стилей styled components (CSS-in-JS), потому что они компилируются достаточно быстро, и легче поддаются изменениям, а также поддерживают автопрефиксы из коробки. Для типизации использовали Flow, потому что большое приложение без строгой типизации это ад. Для поиска возможных ошибок - ESLint, потому что пусть машины заботятся о красоте, а люди - о качестве кода.
              </p>
              <p>
                В команде было 3 человека, двое из них занимались логикой приложения на сервере и передачей данных клиенту. Я отвечал за frontend разработку.
              </p>
              <p>
                Все началось с шаблона. Мы постепенно стали разбираться, как настроить его под себя, куда добавить свои компоненты и как их организовать.
              </p>
              <p>
                Структурировать файлы было решено по немного измененному фрактальному подходу (https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af).
              </p>
              <Header>Функционал приложения</Header>
              <Image src={ img2 } onClick={ this.darkThemeHandler } />
              <p>
                В приложении есть восемь сущностей, для каждой своя таблица. Все таблицы связаны. Например, мы можем создать объекты <i>User Experience</i> и <i>User Interface</i>, а затем указать, что второй является продолжением первого.
              </p>
              <p>
                Важная часть - поиск. Он помогает ориентироваться в большом объеме информации. Поиск бывает как текстовый, так и по фильтрам. Текстовый ищет по всем полям, а фильтры действуют только на выбранные столбцы. Например, можно показать все функции с риском -6.
              </p>
              <Image src={ img3 } />
              <p>
                Также вся история таблиц сохраняется, ее можно просмотреть, выбрав дату на панели слева:
              </p>
              <div style={ { position: 'relative' } }>
                <Image src={ img4 } />
                <UpperImage src={ img17 } />
              </div>
              <p>
                В приложении есть и темная тема:
              </p>
              <Image src={ img5 } ref={ this.startDarkThemeRef } onLoad={ this.onDarkThemeImageLoaded } />
              <p>
                Почти все ячейки, кроме системных можно отредактировать
              </p>
              <Image src={ img6 } />
              <p>
                А также прокомментировать
              </p>
              <Image src={ img7 } ref={ this.endDarkThemeRef } onLoad={ this.onDarkThemeImageLoaded } />
              <p>
                Можно посмотреть сразу все изменения по строке
              </p>
              <Image src={ img8 } />
              <p>
                Вот так добавляется новая строка
              </p>
              <Image src={ img9 } />
              <p>
                С валидацией
              </p>
              <Image src={ img10 } />
              <p>
                Много кода…
              </p>
              <Image src={ img11 } />
              <p>
                Приложение было написано в течение полугода, была исправлена куча багов, производительность улучшалась несколько десятков раз, весь функционал был добавлен с нуля.
              </p>
              <Header>Спасибо за внимание!</Header>
            </React.Fragment>
          )) || (lang === 'en' && (
            <React.Fragment>
              <Title>DOR Table</Title>
              <p><i>The Task. To make an app for HR-manager in order to replace Excel in their work.</i></p>
              <p>
                HR-managers use tables. Bunch of tables. Tables of workers, Tables of tasks, of roles, of rules and many other stuff to collect. Today they are using Excel for storing data. DOR Table will merge all the tables into one app and bind all the entities together.
              </p>
              <p>
                The app was created on Electron framework, because it allow us to write web-app, but compile native app for all the platforms (Windows, Linux, macOS). We chose React, because it is easy to track all the changes with that, Redux, because our app is way too big and it is necessary to manage the state effectively and also isolate all the business-logic in separate module, for styling we used styled components (CSS-in-JS), because the compilation time is competitive, easier to maintain than css and auto-prefix your styles out of the box. For static typing we used Flow, because any big app with no static typing is a hell. For linting we set up ESLint, because let computers take care of beauty of the code, and let people be responsible for the quality of that code.
              </p>
              <p>
                The team consisted of 3 persons, 2 of them created backend logic and data transfer. I was working on frontend.
              </p>
              <p>
                It all started with a boilerplate. We got through it step-by-step, learned how to set up it for our needs, where to put the components and how to organize them.
              </p>
              <p>
                We structured our code with a little bit adapted Fractal approach (https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af).
              </p>
              <Header>Functionality</Header>
              <Image src={ img2 } onClick={ this.darkThemeHandler } />
              <p>
                In the app we have eight entities, each one has its own table. All the tables are connected. For instance we can create objects <i>User Experience</i> and <i>User Interface</i> and then specify, that the second one is the sequel of the first.
              </p>
              <p>
                Important part is search. It helps to navigate in large amount of data. Search works for text or filters. Text search looks for all fields, filters are applied only to selected ones. For example, we can find all the functions with risk is equal to -6.
              </p>
              <Image src={ img3 } />
              <p>
                Also all the history is saved and user can see it, if choose any specific date on the left panel:
              </p>
              <div style={ { position: 'relative' } }>
                <Image src={ img4 } />
                <UpperImage src={ img17 } />
              </div>
              <p>
                The app also has a dark theme:
              </p>
              <Image src={ img5 } ref={ this.startDarkThemeRef } onLoad={ this.onDarkThemeImageLoaded } />
              <p>
                Almost all cells, except system data, are editable
              </p>
              <Image src={ img6 } />
              <p>
                And also commentable
              </p>
              <Image src={ img7 } ref={ this.endDarkThemeRef } onLoad={ this.onDarkThemeImageLoaded } />
              <p>
                You can see all the changes in a row
              </p>
              <Image src={ img8 } />
              <p>
                Here is how you can add a new row
              </p>
              <Image src={ img9 } />
              <p>
                With validation
                </p>
              <Image src={ img10 } />
              <p>
                A lot of code…
              </p>
              <Image src={ img11 } />
              <p>
                The app was written for 6 months, a lot of bugs where fixed, performance was improved several times, all the functionality was written from scratch.
              </p>
              <Header>Thank you for the attention!</Header>
            </React.Fragment>
          )) }

        </Page>
        { /* <MainBackground marginTop={ coverImageHeight } />
          <Image src={ img1 } ref={ this.coverRef } onLoad={ this.onCoverLoad } className="cover" />
          <Text white={ blackCover === 'normal' } marginTop={ coverImageHeight } >
    </Text></React.Fragment> */ }
        { false && <Footer /> }
        <React.Fragment>
          <FadingImage src={ img12 } animDelay={ 1 } className="one" />
          <FadingImage src={ img13 } animDelay={ 0.5 } className="two" size="big" />
          <FadingImage src={ img14 } animDelay={ 0.7 } className="three" />
          <FadingImage src={ img15 } animDelay={ 1.3 } className="four" size="medium" />
          <FadingImage src={ img16 } animDelay={ 1.5 } className="five" size="big" />
        </React.Fragment>
      </article>
    );
  }

};

export default Dortable