'use server'

import { LoginSchema } from '@/schemas'
import * as z from 'zod'
import bcrypt from 'bcrypt'
import { db } from '@/lib/db'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { email, password } = validateFields.data

  const user = await db.user.findUnique({
    where: {
      email,
    },
  })
  if (!user) return { error: '존재하지 않는 유저' }

  const passwordsMatch = await bcrypt.compare(password, user.password)

  if (passwordsMatch) {
    return { success: '로그인 성공' }
  }

  return { error: '로그인 실패' }
}
