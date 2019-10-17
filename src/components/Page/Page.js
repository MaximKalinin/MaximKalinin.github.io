import * as React from 'react';

import MainBackground from '../MainBackground/MainBackground';
import Image from '../Image/Image';
import Text from '../Text/Text';

class Page extends React.Component {

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
    const { coverImg, textProps, children } = this.props;
    return (
      <React.Fragment>
        <MainBackground marginTop={ coverImageHeight } />
        <Image src={ coverImg } ref={ this.coverRef } onLoad={ this.onCoverLoad } className="cover" />
        <Text marginTop={ coverImageHeight } { ...textProps }>{ children }</Text>
      </React.Fragment>
    );
  };
}

export default Page;