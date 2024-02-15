export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='h-full flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      {children}
    </main>
  )
}
