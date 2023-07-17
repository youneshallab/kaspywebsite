import React from 'react'
import Link from 'next/link'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import is1 from '../public/is1.jpg'
import is2 from '../public/is2.jpg'
import is3 from '../public/is3.jpg'

function Footer() {
    const properties = {
        prevArrow: <></>,
        nextArrow: <></>
    }

    const fadeImages = [
        {
            url: is1.src,
        },
        {
            url : is2.src,
        },
        {
            url : is3.src,
        }
      ];

  return (
    <div className='h-screen w full flex flex-col'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1E3A8A" fill-opacity="1" d="M0,224L80,240C160,256,320,288,480,266.7C640,245,800,171,960,165.3C1120,160,1280,224,1360,256L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <div className='bg-blue-900  w-full flex-grow grid grid-rows-5'>

            <div className='row-start-1 row-end-4 flex items-start justify-around px-40 '>
                <Link className='transition ease-in-out delay-50 bg-white hover:bg-red-300 duration-500
                cursor-pointer rounded-3xl p-4 flex w-fit gap-5' href="https://instagram.com/kapsy_shop" target='_blank'>
                    <div  className='w-20 h-20 bg-slate-600 rounded-3xl overflow-hidden'>
                        <Fade {...properties}>
                            {fadeImages.map((fadeImage, index) => (
                                <div key={index}>
                                <img style={{ width: '100%' }} src={fadeImage.url} />
                            </div>
                            ))}
                        </Fade>
                    </div>
                    <div className='py-2 flex flex-col justify-center mr-1 text-blue-900' >
                        <p className='text-sm'>Follow our Instagram</p>
                        <p className='font-bold text-xl'>@kapsy_shop</p>
                    </div>
                </Link>
                <div>
                    <span className='text-white'>Brand</span>
                    <ul className='mt-4'>
                        <li className='text-white font-bold text-lg leading-none mt-2'>Bracelets</li>
                        <li className='text-white font-bold text-lg leading-none mt-2'>Contact Us</li>
                        <li className='text-white font-bold text-lg leading-none mt-2'>About</li>
                    </ul>
                </div>
                <div>
                    <span className='text-white'>Info</span>
                    <ul className='mt-2 w-32'>
                        <li className='text-white font-bold text-lg leading-none mt-2'>Privacy</li>
                        <li className='text-white font-bold text-lg leading-none mt-2'>Terms of Use</li>
                        <li className='text-white font-bold text-lg leading-none mt-2'>Shipping and Returns</li>
                        <li className='text-white font-bold text-lg leading-none mt-2'>Payment Policies</li>
                    </ul>
                </div>
            </div>

            <div className='row-start-4 row-end-6 border-t-[1px] border-white px-10 flex justify-between items-end py-6'>
                <div className='text-white text-sm'>Made by <Link className='font-bold underline' href="">Minjara Studio</Link></div>
                <div className='text-white w-80 mx-24'>
                    <form>
                        <label className='flex flex-col'>
                        <span className='mb-1'>Subscribe to Newsletter</span>
                        <div className='flex border-b-2 border-white  '>
                            <input style={{ backgroundColor: '#1E3A8A' }} className=" grow px-1 pb-[1px] outline-none 
                             focus-within:bg-transparent focus:bg-slate-500 rounded text-white bg-blue-900" type="text" name="email" placeholder="Enter your email"></input>
                            <input className='font-bold mx-1 cursor-pointer' type="submit" value="OK"></input>
                        </div>
                        <span className='mt-1 text-sm text-slate-400'>Get notified for new arrivals exclusive access and more !</span>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer