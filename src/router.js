import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Iibyrakell from './components/iibyrakell/iibyrakell';
import Header from './components/header/header';
import Footer from './components/footer/footer';
// import About from './components/about/About';
// import Contact from './components/contact/Contact';

// const FunnelLayout = ({ component: Component, ...rest }) => {
//     return (
//         <Route {...rest} render={matchProps => (
//             <Component {...matchProps} />
//         )} />
//     )
// }

// const LandingPageLayout = ({ component: Component, ...rest }) => {
//     return (
//         <Route {...rest} render={matchProps => (
//             <Component {...matchProps} />
//         )} />
//     )
// }

const DefaultLayout = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <div>
                <Header />
                <Component {...matchProps} />
                <Footer {...matchProps} />
            </div>
        )} />
    )
}

export default (
    <Switch>
        <DefaultLayout exact path="/" component={Iibyrakell} />
        {/* <Redirect exact from="/about//" to="/about" />
        <DefaultLayout exact path="/about" component={About} />
        
        <Redirect exact from="/contact//" to="/contact" />
        <DefaultLayout exact path="/contact" component={Contact} /> */}
      

    </Switch>
)

