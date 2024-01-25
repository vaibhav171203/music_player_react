import React from 'react'

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer"
  return (
    <div className="menu flex">
        <ul className='flex w-[100%] justify-between'>
            <li className={liStyle}>Home</li>
            <li className={liStyle}>Trending Songs</li>
            <li className={liStyle}>Podcast</li>
            <li className={liStyle}>My Music</li>
        </ul>
    </div>
    )
}

export default CenterMenu