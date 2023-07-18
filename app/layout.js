import './globals.css';
import { Space_Mono, Montserrat } from 'next/font/google'

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const metadata = {
  title: 'Erika Quinteros - 404 Not Found',
  description: 'This is a React.js project building a 404 page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceMono.className} ${montserrat.variable}`}>
      <body className="text-[#333333] h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  )
}