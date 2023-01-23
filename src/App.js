/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from './logo.svg';

const bannerSectionStyles = css`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  padding: 20px;

  padding: 16px;
  a {
    color: #e2e8f0;
    text-decoration: none;
    font-size: 1.125rem;
  }
`;

const topBottonStyles = css`
  align-items: center;
  background: rgb(74, 144, 226);
  border-radius: 100px;
  border: none;
  box-shadow: none;
  color: rgb(255, 255, 255);
  display: inline-flex;
  font-size: 1rem;
  font-weight: 500;
  line-height: 28px;
  justify-content: center;
  cursor: pointer;
  outline: none;
  min-height: 48px;
  min-width: 48px;
  padding: 0.75rem 1.11111rem 0.75rem 1.24074rem;
`;

const heroimageStyles = css`
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;

const sectionOneTopStyles = css`
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 300;
  padding: 1rem;
  font-style: normal;
  text-anchor: middle;
  background-image: linear-gradient(blue, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const sectionOneBottomStyles = css`
  justify-content: center;
  display: flex;
  font-size: 1rem;
  font-weight: 300;
  color: #333333;
`;

const textStyles = css`
  background-image: linear-gradient(50deg, blue, darkblue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
              />
            </a>
          </div>
          <div css={topBottonStyles}>Purchase</div>
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
        <section css={sectionOneTopStyles}>
          Calm the mind. Change the world
        </section>
        <text css={textStyles}>hello</text>
        <section css={sectionOneBottomStyles}>
          Modern life is hectic and relentless: trains delayed, endless emails
          filling the inbox, kids squabbling before bedtime… There has never
          been a more important time to rediscover your pause button. Calm is
          the book that will show you how to take back a little bit of peace,
          space and all-important calm. This book contains the simple tools,
          tricks and habits that will change the rest of your life. It is a
          practical and pleasurable guide to twenty-first century mindfulness.
        </section>
        body
      </body>
      <footer>footer</footer>
    </>
  );
}

export default App;
