'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Header } from './header'

interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
}

export const CardWrapper = ({ children, headerLabel }: CardWrapperProps) => {
  return (
    <Card className='w-[400px] shadow-md'>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <hr className='w-full' />
      </CardFooter>
    </Card>
  )
}
