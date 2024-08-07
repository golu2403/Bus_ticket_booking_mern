const  {Outlet,Navigate}=require('react-router-dom') ;


const PrivateRoute = () => {
    let auth = {'token':false}
    return(
        <Route {...rest}>
                {!auth.token 
                    ?
                    <Redirect to="/login" /> 
                    : 
                    children}
        </Route>
    )
}