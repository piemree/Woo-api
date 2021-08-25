import { object, string } from "yup";

export const createSessionSchema = object({
    body: object({
      //name: string().required("Name is required"),
      password: string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .matches(
          /^[a-zA-Z0-9_.-]*$/,
          "Password can only contains latin letters."
        ),
      email: string()
        .email("Must be a valid email address")
        .required("Email is required"),
    }),
  });