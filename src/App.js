/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as Amazonlogo } from './Images/amazonlogo.svg';
import { ReactComponent as LogoFB } from './Images/facebooklogo.svg';
import { ReactComponent as LogoInsta } from './Images/instalogo.svg';
import { ReactComponent as Star } from './Images/stars.svg';
import { ReactComponent as LogoTwitter } from './Images/twitterlogo.svg';

const bannerSectionStyles = css`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-left: 100px;
  padding-right: 100px;
`;

const bottonStyles = css`
  background: rgb(74, 144, 226);
  border-radius: 100px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  padding: 20px 40px;
  :hover {
    background-color: rgb(74, 130, 226);
  }
`;

const heroimageStyles = css`
  display: flex;
  margin: auto;
  width: 80vw;
`;

const headlineStyles = css`
  display: flex;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: 300;
  padding: 1rem;
  text-anchor: middle  x: 50% y: 50%;;
  margin: 20px;
  background-image: url('https://www.calm.com/_next/static/media/calm-text-gradient.6c145128.png');
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`;

const sectionOneBottomStyles = css`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  font-size: 1.2rem;
  font-weight: 300;
  color: #333333;

  max-width: 750px;
`;

const reviewCardContainerStyles = css`
  display: flex;
  justify-content: center;
  width: 500px;
  padding: 32px;
  gap: 50px;
  width: 890px;
  height: 440px;
  margin: 0px auto;
  font-weight: 400;
`;

const cardStyles = css`
  background-color: white;
  padding: 42px 36px 28px;
  font-weight: 300;
  font-size: 1.2rem;
`;

const centerpositionStyles = css`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
`;

const authorWarpper = css`
  display: flex;
  justify-content: center;
  width: 500px;
  padding: 32px;
  gap: 50px;
  margin: 0px auto;
`;

const sectionAuthorStyles = css`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  img {
    width: 310px;
  }
  div {
    font-size: 1.1rem;
    font-weight: 300;
  }
`;

const span = css`
  margin-left: 10px;
`;

const spanStars = css`
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;

const highlighttext = css`
  color: #009af9;
  font-weight: 800;
`;

const footerStyles01 = css`
  display: flex;
  list-style: none;
  justify-content: space-around;
  gap: 40px;
  background-color: white;
  ul {
    font-size: 1.2rem;
    font-weight: 200;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(85, 85, 85);
  }
  li {
    font-size: 0.7rem;
    font-weight: 100;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.3rem;
  }

  a {
    text-decoration: none;
    color: #555555;
    opacity: 0.8;
  }
`;

const footerStyles02 = css`
  display: flex;
  margin: auto;
  justify-content: center;
  color: lightgrey;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  padding: 50px;
  font-size: 14px;
`;

const socialmedialogos = css`
  a {
    padding: 10px;
    fill: rgb(85, 85, 85);
  }
