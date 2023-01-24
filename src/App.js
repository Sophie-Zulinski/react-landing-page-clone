/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as Amazonlogo } from './amazonlogo.svg';
import logo from './logo.svg';
import { ReactComponent as Star } from './Stars.svg';

const bannerSectionStyles = css`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-left: 100px;
  padding-right: 100px;
`;

const BottonStyles = css`
  background: rgb(74, 144, 226);
  border-radius: 100px;
  color: rgb(255, 255, 255);
  display: inline-flex;
  cursor: pointer;
  padding: 20px 40px;
  font-weight: 800;
  :hover {
    background-color: darkblue;
  }
`;

const heroimageStyles = css`
  display: flex;
  margin: auto;
  height: 750px;
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
    font-size: 1.4rem;
    font-weight: 300;
  }
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
  font-size: 1.3rem;
`;

const centerpositionStyles = css`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
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
`;

const footerStyles = css`
  text-decoration: none;
  display: flex;
  font-size: 30px;
  list-style: none;
  justify-content: space-around;
  gap: 40px;
  ul {
    font-size: 1.2rem;
    font-weight: 300;
  }
  li {
    font-size: 0.9rem;
    font-weight: 300;
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

          <div css={BottonStyles}>
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
          <div css={BottonStyles}>Purchase</div>
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

      <footer css={footerStyles}>
        <section>
          <ul>Company</ul>
          <li>About</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Blog</li>
          <li>Meet our Instructor</li>
        </section>
        <section>
          <ul>Offers</ul>
          <li>Buy a Gift</li>
          <li>Redeem a Gift</li>
          <li>Family Plan</li> <li>Calm Health</li> <li>Calm for Business</li>
        </section>
        <section>
          <ul>Help</ul>
          <li>FAQ </li>
          <li>Contact Us</li> <li>Terms</li> <li>Privacy</li>{' '}
          <li>CCPA Notice</li>
          <li>Accessibility Statement</li>
          <li>Opt Out of Targeted Ads Cookies</li>
        </section>
      </footer>
    </>
  );
}

export default App;
