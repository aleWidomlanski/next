
import Link from '../../node_modules/next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function ContactPage() {
    return (
        <MainLayout>
            <h2 >Contact Page</h2>
            <h1 className={'title'}> 
                {/* por defecto el Link hace una prerecarga de la ruta a la que se va a ir, se puede desactivar, prefetch={false} */}
                {/* a los links debo poner una etiqueta a dentro si quiero poner la etiqueta styles, no obstante ver nav y usar module.css */}
                <Link href="/">
                    <a>Ir a Home</a>
                </Link>
            </h1>
            <p className={'description'}>Get started by editing{' '}<code className={'code'}>pages/contact.js</code></p>
        </MainLayout>

    )
}
