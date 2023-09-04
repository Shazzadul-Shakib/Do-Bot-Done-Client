import { useForm } from "react-hook-form";
import { BiLogoGoogle } from "react-icons/bi";

const Signup = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
      <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section className="flex w-3/4 md:w-[30rem] flex-col space-y-10">
          <div className="text-center text-secondary text-3xl font-semibold">
            Create Account
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full md:w-[30rem] flex-col space-y-10"
          >
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-secondary">
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Name"
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
              {errors.name && (
                <p className="text-red text-sm">Name is required*</p>
              )}
            </div>

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
              value="SIGN UP"
            />
          </form>

          <p className="text-center text-md">
            Already have an account?
            <a
              href="#"
              className=" text-secondary underline-offset-4 hover:underline"
            >
              Login here
            </a>
          </p>

          <button className="transform rounded-xl border border-primary  text-secondary py-3 font-bold duration-200 hover:bg-primary hover:text-bg flex items-center justify-center">
            <BiLogoGoogle className="mr-3 text-2xl" />
            Continue With Google
          </button>
        </section>
      </div>
    );
};

export default Signup;