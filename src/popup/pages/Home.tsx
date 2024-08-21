import React, { Dispatch, SetStateAction } from 'react'
import { ActionItemList } from '../components/ActionItemList'

type Props = {
  setCurrentPage: Dispatch<SetStateAction<string>>
}

export const Home = ({ setCurrentPage }: Props) => {
  return (
    <>
      <h1 className="text-4xl text-center font-black mb-8">PlentyLead</h1>
      <ul className="flex flex-col gap-3">
        <ActionItemList
          title="See leads lists"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo deserunt consequuntur velit explicabo amet, ad iste ullam cumque blanditiis!"
          onClick={() => setCurrentPage('lists')}
        />

        <ActionItemList
          title="Extract search"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo deserunt consequuntur velit explicabo amet, ad iste ullam cumque blanditiis!"
          onClick={() => setCurrentPage('scrape_search')}
        />

        <ActionItemList
          title="Extract likes from post"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo deserunt consequuntur velit explicabo amet, ad iste ullam cumque blanditiis!"
          onClick={() => setCurrentPage('scrape_post_likes')}
        />

        <ActionItemList
          title="Send bulk message"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo deserunt consequuntur velit explicabo amet, ad iste ullam cumque blanditiis!"
          onClick={() => setCurrentPage('send_bulk_message')}
        />
      </ul>
    </>
  )
}
