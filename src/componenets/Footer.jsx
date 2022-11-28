import React from 'react'

export default function Footer({data}) {
    return (
    <div className='navbar bg-success text-light'>
        <p className='footertext'>{data.author} Nodirbek</p>
    </div>
    )
}
