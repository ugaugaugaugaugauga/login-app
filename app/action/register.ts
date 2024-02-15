'use server'
import * as z from 'zod'
import { RegisterSchema } from '@/schemas'
import { db } from '@/lib/db'
import bcrypt from 'bcrypt'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: '이상함' }
  }

  const { email, password, name } = validateFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  })

  if (existingUser) {
    return { error: '존재하는 유저' }
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  return { success: '성공' }
}
