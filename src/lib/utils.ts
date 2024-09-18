<<<<<<< HEAD
import { clsx, type ClassValue } from "clsx"
=======
import { type ClassValue, clsx } from "clsx"
>>>>>>> 28670b236975ad38c35c01fd572b22001068d679
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
