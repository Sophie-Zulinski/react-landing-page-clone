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

      <body>body</body>
      <footer>footer</footer>
    </>
  );
}

export default App;
