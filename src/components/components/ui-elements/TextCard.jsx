import React from 'react'

const TextCard = ({ title, text, subtext, image }) => {
    return (
        <div className='text-darkGray dark:text-white poppins'>
            <h1 className='text-4xl font-4xl font-semibold mb-8'>{title}</h1>
            <p className='leading-loose font-light'>{text}</p>
        </div>
    )
}

export default TextCard