`;

function App() {
  return (
    <>
      <header>
        <section css={bannerSectionStyles}>
          <div>
            <a href="/#">
              <img
                src="https://www.calm.com/_n/images/calm-logo-gradient.svg"
                alt="calm logo"
                width="150px"
              />
            </a>
          </div>

          <div css={bottonStyles}>
            <Amazonlogo />
            <span css={span}> Purchase</span>
          </div>
        </section>
      </header>

      <body>
        <section>
          <img
            css={heroimageStyles}
            src="https://res.cloudinary.com/calm-com/image/upload/v1656359615/www-next/book/hero.png"
            alt="Calm book logo"
          />
        </section>
        <section css={headlineStyles}>Calm the mind. Change the world</section>
        <section css={sectionOneBottomStyles}>
          Modern life is hectic and relentless: trains delayed, endless emails
          filling the inbox, kids squabbling before bedtime… There has never
          been a more important time to rediscover your pause button. Calm is
          the book that will show you how to take back a little bit of peace,
          space and all-important calm. This book contains the simple tools,
          tricks and habits that will change the rest of your life. It is a
          practical and pleasurable guide to twenty-first century mindfulness.
        </section>
        <section>
          <img
            css={heroimageStyles}
            src="https://res.cloudinary.com/calm-com/image/upload/v1656359615/www-next/book/benefits-splash-desktop.png"
            alt="desktop"
          />
        </section>
        <div css={reviewCardContainerStyles}>
          <div css={cardStyles}>
            “Great collage of ideas and practical advice of how to reduce stress
            in this fast paced world. A beautifully presented book which even
            calms you down when you pick it up. I would recommend it to
            everyone.”
            <span css={spanStars}>
              <Star />
            </span>
          </div>

          <div css={cardStyles}>
            “A beautifully presented book that is as lovely to look at as it is
            to read. Simple tips and inspiration on how to bring calm into your
            life. Highly recommend.”
            <span css={spanStars}>
              <Star />
            </span>
          </div>
        </div>
        <div css={headlineStyles}>Now available on Amazon</div>
        <div css={centerpositionStyles}>
          <div css={bottonStyles}>
            <Amazonlogo />
            <span css={span}> Purchase</span>
          </div>
        </div>

        <div css={headlineStyles}>Meet the Authors</div>
        <section css={authorWarpper}>
          <div css={sectionAuthorStyles}>
            <img
              src="https://www.calm.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcalm-com%2Fimage%2Fupload%2Fv1656359614%2Fwww-next%2Fbook%2Fwatercolor-acton.png&w=640&q=75"
              alt="author acton"
            />
            <div>
              Michael Acton Smith <br />
              <span css={highlighttext}>@acton</span>
            </div>
          </div>

          <div css={sectionAuthorStyles}>
            <img
              src="https://www.calm.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcalm-com%2Fimage%2Fupload%2Fv1656359615%2Fwww-next%2Fbook%2Fwatercolor-tewy.png&w=640&q=75"
              alt="author tewy"
            />
            <div>
              Alex Tew <br />
              <span css={highlighttext}>@tewy</span>
            </div>
          </div>
        </section>

        <br></br>
      </body>

      <footer css={footerStyles01}>
        <div>
          <ul>Company</ul>
          <a href="/#">
            <li>About</li>
          </a>
          <a href="/#">
            <li>Careers</li>
          </a>
          <a href="/#">
            {' '}
            <li>Press</li>
          </a>
          <a href="/#">
            <li>Blog</li>
          </a>
          <a href="/#">
            <li>Meet our Instructor</li>
          </a>
        </div>
        <section>
          <ul>Offers</ul>
          <a href="/#">
            <li>Buy a Gift</li>
          </a>
          <a href="/#">
            <li>Redeem a Gift</li>
          </a>
          <a href="/#">
            <li>Family Plan</li>
          </a>
          <a href="/#">
            <li>Calm Health</li>
          </a>
          <a href="/#">
            <li>Calm for Business</li>
          </a>
        </section>
        <section>
          <ul>Help</ul>
          <a href="/#">
            <li>FAQ </li>
          </a>
          <a href="/#">
            <li>Contact Us</li>
          </a>
          <a href="/#">
            <li>Terms</li>
          </a>
          <a href="/#">
            <li>Privacy</li>
          </a>
          <a href="/#">
            <li>CCPA Notice</li>
          </a>
          <a href="/#">
            <li>Accessibility Statement</li>
          </a>
          <a href="/#">
            <li>Opt Out of Targeted Ads Cookies</li>
          </a>
        </section>
        <section css={socialmedialogos}>
          <ul>
            <a href="/#">
              <LogoFB />
            </a>
            <a href="/#">
              <LogoInsta />
            </a>
            <a href="/#">
              <LogoTwitter />
            </a>
          </ul>
        </section>
      </footer>
      <section css={footerStyles02}>
        Copyright © 2023 Calm. All rights reserved
      </section>
    </>
  );
}

export default App;
