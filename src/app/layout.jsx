import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

const nuni = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'My first react',
  description: 'This is react and nextjs',
}

export default function RootLayout({ children }) {
  const myName = 'Chidinma'
  return (
    <html lang="en">
      <body className={nuni.className}>
       {/* <Navbar/> */}
       <main className="text-[50px] h-[410px]">
       {children}

       </main>

       {/* <Footer/> */}
       
        {/* <h2>My name is {myName}</h2> */}
        </body>
    </html>
  )
}
