/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from './logo.svg';

const bannerSectionStyles = css`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 176px;
  margin-right: 176px;
  > a:hover {
    background-color: #4c51bf;
  }
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
    background-color: red;
  }
`;

const heroimageStyles = css`
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;

const headlineStyles = css`
  display: flex;
  justify-content: center;
  font-size: 2.25rem;
  font-weight: 300;
  padding: 1rem;
  text-anchor: middle;
  margin: 20px;
  background-image: linear-gradient(blue, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const sectionOneBottomStyles = css`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  font-size: 1.25rem;
  font-weight: 300;
  color: #333333;

  max-width: 750px;
`;

const authorWarpper = css`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const sectionAuthorStyles = css`
  display: flex;
  font-size: 1.25rem;
  font-weight: 300;
  font-family:
  padding: 1rem;
  font-style: normal;
  text-anchor: middle;
  background-image: linear-gradient(blue, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  justify-content: space-between;
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
`;

const centerpositionStyles = css`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
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

          <div css={BottonStyles}>
            <img src="" alt="amazon logo" />
            Purchase
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
          <div>
            Modern life is hectic and relentless: trains delayed, endless emails
            filling the inbox, kids squabbling before bedtime… There has never
            been a more important time to rediscover your pause button. Calm is
            the book that will show you how to take back a little bit of peace,
            space and all-important calm. This book contains the simple tools,
            tricks and habits that will change the rest of your life. It is a
            practical and pleasurable guide to twenty-first century mindfulness.
          </div>
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
            <p>
              “Great collage of ideas and practical advice of how to reduce
              stress in this fast paced world. A beautifully presented book
              which even calms you down when you pick it up. I would recommend
              it to everyone.”
            </p>

            <span>stars</span>
          </div>

          <div css={cardStyles}>
            <p>
              “A beautifully presented book that is as lovely to look at as it
              is to read. Simple tips and inspiration on how to bring calm into
              your life. Highly recommend.”
            </p>

            <span>stars</span>
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
              alt="Calm book logo"
            />
          </div>
          <div css={sectionAuthorStyles}>Michael Acton Smith @acton</div>

          <div css={sectionAuthorStyles}>
            <img
              src="https://www.calm.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcalm-com%2Fimage%2Fupload%2Fv1656359615%2Fwww-next%2Fbook%2Fwatercolor-tewy.png&w=640&q=75"
              alt="Calm book logo"
            />
          </div>
          <div css={sectionAuthorStyles}>Alex Tew @tewy</div>
        </section>

        <br></br>
      </body>

      <footer></footer>
    </>
  );
}

export default App;
