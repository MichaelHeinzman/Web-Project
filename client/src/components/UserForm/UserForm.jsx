import useCreateUser from "@hooks/useCreateUser";
import useForm from "@hooks/useForm";
import { validateCreateUser } from "@utils/validation";
import StatusBox from "@components/StatusBox/StatusBox";
import "./UserForm.css";
import ColumnsLayout from "@layouts/Columns/Columns";

const UserForm = () => {
  const mutation = useCreateUser();

  const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm({
    initialValues: { name: "", email: "" },
    onSubmit: async (formData) => {
      await mutation.mutateAsync(formData);
    },
    validate: validateCreateUser,
  });

  // Determine the form status for StatusBox
  const formStatus = isSubmitting
    ? "loading"
    : mutation.isSuccess
    ? "success"
    : mutation.isError
    ? "error"
    : "";

  return (
    <ColumnsLayout columns={2}>
      <div className="user-form-container">
        <h2>Create a New User</h2>
        <form className="user-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name" className="user-form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="user-form-input"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p className="user-form-error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email" className="user-form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="user-form-input"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="user-form-error">{errors.email}</p>}
          </div>
          <button
            type="submit"
            className="user-form-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create User"}
          </button>
        </form>
      </div>
      <StatusBox status={formStatus} />
    </ColumnsLayout>
  );
};

export default UserForm;
