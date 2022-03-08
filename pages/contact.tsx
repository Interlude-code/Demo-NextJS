import Link from 'next/Link'
import MainLayout from '../components/layouts/MainLayout'



const contact = () => {

    return(
  <MainLayout>
       <h1 className="title">
          Ir a <Link href="/about">About!</Link>
        </h1>

        <p className="description">
          Get started by editing{' '}
          <code className="code">pages/contact.js</code>
        </p>
  </MainLayout>
  )
}

export default contact