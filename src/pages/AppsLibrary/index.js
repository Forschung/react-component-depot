import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const ScrollIndicatorPage = React.lazy(() => import("./ScrollIndicatorPage"));

const AppsLibrary = () => {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route
                path={`${path}/scroll-indicator`}
                component={ScrollIndicatorPage}
            />
        </Switch>
    );
};

export default AppsLibrary;
