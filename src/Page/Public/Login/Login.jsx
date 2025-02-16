import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FaEyeSlash } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router";
import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "../../../AuthProvider/AuthProvider";
import { responseMessage } from "../../../utils/responseMessage/responseMessage";
import SectionTitle from "../PublicComponent/SectionTitle";

const label = "block text-base font-medium text-primary";
const inputField = "w-full px-4 py-2 border border-gray-300 focus:outline-none";

const RegisterForm = () => {
  const { t } = useTranslation();
  const location = useLocation();
  console.log(location);
const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuthContext();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate(location.state)
      responseMessage(
        "success",
        "You have successfully registered",
        "Registration Successful!"
      );
      
    } catch (error) {
      console.error("Error registering user: ", error);
      responseMessage(
        "error",
        "Error in registration. Please try again.",
        "Registration Failed"
      );
    }
  };

  return (
    <div className="py-4">
      <div className="w-full max-w-md bg-natural shadow-lg mx-auto px-4 sm:px-6 md:px-8 py-8">
        <div>
          <SectionTitle title={t("login:login_title")} />
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div className="space-y-2">
              <label htmlFor="fullName" className={label}>
                {t("login:login_name")}
              </label>
              <input
                id="fullName"
                type="text"
                placeholder={t("login:login_name")}
                className={inputField}
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className={label}>
                {t("login:login_email")}
              </label>
              <input
                id="email"
                type="email"
                placeholder={t("login:login_email")}
                className={inputField}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className={label}>
                {t("login:login_psw")}
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t("login:login_enter_psw")}
                  className={inputField}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 hover:bg-transparent focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <FiEye className="h-4 w-4 text-primary" />
                  ) : (
                    <FaEyeSlash className="h-4 w-4 text-primary" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <p className="text-center gap-2 divider px-6 text-primary">
              {t("login:login_account")}
              <Link to="/register" className={label}>
                {t("login:login_register")}
              </Link>
            </p>
            <button
              type="submit"
              className="w-full bg-primary text-natural py-2 px-4 hover:bg-primary-dark focus:outline-none"
            >
              {t("login:login_login")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
