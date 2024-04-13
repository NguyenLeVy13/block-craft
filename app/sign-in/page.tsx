"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { toast } from "react-toastify";

interface ILoginInfo {
  email: string;
  password: string;
}

export default function SignIn() {
  const router = useRouter();

  const [loginInfo, setLoginInfo] = useState<ILoginInfo>({
    email: "admin@gmail.com",
    password: "admin",
  });

  const handleSubmit = () => {
    if (
      loginInfo.email === "admin@gmail.com" &&
      loginInfo.password === "admin"
    ) {
      toast.success("Đăng nhập thành công!");
      router.push("/admin/overview");
    } else {
      toast.error("Thông tin đăng nhập không chính xác!");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex flex-col items-center">
              <a
                href="#"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
              >
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="80" height="80" rx="10" fill="#E31C79" />
                  <path d="M30 20H60V50H45V35.5H30V20Z" fill="white" />
                  <path
                    d="M21.5 28L30 20V35H15L21.5 28Z"
                    fill="white"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M30 35H45V50H30V35Z"
                    fill="white"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M45 50H60L52.5 57.5L45 65V50Z"
                    fill="white"
                    fillOpacity="0.4"
                  />
                </svg>
              </a>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Welcome to BlockCraft!
              </h1>
              <p className="text-gray-900">
                Log in to your BlockCraft account
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div>
                <input
                  name="email"
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email address"
                  onChange={handleInputChange}
                  value={loginInfo.email}
                />
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleInputChange}
                  value={loginInfo.password}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <button
                className="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                onClick={handleSubmit}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
