import React, { Dispatch, SetStateAction } from 'react'
import { ArrowLeftIcon } from 'lucide-react'

type Props = {
  title: string
  setCurrentPage: Dispatch<SetStateAction<string>>
  children: React.ReactNode
}

export const PageLayout = ({ title, setCurrentPage, children }: Props) => {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <ArrowLeftIcon
          className="w-6 h-6 cursor-pointer"
          onClick={() => setCurrentPage('home')}
        />
        <h1 className="text-4xl text-center font-black">{title}</h1>
        <span />
      </div>
      {children}
    </>
  )
}
