import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Iibyrakell from './components/iibyrakell/iibyrakell';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';
import Pricing from './components/pricing/pricing';
import Reviews from './components/revs/reviews';


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
        <Redirect exact from="/about//" to="/about" />
        <DefaultLayout exact path="/about" component={About} />
        
        <Redirect exact from="/contact//" to="/contact" />
        <DefaultLayout exact path="/contact" component={Contact} />

        <Redirect exact from="/portfolio//" to="/portfolio" />
        <DefaultLayout exact path="/portfolio" component={Portfolio} />

        <Redirect exact from="/pricing//" to="/pricing" />
        <DefaultLayout exact path="/pricing" component={Pricing} />

        <Redirect exact from="/reviews//" to="/reviews" />
        <DefaultLayout exact path="/reviews" component={Reviews} />

      

    </Switch>
)

