/**
 * Generates a random 9-digit number as a string
 * @returns A 9-digit number string (e.g., "123456789")
 */
export function generateId(): string {
  // Generate a random 9-digit number (100000000 to 999999999)
  const min = 100000000;
  const max = 999999999;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum.toString();
}






