// import App from 'next/app'
import Navbar from '../components/Navbar';
// import '../styles/_layout.scss';
import '../styles/homepage.scss';
import '../styles/navbar.scss';
import '../styles/variables.scss';

function MyApp({ Component, pageProps }) {
  return (
  	<div>
  		<Navbar/>
  		<Component {...pageProps} />
  	</div>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp