export const validateCreateUser = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required.";
  } else if (values.name.length < 3) {
    errors.name = "Name must be at least 3 characters.";
  }

  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid.";
  }

  return errors;
};
