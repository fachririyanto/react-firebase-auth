import { useAppSelecttor } from '../../app/hooks';

export default function PageHome() {
    const user = useAppSelecttor( ( state ) => state.auth.user );

    return (
        <h1>Welcome back, { user }</h1>
    );
}