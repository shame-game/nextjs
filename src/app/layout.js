import './globals.css'
import { Inter } from 'next/font/google'
import { Header }  from '../conponents/Header'
import { Footer }  from '../conponents/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vamnaone',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
