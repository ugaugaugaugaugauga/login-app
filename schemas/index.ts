import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({
    message: '이메일 안넣음',
  }),
  password: z.string().min(1, {
    message: '패스워드 최소 1글자',
  }),
})

export const RegisterSchema = z
  .object({
    name: z.string().min(1, { message: '닉네임은 1글자 이상' }),
    email: z.string().email({
      message: '이메일 안넣음',
    }),
    password: z.string().min(1, {
      message: '패스워드 최소 1글자',
    }),
    confirmPassword: z.string().min(1, {
      message: '패스워드 최소 1글자',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '패스워드가 일치하지 않음',
    path: ['confirmPassword'],
  })
