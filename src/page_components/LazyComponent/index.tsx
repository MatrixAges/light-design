import React, { Suspense } from 'react'
import Spinner from '@/page_components/Spinner'

const Index = (Component: any) => {
      return (props: any) => (
            <Suspense fallback={<Spinner />}>
                  <Component {...props} />
            </Suspense>
      )
}

export default Index