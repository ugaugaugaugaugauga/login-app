import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({
    message: '이메일 안넣음',
  }),
  password: z.string().min(1, {
    message: '패스워드 최소 1글자',
  }),
})
