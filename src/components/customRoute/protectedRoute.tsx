import React, { PropsWithChildren } from "react";
import { isUserLoggedin } from "../../utils/authUtil";

type ProtectedRouteProps = PropsWithChildren;

class ProtectedRoute extends React.Component<ProtectedRouteProps> {

    render(): React.ReactNode {
        const { children } = this.props
        const isLoggedIn = isUserLoggedin();

        if (!isLoggedIn)
            window.location.href = '/'
        else
            return children;
    }
}

export default ProtectedRoute;