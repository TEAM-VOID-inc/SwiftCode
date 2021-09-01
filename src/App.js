import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './hoc/ProtectedRoute';
import CustomRoute from './hoc/CustomRoute';
import routes from './routes/routes';
import { useDispatch, useSelector } from 'react-redux';
import {GetGfgData } from './redux/actions/gfg';

function App() {
  const dispatch = useDispatch();

  const User = useSelector((state) => state.auth?.user?.data);
  const Token = useSelector((state) => state.auth?.token);

  useEffect(() =>{
    dispatch({ type: 'GETUSER' });
  }, [])

  useEffect(() => {
    if(User?.user?.GFGid){
        console.log(Token)
        const errordata = dispatch(GetGfgData(User?.user?._id , Token))
        if(errordata)
        {
            errordata.then((result) => console.log(result));
        }
    }
  }, [User])


  return (
    <Router>
        <div className="App">
          <Switch>
              {routes?.map((route) => (
                route.protected === true ? (
                <PrivateRoute key={route} path={route.path} components={route.component}/>) 
                : 
                (
                  <CustomRoute key={route} path={route.path} components={route.component}/>
              )))
          }
          </Switch>
        </div>
    </Router>
    
  );
}

export default App;
