import MainLayout from "../../components/layouts/MainLayout"
import Link from 'next/Link'
import { ReactElement } from "react"


const pricing = () => {
  return (
    <>
     <h1 className="title">
          Ir a <Link href="/">Inicio!</Link>
        </h1>

        <p className="description">
          Get started by editing{'Pricing.jsx'}
        </p>
    </>
  )
}


pricing.getLayout = function getLayout (page : ReactElement){

    return(
      <MainLayout>
          {page}
      </MainLayout>
    )
  }

export default pricing