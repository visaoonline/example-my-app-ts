import { ReactNode } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';
import Account from './pages/Account';

import { GlobalProvider } from './context/globalState';

interface IPrivateRoute {
  children: ReactNode,
  path: string;
}

function PrivateRoute( {children, path}: IPrivateRoute ){
  let auth = true;
  
  return(
    <Route path={path}>
      { auth ?
        children :
        <Redirect to='/'/>  
      }
    </Route>
  )
}

function App() {
  return(
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path='/' component={Home} />

          <Route exact={true} path='/conta' component={Account} />

          <PrivateRoute path='/user/:id'>
            <User />
          </PrivateRoute>

          {/* <PrivateRoute path='/conta'>
            <Account />
          </PrivateRoute> */}
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App;
