import React from "react";
import "./style.scss";
import Link from "next/link";
import { Avatar } from "@radix-ui/themes";

interface IProps {
  children: React.ReactNode;
}

export function BaseLayout(props: IProps) {
  const { children } = props;
  return (
    <div className="flex">
      <div className="min-h-screen bg-gray-100">
        <div className="sidebar h-full overflow-hidden border-r w-56 shadow-lg">
          <div className="flex h-screen flex-col justify-between pt-2">
            <div>
              <div className="flex items-center justify-center w-full p-2">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="60" height="60" rx="10" fill="#E31C79" />
                  <path d="M20 12H45V37H32.5V25H20V12Z" fill="white" />
                  <path
                    d="M13.3333 19.1667L20 12.5V25H7.5L13.3333 19.1667Z"
                    fill="white"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M20 25H32.5V37H20V25Z"
                    fill="white"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M32.5 37H45L38.75 43.25L32.5 49.5V37Z"
                    fill="white"
                    fillOpacity="0.4"
                  />
                </svg>
              </div>
              <ul className="mt-6 space-y-2 tracking-wide">
                <li className="min-w-max font-medium">
                  <Link
                    href="/admin/overview"
                    className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M26.25 3.75H3.75C2.375 3.75 1.25 4.875 1.25 6.25V21.25C1.25 22.625 2.375 23.75 3.75 23.75H8.75V21.25H3.75V6.25H26.25V21.25H21.25V23.75H26.25C27.625 23.75 28.75 22.625 28.75 21.25V6.25C28.75 4.875 27.625 3.75 26.25 3.75ZM7.5 27.5H22.5L15 20L7.5 27.5Z"
                        fill="#2D3139"
                      />
                    </svg>
                    Overview
                  </Link>
                </li>
                <li className="min-w-max font-medium">
                  <Link
                    href="/admin/pages"
                    className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <g clipPath="url(#clip0_1_2575)">
                        <path
                          d="M25 5H5C3.61875 5 2.5125 6.11875 2.5125 7.5L2.5 22.5C2.5 23.8813 3.61875 25 5 25H25C26.3813 25 27.5 23.8813 27.5 22.5V7.5C27.5 6.11875 26.3813 5 25 5ZM18.75 22.5H5V17.5H18.75V22.5ZM18.75 16.25H5V11.25H18.75V16.25ZM25 22.5H20V11.25H25V22.5Z"
                          fill="#2D3139"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_2575">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Pages
                  </Link>
                </li>
                <li className="min-w-max font-medium">
                  <Link
                    href="/admin/builder"
                    className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <g clipPath="url(#clip0_1_2578)">
                        <path
                          d="M5 13.75H11.25V6.25H5V13.75ZM5 22.5H11.25V15H5V22.5ZM12.5 22.5H18.75V15H12.5V22.5ZM20 22.5H26.25V15H20V22.5ZM12.5 13.75H18.75V6.25H12.5V13.75ZM20 6.25V13.75H26.25V6.25H20Z"
                          fill="#2D3139"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_2578">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Builder
                  </Link>
                </li>
                <li className="min-w-max font-medium">
                  <Link
                    href="/admin/users"
                    className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <g clipPath="url(#clip0_1_2566)">
                        <path
                          d="M15 15C17.7625 15 20 12.7562 20 10C20 7.2375 17.7625 5 15 5C12.2375 5 10 7.2375 10 10C10 12.7562 12.2375 15 15 15ZM15 17.5C11.6687 17.5 5 19.1687 5 22.5V25H25V22.5C25 19.1687 18.3313 17.5 15 17.5Z"
                          fill="#2D3139"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_2566">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Users
                  </Link>
                </li>
                <li className="min-w-max font-medium">
                  <Link
                    href="/admin/roles"
                    className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <g clipPath="url(#clip0_1_2584)">
                        <path
                          d="M15 2.5C8.09375 2.5 2.5 8.09375 2.5 15C2.5 21.9062 8.09375 27.5 15 27.5C21.9062 27.5 27.5 21.9062 27.5 15C27.5 8.09375 21.9062 2.5 15 2.5ZM15 6.25C17.0688 6.25 18.75 7.93125 18.75 10C18.75 12.075 17.0688 13.75 15 13.75C12.9312 13.75 11.25 12.075 11.25 10C11.25 7.93125 12.9312 6.25 15 6.25ZM15 24C11.8687 24 9.11875 22.4 7.5 19.975C7.53125 17.4937 12.5063 16.125 15 16.125C17.4937 16.125 22.4625 17.4937 22.5 19.975C20.8813 22.4 18.1313 24 15 24Z"
                          fill="#2D3139"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_2584">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Roles
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="group flex items-center justify-between space-x-4 rounded-md px-4 py-3 text-gray-600">
                <span className="text-gray-600 font-medium">Le Vy</span>
                <span className="flex items-center justify-center rounded-full w-8 h-8 bg-blue-300 text-white font-medium p-3">
                  LV
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 my-4 px-6 py-6 main bg-white rounded w-full min-h-screen">
        {children}
      </div>
    </div>
  );
}
