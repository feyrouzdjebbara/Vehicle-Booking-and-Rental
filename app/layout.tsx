import { Footer, Navbar } from '@/Components'
import './globals.css'




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
       <Footer />
      </body>
    </html>
  )
}
