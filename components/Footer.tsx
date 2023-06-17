import Image from 'next/image'
import React from 'react'
import { footerLinks } from '@/constants'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100' >
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image src="/logo.svg" alt="logo" width={130} height={100} className='object-contain'/>
          <p className='text-base text-gray-700'>Carhub 20233 <br/> All rights reserved &copy;</p>

        </div>
        <div className='footer__links flex-'>
          {
            footerLinks.map((link, index) => (
              <div key={link.title} className='footer__link'>
                <h3 className='font-bold'>{link.title}</h3>
                {link.links.map((item) => (
                  <Link href={item.url} key={item.title}>
                    {item.title}
                  </Link>
                ))}
              </div>
            ))
          }
        </div>
      </div>
      <div  className='footer__copyrights'>
        <p className="footer__copyrights-link">Privacy policy</p>
        <p className="footer__copyrights-link">Terms of use</p>
      </div>
    </footer>
  )
}
