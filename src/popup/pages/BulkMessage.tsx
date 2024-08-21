import React, { Dispatch, SetStateAction } from 'react'
import { PageLayout } from '../components/PageLayout'

type Props = {
  setCurrentPage: Dispatch<SetStateAction<string>>
}

export const BulkMessage = ({ setCurrentPage }: Props) => {
  return (
    <PageLayout title="Bulk Messager" setCurrentPage={setCurrentPage}>
      <div>BulkMessage</div>
    </PageLayout>
  )
}
