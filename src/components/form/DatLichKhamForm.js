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

  email: Yup.string().email().required("Please enter your email"),
  petName: Yup.string(),
  generic: Yup.string(),
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
          <label htmlFor="firstName">Họ và tên:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your first name"
            className="p-4 rounded-md border border-gray-10 text-red-400  "
            {...register("name")}
            //defaultValue={}
          />
          {errors?.name && (
            <div className="text-red-500 text-sm ">{errors.name?.message}</div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="phoneNumber">Số điện thoại:</label>
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
        <label htmlFor="phoneNumber">Địa chỉ:</label>
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

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">email:</label>
        <MyInput
          name="email"
          placeholder="Enter your email"
          id="email"
          control={control}
        ></MyInput>
        {errors?.email && (
          <div className="text-red-500 text-sm ">{errors.email?.message}</div>
        )}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="petName"> Tên pet:</label>
        <input
          type="text"
          id="petName"
          placeholder="Enter your pet name"
          className="p-4 rounded-md border border-gray-100 text-red-400"
          {...register("petName")}
        />
        {errors?.petName && (
          <div className="text-red-500 text-sm ">{errors.petName?.message}</div>
        )}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="generic"> Chủng loại:</label>
        <input
          type="text"
          id="generic"
          placeholder="Enter your pet's generic"
          className="p-4 rounded-md border border-gray-100 text-red-400"
          {...register("generic")}
        />
        {errors?.generic && (
          <div className="text-red-500 text-sm ">{errors.generic?.message}</div>
        )}
      </div>
      <div className=" flex justify-center items-center ">
        <button
          type="submit"
          id="datlichkham"
          className="w-1/2 p-4 bg-blue-600 text-white font-semibold rounded-lg "
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Đặt lịch khám"
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
