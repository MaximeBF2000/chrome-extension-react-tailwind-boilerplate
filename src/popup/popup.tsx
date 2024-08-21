import React, { useState } from 'react'
import './popup.css'
import { ActionItemList } from './components/ActionItemList'
import { Home } from './pages/Home'
import { LeadsLists } from './pages/LeadsLists'
import { ScrapeSearch } from './pages/ScrapeSearch'
import { ScrapeLike } from './pages/ScrapeLike'
import { BulkMessage } from './pages/BulkMessage'

const Popup = () => {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="w-full h-full px-4 py-8 bg-gray-100">
      {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === 'lists' && (
        <LeadsLists setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'scrape_search' && (
        <ScrapeSearch setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'scrape_post_likes' && (
        <ScrapeLike setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'send_bulk_message' && (
        <BulkMessage setCurrentPage={setCurrentPage} />
      )}
    </div>
  )
}

export default Popup
