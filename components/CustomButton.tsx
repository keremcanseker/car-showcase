"use client"
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

export default function CustomButton({title, containerStyles, handleClick,btnType,textStyles,rightIcon}:CustomButtonProps) {
  return (
    <button
    disabled={false}
    type={'button'||btnType}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}    
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rightIcon && (
          <div className='relative w-6 h-6'>
            <Image src={rightIcon} alt='right arrow' fill className='object-contain'/>
          </div>

        )}

    </button>
  )
}
