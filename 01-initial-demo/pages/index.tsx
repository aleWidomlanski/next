
import Link from '../node_modules/next/link'
import { MainLayout } from '../components/layouts/MainLayout'


//en lás páginas la exportación debe ser por defecto
export default function HomePage() {
  return (
<MainLayout>
        <h1>Home Page</h1>
{/*         Al poner así las clases las toma del entorno global que esta en el archivo _app.tsx */}
        <h1 className="title">
          Ir a <Link href="/about">About</Link>
        </h1>
        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>
    </MainLayout>
  )
}
