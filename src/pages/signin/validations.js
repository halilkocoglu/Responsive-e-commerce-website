import * as yup from "yup";

const validations = yup.object().shape({
  username: yup.string().required("Username required"),
  password: yup
    .string()
    .min(5, "Use at least 5 letters")
    .required("Password required"),
});

export default validations;
