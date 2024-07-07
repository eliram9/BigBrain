import React from 'react'

const PageContainer = ({ className, children }) => {
    return (
        <div className={`flex justify-center w-full h-auto px-32 sm:px-8 md:px-10 lg:px-8 xl:px-10 ${className} poppins dark:bg-black`}>
            <main className='h-auto w-full'>
                {children}
            </main>
        </div>
    )
}

export default PageContainer
