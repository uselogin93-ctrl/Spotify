import React from 'react'

const navbar = () => {
  return (
    <div className='w-[99%] h-[10vh] flex flex-row justify-between items-center'>
      <div className='w-125 h-[99%] flex flex-row justify-start items-center'>
        <img src='https://open.spotifycdn.com/cdn/images/icons/Spotify_256.17e41e58.png' alt='Spotifiy_icons' className='w-[12%] h-[70%]'/>
      </div>
      <div className='w-[40%] h-[99%] flex flex-row justify-center items-start'>
        <div className="w-[20%] h-[99%] flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="w-[80%] h-[80%]" fill="whitesmoke"><path d="M22.849,7.68l-.869-.68h.021V2h-2v3.451L13.849,.637c-1.088-.852-2.609-.852-3.697,0L1.151,7.68c-.731,.572-1.151,1.434-1.151,2.363v13.957H8V15c0-1.105,.895-2,2-2h4c1.105,0,2,.895,2,2v9h8V10.043c0-.929-.42-1.791-1.151-2.363Z"/></svg>
        </div>
        <div className="w-[80%] h-[99%] roundle-lg flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="w-[10%] h-[80%]" fill="whitesmoke">
            <path d="M22.705,21.253l-4.399-4.374c1.181-1.561,1.81-3.679,1.859-6.329-.105-6.095-3.507-9.473-9.588-9.513C4.423,1.076,1,4.649,1,10.549c0,6.195,3.426,9.512,9.589,9.548,2.629-.016,4.739-.626,6.303-1.805l4.403,4.379c.518,.492,1.131,.291,1.414-.004,.383-.398,.388-1.025-.004-1.414ZM3,10.567c.097-5.035,2.579-7.499,7.576-7.53,4.949,.032,7.503,2.571,7.589,7.512-.094,5.12-2.505,7.518-7.576,7.548-5.077-.03-7.489-2.422-7.589-7.53Z"/>
          </svg>
          <input type="text" name="seach" className=""/>

        </div>
      </div>
    </div>
  )
}

export default navbar