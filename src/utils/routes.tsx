import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelecttor } from '../app/hooks';

export function ProtectedRoute() {
    const user = useAppSelecttor( ( state ) => state.auth.user );

    if ( user === null ) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}

export function AuthenticatedRoute() {
    const user = useAppSelecttor( ( state ) => state.auth.user );

    if ( user ) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}