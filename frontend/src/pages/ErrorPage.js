import PageContent from "../components/PageContent";
import {useRouteError} from 'react-router-dom';
import MainNavigation from "../components/MainNavigation";

function ErrorPage(){
    const error = useRouteError();
    let title = 'An error occured!';
    let message = 'Somthing went wrong!';
    if(error.status === 500){
        message = error.data.message;
    }
    else if(error.status === 404){
        title= 'NotFound!'
        message = 'Could not find resource or page.';
    }
 return (
     <> 
     <MainNavigation />
     <PageContent title= {title}>
     <p>{message}</p>
     </PageContent>
     </>

 );
}
export default ErrorPage;