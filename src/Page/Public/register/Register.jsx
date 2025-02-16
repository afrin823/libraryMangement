import imageCompression from "browser-image-compression";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form"; // Import React Hook Form
import { useTranslation } from "react-i18next";
import { FaEyeSlash } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../config/Firebase/firebase.config";
import { responseMessage } from "../../../utils/responseMessage/responseMessage";
import SectionTitle from "../PublicComponent/SectionTitle";

const labelStyle = "block text-primary font-medium";

const Register = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [webpImage, setWebpImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      responseMessage("success", "Registration successful!", "Welcome!").then(
        () => {
          navigate("/login");
        }
      );
    } catch (error) {
      console.error("Error registering user:", error.message);
      responseMessage(
        "error",
        "Error in registration. Please try again.",
        "Registration Failed"
      );
    }
  };

  // Image format change (Compress and convert image to WebP)
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        fileType: "image/webp",
      };
      try {
        const compressedFile = await imageCompression(file, options);
        const webpImageUrl = await imageCompression.getDataUrlFromFile(
          compressedFile
        );
        setWebpImage(webpImageUrl);
      } catch (error) {
        console.error("Error compressing image:", error);
      }
    }
  };

  return (
    <>
      <div className="bg-base py-4">
        <div className="max-w-2xl mx-auto p-6 bg-natural">
          <SectionTitle
            className="text-center"
            title={t("register:register_title")}
          />
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="fullName"
                  className="block text-primary font-medium "
                >
                  {t("register:members_name")}
                </label>
                <input
                  id="fullName"
                  type="text"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none"
                />
                {errors.fullName && (
                  <p className="text-red-500">{errors.fullName.message}</p>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="email"
                  className="block text-primary font-medium "
                >
                  {t("register:email")}
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label htmlFor="password" className={labelStyle}>
                  {t("register:password")}
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <FiEye className="h-4 w-4 text-primary" />
                    ) : (
                      <FaEyeSlash className="h-4 w-4 text-primary" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-primary font-medium "
                >
                  {t("register:mobile_number")}
                </label>
                <input
                  id="phoneNumber"
                  type="text"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                  })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500">{errors.phoneNumber.message}</p>
                )}
              </div>
            </div>
            {/* profession / address  */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="profession"
                  className="block text-primary font-medium "
                >
                  {t("register:profession")}
                </label>
                <input
                  id="profession"
                  type="text"
                  {...register("profession", {
                    required: "Profession is required",
                  })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none"
                />
                {errors.profession && (
                  <p className="text-red-500">{errors.profession.message}</p>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="address"
                  className="block text-primary font-medium "
                >
                  {t("register:address")}
                </label>
                <input
                  id="address"
                  type="text"
                  {...register("address", { required: "Address is required" })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none"
                />
                {errors.address && (
                  <p className="text-red-500">{errors.address.message}</p>
                )}
              </div>
            </div>
            {/* class / service  */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="class"
                  className="block text-primary font-medium "
                >
                  {t("register:class")}
                </label>
                <input
                  id="class"
                  type="text"
                  {...register("class", { required: "Class is required" })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none"
                />
                {errors.class && (
                  <p className="text-red-500">{errors.class.message}</p>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="service"
                  className="block text-primary font-medium "
                >
                  {t("register:service")}
                </label>
                <input
                  id="service"
                  type="text"
                  {...register("service", { required: "Service is required" })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none"
                />
                {errors.service && (
                  <p className="text-red-500">{errors.service.message}</p>
                )}
              </div>
            </div>
            {/* subject / others  */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="subject"
                  className="block text-primary font-medium "
                >
                  {t("register:subject")}
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none"
                />
                {errors.subject && (
                  <p className="text-red-500">{errors.subject.message}</p>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="others"
                  className="block text-primary font-medium "
                >
                  {t("register:others")}
                </label>
                <input
                  id="others"
                  type="text"
                  {...register("others", { required: "Others is required" })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none"
                />
                {errors.others && (
                  <p className="text-red-500">{errors.others.message}</p>
                )}
              </div>
            </div>

            {/* Profile Picture */}
            <div>
              <label htmlFor="profilePicture" className={labelStyle}>
                {t("register:profile_pic")}
              </label>
              <input
                id="profilePicture"
                type="file"
                className="mt-1 block w-full"
                {...register("profilePicture", {
                  required: "Profile picture is required",
                })}
                onChange={handleImageUpload}
              />

              {errors.profilePicture && (
                <p className="text-red-500">{errors.profilePicture.message}</p>
              )}
            </div>
            {webpImage && (
              <div className="mt-4">
                <p className="font-medium text-green-500">
                  {t("register:img_format")}
                </p>
                <img
                  src={webpImage}
                  alt="Uploaded Preview"
                  className="w-32 h-32 object-cover mt-2"
                />
              </div>
            )}

            <p className="text-center gap-2 divider border-primary px-6 text-primary">
              {t("register:already_account")}
              <Link to="/login" className={labelStyle}>
                {" "}
                {t("register:register_login")}
              </Link>
            </p>

            <button
              type="submit"
              className="w-full bg-primary text-natural py-2 px-4 focus:outline-none"
            >
              {t("register:register")}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
