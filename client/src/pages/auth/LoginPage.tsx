import { useForm } from "react-hook-form";
import { loginSchema } from "../../validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "../../services/mutations";
import { ILogin } from "../../types";
const LoginPage = () => {
  const loginMutation = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLoginSubmit = (data: ILogin) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            onSubmit={handleSubmit(handleLoginSubmit)}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                {...register("username")}
                placeholder="username"
                className="input input-bordered"
              />
              <p className="text-rose-500 mt-1 pl-2">
                {errors?.username?.message}
              </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <p className="text-rose-500 mt-1 pl-2">
                {errors?.password?.message}
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
