import * as Yup from "yup";

// Validation Schema using Yup
export const userValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  role: Yup.string().oneOf(["admin", "resident", "customer-support"], "Invalid role").required("Role is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});