import React from 'react'
import { socialMedia } from "@/data/index"
import Cal from './cal'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 relative flex flex-col items-center justify-center' id="contact">
      <div className='heading lg:max-w-[45vw]'>
        <h1 className='text-black'>
          Ready to take <span className='text-blue-800'>your</span> digital presence to the next level ?
        </h1>
        <Cal/>
      </div>
      <div className='w-full flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 Rayen Benbetaieb</p>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map((profile) => (
            <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-white-200 rounded-lg border border-white-300'>
              <a href={profile.link} target='_blank' rel='noopener noreferrer'>
              <img src={profile.img} alt={`${profile.id}`} width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
