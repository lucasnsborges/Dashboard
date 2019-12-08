import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import Header from './Header';

// Screens
import Home from "../../components/Home";
import Course from "./Course";
import Profile from "./Profile"

// function Topic() {
//   let { topicId } = useParams();

//   console.log('param: ', topicId)

//   return (
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   );
// }

/* <Route path={`${path}/:topicId`}>
<Topic />
</Route> */

export default function Dashboard() {
  return (
    <div className="vh-100" style={{ backgroundColor: '#F5F5F5' }}>
      <Header />
      <Switch>
        <Route exact path='/dashboard' component={Home} />
        <Route exact path='/dashboard/course' component={Course} />
        <Route exact path='/dashboard/:userId/profile' component={Profile} />
      </Switch>
    </div>
  );
}
