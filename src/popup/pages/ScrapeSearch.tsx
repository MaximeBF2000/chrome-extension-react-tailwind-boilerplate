import React, { Dispatch, SetStateAction } from 'react'
import { PageLayout } from '../components/PageLayout'

type Props = {
  setCurrentPage: Dispatch<SetStateAction<string>>
}

export const ScrapeSearch = ({ setCurrentPage }: Props) => {
  return (
    <PageLayout title="Extract search leads" setCurrentPage={setCurrentPage}>
      <div>ScrapeSearch</div>
    </PageLayout>
  )
}
