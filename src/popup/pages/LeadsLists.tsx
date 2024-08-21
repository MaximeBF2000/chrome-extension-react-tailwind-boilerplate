import React, { Dispatch, SetStateAction } from 'react'
import { ArrowLeftIcon } from 'lucide-react'
import { PageLayout } from '../components/PageLayout'

type Props = {
  setCurrentPage: Dispatch<SetStateAction<string>>
}

export const LeadsLists = ({ setCurrentPage }: Props) => {
  return (
    <PageLayout title="Leads Lists" setCurrentPage={setCurrentPage}>
      <div>Leads lists page</div>
    </PageLayout>
  )
}
