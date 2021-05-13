import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import DetailPage from "./views/DetailPage/DetailPage";
import DetailAdminPage from "./views/DetailPage/DetailAdminPage";

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <div style={{ paddingTop: '50px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/detail/:msspsnIdntfccd" component={DetailPage} />
			<Route exact path="/detail/:msspsnIdntfccd/admin" component={DetailAdminPage} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;

