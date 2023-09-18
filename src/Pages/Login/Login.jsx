import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BiLogoGoogle } from "react-icons/bi";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // userinfo from authcontext
  const { googleSignIn, loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((res) => {
        if (res.user?.emailVerified) {
          toast.success("Login Succesfully!", { autoClose: 2000 });
          navigate(from, { replace: true });
        }else{
          toast.info("Please verify Your email first!", { autoClose: 3000 });
        }
      })
      .catch((error) => {
        toast.error(error.code, { autoClose: 3000 });
      });
  };

  //   Google sign in section
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Login Succesfully!", { autoClose: 2000 });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.code, { autoClose: 3000 });
      });
  };

  return (
    <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-bg text-white">
      <section className="flex w-3/4 md:w-[30rem] flex-col space-y-10">
        <div className="text-center text-secondary text-3xl font-semibold">
          Log In
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

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-secondary">
            <input
              type="password"
              name="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
            {errors.password && (
              <p className="text-red text-sm">Password is required*</p>
            )}
          </div>
          <input
            className="transform rounded-xl bg-secondary text-bg py-3 font-bold duration-200 hover:bg-primary"
            type="submit"
            value="LOG IN"
          />
        </form>

        <Link
          to="/forgetpass"
          className="transform text-center text-xs text-secondary duration-300 hover:text-primary"
        >
          FORGOT PASSWORD?
        </Link>

        <p className="text-center text-md">
          No account?
          <Link
            to="/signup"
            className=" text-secondary underline-offset-4 hover:underline"
          >
            Create One
          </Link>
        </p>

        <button
          onClick={handleGoogleSignIn}
          className="transform rounded-xl border border-primary  text-secondary py-3 font-bold duration-200 hover:bg-primary hover:text-bg flex items-center justify-center"
        >
          <BiLogoGoogle className="mr-3 text-2xl" />
          Continue With Google
        </button>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Login;
