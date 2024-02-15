'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Header } from './header'
import Link from 'next/link'

interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  href: string
  label: string
}

export const CardWrapper = ({
  children,
  headerLabel,
  href,
  label,
}: CardWrapperProps) => {
  return (
    <Card className='w-[400px] shadow-md'>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <hr className='w-full' />
      </CardFooter>
      <CardFooter className='flex justify-center'>
        <Link href={href}>
          <span className='underline text-sm text-sky-500'>{label}</span>
        </Link>
      </CardFooter>
    </Card>
  )
}
