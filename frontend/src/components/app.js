import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import ItemShowContainer from './item/item_show_container';
import Footer from './footer/footer';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SearchContainer from './search/search_container';
import UserProfileContainer from './profile/user_profile_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <Route exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/profile" component={UserProfileContainer} />
            <Route exact path='/item/:id' component={ItemShowContainer} />
            <Route exact path="/search" component={SearchContainer} />
        </Switch>
        <Footer />
    </div>
);

export default App;