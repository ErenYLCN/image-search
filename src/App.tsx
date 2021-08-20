import React from "react";
import "./App.scss";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { ImagesPage } from "./pages/ImagesPage/ImagesPage";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useHistory,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/images/:query/:category" component={ImagesPage} />
				<Route path="/" render={() => <div>404</div>} />
			</Switch>
		</Router>
	);
}

export default App;
