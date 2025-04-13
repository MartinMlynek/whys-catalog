import { ZodSchema } from "zod";

export const validateSchema = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);

  if (!result.success) {
    console.error("❌ BE Validation Error:", {
      issues: result.error.issues,
      originalData: data,
    });

    throw new Error("Data validation error");
  }

  return result.data;
};
