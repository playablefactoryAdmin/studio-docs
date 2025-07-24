// pages/404.tsx
import { useEffect } from 'react'
import Image from "next/image"
export default function Custom404() {

  return (
    <div className='items-center text-center py-12 flex flex-col gap-4'>
      <h1 className='font-extrabold text-3xl'>404 - Page Not Found</h1>
      {/* <Image src="/studio-docs/logo.svg" alt="Studio Docs" width={200} height={50}/> */}
      <p className='text-xl font-semibold'>The page you are looking for does not exist!</p>
      <a className='text-xl font-semibold text-sky-400 underline' href='/studio-docs/'><p>← Go back home</p></a>
    </div>
  )
}