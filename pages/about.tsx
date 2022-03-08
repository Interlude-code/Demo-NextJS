import Link from 'next/Link'
import DarkLayout from '../components/layouts/DarkLayout'
import MainLayout from '../components/layouts/MainLayout'
import { ReactElement } from 'react';



const about = () => {
  return (
    <>
     <h1 className="title">
          Ir a <Link href="/">Inicio!</Link>
        </h1>

        <p className="description">
          Get started by editing{' '}
        </p>
    </>
  )
}

about.getLayout = function getLayout (page : ReactElement){

  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}

export default about