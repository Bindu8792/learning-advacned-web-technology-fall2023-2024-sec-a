import NavBar from '@/components/NavBar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Company-Client Management System',
  description: 'Company-Client Management System Lab Task',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header style={{backgroundColor: "lightgreen", padding: "5px"}}>Company-Client Management System
        <NavBar/>
        </header>
        {children}
        <footer style={{backgroundColor: "lightgray", padding: "5px"}}>All Right Received</footer>
        </body>
    </html>
  )
}
