import GlobalStyle from "~/styles/Global";
import LibsStyle from "~/styles/Libraries";
import GlobalFonts from "~/styles/Fonts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <LibsStyle />
      <GlobalFonts />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
