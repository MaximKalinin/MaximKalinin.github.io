import * as React from 'react';

import MainBackground from '../components/MainBackground/MainBackground';
import Image from '../components/Image/Image';
import Text from '../components/Text/Text';
import Title from '../components/Title/Title';

import img1 from '../img/remember-1.png';

class Remember extends React.Component {

  constructor(props) {
    super(props);

    this.coverRef = React.createRef();
  }

  state = {
    coverImageHeight: 0
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

  render () {
    const { coverImageHeight } = this.state;
    return (
      <div style={ { position: 'relative', overflow: 'hidden' } }>
        <MainBackground marginTop={ coverImageHeight } />
        <Image className="cover" src={ img1 } onLoad={ this.onCoverLoad } ref={ this.coverRef } />
        <Text marginTop={ coverImageHeight }>
          <Title>DOR Table</Title>
          <p><i>Задача. Сделать приложение для HR-менеджеров, которое заменит Excel.</i></p>
          <p>
            HR-агенты используют таблицы. Много таблиц. Таблицы с работниками, таблицы с задачами, с ролями, правилами и много много всего. Сейчас они используют Excel для этого. DOR Table объединит все эти таблицы в одно приложение, свяжет все сущности воедино.
          </p>
          <p>
            Для написания приложения использовался Electron, потому что позволяет писать веб приложения, а компилировать нативные под все платформы (Windows, Linux, macOS). Из библиотек выбрали React, потому что с ним легко отслеживать все изменения, Redux, потому что приложение большое и нужно эффективно управлять состоянием, а также чтобы вынести бизнес-логику в отдельные модули, для стилей styled components (CSS-in-JS), потому что они компилируются достаточно быстро, и легче поддаются изменениям, а также поддерживают автопрефиксы из коробки. Для типизации использовали Flow, потому что большое приложение без строгой типизации это ад. Для поиска возможных ошибок - ESLint, потому что пусть машины заботятся о красоте, а люди - о качестве кода.
          </p>
          <p>
            Все началось с шаблона. Мы постепенно стали разбираться, как настроить его под себя, куда добавить свои компоненты и как их организовать.
          </p>
          <p>
            Структурировать файлы было решено по немного измененному фрактальному подходу (https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af).
          </p>
        </Text>
      </div>
    );
  }
};

export default Remember;