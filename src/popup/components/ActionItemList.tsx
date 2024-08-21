import React from 'react'
import { ArrowRightIcon } from 'lucide-react'

type Props = {
  title: string
  description: string
  onClick: () => void
}

export const ActionItemList = ({ title, description, onClick }: Props) => {
  return (
    <li
      className="border rounded bg-white p-3 cursor-pointer hover:ring-2 hover:ring-blue-500/50"
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl">{title}</h3>
        <ArrowRightIcon className="w-4 h-4" />
      </div>
      <p className="text-gray-800">{description}</p>
    </li>
  )
}
