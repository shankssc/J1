import { z, ZodError } from 'zod';

export const SignUpSchema = z.object({
    email: z.string().email('Invalid email format').min(1, 'Email is required'),
    phone_number: z.string().min(1, 'Phone number is required'),
    password: z.string().min(8, 'Password must be at least 8 characters').max(18, 'Password must be at most 18 characters'),
    birthdate: z.string().min(1, 'Birthdate is required'),
    gender: z.string().min(1, 'Gender is required'),
});

export const validateSignUp = (data:any) => {
    try {
      SignUpSchema.parse(data);
      return null; // No validation errors
    } catch (error) {
      if (error instanceof ZodError) {
        return error.errors.map((e) => e.message);
      }
      throw error;
    }
};