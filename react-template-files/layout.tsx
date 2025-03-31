// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Portfolio of Your Name',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
