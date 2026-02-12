// Auth DTOs (Data Transfer Objects)
import { z } from 'zod';

export const RegisterDto = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

export const LoginDto = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const RefreshTokenDto = z.object({
  refreshToken: z.string(),
});

export type RegisterInput = z.infer<typeof RegisterDto>;
export type LoginInput = z.infer<typeof LoginDto>;
export type RefreshTokenInput = z.infer<typeof RefreshTokenDto>;
