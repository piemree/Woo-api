import { object, string, ref } from "yup";

export const createUserSchema = object({
  body: object({
    name: string().required("Name is required"),
    password: string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^[a-zA-Z0-9_.-]*$/,
        "Password can only contains latin letters."
      ),
    passwordConfirmation: string().oneOf(
      [ref("password"), null],
      "Passwords must match"
    ),
    email: string()
      .email("Must be a valid email address")
      .required("Email is required"),
  }),
});

export const updateUserSchema = object({
  body: object({
    name: string().required("Name is required"),
    email: string()
      .email("Must be a valid email address")
      .required("Email is required"),
  }),
  params: object({
    id: string()
      .required("id is required")
      .min(24, "Id must be at least 24 characters"),
  }),
});

export const findUserSchema = object({
  params: object({
    id: string()
      .required("id is required")
      .min(24, "Id must be at least 24 characters"),
  }),
});

export const deleteUserSchema = object({
  params: object({
    id: string()
      .required("id is required")
      .min(24, "Id must be at least 24 characters"),
  }),
});


