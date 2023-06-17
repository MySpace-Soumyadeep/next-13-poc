/* 
Layout page is a very handy way to share  different UI component in a kind of hierarchial way.
It preserves the state and it prevents unnecessary re-rendering several parts of the page
*/

import './globals.css'
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Demo Website</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
