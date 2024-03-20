export const throwError = (statusCode: number, message: string) => {
  const error = new Error() as Error & { statusCode: number };

  error.statusCode = statusCode;
  error.message = message;

  throw error;
};
