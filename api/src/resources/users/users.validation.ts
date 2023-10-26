import { z } from 'zod';

const register = z.object({
  name: z.string().max(30).min(1), // Adjusted the minimum length to 1, as an empty string is also a valid value.
  email: z.string().email(),
  password: z.string().min(6),
});

const login = z.object({
  email: z.string(),
  password: z.string(),
});

export { register, login };
