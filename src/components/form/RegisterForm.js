import React, { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
// using react-hook-form

const schemaValidation = Yup.object({
  name: Yup.string()
    .required("Please enter your first name")
    .max(10, "Must be 10 characters or less"),

  phoneNumber: Yup.string()
    .required("Please enter your phone number")
    .min(10, "Must be 10 characters"),
  address: Yup.string().required("Please enter your address"),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
    watch,
    reset,
    resetField,
    setFocus,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  console.log("SignUpFormHook ~ dirtyFields", dirtyFields);

  const onSubmit = async (values) => {
    console.log("onSubmit ~ values", values);
    if (isValid) {
      console.log("send data to backend");

      reset({});
    }
  };
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  // const handleSetDemoData = () => {
  //   setValue("firstName", "evondev", {});
  //   setValue("lastName", "tuan");
  //   setValue("email", "tuan@gmail.com");
  // };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[750px] mx-auto flex flex-col"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-5">
        <div className="flex flex-col gap-2 ">
          <label htmlFor="firstName">Họ và tên</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your first name"
            className="p-4 rounded-md border border-gray-10 text-red-400  "
            {...register("name")}
          />
          {errors?.name && (
            <div className="text-red-500 text-sm ">{errors.name?.message}</div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="phoneNumber">Số điện thoại</label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="Enter your phone number"
          className="p-4 rounded-md border border-gray-100 text-red-400"
          {...register("phoneNumber")}
        />
        {errors?.phoneNumber && (
          <div className="text-red-500 text-sm ">
            {errors.phoneNumber?.message}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="phoneNumber">Địa chỉ</label>
        <input
          type="text"
          id="address"
          placeholder="Enter your address"
          className="p-4 rounded-md border border-gray-100 text-red-400"
          {...register("address")}
        />
        {errors?.address && (
          <div className="text-red-500 text-sm ">{errors.address?.message}</div>
        )}
      </div>

      <div className="flex flex-row gap-2 mb-5 ">
        <label htmlFor="gender">Giới tính:</label>
        <select
          {...register("gender")}
          className="block gap-2 bg-inherit ml-5 border border-blue-500 rounded-md text-base bg-gray-50 text-gray-900 "
        >
          <option selected>choose a gender</option>
          <option value="female">Nữ</option>
          <option value="male">Nam</option>
          <option value="other">Không muốn đề cập</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">email</label>
        <MyInput
          name="email"
          placeholder="Enter your email"
          id="email"
          control={control}
        ></MyInput>
      </div>

      <div className="flex flex-col gap-2 mb-5 ">
        <label htmlFor="lastName">User name:</label>
        <input
          type="text"
          id="userName"
          placeholder="Enter your User name"
          className="p-4 rounded-md border border-gray-100 text-red-400"
          {...register("password")}
        />
        {errors?.userName && (
          <div className="text-red-500 text-sm ">
            {errors.userName?.message}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5 ">
        <label htmlFor="lastName">Password</label>
        <input
          type="text"
          id="password"
          placeholder="Enter your password"
          className="p-4 rounded-md border border-gray-100 text-red-400"
          {...register("password")}
        />
        {errors?.password && (
          <div className="text-red-500 text-sm ">
            {errors.password?.message}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5 ">
        <label htmlFor="lastName">Re-password</label>
        <input
          type="text"
          id="rePassword"
          placeholder="Enter your re-password"
          className="p-4 rounded-md border border-gray-100 text-red-400"
          {...register("rePassword")}
        />
        {errors?.rePassword && (
          <div className="text-red-500 text-sm ">
            {errors.rePassword?.message}
          </div>
        )}
      </div>
      <div>
        <button
          type="submit"
          id="register"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Đăng kí"
          )}
        </button>
      </div>
      <div></div>
    </form>
  );
};

const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  console.log("MyInput ~ field", field);
  return (
    <input
      className="p-4 rounded-md border border-gray-100"
      {...field}
      {...props}
    />
  );
};

export default RegisterForm;