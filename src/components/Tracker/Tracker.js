import * as React from 'react';

const IP_WHITE_LIST = [];

class Tracker extends React.Component {
  async componentDidMount () {
    try {
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipObj = await ipResponse.json();
      const ip = ipObj.ip;
      // console.log(IP_WHITE_LIST.indexOf(ip));
      if (IP_WHITE_LIST.indexOf(ip) >= 0) {
        return;
      }

      const body = { address: ip, lastTime: new Date(), timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone };

      // console.log(body);

      return await fetch(`https://portfolio-4869e.firebaseio.com/visitors.json`, {
        method: 'POST',
        body: JSON.stringify(body)
      });
    } catch (e) {
      // console.log(e);
    }
  };

  render () {
    return null;
  }
}

export default Tracker;