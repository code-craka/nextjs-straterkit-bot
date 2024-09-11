import 'styles/tailwind.css'

import { ModalProvider, ToastProvider } from '@apideck/components'
import Link from 'next/link'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ToastProvider>
      <ModalProvider>
        <nav>
          <ul>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <Component {...pageProps} />
      </ModalProvider>
    </ToastProvider>
  );
}