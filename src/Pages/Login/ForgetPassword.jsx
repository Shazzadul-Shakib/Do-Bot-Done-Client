import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    resetPassword(data.email).then((res) => {
      console.log("password reset email sent");
      reset();
    });
  };

  return (
    <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-bg text-white">
      <section className="flex w-3/4 md:w-[30rem] flex-col space-y-10">
        <div className="">
          <h1 className="text-center text-secondary text-3xl font-semibold mb-5">
            Forgot Password?
          </h1>
          <p className="text-center text-secondary">
            Don't worry. Please enter your email to reset password
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full md:w-[30rem] flex-col space-y-10"
        >
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-secondary">
            <input
              type="text"
              name="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
            {errors.email && (
              <p className="text-red text-sm">Email is required*</p>
            )}
          </div>

          <input
            className="transform rounded-xl bg-secondary text-bg py-3 font-bold duration-200 hover:bg-primary"
            type="submit"
            value="RESET PASSWORD"
          />
        </form>

        <p className="text-center text-md">
          <Link
            to="/login"
            className=" text-secondary underline-offset-4 hover:underline"
          >
            Return to Login page
          </Link>
        </p>
      </section>
    </div>
  );
};

export default ForgetPassword;
