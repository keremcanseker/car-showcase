import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './CustomButton'
export default function Navbar() {
  return (
    <header className='w-full absolute z-10'>
        <nav className="flex justify-between mx-auto max-w-[1440px] items-center sm:p-16 px-6 py-4">
            <Link href="/" className='flex justify-center items-center'>
                <Image src="/logo.svg" alt="logo" width={130} height={100} className='object-contain'/>
            </Link>
            <CustomButton title="Sign In"
            containerStyles="text-primary-blue bg-white rounded-full min-w-[100px] h-[40px]"
            />
            
             
        </nav>
    </header>
  )
}
