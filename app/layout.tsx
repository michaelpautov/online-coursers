import "styles/tailwind.css"


function testFunction() {
  let a = '1233'
  return a + '321'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  console.log(testFunction());
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
