import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { withRouter } from 'react-router-dom';

import IntlText from '../IntlText/IntlText';

const footerAnim = keyframes`
  0% {
    background-color: #e8d9d9;
  }
  10% {
    background-color: #d4b8c9;
  }
  20% {
    background-color: #ede6ef;
  }
  30% {
    background-color: #dce5fd;
  }
  40% {
    background-color: #dcf7fd;
  }
  50% {
    background-color: #dcfdf8;
  }
  60% {
    background-color: #dcfde5;
  }
  70% {
    background-color: #e6fddc;
  }
  80% {
    background-color: #fdf6dc;
  }
  90% {
    background-color: #fdeadc;
  }
`;

const FooterEl = styled.footer`
  border-top: 6px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #e8d9d9;
  color: white;
  position: relative;
  animation: ${footerAnim} 30s infinite;
  & > h1 {
    font-family: 'Merriweather', serif;
    mix-blend-mode: difference;
    align-self: center;
  }
`;

const Contacts = styled.ul`
  margin: 0;
  padding: 20px 30px 0 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    mix-blend-mode: difference;
    margin: 0;
    padding-bottom: 10px;
    font-family: 'Merriweather', serif;
  }
  li {
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    position: relative;
    svg {
      height: 1.5rem;
    }
    a, button {
      text-decoration: none;
      color: black;
      border: none;
      padding: 0;
      background: none;
      font-size: inherit;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      margin-left: 5px;
    }
    a:hover, a:active,
    button:hover, button:active {
      color: #ff5600;
      border-bottom: 1px solid rgba(255, 56, 0, 0.3);
    }
    .hint {
      position: absolute;
      right: -15px;
      transform: translateX(110%);
      background: black;
      padding: 7px;
      color: white;
      opacity: 0;
      cursor: default;
      border-radius: 3px;
      transition: opacity 0.3s, transform 0.3s;
      &:before {
        position: absolute;
        left: -14px;
        top: calc(50% - 10px);
        content: '';
        display: block;
        /* border-left: 10px solid black; */
        border-width: 10px 15px 10px 0;
        border-color: transparent black transparent transparent;
        border-style: solid;
      }
    }
  }
  li:last-of-type {
    margin-bottom: 0;
  }
  li:hover {
    .hint {
      opacity: 0.5;
      transform: translateX(100%);
    }
  }
`;

const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z" /><path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z" /></svg>;

const TelegramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
viewBox="0 0 24 24"><path d="M 20.572266 3.0117188 C 20.239891 2.9764687 19.878625 3.028375 19.515625 3.171875 C 19.065625 3.348875 12.014406 6.3150313 5.4414062 9.0820312 L 3.2695312 9.9960938 C 2.4285313 10.337094 2.0039062 10.891672 2.0039062 11.638672 C 2.0039062 12.161672 2.22525 12.871063 3.28125 13.289062 L 6.9472656 14.757812 C 7.2642656 15.708813 8.0005469 17.916906 8.1855469 18.503906 C 8.2955469 18.851906 8.5733906 19.728594 9.2753906 19.933594 C 9.4193906 19.982594 9.5696563 20.007813 9.7226562 20.007812 C 10.165656 20.007812 10.484625 19.801641 10.640625 19.681641 L 12.970703 17.710938 L 15.800781 20.328125 C 15.909781 20.439125 16.486719 21 17.261719 21 C 18.228719 21 18.962234 20.195016 19.115234 19.416016 C 19.198234 18.989016 21.927734 5.2870625 21.927734 5.2890625 C 22.172734 4.1900625 21.732219 3.6199531 21.449219 3.3769531 C 21.206719 3.1694531 20.904641 3.0469688 20.572266 3.0117188 z M 19.910156 5.171875 C 19.533156 7.061875 17.478016 17.378234 17.166016 18.865234 L 13.029297 15.039062 L 10.222656 17.416016 L 11 14.375 C 11 14.375 16.362547 8.9468594 16.685547 8.6308594 C 16.945547 8.3778594 17 8.2891719 17 8.2011719 C 17 8.0841719 16.939781 8 16.800781 8 C 16.675781 8 16.506016 8.1197812 16.416016 8.1757812 C 15.272669 8.8885973 10.404094 11.662239 8.0078125 13.025391 L 4.53125 11.636719 L 6.21875 10.927734 C 10.51775 9.1177344 18.174156 5.893875 19.910156 5.171875 z"></path></svg>;

const GithubIcon = () => <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 438.549 438.549">
<g>
	<path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
		c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
		c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
		c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
		c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
		c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
		c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
		c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
		c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
		c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
		c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
		c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
		c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
		c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
		c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
		c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
		c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
		c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
		c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
		C438.536,184.851,428.728,148.168,409.132,114.573z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>;

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailCopied: false
    };
  }

  copyEmailToClipboard = () => {
    navigator.clipboard.writeText('maxim.kalinin.work@gmail.com');
    this.setState({emailCopied: true});
    setTimeout(() => {
      this.setState({emailCopied: false});
    }, 1000);
  }

  render () {
    const { emailCopied } = this.state;
    const { location } = this.props;
    const isMobile = !!navigator.userAgent.match(/iphone|android/i);
    const emailAddrEl = (isMobile && (
      <a href="mailto:maxim.kalinin.work@gmail.com?" target="_blank" rel="noopener noreferrer">maxim.kalinin.work@gmail.com</a>
    )) || (
      <button onClick={this.copyEmailToClipboard}>maxim.kalinin.work@gmail.com</button>
    );
    if(location.pathname.match('beta')) return null;
    return (
      <FooterEl>
        <Contacts>
          <h2><IntlText id="footer.contact-header" /></h2>
          <li>
          <EmailIcon />
          {emailAddrEl}
          <div className="hint">
            <IntlText id={(emailCopied && "footer.email-copied") || "footer.email-label"} />
          </div>
          </li>
          <li>
          <GithubIcon />
          <a href="https://github.com/MaximKalinin" target="_blank" rel="noopener noreferrer">@MaximKalinin</a>
          <div className="hint"><IntlText id="footer.github-label" /></div>
          </li>
          <li>
          <TelegramIcon />
          <a href="https://t.me/maximkalin" target="_blank" rel="noopener noreferrer">@maximkalin</a>
          <div className="hint"><IntlText id="footer.telegram-label" /></div>
          </li>
        </Contacts>
        <h1>МК, { new Date().getFullYear() } ©</h1>
      </FooterEl>
    );
  }
};

export default withRouter(Footer);