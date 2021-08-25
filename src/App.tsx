import React from "react";
import "./App.scss";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { ImagesPage } from "./pages/ImagesPage/ImagesPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route
					exact
					path="/images/:query/:collection/:pageNumber(\d+)"
					component={ImagesPage}
				/>
				<Route path="/" component={ErrorPage} />
			</Switch>
		</Router>
	);
}

export default App;
