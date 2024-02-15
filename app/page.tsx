import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='h-full flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <Link href='/auth/login'>
        <Button>login page 이동</Button>
      </Link>
    </main>
  )
}
