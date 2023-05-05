import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Use valid email, please. ***@***.com")
    .required("Email required"),
  password: yup
    .string()
    .min(5, "Use at least 5 letters")
    .required("Password required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must be same")
    .required("Password confirmation required"),
});

export default validations;
