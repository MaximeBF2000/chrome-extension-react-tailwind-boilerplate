import React, { Dispatch, SetStateAction } from 'react'
import { PageLayout } from '../components/PageLayout'

type Props = {
  setCurrentPage: Dispatch<SetStateAction<string>>
}

export const ScrapeLike = ({ setCurrentPage }: Props) => {
  return (
    <PageLayout title="Extract post likes" setCurrentPage={setCurrentPage}>
      <div>ScrapeLike</div>
    </PageLayout>
  )
}
