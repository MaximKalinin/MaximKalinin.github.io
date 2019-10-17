import * as React from 'react';
import styled from 'styled-components';

const VisitorsList = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 0;
  li {
    padding-bottom: 20px;
  }
`;

class Visitors extends React.Component {

  state = {
    visitors: []
  }

  async componentDidMount () {
    try {
      const visitorsRes = await fetch('https://portfolio-4869e.firebaseio.com/visitors.json', {
        method: 'GET'
      });
      const visitorsObj = await visitorsRes.json();
      const visitors = [];
      Object.keys(visitorsObj).forEach(key => {
        const visitor = visitorsObj[key];
        const thisVisitor = visitors.find(v => v.address === visitor.address);
        if (thisVisitor) {
          thisVisitor.count += 1;
          if (thisVisitor.lastTime < visitor.lastTime) {
            thisVisitor.lastTime = visitor.lastTime;
          }
        } else {
          visitors.push({ ...visitor, count: 1 });
        }
      });
      this.setState({ visitors });
    } catch (e) {
      console.log(e);
    }
  };

  render () {
    const { visitors } = this.state;
    return (
      <article>
        <h1>Посетители сайта:</h1>
        <VisitorsList>
          { visitors.map(visitor => (
            <li>IP-адрес: { visitor.address } <br /> Последний раз заходил: { new Date(visitor.lastTime).toLocaleString() } <br /> Сколько раз заходил: { visitor.count } <br /> откуда: { visitor.timeZone }</li>
          )) }
        </VisitorsList>
      </article>
    );
  };
}

export default Visitors;