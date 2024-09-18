/* eslint-disable no-unused-vars */
import React from 'react';

 const ErrorPage = () => {
  return (
    <div id='error-page' className='h-[100vh] flex justify-center items-center'>
        <div id="error">
            <h1 className='text-center text-[50px]'>Oops!</h1>
            <p className='text-[25px]'>Sorry, an unexpected error has occurred.</p>
            <div id="error-image" className='flex justify-center mt-2'>
              <img src="data:image/jpeg;base64,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"  alt="error-image" className='w-[200px] h-[200px]' />
            </div>
        </div>
    </div>
  )
}

export default ErrorPage;
