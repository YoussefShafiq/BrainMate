import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()
    // Function to handle refresh
    const handleRefresh = () => {
        window.location.reload(); // Reloads the current page
    };
    return <>
        <div className={`pt-12 transition-all relative font-inter dark:bg-dark min-h-screen flex flex-col justify-center items-center`}>
            <h1>Oops! Something went wrong.</h1>
            <p>We're sorry, but an unexpected error has occurred.</p>
            <div className="flex gap-2 my-4">
                <button onClick={handleRefresh} className='bg-darkblue text-white dark:bg-dark2 py-1 px-2 rounded-xl' >Refresh</button>
                <button onClick={() => navigate('/')} className='bg-darkblue text-white dark:bg-dark2 py-1 px-2 rounded-xl' >Go to home</button>
            </div>
        </div>
    </>


};

export default ErrorPage;