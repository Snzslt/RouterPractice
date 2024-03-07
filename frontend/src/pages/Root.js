import {Outlet, useLoaderData, useNavigation} from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
function RootLayout(){
    const navigation = useNavigation();

    return <>
    <MainNavigation />
    <main>
        { /* navigation.state === 'laoding' && <p>Loading...</p> */}
        <Outlet />
    </main>
    </>
}
export default RootLayout;