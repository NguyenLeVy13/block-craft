"use client";

import { BaseLayout } from "../../components/base-layout";

export default function Overview() {
  return (
    <BaseLayout>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
              <svg
                className="fill-primary dark:fill-white"
                width={22}
                height={16}
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                  fill=""
                />
                <path
                  d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                  fill=""
                />
              </svg>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md font-bold text-black dark:text-white">
                  $3.456K
                </h4>
                <span className="text-sm font-medium">Total views</span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-meta-3 undefined ">
                0.43%
                <svg
                  className="fill-meta-3"
                  width={10}
                  height={11}
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                    fill=""
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
              <svg
                className="fill-primary dark:fill-white"
                width={20}
                height={22}
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7531 16.4312C10.3781 16.4312 9.27808 17.5312 9.27808 18.9062C9.27808 20.2812 10.3781 21.3812 11.7531 21.3812C13.1281 21.3812 14.2281 20.2812 14.2281 18.9062C14.2281 17.5656 13.0937 16.4312 11.7531 16.4312ZM11.7531 19.8687C11.2375 19.8687 10.825 19.4562 10.825 18.9406C10.825 18.425 11.2375 18.0125 11.7531 18.0125C12.2687 18.0125 12.6812 18.425 12.6812 18.9406C12.6812 19.4219 12.2343 19.8687 11.7531 19.8687Z"
                  fill=""
                />
                <path
                  d="M5.22183 16.4312C3.84683 16.4312 2.74683 17.5312 2.74683 18.9062C2.74683 20.2812 3.84683 21.3812 5.22183 21.3812C6.59683 21.3812 7.69683 20.2812 7.69683 18.9062C7.69683 17.5656 6.56245 16.4312 5.22183 16.4312ZM5.22183 19.8687C4.7062 19.8687 4.2937 19.4562 4.2937 18.9406C4.2937 18.425 4.7062 18.0125 5.22183 18.0125C5.73745 18.0125 6.14995 18.425 6.14995 18.9406C6.14995 19.4219 5.73745 19.8687 5.22183 19.8687Z"
                  fill=""
                />
                <path
                  d="M19.0062 0.618744H17.15C16.325 0.618744 15.6031 1.23749 15.5 2.06249L14.95 6.01562H1.37185C1.0281 6.01562 0.684353 6.18749 0.443728 6.46249C0.237478 6.73749 0.134353 7.11562 0.237478 7.45937C0.237478 7.49374 0.237478 7.49374 0.237478 7.52812L2.36873 13.9562C2.50623 14.4375 2.9531 14.7812 3.46873 14.7812H12.9562C14.2281 14.7812 15.3281 13.8187 15.5 12.5469L16.9437 2.26874C16.9437 2.19999 17.0125 2.16562 17.0812 2.16562H18.9375C19.35 2.16562 19.7281 1.82187 19.7281 1.37499C19.7281 0.928119 19.4187 0.618744 19.0062 0.618744ZM14.0219 12.3062C13.9531 12.8219 13.5062 13.2 12.9906 13.2H3.7781L1.92185 7.56249H14.7094L14.0219 12.3062Z"
                  fill=""
                />
              </svg>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md font-bold text-black dark:text-white">
                  $45,2K
                </h4>
                <span className="text-sm font-medium">Total Profit</span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-meta-3 undefined ">
                4.35%
                <svg
                  className="fill-meta-3"
                  width={10}
                  height={11}
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                    fill=""
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
              <svg
                className="fill-primary dark:fill-white"
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.1063 18.0469L19.3875 3.23126C19.2157 1.71876 17.9438 0.584381 16.3969 0.584381H5.56878C4.05628 0.584381 2.78441 1.71876 2.57816 3.23126L0.859406 18.0469C0.756281 18.9063 1.03128 19.7313 1.61566 20.3844C2.20003 21.0375 2.99066 21.3813 3.85003 21.3813H18.1157C18.975 21.3813 19.8 21.0031 20.35 20.3844C20.9 19.7656 21.2094 18.9063 21.1063 18.0469ZM19.2157 19.3531C18.9407 19.6625 18.5625 19.8344 18.15 19.8344H3.85003C3.43753 19.8344 3.05941 19.6625 2.78441 19.3531C2.50941 19.0438 2.37191 18.6313 2.44066 18.2188L4.12503 3.43751C4.19378 2.71563 4.81253 2.16563 5.56878 2.16563H16.4313C17.1532 2.16563 17.7719 2.71563 17.875 3.43751L19.5938 18.2531C19.6282 18.6656 19.4907 19.0438 19.2157 19.3531Z"
                  fill=""
                />
                <path
                  d="M14.3345 5.29375C13.922 5.39688 13.647 5.80938 13.7501 6.22188C13.7845 6.42813 13.8189 6.63438 13.8189 6.80625C13.8189 8.35313 12.547 9.625 11.0001 9.625C9.45327 9.625 8.1814 8.35313 8.1814 6.80625C8.1814 6.6 8.21577 6.42813 8.25015 6.22188C8.35327 5.80938 8.07827 5.39688 7.66577 5.29375C7.25327 5.19063 6.84077 5.46563 6.73765 5.87813C6.6689 6.1875 6.63452 6.49688 6.63452 6.80625C6.63452 9.2125 8.5939 11.1719 11.0001 11.1719C13.4064 11.1719 15.3658 9.2125 15.3658 6.80625C15.3658 6.49688 15.3314 6.1875 15.2626 5.87813C15.1595 5.46563 14.747 5.225 14.3345 5.29375Z"
                  fill=""
                />
              </svg>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md font-bold text-black dark:text-white">
                  2.450
                </h4>
                <span className="text-sm font-medium">Total Product</span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-meta-3 undefined ">
                2.59%
                <svg
                  className="fill-meta-3"
                  width={10}
                  height={11}
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                    fill=""
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
              <svg
                className="fill-primary dark:fill-white"
                width={22}
                height={18}
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.18418 8.03751C9.31543 8.03751 11.0686 6.35313 11.0686 4.25626C11.0686 2.15938 9.31543 0.475006 7.18418 0.475006C5.05293 0.475006 3.2998 2.15938 3.2998 4.25626C3.2998 6.35313 5.05293 8.03751 7.18418 8.03751ZM7.18418 2.05626C8.45605 2.05626 9.52168 3.05313 9.52168 4.29063C9.52168 5.52813 8.49043 6.52501 7.18418 6.52501C5.87793 6.52501 4.84668 5.52813 4.84668 4.29063C4.84668 3.05313 5.9123 2.05626 7.18418 2.05626Z"
                  fill=""
                />
                <path
                  d="M15.8124 9.6875C17.6687 9.6875 19.1468 8.24375 19.1468 6.42188C19.1468 4.6 17.6343 3.15625 15.8124 3.15625C13.9905 3.15625 12.478 4.6 12.478 6.42188C12.478 8.24375 13.9905 9.6875 15.8124 9.6875ZM15.8124 4.7375C16.8093 4.7375 17.5999 5.49375 17.5999 6.45625C17.5999 7.41875 16.8093 8.175 15.8124 8.175C14.8155 8.175 14.0249 7.41875 14.0249 6.45625C14.0249 5.49375 14.8155 4.7375 15.8124 4.7375Z"
                  fill=""
                />
                <path
                  d="M15.9843 10.0313H15.6749C14.6437 10.0313 13.6468 10.3406 12.7874 10.8563C11.8593 9.61876 10.3812 8.79376 8.73115 8.79376H5.67178C2.85303 8.82814 0.618652 11.0625 0.618652 13.8469V16.3219C0.618652 16.975 1.13428 17.4906 1.7874 17.4906H20.2468C20.8999 17.4906 21.4499 16.9406 21.4499 16.2875V15.4625C21.4155 12.4719 18.9749 10.0313 15.9843 10.0313ZM2.16553 15.9438V13.8469C2.16553 11.9219 3.74678 10.3406 5.67178 10.3406H8.73115C10.6562 10.3406 12.2374 11.9219 12.2374 13.8469V15.9438H2.16553V15.9438ZM19.8687 15.9438H13.7499V13.8469C13.7499 13.2969 13.6468 12.7469 13.4749 12.2313C14.0937 11.7844 14.8499 11.5781 15.6405 11.5781H15.9499C18.0812 11.5781 19.8343 13.3313 19.8343 15.4625V15.9438H19.8687Z"
                  fill=""
                />
              </svg>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md font-bold text-black dark:text-white">
                  3.456
                </h4>
                <span className="text-sm font-medium">Total Users</span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium undefined text-meta-5 ">
                0.95%
                <svg
                  className="fill-meta-5"
                  width={10}
                  height={11}
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                    fill=""
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
            <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
              <div className="flex w-full flex-wrap gap-3 sm:gap-5">
                <div className="flex min-w-47.5">
                  <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
                    <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary" />
                  </span>
                  <div className="w-full">
                    <p className="font-semibold text-primary">Total Revenue</p>
                    <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
                  </div>
                </div>
                <div className="flex min-w-47.5">
                  <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
                    <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary" />
                  </span>
                  <div className="w-full">
                    <p className="font-semibold text-secondary">Total Sales</p>
                    <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
                  </div>
                </div>
              </div>
              <div className="flex w-full max-w-45 justify-end">
                <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
                  <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
                    Day
                  </button>
                  <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                    Week
                  </button>
                  <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                    Month
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div id="chartOne" className="-ml-5">
                <div style={{ minHeight: 365 }}>
                  <div
                    id="apexchartskyxyoo82"
                    className="apexcharts-canvas apexchartskyxyoo82 apexcharts-theme-light"
                    style={{ width: 919, height: 350 }}
                  >
                    <svg
                      id="SvgjsSvg1411"
                      width={919}
                      height={350}
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.dev"
                      className="apexcharts-svg apexcharts-zoomable hovering-zoom"
                      xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)"
                      style={{ background: "transparent" }}
                    >
                      <g
                        id="SvgjsG1413"
                        className="apexcharts-inner apexcharts-graphical"
                        transform="translate(46.186981201171875, 30)"
                      >
                        <defs id="SvgjsDefs1412">
                          <clipPath id="gridRectMaskkyxyoo82">
                            <rect
                              id="SvgjsRect1419"
                              width="856.6723937988281"
                              height="282.73"
                              x={-3}
                              y={-1}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="forecastMaskkyxyoo82" />
                          <clipPath id="nonForecastMaskkyxyoo82" />
                          <clipPath id="gridRectMarkerMaskkyxyoo82">
                            <rect
                              id="SvgjsRect1420"
                              width="894.6723937988281"
                              height="324.73"
                              x={-22}
                              y={-22}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <linearGradient
                            id="SvgjsLinearGradient1448"
                            x1={0}
                            y1={0}
                            x2={0}
                            y2={1}
                          >
                            <stop
                              id="SvgjsStop1449"
                              stopOpacity="0.65"
                              stopColor="rgba(60,80,224,0.65)"
                              offset={0}
                            />
                            <stop
                              id="SvgjsStop1450"
                              stopOpacity="0.5"
                              stopColor="rgba(158,168,240,0.5)"
                              offset={1}
                            />
                            <stop
                              id="SvgjsStop1451"
                              stopOpacity="0.5"
                              stopColor="rgba(158,168,240,0.5)"
                              offset={1}
                            />
                          </linearGradient>
                          <filter
                            id="SvgjsFilter1453"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feFlood
                              id="SvgjsFeFlood1454"
                              floodColor="#623CEA14"
                              floodOpacity="0.1"
                              result="SvgjsFeFlood1454Out"
                              in="SourceGraphic"
                            />
                            <feComposite
                              id="SvgjsFeComposite1455"
                              in="SvgjsFeFlood1454Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite1455Out"
                            />
                            <feOffset
                              id="SvgjsFeOffset1456"
                              dx={0}
                              dy={10}
                              result="SvgjsFeOffset1456Out"
                              in="SvgjsFeComposite1455Out"
                            />
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur1457"
                              stdDeviation={4}
                              result="SvgjsFeGaussianBlur1457Out"
                              in="SvgjsFeOffset1456Out"
                            />
                            <feMerge
                              id="SvgjsFeMerge1458"
                              result="SvgjsFeMerge1458Out"
                              in="SourceGraphic"
                            >
                              <feMergeNode
                                id="SvgjsFeMergeNode1459"
                                in="SvgjsFeGaussianBlur1457Out"
                              />
                              <feMergeNode
                                id="SvgjsFeMergeNode1460"
                                in="[object Arguments]"
                              />
                            </feMerge>
                            <feBlend
                              id="SvgjsFeBlend1461"
                              in="SourceGraphic"
                              in2="SvgjsFeMerge1458Out"
                              mode="normal"
                              result="SvgjsFeBlend1461Out"
                            />
                          </filter>
                          <filter
                            id="SvgjsFilter1463"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feFlood
                              id="SvgjsFeFlood1464"
                              floodColor="#623CEA14"
                              floodOpacity="0.1"
                              result="SvgjsFeFlood1464Out"
                              in="SourceGraphic"
                            />
                            <feComposite
                              id="SvgjsFeComposite1465"
                              in="SvgjsFeFlood1464Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite1465Out"
                            />
                            <feOffset
                              id="SvgjsFeOffset1466"
                              dx={0}
                              dy={10}
                              result="SvgjsFeOffset1466Out"
                              in="SvgjsFeComposite1465Out"
                            />
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur1467"
                              stdDeviation={4}
                              result="SvgjsFeGaussianBlur1467Out"
                              in="SvgjsFeOffset1466Out"
                            />
                            <feMerge
                              id="SvgjsFeMerge1468"
                              result="SvgjsFeMerge1468Out"
                              in="SourceGraphic"
                            >
                              <feMergeNode
                                id="SvgjsFeMergeNode1469"
                                in="SvgjsFeGaussianBlur1467Out"
                              />
                              <feMergeNode
                                id="SvgjsFeMergeNode1470"
                                in="[object Arguments]"
                              />
                            </feMerge>
                            <feBlend
                              id="SvgjsFeBlend1471"
                              in="SourceGraphic"
                              in2="SvgjsFeMerge1468Out"
                              mode="normal"
                              result="SvgjsFeBlend1471Out"
                            />
                          </filter>
                          <linearGradient
                            id="SvgjsLinearGradient1498"
                            x1={0}
                            y1={0}
                            x2={0}
                            y2={1}
                          >
                            <stop
                              id="SvgjsStop1499"
                              stopOpacity="0.65"
                              stopColor="rgba(128,202,238,0.65)"
                              offset={0}
                            />
                            <stop
                              id="SvgjsStop1500"
                              stopOpacity="0.5"
                              stopColor="rgba(192,229,247,0.5)"
                              offset={1}
                            />
                            <stop
                              id="SvgjsStop1501"
                              stopOpacity="0.5"
                              stopColor="rgba(192,229,247,0.5)"
                              offset={1}
                            />
                          </linearGradient>
                          <filter
                            id="SvgjsFilter1503"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feFlood
                              id="SvgjsFeFlood1504"
                              floodColor="#623CEA14"
                              floodOpacity="0.1"
                              result="SvgjsFeFlood1504Out"
                              in="SourceGraphic"
                            />
                            <feComposite
                              id="SvgjsFeComposite1505"
                              in="SvgjsFeFlood1504Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite1505Out"
                            />
                            <feOffset
                              id="SvgjsFeOffset1506"
                              dx={0}
                              dy={10}
                              result="SvgjsFeOffset1506Out"
                              in="SvgjsFeComposite1505Out"
                            />
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur1507"
                              stdDeviation={4}
                              result="SvgjsFeGaussianBlur1507Out"
                              in="SvgjsFeOffset1506Out"
                            />
                            <feMerge
                              id="SvgjsFeMerge1508"
                              result="SvgjsFeMerge1508Out"
                              in="SourceGraphic"
                            >
                              <feMergeNode
                                id="SvgjsFeMergeNode1509"
                                in="SvgjsFeGaussianBlur1507Out"
                              />
                              <feMergeNode
                                id="SvgjsFeMergeNode1510"
                                in="[object Arguments]"
                              />
                            </feMerge>
                            <feBlend
                              id="SvgjsFeBlend1511"
                              in="SourceGraphic"
                              in2="SvgjsFeMerge1508Out"
                              mode="normal"
                              result="SvgjsFeBlend1511Out"
                            />
                          </filter>
                          <filter
                            id="SvgjsFilter1513"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feFlood
                              id="SvgjsFeFlood1514"
                              floodColor="#623CEA14"
                              floodOpacity="0.1"
                              result="SvgjsFeFlood1514Out"
                              in="SourceGraphic"
                            />
                            <feComposite
                              id="SvgjsFeComposite1515"
                              in="SvgjsFeFlood1514Out"
                              in2="SourceAlpha"
                              operator="in"
                              result="SvgjsFeComposite1515Out"
                            />
                            <feOffset
                              id="SvgjsFeOffset1516"
                              dx={0}
                              dy={10}
                              result="SvgjsFeOffset1516Out"
                              in="SvgjsFeComposite1515Out"
                            />
                            <feGaussianBlur
                              id="SvgjsFeGaussianBlur1517"
                              stdDeviation={4}
                              result="SvgjsFeGaussianBlur1517Out"
                              in="SvgjsFeOffset1516Out"
                            />
                            <feMerge
                              id="SvgjsFeMerge1518"
                              result="SvgjsFeMerge1518Out"
                              in="SourceGraphic"
                            >
                              <feMergeNode
                                id="SvgjsFeMergeNode1519"
                                in="SvgjsFeGaussianBlur1517Out"
                              />
                              <feMergeNode
                                id="SvgjsFeMergeNode1520"
                                in="[object Arguments]"
                              />
                            </feMerge>
                            <feBlend
                              id="SvgjsFeBlend1521"
                              in="SourceGraphic"
                              in2="SvgjsFeMerge1518Out"
                              mode="normal"
                              result="SvgjsFeBlend1521Out"
                            />
                          </filter>
                        </defs>
                        <line
                          id="SvgjsLine1418"
                          x1="76.83385398171164"
                          y1={0}
                          x2="76.83385398171164"
                          y2="280.73"
                          stroke="#b6b6b6"
                          strokeDasharray={3}
                          strokeLinecap="butt"
                          className="apexcharts-xcrosshairs apexcharts-active"
                          x="76.83385398171164"
                          y={0}
                          width={1}
                          height="280.73"
                          fill="#b1b9c4"
                          filter="none"
                          fillOpacity="0.9"
                          strokeWidth={1}
                        />
                        <g id="SvgjsG1522" className="apexcharts-grid">
                          <g
                            id="SvgjsG1523"
                            className="apexcharts-gridlines-horizontal"
                          >
                            <line
                              id="SvgjsLine1539"
                              x1={0}
                              y1="28.073"
                              x2="850.6723937988281"
                              y2="28.073"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1540"
                              x1={0}
                              y1="56.146"
                              x2="850.6723937988281"
                              y2="56.146"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1541"
                              x1={0}
                              y1="84.219"
                              x2="850.6723937988281"
                              y2="84.219"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1542"
                              x1={0}
                              y1="112.292"
                              x2="850.6723937988281"
                              y2="112.292"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1543"
                              x1={0}
                              y1="140.365"
                              x2="850.6723937988281"
                              y2="140.365"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1544"
                              x1={0}
                              y1="168.43800000000002"
                              x2="850.6723937988281"
                              y2="168.43800000000002"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1545"
                              x1={0}
                              y1="196.51100000000002"
                              x2="850.6723937988281"
                              y2="196.51100000000002"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1546"
                              x1={0}
                              y1="224.58400000000003"
                              x2="850.6723937988281"
                              y2="224.58400000000003"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1547"
                              x1={0}
                              y1="252.65700000000004"
                              x2="850.6723937988281"
                              y2="252.65700000000004"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                          </g>
                          <g id="SvgjsG1524" className="apexcharts-gridlines-vertical">
                            <line
                              id="SvgjsLine1526"
                              x1={0}
                              y1={0}
                              x2={0}
                              y2="280.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1527"
                              x1="77.33385398171164"
                              y1={0}
                              x2="77.33385398171164"
                              y2="280.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1528"
                              x1="154.66770796342328"
                              y1={0}
                              x2="154.66770796342328"
                              y2="280.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1529"
                              x1="232.00156194513494"
                              y1={0}
                              x2="232.00156194513494"
                              y2="280.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1530"
                              x1="309.33541592684657"
                              y1={0}
                              x2="309.33541592684657"
                              y2="280.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1531"
                              x1="386.6692699085582"
                              y1={0}
                              x2="386.6692699085582"
                              y2="280.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1532"
                              x1="464.0031238902698"
                              y1={0}
                              x2="464.0031238902698"
                              y2="280.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1533"
                              x1="541.3369778719815"
                              y1={0}
                              x2="541.3369778719815"
                              y2="280.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1534"
                              x1="618.6708318536931"
                              y1={0}
                              x2="618.6708318536931"
                              y2="280.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1535"
                              x1="696.0046858354048"
                              y1={0}
                              x2="696.0046858354048"
                              y2="280.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1536"
                              x1="773.3385398171164"
                              y1={0}
                              x2="773.3385398171164"
                              y2="280.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1537"
                              x1="850.672393798828"
                              y1={0}
                              x2="850.672393798828"
                              y2="280.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                          </g>
                          <line
                            id="SvgjsLine1550"
                            x1={0}
                            y1="280.73"
                            x2="850.6723937988281"
                            y2="280.73"
                            stroke="transparent"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                          />
                          <line
                            id="SvgjsLine1549"
                            x1={0}
                            y1={1}
                            x2={0}
                            y2="280.73"
                            stroke="transparent"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                          />
                        </g>
                        <g id="SvgjsG1525" className="apexcharts-grid-borders">
                          <line
                            id="SvgjsLine1538"
                            x1={0}
                            y1={0}
                            x2="850.6723937988281"
                            y2={0}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1548"
                            x1={0}
                            y1="280.73"
                            x2="850.6723937988281"
                            y2="280.73"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                        </g>
                        <g
                          id="SvgjsG1421"
                          className="apexcharts-area-series apexcharts-plot-series"
                        >
                          <g
                            id="SvgjsG1422"
                            className="apexcharts-series"
                            seriesname="ProductxOne"
                            data:longestseries="true"
                            rel={1}
                            data:realindex={0}
                          >
                            <path
                              id="SvgjsPath1452"
                              d="M 0 280.73 L 0 216.1621 L 77.33385398171164 249.8497 L 154.66770796342328 218.9694 L 232.00156194513494 204.93290000000002 L 309.33541592684657 244.23510000000002 L 386.6692699085582 218.9694 L 464.0031238902699 176.8599 L 541.3369778719815 221.7767 L 618.6708318536931 157.2088 L 696.0046858354048 218.9694 L 773.3385398171164 196.51100000000002 L 850.6723937988281 154.4015 L 850.6723937988281 280.73M 850.6723937988281 154.4015z"
                              fill="url(#SvgjsLinearGradient1448)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-area"
                              index={0}
                              clipPath="url(#gridRectMaskkyxyoo82)"
                              filter="url(#SvgjsFilter1453)"
                              pathto="M 0 280.73 L 0 216.1621 L 77.33385398171164 249.8497 L 154.66770796342328 218.9694 L 232.00156194513494 204.93290000000002 L 309.33541592684657 244.23510000000002 L 386.6692699085582 218.9694 L 464.0031238902699 176.8599 L 541.3369778719815 221.7767 L 618.6708318536931 157.2088 L 696.0046858354048 218.9694 L 773.3385398171164 196.51100000000002 L 850.6723937988281 154.4015 L 850.6723937988281 280.73M 850.6723937988281 154.4015z"
                              pathfrom="M -1 280.73 L -1 280.73 L 77.33385398171164 280.73 L 154.66770796342328 280.73 L 232.00156194513494 280.73 L 309.33541592684657 280.73 L 386.6692699085582 280.73 L 464.0031238902699 280.73 L 541.3369778719815 280.73 L 618.6708318536931 280.73 L 696.0046858354048 280.73 L 773.3385398171164 280.73 L 850.6723937988281 280.73"
                            />
                            <path
                              id="SvgjsPath1462"
                              d="M 0 216.1621 L 77.33385398171164 249.8497 L 154.66770796342328 218.9694 L 232.00156194513494 204.93290000000002 L 309.33541592684657 244.23510000000002 L 386.6692699085582 218.9694 L 464.0031238902699 176.8599 L 541.3369778719815 221.7767 L 618.6708318536931 157.2088 L 696.0046858354048 218.9694 L 773.3385398171164 196.51100000000002 L 850.6723937988281 154.4015"
                              fill="none"
                              fillOpacity={1}
                              stroke="#3c50e0"
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-area"
                              index={0}
                              clipPath="url(#gridRectMaskkyxyoo82)"
                              filter="url(#SvgjsFilter1463)"
                              pathto="M 0 216.1621 L 77.33385398171164 249.8497 L 154.66770796342328 218.9694 L 232.00156194513494 204.93290000000002 L 309.33541592684657 244.23510000000002 L 386.6692699085582 218.9694 L 464.0031238902699 176.8599 L 541.3369778719815 221.7767 L 618.6708318536931 157.2088 L 696.0046858354048 218.9694 L 773.3385398171164 196.51100000000002 L 850.6723937988281 154.4015"
                              pathfrom="M -1 280.73 L -1 280.73 L 77.33385398171164 280.73 L 154.66770796342328 280.73 L 232.00156194513494 280.73 L 309.33541592684657 280.73 L 386.6692699085582 280.73 L 464.0031238902699 280.73 L 541.3369778719815 280.73 L 618.6708318536931 280.73 L 696.0046858354048 280.73 L 773.3385398171164 280.73 L 850.6723937988281 280.73"
                              fillRule="evenodd"
                            />
                            <g
                              id="SvgjsG1423"
                              className="apexcharts-series-markers-wrap"
                              data:realindex={0}
                            >
                              <g
                                id="SvgjsG1425"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1426"
                                  r={4}
                                  cx={0}
                                  cy="216.1621"
                                  className="apexcharts-marker no-pointer-events wplg2kl75"
                                  stroke="#3056d3"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={0}
                                  j={0}
                                  index={0}
                                  default-marker-size={4}
                                />
                                <circle
                                  id="SvgjsCircle1427"
                                  r={9}
                                  cx="77.33385398171164"
                                  cy="249.8497"
                                  className="apexcharts-marker no-pointer-events wfocick2ug"
                                  stroke="#3056d3"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={1}
                                  j={1}
                                  index={0}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1428"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1429"
                                  r={4}
                                  cx="154.66770796342328"
                                  cy="218.9694"
                                  className="apexcharts-marker no-pointer-events wf65l12fj"
                                  stroke="#3056d3"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={2}
                                  j={2}
                                  index={0}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1430"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1431"
                                  r={4}
                                  cx="232.00156194513494"
                                  cy="204.93290000000002"
                                  className="apexcharts-marker no-pointer-events wiuxneq42j"
                                  stroke="#3056d3"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={3}
                                  j={3}
                                  index={0}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1432"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1433"
                                  r={4}
                                  cx="309.33541592684657"
                                  cy="244.23510000000002"
                                  className="apexcharts-marker no-pointer-events w2jtcekly"
                                  stroke="#3056d3"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={4}
                                  j={4}
                                  index={0}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1434"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1435"
                                  r={4}
                                  cx="386.6692699085582"
                                  cy="218.9694"
                                  className="apexcharts-marker no-pointer-events wbelj7up7"
                                  stroke="#3056d3"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={5}
                                  j={5}
                                  index={0}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1436"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1437"
                                  r={4}
                                  cx="464.0031238902699"
                                  cy="176.8599"
                                  className="apexcharts-marker no-pointer-events w7k5odbcb"
                                  stroke="#3056d3"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={6}
                                  j={6}
                                  index={0}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1438"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1439"
                                  r={4}
                                  cx="541.3369778719815"
                                  cy="221.7767"
                                  className="apexcharts-marker no-pointer-events w2m4soc0e"
                                  stroke="#3056d3"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={7}
                                  j={7}
                                  index={0}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1440"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1441"
                                  r={4}
                                  cx="618.6708318536931"
                                  cy="157.2088"
                                  className="apexcharts-marker no-pointer-events wad1gnhkk"
                                  stroke="#3056d3"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={8}
                                  j={8}
                                  index={0}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1442"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1443"
                                  r={4}
                                  cx="696.0046858354048"
                                  cy="218.9694"
                                  className="apexcharts-marker no-pointer-events wnztht2gy"
                                  stroke="#3056d3"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={9}
                                  j={9}
                                  index={0}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1444"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1445"
                                  r={4}
                                  cx="773.3385398171164"
                                  cy="196.51100000000002"
                                  className="apexcharts-marker no-pointer-events wzsls42vvl"
                                  stroke="#3056d3"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={10}
                                  j={10}
                                  index={0}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1446"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1447"
                                  r={4}
                                  cx="850.6723937988281"
                                  cy="154.4015"
                                  className="apexcharts-marker no-pointer-events wowwcfc7j"
                                  stroke="#3056d3"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={11}
                                  j={11}
                                  index={0}
                                  default-marker-size={4}
                                />
                              </g>
                            </g>
                          </g>
                          <g
                            id="SvgjsG1472"
                            className="apexcharts-series"
                            seriesname="ProductxTwo"
                            data:longestseries="true"
                            rel={2}
                            data:realindex={1}
                          >
                            <path
                              id="SvgjsPath1502"
                              d="M 0 280.73 L 0 196.51100000000002 L 77.33385398171164 210.5475 L 154.66770796342328 179.6672 L 232.00156194513494 196.51100000000002 L 309.33541592684657 154.4015 L 386.6692699085582 182.4745 L 464.0031238902699 101.06280000000001 L 541.3369778719815 134.7504 L 618.6708318536931 115.0993 L 696.0046858354048 179.6672 L 773.3385398171164 171.24530000000001 L 850.6723937988281 137.5577 L 850.6723937988281 280.73M 850.6723937988281 137.5577z"
                              fill="url(#SvgjsLinearGradient1498)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-area"
                              index={1}
                              clipPath="url(#gridRectMaskkyxyoo82)"
                              filter="url(#SvgjsFilter1503)"
                              pathto="M 0 280.73 L 0 196.51100000000002 L 77.33385398171164 210.5475 L 154.66770796342328 179.6672 L 232.00156194513494 196.51100000000002 L 309.33541592684657 154.4015 L 386.6692699085582 182.4745 L 464.0031238902699 101.06280000000001 L 541.3369778719815 134.7504 L 618.6708318536931 115.0993 L 696.0046858354048 179.6672 L 773.3385398171164 171.24530000000001 L 850.6723937988281 137.5577 L 850.6723937988281 280.73M 850.6723937988281 137.5577z"
                              pathfrom="M -1 280.73 L -1 280.73 L 77.33385398171164 280.73 L 154.66770796342328 280.73 L 232.00156194513494 280.73 L 309.33541592684657 280.73 L 386.6692699085582 280.73 L 464.0031238902699 280.73 L 541.3369778719815 280.73 L 618.6708318536931 280.73 L 696.0046858354048 280.73 L 773.3385398171164 280.73 L 850.6723937988281 280.73"
                            />
                            <path
                              id="SvgjsPath1512"
                              d="M 0 196.51100000000002 L 77.33385398171164 210.5475 L 154.66770796342328 179.6672 L 232.00156194513494 196.51100000000002 L 309.33541592684657 154.4015 L 386.6692699085582 182.4745 L 464.0031238902699 101.06280000000001 L 541.3369778719815 134.7504 L 618.6708318536931 115.0993 L 696.0046858354048 179.6672 L 773.3385398171164 171.24530000000001 L 850.6723937988281 137.5577"
                              fill="none"
                              fillOpacity={1}
                              stroke="#80caee"
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth={2}
                              strokeDasharray={0}
                              className="apexcharts-area"
                              index={1}
                              clipPath="url(#gridRectMaskkyxyoo82)"
                              filter="url(#SvgjsFilter1513)"
                              pathto="M 0 196.51100000000002 L 77.33385398171164 210.5475 L 154.66770796342328 179.6672 L 232.00156194513494 196.51100000000002 L 309.33541592684657 154.4015 L 386.6692699085582 182.4745 L 464.0031238902699 101.06280000000001 L 541.3369778719815 134.7504 L 618.6708318536931 115.0993 L 696.0046858354048 179.6672 L 773.3385398171164 171.24530000000001 L 850.6723937988281 137.5577"
                              pathfrom="M -1 280.73 L -1 280.73 L 77.33385398171164 280.73 L 154.66770796342328 280.73 L 232.00156194513494 280.73 L 309.33541592684657 280.73 L 386.6692699085582 280.73 L 464.0031238902699 280.73 L 541.3369778719815 280.73 L 618.6708318536931 280.73 L 696.0046858354048 280.73 L 773.3385398171164 280.73 L 850.6723937988281 280.73"
                              fillRule="evenodd"
                            />
                            <g
                              id="SvgjsG1473"
                              className="apexcharts-series-markers-wrap"
                              data:realindex={1}
                            >
                              <g
                                id="SvgjsG1475"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1476"
                                  r={4}
                                  cx={0}
                                  cy="196.51100000000002"
                                  className="apexcharts-marker no-pointer-events wvn2uv0jz"
                                  stroke="#80caee"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={0}
                                  j={0}
                                  index={1}
                                  default-marker-size={4}
                                />
                                <circle
                                  id="SvgjsCircle1477"
                                  r={9}
                                  cx="77.33385398171164"
                                  cy="210.5475"
                                  className="apexcharts-marker no-pointer-events wnav2mjkr"
                                  stroke="#80caee"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={1}
                                  j={1}
                                  index={1}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1478"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1479"
                                  r={4}
                                  cx="154.66770796342328"
                                  cy="179.6672"
                                  className="apexcharts-marker no-pointer-events wv0m0xdxw"
                                  stroke="#80caee"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={2}
                                  j={2}
                                  index={1}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1480"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1481"
                                  r={4}
                                  cx="232.00156194513494"
                                  cy="196.51100000000002"
                                  className="apexcharts-marker no-pointer-events wnpxvd8jc"
                                  stroke="#80caee"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={3}
                                  j={3}
                                  index={1}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1482"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1483"
                                  r={4}
                                  cx="309.33541592684657"
                                  cy="154.4015"
                                  className="apexcharts-marker no-pointer-events w9vr9cp61"
                                  stroke="#80caee"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={4}
                                  j={4}
                                  index={1}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1484"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1485"
                                  r={4}
                                  cx="386.6692699085582"
                                  cy="182.4745"
                                  className="apexcharts-marker no-pointer-events w1t63ytrf"
                                  stroke="#80caee"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={5}
                                  j={5}
                                  index={1}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1486"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1487"
                                  r={4}
                                  cx="464.0031238902699"
                                  cy="101.06280000000001"
                                  className="apexcharts-marker no-pointer-events w3z1vzyw8"
                                  stroke="#80caee"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={6}
                                  j={6}
                                  index={1}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1488"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1489"
                                  r={4}
                                  cx="541.3369778719815"
                                  cy="134.7504"
                                  className="apexcharts-marker no-pointer-events wotlajkix"
                                  stroke="#80caee"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={7}
                                  j={7}
                                  index={1}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1490"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1491"
                                  r={4}
                                  cx="618.6708318536931"
                                  cy="115.0993"
                                  className="apexcharts-marker no-pointer-events wiyfjvmne"
                                  stroke="#80caee"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={8}
                                  j={8}
                                  index={1}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1492"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1493"
                                  r={4}
                                  cx="696.0046858354048"
                                  cy="179.6672"
                                  className="apexcharts-marker no-pointer-events wqbtj55tx"
                                  stroke="#80caee"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={9}
                                  j={9}
                                  index={1}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1494"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1495"
                                  r={4}
                                  cx="773.3385398171164"
                                  cy="171.24530000000001"
                                  className="apexcharts-marker no-pointer-events w1vjmhcq6"
                                  stroke="#80caee"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={10}
                                  j={10}
                                  index={1}
                                  default-marker-size={4}
                                />
                              </g>
                              <g
                                id="SvgjsG1496"
                                className="apexcharts-series-markers"
                                clipPath="url(#gridRectMarkerMaskkyxyoo82)"
                              >
                                <circle
                                  id="SvgjsCircle1497"
                                  r={4}
                                  cx="850.6723937988281"
                                  cy="137.5577"
                                  className="apexcharts-marker no-pointer-events wtsd3s0h8h"
                                  stroke="#80caee"
                                  fill="#ffffff"
                                  fillOpacity={1}
                                  strokeWidth={3}
                                  strokeOpacity="0.9"
                                  rel={11}
                                  j={11}
                                  index={1}
                                  default-marker-size={4}
                                />
                              </g>
                            </g>
                          </g>
                          <g
                            id="SvgjsG1424"
                            className="apexcharts-datalabels"
                            data:realindex={0}
                          />
                          <g
                            id="SvgjsG1474"
                            className="apexcharts-datalabels"
                            data:realindex={1}
                          />
                        </g>
                        <line
                          id="SvgjsLine1551"
                          x1={0}
                          y1={0}
                          x2="850.6723937988281"
                          y2={0}
                          stroke="#b6b6b6"
                          strokeDasharray={0}
                          strokeWidth={1}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs"
                        />
                        <line
                          id="SvgjsLine1552"
                          x1={0}
                          y1={0}
                          x2="850.6723937988281"
                          y2={0}
                          strokeDasharray={0}
                          strokeWidth={0}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs-hidden"
                        />
                        <g id="SvgjsG1553" className="apexcharts-yaxis-annotations" />
                        <g id="SvgjsG1554" className="apexcharts-xaxis-annotations" />
                        <g id="SvgjsG1555" className="apexcharts-point-annotations" />
                        <g
                          id="SvgjsG1556"
                          className="apexcharts-xaxis"
                          transform="translate(0, 0)"
                        >
                          <g
                            id="SvgjsG1557"
                            className="apexcharts-xaxis-texts-g"
                            transform="translate(0, -4)"
                          >
                            <text
                              id="SvgjsText1559"
                              fontFamily="Satoshi, sans-serif"
                              x={0}
                              y="309.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1560">Sep</tspan>
                              <title>Sep</title>
                            </text>
                            <text
                              id="SvgjsText1562"
                              fontFamily="Satoshi, sans-serif"
                              x="77.33385398171166"
                              y="309.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1563">Oct</tspan>
                              <title>Oct</title>
                            </text>
                            <text
                              id="SvgjsText1565"
                              fontFamily="Satoshi, sans-serif"
                              x="154.6677079634233"
                              y="309.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1566">Nov</tspan>
                              <title>Nov</title>
                            </text>
                            <text
                              id="SvgjsText1568"
                              fontFamily="Satoshi, sans-serif"
                              x="232.00156194513494"
                              y="309.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1569">Dec</tspan>
                              <title>Dec</title>
                            </text>
                            <text
                              id="SvgjsText1571"
                              fontFamily="Satoshi, sans-serif"
                              x="309.33541592684657"
                              y="309.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1572">Jan</tspan>
                              <title>Jan</title>
                            </text>
                            <text
                              id="SvgjsText1574"
                              fontFamily="Satoshi, sans-serif"
                              x="386.6692699085582"
                              y="309.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1575">Feb</tspan>
                              <title>Feb</title>
                            </text>
                            <text
                              id="SvgjsText1577"
                              fontFamily="Satoshi, sans-serif"
                              x="464.0031238902698"
                              y="309.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1578">Mar</tspan>
                              <title>Mar</title>
                            </text>
                            <text
                              id="SvgjsText1580"
                              fontFamily="Satoshi, sans-serif"
                              x="541.3369778719815"
                              y="309.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1581">Apr</tspan>
                              <title>Apr</title>
                            </text>
                            <text
                              id="SvgjsText1583"
                              fontFamily="Satoshi, sans-serif"
                              x="618.6708318536931"
                              y="309.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1584">May</tspan>
                              <title>May</title>
                            </text>
                            <text
                              id="SvgjsText1586"
                              fontFamily="Satoshi, sans-serif"
                              x="696.0046858354048"
                              y="309.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1587">Jun</tspan>
                              <title>Jun</title>
                            </text>
                            <text
                              id="SvgjsText1589"
                              fontFamily="Satoshi, sans-serif"
                              x="773.3385398171164"
                              y="309.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1590">Jul</tspan>
                              <title>Jul</title>
                            </text>
                            <text
                              id="SvgjsText1592"
                              fontFamily="Satoshi, sans-serif"
                              x="850.672393798828"
                              y="309.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1593">Aug</tspan>
                              <title>Aug</title>
                            </text>
                          </g>
                        </g>
                        <rect
                          id="SvgjsRect1629"
                          width={0}
                          height={0}
                          x={0}
                          y={0}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fefefe"
                          className="apexcharts-zoom-rect"
                        />
                        <rect
                          id="SvgjsRect1630"
                          width={0}
                          height={0}
                          x={0}
                          y={0}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fefefe"
                          className="apexcharts-selection-rect"
                        />
                      </g>
                      <g id="SvgjsG1414" className="apexcharts-annotations" />
                      <g
                        id="SvgjsG1594"
                        className="apexcharts-yaxis"
                        rel={0}
                        transform="translate(16.186981201171875, 0)"
                      >
                        <g id="SvgjsG1595" className="apexcharts-yaxis-texts-g">
                          <text
                            id="SvgjsText1597"
                            fontFamily="Satoshi, sans-serif"
                            x={20}
                            y={32}
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1598">100</tspan>
                            <title>100</title>
                          </text>
                          <text
                            id="SvgjsText1600"
                            fontFamily="Satoshi, sans-serif"
                            x={20}
                            y="60.073"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1601">90</tspan>
                            <title>90</title>
                          </text>
                          <text
                            id="SvgjsText1603"
                            fontFamily="Satoshi, sans-serif"
                            x={20}
                            y="88.146"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1604">80</tspan>
                            <title>80</title>
                          </text>
                          <text
                            id="SvgjsText1606"
                            fontFamily="Satoshi, sans-serif"
                            x={20}
                            y="116.219"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1607">70</tspan>
                            <title>70</title>
                          </text>
                          <text
                            id="SvgjsText1609"
                            fontFamily="Satoshi, sans-serif"
                            x={20}
                            y="144.292"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1610">60</tspan>
                            <title>60</title>
                          </text>
                          <text
                            id="SvgjsText1612"
                            fontFamily="Satoshi, sans-serif"
                            x={20}
                            y="172.365"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1613">50</tspan>
                            <title>50</title>
                          </text>
                          <text
                            id="SvgjsText1615"
                            fontFamily="Satoshi, sans-serif"
                            x={20}
                            y="200.43800000000002"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1616">40</tspan>
                            <title>40</title>
                          </text>
                          <text
                            id="SvgjsText1618"
                            fontFamily="Satoshi, sans-serif"
                            x={20}
                            y="228.51100000000002"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1619">30</tspan>
                            <title>30</title>
                          </text>
                          <text
                            id="SvgjsText1621"
                            fontFamily="Satoshi, sans-serif"
                            x={20}
                            y="256.58400000000006"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1622">20</tspan>
                            <title>20</title>
                          </text>
                          <text
                            id="SvgjsText1624"
                            fontFamily="Satoshi, sans-serif"
                            x={20}
                            y="284.65700000000004"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1625">10</tspan>
                            <title>10</title>
                          </text>
                          <text
                            id="SvgjsText1627"
                            fontFamily="Satoshi, sans-serif"
                            x={20}
                            y="312.73"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1628">0</tspan>
                            <title>0</title>
                          </text>
                        </g>
                      </g>
                      <rect
                        id="SvgjsRect1417"
                        width={0}
                        height={0}
                        x={0}
                        y={0}
                        rx={0}
                        ry={0}
                        opacity={1}
                        strokeWidth={0}
                        stroke="none"
                        strokeDasharray={0}
                        fill="#fefefe"
                      />
                    </svg>
                    <div className="apexcharts-legend" style={{ maxHeight: 175 }} />
                    <div
                      className="apexcharts-tooltip apexcharts-theme-light apexcharts-active"
                      style={{ left: "137.521px", top: "215.048px" }}
                    >
                      <div
                        className="apexcharts-tooltip-title"
                        style={{ fontFamily: "Satoshi, sans-serif", fontSize: 12 }}
                      >
                        Oct
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group apexcharts-active"
                        style={{ order: 1, display: "flex" }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(60, 80, 224)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{ fontFamily: "Satoshi, sans-serif", fontSize: 12 }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label">
                              Product One:{" "}
                            </span>
                            <span className="apexcharts-tooltip-text-y-value">11</span>
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group apexcharts-active"
                        style={{ order: 2, display: "flex" }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(128, 202, 238)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{ fontFamily: "Satoshi, sans-serif", fontSize: 12 }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label">
                              Product Two:{" "}
                            </span>
                            <span className="apexcharts-tooltip-text-y-value">25</span>
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light apexcharts-active"
                      style={{ left: "103.24px", top: "312.73px" }}
                    >
                      <div
                        className="apexcharts-xaxistooltip-text"
                        style={{
                          fontFamily: "Satoshi, sans-serif",
                          fontSize: 12,
                          minWidth: "18.179px"
                        }}
                      >
                        Oct
                      </div>
                    </div>
                    <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                      <div className="apexcharts-yaxistooltip-text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
            <div className="mb-4 justify-between gap-4 sm:flex">
              <div>
                <h4 className="text-xl font-semibold text-black dark:text-white">
                  Profit this week
                </h4>
              </div>
              <div>
                <div className="relative z-20 inline-block">
                  <select
                    name="#"
                    id="#"
                    className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
                  >
                    <option value="" className="dark:bg-boxdark">
                      This Week
                    </option>
                    <option value="" className="dark:bg-boxdark">
                      Last Week
                    </option>
                  </select>
                  <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                    <svg
                      width={10}
                      height={6}
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                        fill="#637381"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                        fill="#637381"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div id="chartTwo" className="-ml-5 -mb-9">
                <div style={{ minHeight: 365 }}>
                  <div
                    id="apexchartsr3e0lt45k"
                    className="apexcharts-canvas apexchartsr3e0lt45k apexcharts-theme-light"
                    style={{ width: 423, height: 350 }}
                  >
                    <svg
                      id="SvgjsSvg1631"
                      width={423}
                      height={350}
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.dev"
                      className="apexcharts-svg"
                      xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)"
                      style={{ background: "transparent" }}
                    >
                      <foreignObject x={0} y={0} width={423} height={350}>
                        <div
                          className="apexcharts-legend apexcharts-align-left apx-legend-position-top"
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            right: 0,
                            position: "absolute",
                            left: 0,
                            top: 4,
                            maxHeight: 175
                          }}
                        >
                          <div
                            className="apexcharts-legend-series"
                            rel={1}
                            seriesname="Sales"
                            data:collapsed="false"
                            style={{ margin: "2px 5px" }}
                          >
                            <span
                              className="apexcharts-legend-marker"
                              rel={1}
                              data:collapsed="false"
                              style={{
                                background: "rgb(60, 80, 224) !important",
                                color: "rgb(60, 80, 224)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 99
                              }}
                            />
                            <span
                              className="apexcharts-legend-text"
                              rel={1}
                              i={0}
                              data:default-text="Sales"
                              data:collapsed="false"
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 14,
                                fontWeight: 500,
                                fontFamily: "Satoshi"
                              }}
                            >
                              Sales
                            </span>
                          </div>
                          <div
                            className="apexcharts-legend-series"
                            rel={2}
                            seriesname="Revenue"
                            data:collapsed="false"
                            style={{ margin: "2px 5px" }}
                          >
                            <span
                              className="apexcharts-legend-marker"
                              rel={2}
                              data:collapsed="false"
                              style={{
                                background: "rgb(128, 202, 238) !important",
                                color: "rgb(128, 202, 238)",
                                height: 12,
                                width: 12,
                                left: 0,
                                top: 0,
                                borderWidth: 0,
                                borderColor: "rgb(255, 255, 255)",
                                borderRadius: 99
                              }}
                            />
                            <span
                              className="apexcharts-legend-text"
                              rel={2}
                              i={1}
                              data:default-text="Revenue"
                              data:collapsed="false"
                              style={{
                                color: "rgb(55, 61, 63)",
                                fontSize: 14,
                                fontWeight: 500,
                                fontFamily: "Satoshi"
                              }}
                            >
                              Revenue
                            </span>
                          </div>
                        </div>
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }"
                          }}
                        />
                      </foreignObject>
                      <g id="SvgjsG1634" className="apexcharts-annotations" />
                      <g
                        id="SvgjsG1736"
                        className="apexcharts-yaxis"
                        rel={0}
                        transform="translate(16.18701171875, 0)"
                      >
                        <g id="SvgjsG1737" className="apexcharts-yaxis-texts-g">
                          <text
                            id="SvgjsText1739"
                            fontFamily="Satoshi, sans-serif"
                            x={20}
                            y="53.5"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1740">100</tspan>
                            <title>100</title>
                          </text>
                          <text
                            id="SvgjsText1742"
                            fontFamily="Satoshi, sans-serif"
                            x={20}
                            y="105.24600000000001"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1743">80</tspan>
                            <title>80</title>
                          </text>
                          <text
                            id="SvgjsText1745"
                            fontFamily="Satoshi, sans-serif"
                            x={20}
                            y="156.99200000000002"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1746">60</tspan>
                            <title>60</title>
                          </text>
                          <text
                            id="SvgjsText1748"
                            fontFamily="Satoshi, sans-serif"
                            x={20}
                            y="208.73800000000003"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1749">40</tspan>
                            <title>40</title>
                          </text>
                          <text
                            id="SvgjsText1751"
                            fontFamily="Satoshi, sans-serif"
                            x={20}
                            y="260.48400000000004"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1752">20</tspan>
                            <title>20</title>
                          </text>
                          <text
                            id="SvgjsText1754"
                            fontFamily="Satoshi, sans-serif"
                            x={20}
                            y="312.23"
                            textAnchor="end"
                            dominantBaseline="auto"
                            fontSize="11px"
                            fontWeight={400}
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-yaxis-label "
                            style={{ fontFamily: "Satoshi, sans-serif" }}
                          >
                            <tspan id="SvgjsTspan1755">0</tspan>
                            <title>0</title>
                          </text>
                        </g>
                      </g>
                      <g
                        id="SvgjsG1633"
                        className="apexcharts-inner apexcharts-graphical"
                        transform="translate(46.18701171875, 52)"
                      >
                        <defs id="SvgjsDefs1632">
                          <linearGradient
                            id="SvgjsLinearGradient1637"
                            x1={0}
                            y1={0}
                            x2={0}
                            y2={1}
                          >
                            <stop
                              id="SvgjsStop1638"
                              stopOpacity="0.4"
                              stopColor="rgba(216,227,240,0.4)"
                              offset={0}
                            />
                            <stop
                              id="SvgjsStop1639"
                              stopOpacity="0.5"
                              stopColor="rgba(190,209,230,0.5)"
                              offset={1}
                            />
                            <stop
                              id="SvgjsStop1640"
                              stopOpacity="0.5"
                              stopColor="rgba(190,209,230,0.5)"
                              offset={1}
                            />
                          </linearGradient>
                          <clipPath id="gridRectMaskr3e0lt45k">
                            <rect
                              id="SvgjsRect1642"
                              width="370.81298828125"
                              height="258.73"
                              x={-2}
                              y={0}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="forecastMaskr3e0lt45k" />
                          <clipPath id="nonForecastMaskr3e0lt45k" />
                          <clipPath id="gridRectMarkerMaskr3e0lt45k">
                            <rect
                              id="SvgjsRect1643"
                              width="370.81298828125"
                              height="262.73"
                              x={-2}
                              y={-2}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                        </defs>
                        <rect
                          id="SvgjsRect1641"
                          width="13.1004638671875"
                          height="258.73"
                          x={0}
                          y={0}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          strokeDasharray={3}
                          fill="url(#SvgjsLinearGradient1637)"
                          className="apexcharts-xcrosshairs"
                          y2="258.73"
                          filter="none"
                          fillOpacity="0.9"
                        />
                        <line
                          id="SvgjsLine1684"
                          x1={0}
                          y1="259.73"
                          x2={0}
                          y2="265.73"
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-xaxis-tick"
                        />
                        <line
                          id="SvgjsLine1686"
                          x1="52.40185546875"
                          y1="259.73"
                          x2="52.40185546875"
                          y2="265.73"
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-xaxis-tick"
                        />
                        <line
                          id="SvgjsLine1688"
                          x1="104.8037109375"
                          y1="259.73"
                          x2="104.8037109375"
                          y2="265.73"
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-xaxis-tick"
                        />
                        <line
                          id="SvgjsLine1690"
                          x1="157.20556640625"
                          y1="259.73"
                          x2="157.20556640625"
                          y2="265.73"
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-xaxis-tick"
                        />
                        <line
                          id="SvgjsLine1692"
                          x1="209.607421875"
                          y1="259.73"
                          x2="209.607421875"
                          y2="265.73"
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-xaxis-tick"
                        />
                        <line
                          id="SvgjsLine1694"
                          x1="262.00927734375"
                          y1="259.73"
                          x2="262.00927734375"
                          y2="265.73"
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-xaxis-tick"
                        />
                        <line
                          id="SvgjsLine1696"
                          x1="314.4111328125"
                          y1="259.73"
                          x2="314.4111328125"
                          y2="265.73"
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-xaxis-tick"
                        />
                        <line
                          id="SvgjsLine1698"
                          x1="366.81298828125"
                          y1="259.73"
                          x2="366.81298828125"
                          y2="265.73"
                          stroke="#e0e0e0"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                          className="apexcharts-xaxis-tick"
                        />
                        <g id="SvgjsG1679" className="apexcharts-grid">
                          <g
                            id="SvgjsG1680"
                            className="apexcharts-gridlines-horizontal"
                          >
                            <line
                              id="SvgjsLine1700"
                              x1={0}
                              y1="51.746"
                              x2="366.81298828125"
                              y2="51.746"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1701"
                              x1={0}
                              y1="103.492"
                              x2="366.81298828125"
                              y2="103.492"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1702"
                              x1={0}
                              y1="155.238"
                              x2="366.81298828125"
                              y2="155.238"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1703"
                              x1={0}
                              y1="206.984"
                              x2="366.81298828125"
                              y2="206.984"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                          </g>
                          <g id="SvgjsG1681" className="apexcharts-gridlines-vertical">
                            <line
                              id="SvgjsLine1683"
                              x1={0}
                              y1={0}
                              x2={0}
                              y2="258.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1685"
                              x1="52.40185546875"
                              y1={0}
                              x2="52.40185546875"
                              y2="258.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1687"
                              x1="104.8037109375"
                              y1={0}
                              x2="104.8037109375"
                              y2="258.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1689"
                              x1="157.20556640625"
                              y1={0}
                              x2="157.20556640625"
                              y2="258.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1691"
                              x1="209.607421875"
                              y1={0}
                              x2="209.607421875"
                              y2="258.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1693"
                              x1="262.00927734375"
                              y1={0}
                              x2="262.00927734375"
                              y2="258.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1695"
                              x1="314.4111328125"
                              y1={0}
                              x2="314.4111328125"
                              y2="258.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1697"
                              x1="366.81298828125"
                              y1={0}
                              x2="366.81298828125"
                              y2="258.73"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                          </g>
                          <line
                            id="SvgjsLine1706"
                            x1={0}
                            y1="258.73"
                            x2="366.81298828125"
                            y2="258.73"
                            stroke="transparent"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                          />
                          <line
                            id="SvgjsLine1705"
                            x1={0}
                            y1={1}
                            x2={0}
                            y2="258.73"
                            stroke="transparent"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                          />
                        </g>
                        <g id="SvgjsG1682" className="apexcharts-grid-borders">
                          <line
                            id="SvgjsLine1699"
                            x1={0}
                            y1={0}
                            x2="366.81298828125"
                            y2={0}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1704"
                            x1={0}
                            y1="258.73"
                            x2="366.81298828125"
                            y2="258.73"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1735"
                            x1={0}
                            y1="259.73"
                            x2="366.81298828125"
                            y2="259.73"
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeWidth={1}
                            strokeLinecap="butt"
                          />
                        </g>
                        <g
                          id="SvgjsG1644"
                          className="apexcharts-bar-series apexcharts-plot-series"
                        >
                          <g
                            id="SvgjsG1645"
                            className="apexcharts-series"
                            seriesname="Sales"
                            rel={1}
                            data:realindex={0}
                          >
                            <path
                              id="SvgjsPath1649"
                              d="M 19.65069580078125 258.731 L 19.65069580078125 144.8898 L 32.75115966796875 144.8898 L 32.75115966796875 258.731 z"
                              fill="rgba(60,80,224,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={0}
                              clipPath="url(#gridRectMaskr3e0lt45k)"
                              pathto="M 19.65069580078125 258.731 L 19.65069580078125 144.8898 L 32.75115966796875 144.8898 L 32.75115966796875 258.731 z"
                              pathfrom="M 19.65069580078125 258.731 L 19.65069580078125 258.731 L 32.75115966796875 258.731 L 32.75115966796875 258.731 L 32.75115966796875 258.731 L 32.75115966796875 258.731 L 32.75115966796875 258.731 L 19.65069580078125 258.731 z"
                              cy="144.8888"
                              cx="72.05255126953125"
                              j={0}
                              val={44}
                              barheight="113.84120000000001"
                              barwidth="13.1004638671875"
                            />
                            <path
                              id="SvgjsPath1651"
                              d="M 72.05255126953125 258.731 L 72.05255126953125 116.42950000000002 L 85.15301513671875 116.42950000000002 L 85.15301513671875 258.731 z"
                              fill="rgba(60,80,224,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={0}
                              clipPath="url(#gridRectMaskr3e0lt45k)"
                              pathto="M 72.05255126953125 258.731 L 72.05255126953125 116.42950000000002 L 85.15301513671875 116.42950000000002 L 85.15301513671875 258.731 z"
                              pathfrom="M 72.05255126953125 258.731 L 72.05255126953125 258.731 L 85.15301513671875 258.731 L 85.15301513671875 258.731 L 85.15301513671875 258.731 L 85.15301513671875 258.731 L 85.15301513671875 258.731 L 72.05255126953125 258.731 z"
                              cy="116.42850000000001"
                              cx="124.45440673828125"
                              j={1}
                              val={55}
                              barheight="142.3015"
                              barwidth="13.1004638671875"
                            />
                            <path
                              id="SvgjsPath1653"
                              d="M 124.45440673828125 258.731 L 124.45440673828125 152.65170000000003 L 137.55487060546875 152.65170000000003 L 137.55487060546875 258.731 z"
                              fill="rgba(60,80,224,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={0}
                              clipPath="url(#gridRectMaskr3e0lt45k)"
                              pathto="M 124.45440673828125 258.731 L 124.45440673828125 152.65170000000003 L 137.55487060546875 152.65170000000003 L 137.55487060546875 258.731 z"
                              pathfrom="M 124.45440673828125 258.731 L 124.45440673828125 258.731 L 137.55487060546875 258.731 L 137.55487060546875 258.731 L 137.55487060546875 258.731 L 137.55487060546875 258.731 L 137.55487060546875 258.731 L 124.45440673828125 258.731 z"
                              cy="152.65070000000003"
                              cx="176.85626220703125"
                              j={2}
                              val={41}
                              barheight="106.0793"
                              barwidth="13.1004638671875"
                            />
                            <path
                              id="SvgjsPath1655"
                              d="M 176.85626220703125 258.731 L 176.85626220703125 85.3819 L 189.95672607421875 85.3819 L 189.95672607421875 258.731 z"
                              fill="rgba(60,80,224,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={0}
                              clipPath="url(#gridRectMaskr3e0lt45k)"
                              pathto="M 176.85626220703125 258.731 L 176.85626220703125 85.3819 L 189.95672607421875 85.3819 L 189.95672607421875 258.731 z"
                              pathfrom="M 176.85626220703125 258.731 L 176.85626220703125 258.731 L 189.95672607421875 258.731 L 189.95672607421875 258.731 L 189.95672607421875 258.731 L 189.95672607421875 258.731 L 189.95672607421875 258.731 L 176.85626220703125 258.731 z"
                              cy="85.3809"
                              cx="229.25811767578125"
                              j={3}
                              val={67}
                              barheight="173.34910000000002"
                              barwidth="13.1004638671875"
                            />
                            <path
                              id="SvgjsPath1657"
                              d="M 229.25811767578125 258.731 L 229.25811767578125 201.81040000000002 L 242.35858154296875 201.81040000000002 L 242.35858154296875 258.731 z"
                              fill="rgba(60,80,224,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={0}
                              clipPath="url(#gridRectMaskr3e0lt45k)"
                              pathto="M 229.25811767578125 258.731 L 229.25811767578125 201.81040000000002 L 242.35858154296875 201.81040000000002 L 242.35858154296875 258.731 z"
                              pathfrom="M 229.25811767578125 258.731 L 229.25811767578125 258.731 L 242.35858154296875 258.731 L 242.35858154296875 258.731 L 242.35858154296875 258.731 L 242.35858154296875 258.731 L 242.35858154296875 258.731 L 229.25811767578125 258.731 z"
                              cy="201.8094"
                              cx="281.65997314453125"
                              j={4}
                              val={22}
                              barheight="56.92060000000001"
                              barwidth="13.1004638671875"
                            />
                            <path
                              id="SvgjsPath1659"
                              d="M 281.65997314453125 258.731 L 281.65997314453125 147.4771 L 294.76043701171875 147.4771 L 294.76043701171875 258.731 z"
                              fill="rgba(60,80,224,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={0}
                              clipPath="url(#gridRectMaskr3e0lt45k)"
                              pathto="M 281.65997314453125 258.731 L 281.65997314453125 147.4771 L 294.76043701171875 147.4771 L 294.76043701171875 258.731 z"
                              pathfrom="M 281.65997314453125 258.731 L 281.65997314453125 258.731 L 294.76043701171875 258.731 L 294.76043701171875 258.731 L 294.76043701171875 258.731 L 294.76043701171875 258.731 L 294.76043701171875 258.731 L 281.65997314453125 258.731 z"
                              cy="147.4761"
                              cx="334.06182861328125"
                              j={5}
                              val={43}
                              barheight="111.25390000000002"
                              barwidth="13.1004638671875"
                            />
                            <path
                              id="SvgjsPath1661"
                              d="M 334.06182861328125 258.731 L 334.06182861328125 90.5565 L 347.16229248046875 90.5565 L 347.16229248046875 258.731 z"
                              fill="rgba(60,80,224,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={0}
                              clipPath="url(#gridRectMaskr3e0lt45k)"
                              pathto="M 334.06182861328125 258.731 L 334.06182861328125 90.5565 L 347.16229248046875 90.5565 L 347.16229248046875 258.731 z"
                              pathfrom="M 334.06182861328125 258.731 L 334.06182861328125 258.731 L 347.16229248046875 258.731 L 347.16229248046875 258.731 L 347.16229248046875 258.731 L 347.16229248046875 258.731 L 347.16229248046875 258.731 L 334.06182861328125 258.731 z"
                              cy="90.5555"
                              cx="386.46368408203125"
                              j={6}
                              val={65}
                              barheight="168.17450000000002"
                              barwidth="13.1004638671875"
                            />
                            <g
                              id="SvgjsG1647"
                              className="apexcharts-bar-goals-markers"
                              style={{ pointerEvents: "none" }}
                            >
                              <g
                                id="SvgjsG1648"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1650"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1652"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1654"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1656"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1658"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1660"
                                classname="apexcharts-bar-goals-groups"
                              />
                            </g>
                          </g>
                          <g
                            id="SvgjsG1662"
                            className="apexcharts-series"
                            seriesname="Revenue"
                            rel={2}
                            data:realindex={1}
                          >
                            <path
                              id="SvgjsPath1666"
                              d="M 19.65069580078125 144.8908 L 19.65069580078125 111.25590000000001 L 32.75115966796875 111.25590000000001 L 32.75115966796875 144.8908 z"
                              fill="rgba(128,202,238,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={1}
                              clipPath="url(#gridRectMaskr3e0lt45k)"
                              pathto="M 19.65069580078125 144.8908 L 19.65069580078125 111.25590000000001 L 32.75115966796875 111.25590000000001 L 32.75115966796875 144.8908 z"
                              pathfrom="M 19.65069580078125 144.8908 L 19.65069580078125 144.8908 L 32.75115966796875 144.8908 L 32.75115966796875 144.8908 L 32.75115966796875 144.8908 L 32.75115966796875 144.8908 L 32.75115966796875 144.8908 L 19.65069580078125 144.8908 z"
                              cy="111.2549"
                              cx="72.05255126953125"
                              j={0}
                              val={13}
                              barheight="33.6349"
                              barwidth="13.1004638671875"
                            />
                            <path
                              id="SvgjsPath1668"
                              d="M 72.05255126953125 116.43050000000002 L 72.05255126953125 56.92260000000001 L 85.15301513671875 56.92260000000001 L 85.15301513671875 116.43050000000002 z"
                              fill="rgba(128,202,238,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={1}
                              clipPath="url(#gridRectMaskr3e0lt45k)"
                              pathto="M 72.05255126953125 116.43050000000002 L 72.05255126953125 56.92260000000001 L 85.15301513671875 56.92260000000001 L 85.15301513671875 116.43050000000002 z"
                              pathfrom="M 72.05255126953125 116.43050000000002 L 72.05255126953125 116.43050000000002 L 85.15301513671875 116.43050000000002 L 85.15301513671875 116.43050000000002 L 85.15301513671875 116.43050000000002 L 85.15301513671875 116.43050000000002 L 85.15301513671875 116.43050000000002 L 72.05255126953125 116.43050000000002 z"
                              cy="56.92160000000001"
                              cx="124.45440673828125"
                              j={1}
                              val={23}
                              barheight="59.50790000000001"
                              barwidth="13.1004638671875"
                            />
                            <path
                              id="SvgjsPath1670"
                              d="M 124.45440673828125 152.65270000000004 L 124.45440673828125 100.90670000000003 L 137.55487060546875 100.90670000000003 L 137.55487060546875 152.65270000000004 z"
                              fill="rgba(128,202,238,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={1}
                              clipPath="url(#gridRectMaskr3e0lt45k)"
                              pathto="M 124.45440673828125 152.65270000000004 L 124.45440673828125 100.90670000000003 L 137.55487060546875 100.90670000000003 L 137.55487060546875 152.65270000000004 z"
                              pathfrom="M 124.45440673828125 152.65270000000004 L 124.45440673828125 152.65270000000004 L 137.55487060546875 152.65270000000004 L 137.55487060546875 152.65270000000004 L 137.55487060546875 152.65270000000004 L 137.55487060546875 152.65270000000004 L 137.55487060546875 152.65270000000004 L 124.45440673828125 152.65270000000004 z"
                              cy="100.90570000000002"
                              cx="176.85626220703125"
                              j={2}
                              val={20}
                              barheight="51.746"
                              barwidth="13.1004638671875"
                            />
                            <path
                              id="SvgjsPath1672"
                              d="M 176.85626220703125 85.3829 L 176.85626220703125 64.6845 L 189.95672607421875 64.6845 L 189.95672607421875 85.3829 z"
                              fill="rgba(128,202,238,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={1}
                              clipPath="url(#gridRectMaskr3e0lt45k)"
                              pathto="M 176.85626220703125 85.3829 L 176.85626220703125 64.6845 L 189.95672607421875 64.6845 L 189.95672607421875 85.3829 z"
                              pathfrom="M 176.85626220703125 85.3829 L 176.85626220703125 85.3829 L 189.95672607421875 85.3829 L 189.95672607421875 85.3829 L 189.95672607421875 85.3829 L 189.95672607421875 85.3829 L 189.95672607421875 85.3829 L 176.85626220703125 85.3829 z"
                              cy="64.6835"
                              cx="229.25811767578125"
                              j={3}
                              val={8}
                              barheight="20.698400000000003"
                              barwidth="13.1004638671875"
                            />
                            <path
                              id="SvgjsPath1674"
                              d="M 229.25811767578125 201.81140000000002 L 229.25811767578125 168.1765 L 242.35858154296875 168.1765 L 242.35858154296875 201.81140000000002 z"
                              fill="rgba(128,202,238,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={1}
                              clipPath="url(#gridRectMaskr3e0lt45k)"
                              pathto="M 229.25811767578125 201.81140000000002 L 229.25811767578125 168.1765 L 242.35858154296875 168.1765 L 242.35858154296875 201.81140000000002 z"
                              pathfrom="M 229.25811767578125 201.81140000000002 L 229.25811767578125 201.81140000000002 L 242.35858154296875 201.81140000000002 L 242.35858154296875 201.81140000000002 L 242.35858154296875 201.81140000000002 L 242.35858154296875 201.81140000000002 L 242.35858154296875 201.81140000000002 L 229.25811767578125 201.81140000000002 z"
                              cy="168.1755"
                              cx="281.65997314453125"
                              j={4}
                              val={13}
                              barheight="33.6349"
                              barwidth="13.1004638671875"
                            />
                            <path
                              id="SvgjsPath1676"
                              d="M 281.65997314453125 147.4781 L 281.65997314453125 77.62100000000001 L 294.76043701171875 77.62100000000001 L 294.76043701171875 147.4781 z"
                              fill="rgba(128,202,238,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={1}
                              clipPath="url(#gridRectMaskr3e0lt45k)"
                              pathto="M 281.65997314453125 147.4781 L 281.65997314453125 77.62100000000001 L 294.76043701171875 77.62100000000001 L 294.76043701171875 147.4781 z"
                              pathfrom="M 281.65997314453125 147.4781 L 281.65997314453125 147.4781 L 294.76043701171875 147.4781 L 294.76043701171875 147.4781 L 294.76043701171875 147.4781 L 294.76043701171875 147.4781 L 294.76043701171875 147.4781 L 281.65997314453125 147.4781 z"
                              cy="77.62"
                              cx="334.06182861328125"
                              j={5}
                              val={27}
                              barheight="69.8571"
                              barwidth="13.1004638671875"
                            />
                            <path
                              id="SvgjsPath1678"
                              d="M 334.06182861328125 90.5575 L 334.06182861328125 51.748 L 347.16229248046875 51.748 L 347.16229248046875 90.5575 z"
                              fill="rgba(128,202,238,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              strokeLinecap="round"
                              strokeWidth={0}
                              strokeDasharray={0}
                              className="apexcharts-bar-area"
                              index={1}
                              clipPath="url(#gridRectMaskr3e0lt45k)"
                              pathto="M 334.06182861328125 90.5575 L 334.06182861328125 51.748 L 347.16229248046875 51.748 L 347.16229248046875 90.5575 z"
                              pathfrom="M 334.06182861328125 90.5575 L 334.06182861328125 90.5575 L 347.16229248046875 90.5575 L 347.16229248046875 90.5575 L 347.16229248046875 90.5575 L 347.16229248046875 90.5575 L 347.16229248046875 90.5575 L 334.06182861328125 90.5575 z"
                              cy="51.747"
                              cx="386.46368408203125"
                              j={6}
                              val={15}
                              barheight="38.8095"
                              barwidth="13.1004638671875"
                            />
                            <g
                              id="SvgjsG1664"
                              className="apexcharts-bar-goals-markers"
                              style={{ pointerEvents: "none" }}
                            >
                              <g
                                id="SvgjsG1665"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1667"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1669"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1671"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1673"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1675"
                                classname="apexcharts-bar-goals-groups"
                              />
                              <g
                                id="SvgjsG1677"
                                classname="apexcharts-bar-goals-groups"
                              />
                            </g>
                          </g>
                          <g
                            id="SvgjsG1646"
                            className="apexcharts-datalabels"
                            data:realindex={0}
                          />
                          <g
                            id="SvgjsG1663"
                            className="apexcharts-datalabels"
                            data:realindex={1}
                          />
                        </g>
                        <line
                          id="SvgjsLine1707"
                          x1={0}
                          y1={0}
                          x2="366.81298828125"
                          y2={0}
                          stroke="#b6b6b6"
                          strokeDasharray={0}
                          strokeWidth={1}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs"
                        />
                        <line
                          id="SvgjsLine1708"
                          x1={0}
                          y1={0}
                          x2="366.81298828125"
                          y2={0}
                          strokeDasharray={0}
                          strokeWidth={0}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs-hidden"
                        />
                        <g id="SvgjsG1709" className="apexcharts-yaxis-annotations" />
                        <g id="SvgjsG1710" className="apexcharts-xaxis-annotations" />
                        <g id="SvgjsG1711" className="apexcharts-point-annotations" />
                        <g
                          id="SvgjsG1712"
                          className="apexcharts-xaxis"
                          transform="translate(0, 0)"
                        >
                          <g
                            id="SvgjsG1713"
                            className="apexcharts-xaxis-texts-g"
                            transform="translate(0, -4)"
                          >
                            <text
                              id="SvgjsText1715"
                              fontFamily="Satoshi, sans-serif"
                              x="26.200927734375"
                              y="287.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1716">M</tspan>
                              <title>M</title>
                            </text>
                            <text
                              id="SvgjsText1718"
                              fontFamily="Satoshi, sans-serif"
                              x="78.602783203125"
                              y="287.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1719">T</tspan>
                              <title>T</title>
                            </text>
                            <text
                              id="SvgjsText1721"
                              fontFamily="Satoshi, sans-serif"
                              x="131.004638671875"
                              y="287.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1722">W</tspan>
                              <title>W</title>
                            </text>
                            <text
                              id="SvgjsText1724"
                              fontFamily="Satoshi, sans-serif"
                              x="183.406494140625"
                              y="287.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1725">T</tspan>
                              <title>T</title>
                            </text>
                            <text
                              id="SvgjsText1727"
                              fontFamily="Satoshi, sans-serif"
                              x="235.808349609375"
                              y="287.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1728">F</tspan>
                              <title>F</title>
                            </text>
                            <text
                              id="SvgjsText1730"
                              fontFamily="Satoshi, sans-serif"
                              x="288.210205078125"
                              y="287.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1731">S</tspan>
                              <title>S</title>
                            </text>
                            <text
                              id="SvgjsText1733"
                              fontFamily="Satoshi, sans-serif"
                              x="340.612060546875"
                              y="287.73"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label "
                              style={{ fontFamily: "Satoshi, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1734">S</tspan>
                              <title>S</title>
                            </text>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div className="apexcharts-tooltip apexcharts-theme-light">
                      <div
                        className="apexcharts-tooltip-title"
                        style={{ fontFamily: "Satoshi, sans-serif", fontSize: 12 }}
                      />
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{ order: 1 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(60, 80, 224)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{ fontFamily: "Satoshi, sans-serif", fontSize: 12 }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{ order: 2 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(128, 202, 238)" }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{ fontFamily: "Satoshi, sans-serif", fontSize: 12 }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label" />
                            <span className="apexcharts-tooltip-text-y-value" />
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                      <div className="apexcharts-yaxistooltip-text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
            <div className="mb-3 justify-between gap-4 sm:flex">
              <div>
                <h5 className="text-xl font-semibold text-black dark:text-white">
                  Visitors Analytics
                </h5>
              </div>
              <div>
                <div className="relative z-20 inline-block">
                  <select
                    name=""
                    id=""
                    className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
                  >
                    <option value="" className="dark:bg-boxdark">
                      Monthly
                    </option>
                    <option value="" className="dark:bg-boxdark">
                      Yearly
                    </option>
                  </select>
                  <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                    <svg
                      width={10}
                      height={6}
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                        fill="#637381"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                        fill="#637381"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div id="chartThree" className="mx-auto flex justify-center">
                <div style={{ minHeight: "295.367px" }}>
                  <div
                    id="apexchartst98dok7g"
                    className="apexcharts-canvas apexchartst98dok7g apexcharts-theme-light"
                    style={{ width: 380, height: "295.367px" }}
                  >
                    <svg
                      id="SvgjsSvg1756"
                      width={380}
                      height="295.3666666666667"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.dev"
                      className="apexcharts-svg"
                      xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)"
                      style={{ background: "transparent" }}
                    >
                      <g
                        id="SvgjsG1758"
                        className="apexcharts-inner apexcharts-graphical"
                        transform="translate(44.66666666666666, 0)"
                      >
                        <defs id="SvgjsDefs1757">
                          <clipPath id="gridRectMaskt98dok7g">
                            <rect
                              id="SvgjsRect1760"
                              width="298.6666666666667"
                              height="316.6666666666667"
                              x={-3}
                              y={-1}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                          <clipPath id="forecastMaskt98dok7g" />
                          <clipPath id="nonForecastMaskt98dok7g" />
                          <clipPath id="gridRectMarkerMaskt98dok7g">
                            <rect
                              id="SvgjsRect1761"
                              width="296.6666666666667"
                              height="318.6666666666667"
                              x={-2}
                              y={-2}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                        </defs>
                        <g id="SvgjsG1762" className="apexcharts-pie">
                          <g id="SvgjsG1763" transform="translate(0, 0) scale(1)">
                            <circle
                              id="SvgjsCircle1764"
                              r="88.89674796747968"
                              cx="146.33333333333334"
                              cy="146.33333333333334"
                              fill="transparent"
                            />
                            <g id="SvgjsG1765" className="apexcharts-slices">
                              <g
                                id="SvgjsG1766"
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="Desktop"
                                rel={1}
                                data:realindex={0}
                              >
                                <path
                                  id="SvgjsPath1767"
                                  d="M 146.33333333333334 9.569105691056905 A 136.76422764227644 136.76422764227644 0 0 1 234.02450591276653 251.28433244354895 L 203.3325955099649 214.55148275497348 A 88.89674796747968 88.89674796747968 0 0 0 146.33333333333334 57.43658536585366 L 146.33333333333334 9.569105691056905 z"
                                  fill="rgba(60,80,224,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="butt"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-pie-area apexcharts-donut-slice-0"
                                  index={0}
                                  j={0}
                                  data:angle="140.11976047904193"
                                  data:startangle={0}
                                  data:strokewidth={2}
                                  data:value={65}
                                  data:pathorig="M 146.33333333333334 9.569105691056905 A 136.76422764227644 136.76422764227644 0 0 1 234.02450591276653 251.28433244354895 L 203.3325955099649 214.55148275497348 A 88.89674796747968 88.89674796747968 0 0 0 146.33333333333334 57.43658536585366 L 146.33333333333334 9.569105691056905 z"
                                  stroke="#ffffff"
                                />
                              </g>
                              <g
                                id="SvgjsG1768"
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="Tablet"
                                rel={2}
                                data:realindex={1}
                              >
                                <path
                                  id="SvgjsPath1769"
                                  d="M 234.02450591276653 251.28433244354895 A 136.76422764227644 136.76422764227644 0 0 1 71.02101001109047 260.4933434874778 L 97.38032317387547 220.53733993352722 A 88.89674796747968 88.89674796747968 0 0 0 203.3325955099649 214.55148275497348 L 234.02450591276653 251.28433244354895 z"
                                  fill="rgba(101,119,243,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="butt"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-pie-area apexcharts-donut-slice-1"
                                  index={0}
                                  j={1}
                                  data:angle="73.29341317365271"
                                  data:startangle="140.11976047904193"
                                  data:strokewidth={2}
                                  data:value={34}
                                  data:pathorig="M 234.02450591276653 251.28433244354895 A 136.76422764227644 136.76422764227644 0 0 1 71.02101001109047 260.4933434874778 L 97.38032317387547 220.53733993352722 A 88.89674796747968 88.89674796747968 0 0 0 203.3325955099649 214.55148275497348 L 234.02450591276653 251.28433244354895 z"
                                  stroke="#ffffff"
                                />
                              </g>
                              <g
                                id="SvgjsG1770"
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="Mobile"
                                rel={3}
                                data:realindex={2}
                              >
                                <path
                                  id="SvgjsPath1771"
                                  d="M 71.02101001109047 260.4933434874778 A 136.76422764227644 136.76422764227644 0 0 1 28.758929504018354 216.19543698595442 L 69.9099708442786 191.74370070753702 A 88.89674796747968 88.89674796747968 0 0 0 97.38032317387547 220.53733993352722 L 71.02101001109047 260.4933434874778 z"
                                  fill="rgba(143,208,239,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="butt"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-pie-area apexcharts-donut-slice-2"
                                  index={0}
                                  j={2}
                                  data:angle="25.8682634730539"
                                  data:startangle="213.41317365269464"
                                  data:strokewidth={2}
                                  data:value={12}
                                  data:pathorig="M 71.02101001109047 260.4933434874778 A 136.76422764227644 136.76422764227644 0 0 1 28.758929504018354 216.19543698595442 L 69.9099708442786 191.74370070753702 A 88.89674796747968 88.89674796747968 0 0 0 97.38032317387547 220.53733993352722 L 71.02101001109047 260.4933434874778 z"
                                  stroke="#ffffff"
                                />
                              </g>
                              <g
                                id="SvgjsG1772"
                                className="apexcharts-series apexcharts-pie-series"
                                seriesname="Unknown"
                                rel={4}
                                data:realindex={3}
                              >
                                <path
                                  id="SvgjsPath1773"
                                  d="M 28.758929504018354 216.19543698595442 A 136.76422764227644 136.76422764227644 0 0 1 146.30946347274147 9.569107774095187 L 146.3178179239486 57.436586719828554 A 88.89674796747968 88.89674796747968 0 0 0 69.9099708442786 191.74370070753702 L 28.758929504018354 216.19543698595442 z"
                                  fill="rgba(15,173,207,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="butt"
                                  strokeWidth={2}
                                  strokeDasharray={0}
                                  className="apexcharts-pie-area apexcharts-donut-slice-3"
                                  index={0}
                                  j={3}
                                  data:angle="120.71856287425152"
                                  data:startangle="239.28143712574854"
                                  data:strokewidth={2}
                                  data:value={56}
                                  data:pathorig="M 28.758929504018354 216.19543698595442 A 136.76422764227644 136.76422764227644 0 0 1 146.30946347274147 9.569107774095187 L 146.3178179239486 57.436586719828554 A 88.89674796747968 88.89674796747968 0 0 0 69.9099708442786 191.74370070753702 L 28.758929504018354 216.19543698595442 z"
                                  stroke="#ffffff"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                        <line
                          id="SvgjsLine1774"
                          x1={0}
                          y1={0}
                          x2="292.6666666666667"
                          y2={0}
                          stroke="#b6b6b6"
                          strokeDasharray={0}
                          strokeWidth={1}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs"
                        />
                        <line
                          id="SvgjsLine1775"
                          x1={0}
                          y1={0}
                          x2="292.6666666666667"
                          y2={0}
                          strokeDasharray={0}
                          strokeWidth={0}
                          strokeLinecap="butt"
                          className="apexcharts-ycrosshairs-hidden"
                        />
                      </g>
                      <g id="SvgjsG1759" className="apexcharts-annotations" />
                    </svg>
                    <div
                      className="apexcharts-legend"
                      style={{ maxHeight: "158.333px" }}
                    />
                    <div
                      className="apexcharts-tooltip apexcharts-theme-dark"
                      style={{ left: "28.4297px", top: 172 }}
                    >
                      <div
                        className="apexcharts-tooltip-series-group apexcharts-active"
                        style={{
                          order: 1,
                          display: "flex",
                          backgroundColor: "rgb(143, 208, 239)"
                        }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{
                            backgroundColor: "rgb(143, 208, 239)",
                            display: "none"
                          }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{ fontFamily: "Satoshi, sans-serif", fontSize: 12 }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label">
                              Mobile:{" "}
                            </span>
                            <span className="apexcharts-tooltip-text-y-value">12</span>
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{
                          order: 2,
                          display: "none",
                          backgroundColor: "rgb(143, 208, 239)"
                        }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{
                            backgroundColor: "rgb(143, 208, 239)",
                            display: "none"
                          }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{ fontFamily: "Satoshi, sans-serif", fontSize: 12 }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label">
                              Mobile:{" "}
                            </span>
                            <span className="apexcharts-tooltip-text-y-value">12</span>
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{
                          order: 3,
                          display: "none",
                          backgroundColor: "rgb(143, 208, 239)"
                        }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{
                            backgroundColor: "rgb(143, 208, 239)",
                            display: "none"
                          }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{ fontFamily: "Satoshi, sans-serif", fontSize: 12 }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label">
                              Mobile:{" "}
                            </span>
                            <span className="apexcharts-tooltip-text-y-value">12</span>
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{
                          order: 4,
                          display: "none",
                          backgroundColor: "rgb(143, 208, 239)"
                        }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{
                            backgroundColor: "rgb(143, 208, 239)",
                            display: "none"
                          }}
                        />
                        <div
                          className="apexcharts-tooltip-text"
                          style={{ fontFamily: "Satoshi, sans-serif", fontSize: 12 }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label">
                              Mobile:{" "}
                            </span>
                            <span className="apexcharts-tooltip-text-y-value">12</span>
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label" />
                            <span className="apexcharts-tooltip-text-goals-value" />
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label" />
                            <span className="apexcharts-tooltip-text-z-value" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
              <div className="sm:w-1/2 w-full px-8">
                <div className="flex w-full items-center">
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary" />
                  <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                    <span> Desktop </span>
                    <span> 65% </span>
                  </p>
                </div>
              </div>
              <div className="sm:w-1/2 w-full px-8">
                <div className="flex w-full items-center">
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]" />
                  <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                    <span> Tablet </span>
                    <span> 34% </span>
                  </p>
                </div>
              </div>
              <div className="sm:w-1/2 w-full px-8">
                <div className="flex w-full items-center">
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]" />
                  <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                    <span> Mobile </span>
                    <span> 45% </span>
                  </p>
                </div>
              </div>
              <div className="sm:w-1/2 w-full px-8">
                <div className="flex w-full items-center">
                  <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]" />
                  <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                    <span> Unknown </span>
                    <span> 12% </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
            <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
              Region labels
            </h4>
            <div
              id="mapOne"
              className="mapOne map-btn h-90 jvm-container"
              style={{ backgroundColor: "transparent" }}
            >
              <svg width={775} height={360}>
                <defs />
                <g
                  id="jvm-regions-group"
                  transform="scale(0.6111460233388537) translate(184.0546861173769, 0)"
                >
                  <path
                    d="M682.42,290.04l1.61,-0.93l1.65,-0.48l1.12,-0.95l3.57,-1.69l0.74,-2.33l0.82,-0.19l2.32,-1.54l0.05,-1.81l2.04,-1.86l-0.13,-1.58l0.26,-0.42l5.0,-4.09l4.76,-6.0l0.09,0.63l0.96,0.54l0.33,1.37l1.32,0.74l0.71,0.81l1.46,0.09l0.79,0.65l1.3,0.48l1.41,-0.09l0.79,-0.41l0.76,-1.22l1.17,-0.57l0.53,-1.38l2.72,1.49l1.42,-1.1l2.25,-0.99l0.76,0.06l1.08,-0.97l0.33,-0.82l-0.48,-0.96l0.23,-0.42l1.9,0.58l3.26,-2.62l0.3,-0.1l0.51,0.73l0.66,-0.07l2.38,-2.34l0.17,-0.85l-0.49,-0.51l0.99,-1.12l0.1,-0.6l-0.28,-0.51l-1.0,-0.46l0.71,-3.03l2.6,-4.8l0.55,-2.15l-0.01,-1.91l1.61,-2.55l-0.22,-0.94l0.24,-0.84l0.5,-0.48l0.39,-1.7l-0.0,-3.18l1.23,0.19l1.18,1.73l3.8,0.43l0.59,-0.28l1.05,-2.52l0.2,-2.36l0.71,-1.05l-0.04,-1.61l0.76,-2.31l1.78,0.75l0.65,-0.17l1.3,-3.3l0.57,0.05l0.59,-0.39l0.52,-1.2l0.81,-0.68l0.44,-1.8l1.38,-2.43l-0.35,-2.57l0.54,-1.76l-0.3,-2.01l9.18,4.58l0.59,-0.29l0.63,-4.0l2.6,-0.07l0.63,0.57l1.05,0.23l-0.5,1.74l0.6,0.88l1.61,0.85l2.52,-0.04l1.03,1.18l1.64,0.12l1.94,1.52l0.57,2.53l-0.94,0.78l-0.45,0.02l-0.3,0.43l0.13,0.71l-0.61,-0.05l-0.49,0.59l-0.37,2.5l0.07,2.29l-0.43,0.25l0.01,0.6l1.05,0.77l-0.36,0.14l-0.17,0.6l0.44,0.3l1.64,-0.08l1.38,-0.61l1.77,-1.61l0.39,0.58l-0.58,0.35l0.02,0.58l1.9,1.07l0.64,1.08l1.69,0.35l1.37,-0.11l0.95,0.49l0.82,-0.65l1.05,-0.08l0.33,0.56l1.26,0.63l-0.1,0.55l0.36,0.55l0.94,-0.23l0.41,0.56l3.96,0.88l0.25,1.12l-0.85,-0.41l-0.57,0.44l0.89,1.74l-0.35,0.57l0.62,0.78l-0.44,0.89l0.24,0.59l-1.36,-0.36l-0.59,-0.72l-0.67,0.18l-0.1,0.43l-2.44,-2.3l-0.56,0.05l-0.38,-0.56l-0.52,0.32l-1.36,-1.51l-1.23,-0.43l-2.86,-2.72l-1.34,-0.12l-1.11,-0.81l-1.17,0.05l-0.39,0.52l0.47,0.71l1.1,-0.01l0.63,0.68l1.33,0.07l0.6,0.43l0.62,1.4l1.46,1.11l1.13,0.34l1.53,1.8l2.55,0.94l1.4,1.89l2.14,-0.02l0.56,0.41l0.72,0.06l-0.61,0.7l0.3,0.49l2.03,0.34l0.26,0.72l0.55,0.1l0.13,1.67l-1.0,-0.75l-0.39,0.21l-1.13,-1.0l-0.58,0.29l0.1,0.82l-0.31,0.68l0.7,0.7l-0.18,0.6l1.12,0.32l-0.86,0.44l-2.12,-0.73l-1.39,-1.38l-0.83,-0.32l-2.23,-1.87l-0.58,0.11l-0.22,0.53l0.26,0.81l0.64,0.21l3.81,3.15l2.69,1.12l1.28,-0.33l0.45,1.07l1.27,0.26l-0.44,0.67l0.3,0.56l0.93,-0.19l0.0,1.24l-0.92,0.41l-0.57,0.73l-0.71,-0.93l-3.2,-1.58l-0.29,-1.16l-0.59,-0.59l-0.87,-0.11l-1.2,0.67l-1.71,-0.44l-0.36,-1.15l-0.71,-0.05l-0.05,1.32l-0.33,0.41l-1.43,-1.32l-0.51,0.09l-0.48,0.57l-0.65,-0.4l-0.99,0.45l-2.23,-0.1l-0.37,0.94l0.34,0.46l1.9,0.22l1.4,-0.31l0.85,0.24l0.56,-0.69l0.63,0.88l1.34,0.43l1.95,-0.31l1.5,0.71l0.67,-0.63l0.94,2.47l3.16,1.23l0.37,0.91l-0.57,1.03l0.56,0.44l1.72,-1.32l0.88,-0.02l0.83,0.65l0.8,-0.26l-0.61,-0.9l-0.2,-1.17l3.78,0.08l1.13,-0.44l1.89,3.23l-0.46,0.71l0.65,3.09l-1.19,-0.58l-0.02,0.88l-30.95,7.83l-37.19,8.41l-19.52,3.35l-7.08,0.85l-0.46,-0.26l-4.24,0.64l-0.82,0.62l-28.2,5.01ZM781.15,223.32l0.14,0.09l-0.06,0.07l-0.01,-0.03l-0.07,-0.12ZM808.05,244.59l0.53,-1.14l-0.26,-0.54l-0.36,-0.08l0.58,-0.98l-0.39,-0.71l-0.03,-0.49l0.44,-0.35l-0.17,-0.73l0.62,-0.3l0.23,-0.6l0.14,-2.33l1.01,-0.39l-0.12,-0.9l0.48,-0.14l-0.26,-1.53l-0.79,-0.4l0.87,-0.57l0.1,-1.03l2.69,-1.11l0.36,2.48l-1.08,4.2l-0.22,2.38l0.33,1.09l-0.34,0.97l-0.6,-0.79l-0.81,0.15l-0.39,0.95l0.27,0.37l-0.65,0.46l-0.3,0.85l0.17,1.05l-0.31,1.46l0.38,2.47l-0.6,0.6l0.07,1.33l-1.37,-1.9l0.23,-0.94l-0.33,-1.57l0.28,-0.97l-0.38,-0.3Z"
                    data-code="US-VA"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M716.46,159.99l0.63,-0.19l4.3,-3.73l1.13,5.2l0.48,0.31l34.84,-7.93l34.28,-8.64l1.42,0.58l0.71,1.39l0.64,0.13l0.77,-0.33l1.24,0.59l0.14,0.85l0.81,0.41l-0.16,0.58l0.89,2.69l1.9,2.07l2.12,0.75l2.21,-0.2l0.72,0.79l-0.89,0.87l-0.73,1.49l-0.17,2.25l-1.41,3.35l-1.37,1.58l0.04,0.79l1.79,1.72l-0.31,1.65l-0.84,0.43l-0.22,0.66l0.14,1.48l1.04,2.87l0.52,0.25l1.2,-0.18l1.18,2.39l0.95,0.58l0.66,-0.26l0.6,0.9l4.23,2.75l0.12,0.41l-1.29,0.93l-3.71,4.22l-0.23,0.76l0.17,0.9l-1.36,1.13l-0.84,0.15l-1.33,1.08l-0.33,0.66l-1.72,-0.12l-2.03,0.84l-1.15,1.37l-0.41,1.39l-37.23,9.21l-39.1,8.66l-10.03,-48.21l1.92,-1.22l3.08,-3.04Z"
                    data-code="US-PA"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M571.72,341.09l0.86,-0.84l0.29,-1.37l1.0,0.04l0.65,-0.79l-0.99,-4.89l1.41,-1.93l0.06,-1.32l1.18,-0.46l0.36,-0.48l-0.63,-1.31l0.53,-0.65l0.05,-0.56l-0.89,-1.33l2.55,-1.57l1.09,-1.13l-0.14,-0.84l-0.85,-0.53l0.14,-0.19l0.34,-0.16l0.85,0.37l0.46,-0.33l-0.27,-1.31l-0.85,-0.9l0.06,-0.71l0.51,-1.43l1.0,-1.11l-1.35,-2.06l1.37,-0.21l0.61,-0.55l-0.13,-0.64l-1.17,-0.82l0.82,-0.15l0.58,-0.54l0.13,-0.69l-0.59,-1.38l0.02,-0.36l0.37,0.53l0.47,0.08l0.58,-0.29l0.6,-0.86l23.67,-2.81l0.35,-0.41l-0.1,-1.35l-0.84,-2.39l2.98,-0.08l0.82,0.58l22.79,-3.55l7.64,-0.46l7.5,-0.86l8.82,-1.42l24.01,-3.1l1.11,-0.6l29.3,-5.2l0.73,-0.6l3.56,-0.54l-0.4,1.44l0.43,0.85l-0.4,2.0l0.36,0.82l-1.15,-0.03l-1.71,1.79l-1.21,3.89l-0.55,0.7l-0.56,0.08l-0.63,-0.74l-1.44,-0.02l-2.66,1.73l-1.42,2.73l-0.96,0.89l-0.34,-0.34l-0.13,-1.05l-0.73,-0.54l-0.53,0.15l-2.3,1.81l-0.29,1.32l-0.93,-0.24l-0.9,0.48l-0.16,0.77l0.32,0.73l-0.85,2.18l-1.29,0.06l-1.75,1.14l-1.28,1.24l-0.61,1.06l-0.78,0.27l-2.28,2.46l-4.04,0.78l-2.58,1.7l-0.49,1.09l-0.88,0.55l-0.55,0.81l-0.18,2.88l-0.35,0.6l-1.65,0.52l-0.89,-0.16l-1.06,1.14l0.21,5.24l-20.21,3.32l-21.62,3.04l-25.56,2.95l-0.34,0.31l-7.39,0.9l-28.73,3.17Z"
                    data-code="US-TN"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M132.38,121.39l-0.34,-0.44l0.08,-1.99l0.53,-1.74l1.42,-1.22l2.11,-3.59l1.68,-0.92l1.39,-1.53l1.08,-2.15l0.05,-1.22l2.21,-2.41l1.43,-2.7l0.37,-1.37l2.04,-2.26l1.89,-2.81l0.03,-1.01l-0.79,-2.95l-2.13,-1.94l-0.87,-0.36l-0.85,-1.61l-0.41,-3.02l-0.59,-1.19l0.94,-1.19l-0.12,-2.35l-1.04,-2.69l0.46,-0.98l9.67,-54.45l13.39,2.35l-3.54,20.72l1.29,2.89l1.0,1.27l0.27,1.55l1.17,1.76l-0.12,0.83l0.39,1.14l-0.99,0.95l0.83,1.76l-0.83,0.11l-0.28,0.71l1.93,1.68l1.03,2.04l2.24,1.22l0.54,1.58l1.09,1.33l1.49,2.79l0.08,0.68l1.64,1.81l0.01,1.88l1.79,1.71l-0.07,1.35l0.74,0.19l0.9,-0.58l0.36,0.46l-0.36,0.55l0.07,0.54l1.11,0.96l1.61,0.15l1.81,-0.36l-0.63,2.61l-0.99,0.54l0.25,1.14l-1.83,3.73l0.06,1.72l-0.81,0.07l-0.37,0.54l0.6,1.33l-0.62,0.9l-0.03,1.16l0.97,0.93l-0.37,0.81l0.28,1.01l-1.57,0.43l-1.21,1.41l0.1,1.11l0.46,0.77l-0.13,0.74l-0.83,0.77l-0.2,1.52l1.48,0.63l1.38,1.79l0.78,0.27l1.08,-0.35l0.56,-0.8l1.85,-0.41l1.21,-1.28l0.81,-0.29l0.15,-0.76l0.78,0.81l0.23,0.71l1.06,0.64l-0.42,1.23l0.73,0.95l-0.34,1.38l0.57,1.34l-0.21,1.61l1.54,2.64l0.31,1.73l0.82,0.37l0.67,2.08l-0.18,0.98l-0.76,0.64l0.51,1.9l1.24,1.16l0.3,0.79l0.81,0.08l0.86,-0.37l1.04,0.93l1.06,2.79l-0.5,0.81l0.89,1.83l-0.28,0.6l0.11,0.98l2.29,2.41l0.97,-0.14l-0.01,-1.14l1.07,-0.89l0.93,-0.22l4.53,1.62l0.69,-0.32l0.67,-1.35l1.19,-0.39l2.25,0.93l3.3,-0.1l0.96,0.88l2.29,-0.58l3.23,0.78l0.45,-0.49l-0.67,-0.76l0.26,-1.06l0.74,-0.48l-0.07,-0.96l1.23,-0.51l0.48,0.37l1.07,2.11l0.12,1.11l1.36,1.95l0.73,0.45l-6.27,53.86l-47.48,-6.32l-46.97,-7.73l6.88,-39.17l1.12,-1.18l1.07,-2.67l-0.21,-1.75l0.74,-0.15l0.77,-1.62l-0.9,-1.27l-0.18,-1.2l-1.24,-0.08l-0.64,-0.81l-0.88,0.29Z"
                    data-code="US-ID"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                    cursor="pointer"
                  />
                  <path
                    d="M139.36,329.2l-12.7,-16.93l-36.59,-51.1l-25.35,-34.52l13.7,-64.19l46.89,9.24l46.99,7.74l-18.72,125.83l-0.9,1.16l-0.99,2.19l-0.44,0.17l-1.34,-0.22l-0.98,-2.24l-0.7,-0.63l-1.41,0.22l-1.95,-1.02l-1.6,0.23l-1.78,0.96l-0.76,2.48l0.88,2.59l-0.6,0.97l-0.24,1.31l0.38,3.12l-0.76,2.54l0.77,3.71l-0.13,3.07l-0.3,1.07l-1.04,0.31l-0.12,0.51l0.32,0.8l-0.52,0.62Z"
                    data-code="US-NV"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                    cursor="pointer"
                  />
                  <path
                    d="M276.16,412.59l33.07,1.99l32.79,1.35l0.41,-0.39l3.6,-98.71l25.86,0.61l26.29,0.22l0.05,42.09l0.44,0.4l1.02,-0.13l0.78,0.28l3.74,3.82l1.66,0.21l0.88,-0.58l2.49,0.64l0.6,-0.68l0.11,-1.05l0.6,0.76l0.92,0.22l0.38,0.93l0.77,0.78l-0.01,1.64l0.52,0.83l2.85,0.42l1.25,-0.2l1.38,0.89l2.78,0.69l1.82,-0.56l0.63,0.1l1.89,1.8l1.4,-0.11l1.25,-1.43l2.43,0.26l1.67,-0.46l0.1,2.28l0.91,0.67l1.62,0.4l-0.04,2.09l1.56,0.79l1.82,-0.66l1.57,-1.68l1.02,-0.65l0.41,0.19l0.45,1.64l2.01,0.2l0.24,1.05l0.72,0.48l1.47,-0.21l0.88,-0.93l0.39,0.33l0.59,-0.08l0.61,-0.99l0.26,0.41l-0.45,1.23l0.14,0.76l0.67,1.14l0.78,0.42l0.57,-0.04l0.6,-0.5l0.68,-2.36l0.91,-0.65l0.35,-1.54l0.57,-0.14l0.4,0.14l0.29,0.99l0.57,0.64l1.21,0.02l0.83,0.5l1.26,-0.2l0.68,-1.34l0.48,0.15l-0.13,0.7l0.49,0.69l1.21,0.45l0.49,0.72l1.52,-0.05l1.49,1.74l0.52,0.02l0.63,-0.62l0.08,-0.71l1.49,-0.1l0.93,-1.43l1.88,-0.41l1.66,-1.13l1.52,0.83l1.51,-0.22l0.29,-0.83l2.29,-0.73l0.53,-0.55l0.5,0.32l0.38,0.88l1.82,0.42l1.69,-0.06l1.86,-1.14l0.41,-1.05l1.06,0.31l2.24,1.56l1.16,0.17l1.79,2.08l2.14,0.41l1.04,0.92l0.76,-0.11l2.48,0.85l1.04,0.04l0.37,0.79l1.38,0.97l1.45,-0.12l0.39,-0.72l0.8,0.36l0.88,-0.4l0.92,0.35l0.76,-0.15l0.64,0.36l2.23,34.03l1.51,1.67l1.3,0.82l1.25,1.87l0.57,1.63l-0.1,2.64l1.0,1.21l0.85,0.4l-0.12,0.85l0.75,0.54l0.28,0.87l0.65,0.7l-0.19,1.17l1.0,1.02l0.59,1.63l0.5,0.34l0.55,-0.1l-0.16,1.71l0.81,1.22l-0.64,0.25l-0.35,0.68l0.77,1.27l-0.55,0.89l0.19,1.39l-0.75,2.69l-0.74,0.85l-0.36,1.54l-0.79,1.13l0.64,2.0l-0.83,2.28l0.17,1.07l0.83,1.2l-0.19,1.01l0.49,1.6l-0.24,1.41l-1.13,1.67l-1.02,0.2l-1.76,3.37l-0.04,1.06l1.79,2.37l-3.43,0.08l-7.37,3.78l-0.02,-0.43l-2.19,-0.46l-3.24,1.07l1.09,-3.51l-0.3,-1.21l-0.8,-0.76l-0.62,-0.07l-1.52,0.85l-0.99,2.0l-1.56,-0.96l-1.64,0.12l-0.07,0.63l0.89,0.62l0.0,1.06l0.56,0.39l-0.47,0.69l0.07,1.02l1.63,0.64l-0.62,0.71l0.49,0.97l0.91,0.23l0.28,0.37l-0.4,1.25l-0.45,-0.12l-0.97,0.81l-1.72,2.25l-1.18,-0.4l-0.49,0.12l0.32,1.0l0.08,2.55l-1.85,1.49l-1.91,2.11l-0.96,0.37l-4.1,2.9l-3.3,0.45l-2.54,1.06l-0.2,1.12l-0.75,-0.34l-2.04,0.89l-0.33,-0.34l-1.11,0.18l0.43,-0.87l-0.52,-0.6l-1.43,0.22l-1.22,1.08l-0.6,-0.62l-0.11,-1.2l-1.38,-0.81l-0.5,0.44l0.65,1.44l0.01,1.12l-0.71,0.09l-0.54,-0.44l-0.75,-0.0l-0.55,-1.34l-1.46,-0.37l-0.58,0.39l0.04,0.54l0.94,1.7l0.03,1.24l0.58,0.37l0.36,-0.16l1.13,0.78l-0.75,0.37l-0.27,0.54l0.15,0.36l0.7,0.23l1.08,-0.54l0.96,0.6l-4.27,2.42l-0.57,-0.13l-0.37,-1.44l-0.5,-0.18l-1.13,-1.46l-0.49,-0.03l-0.48,0.51l0.1,0.63l-0.62,0.34l-0.05,0.51l1.18,1.61l-0.31,1.04l0.33,0.85l-1.66,1.79l-0.37,0.2l0.37,-0.64l-0.18,-0.72l0.25,-0.73l-0.46,-0.67l-0.52,0.17l-0.71,1.1l0.26,0.72l-0.39,0.95l-0.07,-1.13l-0.52,-0.55l-1.95,1.29l-0.78,-0.33l-0.7,0.52l0.07,0.75l-0.81,0.99l0.02,0.49l1.25,0.64l0.03,0.56l0.78,0.28l0.7,-1.41l0.86,-0.41l0.01,0.62l-2.82,4.36l-1.23,-1.0l-1.36,0.38l-0.32,-0.34l-2.4,0.39l-0.46,-0.31l-0.65,0.16l-0.18,0.58l0.41,0.61l0.55,0.38l1.53,0.03l-0.01,0.91l0.55,0.64l2.07,1.03l-2.7,7.63l-0.2,0.1l-0.38,-0.54l-0.34,0.1l0.18,-0.76l-0.57,-0.43l-2.35,1.95l-1.72,-2.36l-1.19,-0.91l-0.61,0.4l0.09,0.52l1.44,2.0l-0.11,0.82l-0.93,-0.09l-0.33,0.63l0.51,0.56l1.88,0.07l2.14,0.72l2.08,-0.72l-0.43,1.75l0.24,0.77l-0.98,0.7l0.37,1.59l-1.12,0.14l-0.43,0.41l0.4,2.11l-0.33,1.6l0.45,0.64l0.84,0.24l0.87,2.86l0.71,2.81l-0.91,0.82l0.62,0.49l-0.08,1.28l0.72,0.3l0.18,0.61l0.58,0.29l0.4,1.79l0.68,0.31l0.45,3.22l1.46,0.62l-0.52,1.1l0.31,1.07l-0.63,0.77l-0.84,-0.05l-0.53,0.44l0.08,1.31l-0.49,-0.33l-0.49,0.25l-0.39,-0.67l-1.49,-0.45l-2.92,-2.53l-2.2,-0.18l-0.81,-0.51l-4.2,0.09l-0.9,0.42l-0.78,-0.63l-1.06,0.25l-1.25,-0.2l-1.45,-0.7l-0.72,-0.97l-0.6,-0.14l-0.21,-0.72l-1.17,-0.49l-0.99,-0.02l-1.98,-0.87l-1.45,0.39l-0.83,-1.09l-0.6,-0.21l-1.43,-1.38l-1.96,0.01l-1.47,-0.64l-0.86,0.12l-1.62,-0.41l0.28,-1.26l-0.54,-1.01l-0.96,-0.35l-1.65,-6.03l-2.77,-3.02l-0.29,-1.12l-1.08,-0.75l0.35,-0.77l-0.24,-0.76l0.34,-2.18l-0.45,-0.96l-1.04,-1.01l0.65,-1.99l0.05,-1.19l-0.18,-0.7l-0.54,-0.33l-0.15,-1.81l-1.85,-1.44l-0.85,0.21l-0.29,-0.41l-0.81,-0.11l-0.74,-1.31l-2.22,-1.71l0.01,-0.69l-0.51,-0.58l0.12,-0.86l-0.97,-0.92l-0.08,-0.75l-1.12,-0.61l-1.3,-2.88l-2.66,-1.48l-0.38,-0.91l-1.13,-0.59l-0.06,-1.16l-0.82,-1.19l-0.59,-1.95l0.41,-0.22l-0.04,-0.73l-1.03,-0.49l-0.26,-1.29l-0.81,-0.57l-0.94,-1.74l-0.61,-2.38l-1.85,-2.36l-0.87,-4.24l-1.81,-1.34l0.05,-0.7l-0.75,-1.21l-3.96,-2.67l-0.71,-1.86l-1.82,-0.62l-1.44,-0.99l-0.01,-1.63l-0.6,-0.39l-0.88,0.24l-0.12,-0.77l-0.98,-0.33l-0.8,-2.08l-0.57,-0.47l-0.46,0.12l-0.46,-0.44l-0.86,0.27l-0.14,-0.6l-0.44,-0.31l-0.47,0.15l-0.25,0.61l-1.05,0.16l-2.89,-0.47l-0.39,-0.38l-1.48,-0.03l-0.79,0.29l-0.77,-0.44l-2.67,0.27l-3.92,-2.08l-1.35,0.86l-0.64,1.61l-1.98,-0.17l-0.52,0.44l-0.49,-0.17l-1.05,0.49l-1.33,0.14l-3.22,6.4l-0.18,1.77l-0.76,0.67l-0.38,1.8l0.35,0.59l-1.99,1.01l-0.72,1.3l-1.11,0.65l-1.12,2.0l-2.67,-0.46l-1.04,-0.87l-0.55,0.3l-1.69,-1.21l-1.31,-1.63l-2.9,-0.85l-1.15,-0.95l-0.02,-0.67l-0.42,-0.41l-2.75,-0.51l-2.28,-1.03l-1.89,-1.75l-0.91,-1.53l-0.96,-0.91l-1.53,-0.29l-1.77,-1.26l-0.22,-0.56l-1.31,-1.18l-0.65,-2.68l-0.86,-1.01l-0.24,-1.1l-0.76,-1.28l-0.26,-2.34l0.52,-3.05l-3.01,-5.07l-0.06,-1.94l-1.26,-2.51l-0.99,-0.44l-0.43,-1.24l-1.43,-0.81l-2.15,-2.18l-1.02,-0.1l-2.01,-1.25l-3.18,-3.35l-0.59,-1.55l-3.13,-2.55l-1.59,-2.45l-1.19,-0.95l-0.61,-1.05l-4.42,-2.6l-1.19,-2.19l-1.21,-3.23l-1.37,-1.08l-1.12,-0.08l-1.75,-1.67l-0.79,-3.05ZM502.09,468.18l-0.33,0.17l0.18,-0.16l0.15,-0.02ZM498.69,470.85l-0.09,0.12l-0.04,0.02l0.13,-0.14ZM497.79,472.33l0.15,0.05l-0.2,0.18l0.04,-0.11l0.01,-0.12ZM497.02,473.23l-0.13,0.12l0.03,-0.09l0.09,-0.03ZM467.54,489.19l0.03,0.02l-0.02,0.01l-0.0,-0.03ZM453.94,547.19l0.75,-0.5l0.25,-0.68l0.11,1.08l-1.1,0.1ZM460.89,499.8l-0.14,-0.59l1.22,-0.36l-0.28,0.33l-0.79,0.63ZM463.51,497.84l0.1,-0.23l1.27,-0.88l-0.92,0.85l-0.45,0.26ZM465.8,496.12l0.28,-0.24l0.47,-0.04l-0.25,0.13l-0.5,0.15ZM457.96,502.92l0.71,-1.64l0.64,-0.71l-0.02,0.75l-1.33,1.6ZM451.06,515.13l0.06,-0.22l0.07,-0.15l-0.13,0.37ZM451.5,513.91l0.16,-0.35l0.02,-0.02l-0.18,0.37ZM452.44,511.95l-0.01,-0.04l0.05,-0.04l-0.04,0.08Z"
                    data-code="US-TX"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                    cursor="pointer"
                  />
                  <path
                    d="M829.94,105.42l0.2,-1.33l-1.43,-5.38l0.53,-1.45l-0.28,-2.22l1.0,-1.86l-0.13,-2.3l0.64,-2.28l-0.44,-0.62l0.29,-2.31l-0.93,-3.8l0.08,-0.7l0.3,-0.45l1.83,-0.8l0.7,-1.39l1.43,-1.62l0.74,-1.8l-0.25,-1.13l0.52,-0.62l-2.34,-3.49l0.87,-3.26l-0.11,-0.78l-0.81,-1.29l0.27,-0.59l-0.23,-0.7l0.48,-3.2l-0.36,-0.82l0.91,-1.49l2.44,0.33l0.65,-0.88l13.0,34.89l0.84,3.65l2.6,2.21l0.88,0.34l0.36,1.6l1.72,1.31l0.0,0.35l0.77,0.23l-0.06,0.58l-0.46,3.09l-1.57,0.24l-1.32,1.19l-0.51,0.94l-0.96,0.37l-0.5,1.68l-1.1,1.44l-17.61,4.74l-1.7,-1.43l-0.41,-0.89l-0.1,-2.0l0.54,-0.59l0.03,-0.52l-1.02,-5.18Z"
                    data-code="US-NH"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M821.38,166.44l0.69,-2.05l0.62,-0.02l0.55,-0.75l0.76,0.15l0.54,-0.41l-0.04,-0.31l0.57,-0.03l0.28,-0.66l0.66,-0.02l0.2,-0.55l-0.42,-0.83l0.22,-0.53l0.61,-0.37l1.34,0.22l0.54,-0.59l1.45,-0.18l0.21,-0.8l1.85,0.02l1.08,-0.91l0.11,-0.78l0.62,0.24l0.43,-0.61l4.83,-1.29l2.26,-1.3l1.99,-2.91l-0.2,1.16l-0.98,0.86l-1.22,2.31l0.55,0.46l1.6,-0.35l0.28,0.63l-0.43,0.49l-1.37,0.87l-0.51,-0.07l-2.26,0.92l-0.08,0.93l-0.87,-0.0l-2.73,1.72l-1.01,0.15l-0.17,0.8l-1.24,0.09l-2.24,1.91l-4.44,2.17l-0.2,0.71l-0.29,0.08l-0.45,-0.83l-1.41,-0.06l-0.73,0.42l-0.42,0.8l0.23,0.32l-0.92,0.69l-0.76,-0.84l0.32,-1.05ZM828.05,159.06l-0.02,-0.01l0.02,-0.06l-0.01,0.08ZM845.16,149.05l0.06,-0.06l0.18,-0.06l-0.11,0.19l-0.13,-0.07ZM844.3,154.94l0.1,-0.89l0.74,-1.16l1.65,-1.52l1.01,0.31l0.05,-0.82l0.79,0.67l-3.36,3.21l-0.67,0.45l-0.31,-0.25ZM850.39,150.14l0.02,-0.03l0.07,-0.07l-0.09,0.1ZM722.09,155.56l3.76,-3.85l1.27,-2.19l1.76,-1.86l1.16,-0.78l1.28,-3.35l1.56,-1.3l0.53,-0.83l-0.21,-1.83l-1.61,-2.42l0.43,-1.13l-0.17,-0.78l-0.83,-0.53l-2.11,-0.0l0.04,-0.99l-0.57,-2.22l4.99,-2.94l4.49,-1.8l2.38,-0.19l1.84,-0.74l5.64,-0.24l3.13,1.25l3.16,-1.68l5.49,-1.06l0.58,0.45l0.68,-0.2l0.12,-0.98l1.45,-0.72l1.03,-0.93l0.75,-0.2l0.69,-2.05l1.87,-1.76l0.79,-1.26l1.12,0.03l1.13,-0.52l1.07,-1.63l-0.46,-0.7l0.36,-1.2l-0.25,-0.51l-0.64,0.02l-0.17,-1.17l-0.94,-1.59l-1.01,-0.62l0.12,-0.18l0.59,0.39l0.53,-0.27l0.75,-1.44l-0.01,-0.91l0.81,-0.65l-0.01,-0.97l-0.93,-0.19l-0.6,0.7l-0.28,0.12l0.56,-1.3l-0.81,-0.62l-1.26,0.05l-0.87,0.77l-0.92,-0.41l-0.06,-0.29l2.05,-2.5l1.78,-1.47l1.67,-2.64l0.7,-0.56l0.11,-0.59l0.78,-0.95l0.07,-0.56l-0.5,-0.95l0.78,-1.89l4.82,-7.61l4.77,-4.5l2.84,-0.51l19.67,-5.66l0.41,0.88l-0.08,2.01l1.02,1.22l0.43,3.8l2.29,3.25l-0.09,1.89l0.85,2.42l-0.59,1.07l-0.0,3.41l0.71,0.9l1.32,2.76l0.19,1.09l0.62,0.84l0.12,3.92l0.55,0.85l0.54,0.07l0.53,-0.61l0.06,-0.87l0.33,-0.07l1.05,1.12l3.97,15.58l0.74,1.2l0.22,15.32l0.6,0.62l3.57,16.23l1.26,1.34l-2.82,3.18l0.03,0.54l1.52,1.31l0.19,0.6l-0.78,0.88l-0.64,1.8l-0.41,0.39l0.15,0.69l-1.25,0.64l0.04,-4.02l-0.57,-2.28l-0.74,-1.62l-1.46,-1.1l-0.17,-1.13l-0.7,-0.1l-0.42,1.33l0.68,1.27l1.05,0.83l0.97,2.85l-13.75,-4.06l-1.28,-1.47l-2.39,0.24l-0.63,-0.43l-1.06,-0.15l-1.74,-1.91l-0.75,-2.33l0.12,-0.72l-0.36,-0.63l-0.56,-0.21l0.09,-0.46l-0.35,-0.42l-1.64,-0.68l-1.08,0.32l-0.53,-1.22l-1.92,-0.93l-34.6,8.73l-34.44,7.84l-1.11,-5.15ZM818.84,168.69l1.08,-0.48l0.14,0.63l-1.17,1.53l-0.05,-1.68ZM730.07,136.63l0.03,-0.69l0.78,-0.07l-0.38,1.09l-0.43,-0.33Z"
                    data-code="US-NY"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M295.5,583.17l0.06,-1.75l4.12,-4.97l1.03,-3.4l-0.33,-0.64l0.94,-2.43l-0.05,-3.52l0.39,-0.78l2.47,-0.7l1.55,0.23l4.45,-1.4l0.51,-0.7l-0.17,-2.69l0.4,-1.66l1.78,-1.16l1.74,2.15l-0.15,0.94l1.88,3.6l0.94,0.35l5.13,7.65l0.86,3.93l-1.52,3.14l0.22,0.58l1.47,0.95l-0.68,2.07l0.35,1.51l1.6,3.0l-1.39,0.86l-2.28,-0.2l-3.27,0.51l-4.56,-1.32l-2.15,-1.34l-6.66,-0.15l-1.59,0.26l-1.56,1.19l-1.63,0.58l-1.14,0.02l-0.7,-2.54l-2.09,-2.18ZM306.33,530.7l1.6,0.08l0.51,2.07l-0.3,2.25l0.37,0.59l2.33,0.88l1.38,0.1l1.55,1.39l0.27,1.55l0.93,0.97l-0.13,1.05l1.83,2.52l-0.13,0.66l-0.61,0.48l-1.82,0.38l-1.84,-0.18l-1.47,-1.19l-2.21,-0.24l-2.69,-1.48l0.01,-1.23l1.15,-1.86l0.41,-2.07l-1.76,-1.28l-1.08,-1.75l-0.1,-2.61l1.79,-1.08ZM297.2,518.01l0.71,0.31l0.38,1.05l2.64,2.0l0.9,1.11l0.92,0.08l0.8,1.67l1.56,1.05l0.72,0.06l1.07,1.11l-1.31,0.41l-2.75,-0.66l-3.23,-3.93l-3.16,-2.01l-1.39,-0.44l-0.05,-0.7l1.58,-0.43l0.62,-0.67ZM301.59,541.55l-2.09,-0.98l-0.28,-0.51l2.92,0.34l-0.56,1.15ZM298.23,532.36l-0.92,-0.29l-0.72,-0.89l0.92,-2.06l-0.49,-1.73l2.6,1.38l0.61,2.08l0.14,1.06l-2.15,0.45ZM281.13,503.64l0.57,-1.85l-0.38,-0.9l-0.16,-2.84l0.75,-0.92l-0.12,-1.22l2.74,1.9l2.9,-0.62l1.56,0.15l0.38,1.01l-0.33,2.17l0.29,1.5l-0.69,0.6l-0.19,1.55l0.38,1.54l0.86,0.51l0.29,1.07l-0.52,1.14l0.53,1.28l-1.18,-0.0l-0.2,-0.48l-2.04,-0.86l-0.77,-2.83l-1.27,-0.38l0.8,-0.11l0.32,-0.46l-0.08,-0.66l-0.63,-0.68l-1.75,-0.32l0.23,1.82l-2.28,-1.1ZM259.66,469.47l-0.24,-2.03l-0.91,-0.69l-0.68,-1.23l0.08,-1.2l0.08,-0.34l2.39,-0.81l4.6,0.53l0.67,1.04l2.51,1.09l0.69,1.25l-0.15,1.9l-2.3,1.32l-0.74,1.3l-0.79,0.34l-2.78,0.09l-0.92,-1.53l-1.52,-1.0ZM245.78,462.61l-0.23,-0.74l1.03,-0.75l4.32,-0.72l0.43,0.3l-0.92,0.4l-0.68,0.94l-1.66,-0.5l-1.36,0.34l-0.94,0.72Z"
                    data-code="US-HI"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                    cursor="pointer"
                  />
                  <path
                    d="M805.56,72.69l26.03,-7.97l0.89,1.85l-0.74,2.37l-0.03,1.54l2.22,2.75l-0.51,0.58l0.26,1.13l-0.67,1.6l-1.35,1.49l-0.64,1.32l-1.72,0.7l-0.62,0.92l-0.1,0.98l0.93,3.74l-0.29,2.44l0.4,0.54l-0.6,2.11l0.15,2.19l-1.0,1.87l0.27,2.36l-0.53,1.54l1.43,5.44l-0.22,1.22l1.05,5.3l-0.58,0.85l0.11,2.31l0.6,1.26l1.51,1.1l-11.44,2.89l-0.57,-0.85l-4.02,-15.75l-1.72,-1.59l-0.91,0.25l-0.3,1.19l-0.12,-0.26l-0.11,-3.91l-0.68,-1.0l-0.14,-0.98l-1.37,-2.85l-0.63,-0.68l0.01,-3.15l0.6,-1.15l-0.86,-2.57l0.08,-1.93l-0.39,-0.91l-1.55,-1.63l-0.38,-0.81l-0.41,-3.71l-1.03,-1.27l0.11,-1.87l-0.43,-1.01Z"
                    data-code="US-VT"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M230.86,422.88l11.82,-123.66l25.67,2.24l26.1,1.86l26.12,1.45l25.74,1.02l-0.31,10.24l-0.74,0.39l-3.59,98.69l-32.38,-1.34l-33.53,-2.02l-0.44,0.76l0.54,2.31l0.44,1.26l0.99,0.76l-30.55,-2.46l-0.43,0.36l-0.82,9.46l-14.63,-1.33Z"
                    data-code="US-NM"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M826.87,289.49l0.07,-0.05l-0.02,0.03l-0.04,0.02ZM819.58,272.4l0.2,0.23l-0.05,0.01l-0.16,-0.24ZM821.84,276.68l0.19,0.15l-0.02,0.18l-0.05,-0.08l-0.12,-0.25ZM676.72,321.77l0.92,0.17l1.52,-0.39l0.42,-0.39l0.52,-0.97l0.13,-2.7l1.34,-1.19l0.47,-1.05l2.24,-1.47l2.12,-0.52l0.76,0.18l1.32,-0.52l2.36,-2.52l0.78,-0.25l1.84,-2.29l1.48,-1.0l1.55,-0.19l1.15,-2.65l-0.28,-1.22l1.66,0.06l0.51,-1.65l0.93,-0.77l1.08,-0.77l0.51,1.52l1.07,0.33l1.34,-1.17l1.35,-2.64l2.49,-1.59l0.79,0.08l0.82,0.8l1.06,-0.21l0.84,-1.07l1.47,-4.18l1.08,-1.1l1.47,0.09l0.44,-0.31l-0.69,-1.26l0.4,-2.0l-0.42,-0.9l0.38,-1.25l7.42,-0.86l19.54,-3.36l37.22,-8.42l31.12,-7.87l0.4,1.21l3.54,3.24l1.0,1.53l-1.21,-1.0l-0.16,-0.63l-0.92,-0.4l-0.52,0.05l-0.24,0.65l0.66,0.54l0.59,1.56l-0.53,0.01l-0.91,-0.75l-2.31,-0.8l-0.4,-0.48l-0.55,0.13l-0.31,0.69l0.14,0.64l1.37,0.44l1.69,1.38l-1.11,0.66l-2.48,-1.2l-0.36,0.51l0.14,0.42l1.6,1.18l-1.84,-0.33l-2.23,-0.87l-0.46,0.14l0.01,0.48l0.6,0.7l1.71,0.83l-0.97,0.58l0.0,0.6l-0.43,0.53l-1.48,0.74l-0.89,-0.77l-0.61,0.22l-0.1,0.35l-0.2,-0.13l-1.32,-2.32l0.21,-2.63l-0.42,-0.48l-0.89,-0.22l-0.37,0.64l0.62,0.71l-0.43,0.99l-0.02,1.04l0.49,1.73l1.6,2.2l-0.31,1.28l0.48,0.29l2.97,-0.59l2.1,-1.49l0.27,0.01l0.37,0.79l0.76,-0.34l1.56,0.05l0.16,-0.71l-0.57,-0.32l1.29,-0.76l2.04,-0.46l-0.1,1.19l0.64,0.29l-0.6,0.88l0.89,1.19l-0.84,0.1l-0.19,0.66l1.38,0.46l0.26,0.94l-1.21,0.05l-0.19,0.66l0.66,0.59l1.25,-0.16l0.52,0.26l0.4,-0.38l0.18,-1.95l-0.75,-3.33l0.41,-0.48l0.56,0.43l0.94,0.06l0.28,-0.57l-0.29,-0.44l0.48,-0.57l1.71,1.84l-0.0,1.41l0.62,0.9l-0.53,0.18l-0.25,0.47l0.9,1.14l-0.08,0.37l-0.42,0.55l-0.78,0.09l-0.91,-0.86l-0.32,0.33l0.13,1.26l-1.08,1.61l0.2,0.57l-0.32,0.22l-0.15,0.98l-0.74,0.55l0.1,0.91l-0.9,0.96l-1.06,0.21l-0.59,-0.37l-0.52,0.52l-0.93,-0.81l-0.86,0.1l-0.4,-0.82l-0.59,-0.21l-0.52,0.38l0.08,0.94l-0.52,0.22l-1.42,-1.25l1.31,-0.4l0.23,-0.88l-0.57,-0.42l-2.02,0.31l-1.14,1.01l0.29,0.67l0.44,0.16l0.09,0.82l0.35,0.25l-0.03,0.12l-0.57,-0.34l-1.69,0.83l-1.12,-0.43l-1.45,0.06l-3.32,-0.7l0.42,1.08l0.97,0.45l0.36,0.64l0.63,0.11l0.87,-0.32l1.68,0.63l2.35,0.39l3.51,0.11l0.47,0.42l-0.06,0.52l-0.99,0.05l-0.38,0.5l0.13,0.23l-1.62,1.44l0.32,0.58l1.85,0.01l-2.55,3.5l-1.67,0.04l-1.59,-0.98l-0.9,-0.19l-1.21,-1.02l-1.12,0.07l0.07,0.47l1.04,1.14l2.32,2.09l2.68,0.26l1.31,0.49l1.71,-2.16l0.51,0.47l1.17,0.33l0.4,-0.57l-0.55,-0.9l0.87,0.16l0.19,0.57l0.66,0.24l1.63,-1.2l-0.18,0.61l0.29,0.57l-0.29,0.38l-0.43,-0.2l-0.41,0.37l0.03,0.9l-0.97,1.72l0.01,0.78l-0.71,-0.07l-0.06,-0.74l-1.12,-0.61l-0.42,0.47l0.27,1.45l-0.52,-1.1l-0.65,-0.16l-1.22,1.08l-0.21,0.52l0.25,0.27l-2.03,0.32l-2.75,1.84l-0.67,-1.04l-0.75,-0.29l-0.37,0.49l0.43,1.26l-0.57,-0.01l-0.09,0.82l-0.94,1.73l-0.91,0.85l-0.59,-0.26l0.49,-0.69l-0.02,-0.77l-1.06,-0.93l-0.08,-0.52l-1.69,-0.41l-0.16,0.47l0.43,1.16l0.2,0.33l0.58,0.07l0.3,0.61l-0.88,0.37l-0.08,0.71l0.65,0.64l0.77,0.18l-0.01,0.37l-2.12,1.67l-1.92,2.65l-2.0,4.31l-0.34,2.13l0.12,1.34l-0.15,-1.03l-1.01,-1.59l-0.55,-0.17l-0.3,0.48l1.17,3.95l-0.63,2.27l-3.9,0.19l-1.43,0.65l-0.35,-0.52l-0.58,-0.18l-0.54,1.07l-1.9,1.14l-0.61,-0.02l-23.25,-15.36l-1.05,-0.02l-18.68,3.49l-0.65,-2.77l-3.25,-2.84l-0.47,0.08l-1.23,1.31l-0.01,-1.29l-0.82,-0.54l-22.82,3.35l-0.64,-0.27l-0.62,0.46l-0.25,0.65l-3.98,1.93l-0.89,1.23l-1.01,0.08l-4.78,2.66l-20.95,3.93l-0.34,-4.55l0.7,-0.95ZM817.0,271.48l0.19,0.35l0.24,0.39l-0.45,-0.41l0.02,-0.32ZM807.53,290.29l0.2,0.32l-0.16,-0.09l-0.03,-0.23ZM815.31,299.15l0.16,-0.36l0.16,0.07l-0.13,0.29l-0.19,0.01ZM812.76,299.11l-0.06,-0.28l-0.03,-0.11l0.3,0.26l-0.21,0.13ZM812.97,264.02l0.37,-0.24l0.15,0.42l-0.42,0.07l-0.1,-0.25ZM791.92,329.4l0.04,-0.08l0.22,0.03l-0.0,0.09l-0.26,-0.05Z"
                    data-code="US-NC"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M438.54,42.78l2.06,6.9l-0.73,2.53l0.57,2.36l-0.27,1.17l0.47,1.99l0.01,3.26l1.42,3.95l0.45,0.54l-0.08,0.97l0.39,1.52l0.62,0.74l1.48,3.74l-0.06,3.9l0.42,0.7l0.5,8.35l0.51,1.54l0.51,0.25l-0.47,2.64l0.36,1.63l-0.14,1.75l0.69,1.1l0.2,2.16l0.49,1.13l1.8,2.56l0.15,2.2l0.51,1.08l0.17,1.39l-0.24,1.36l0.28,1.74l-27.89,0.73l-28.38,0.19l-28.38,-0.37l-28.49,-0.93l2.75,-65.47l23.08,0.78l25.57,0.42l25.57,-0.06l24.11,-0.49Z"
                    data-code="US-ND"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M422.58,174.02l3.92,2.71l3.93,1.9l1.34,-0.22l0.51,-0.47l0.36,-1.08l0.48,-0.2l2.49,0.34l1.32,-0.47l1.58,0.25l3.45,-0.65l2.37,1.98l1.4,0.14l1.55,0.77l1.45,0.08l0.88,1.1l1.49,0.17l-0.06,0.98l1.68,2.08l3.32,0.6l0.19,0.68l-0.22,1.87l1.13,1.94l0.01,2.29l1.15,1.08l0.34,1.72l1.73,1.46l0.07,1.88l1.5,2.11l-0.49,2.33l0.44,3.09l0.52,0.54l0.94,-0.2l-0.04,1.25l1.21,0.5l-0.41,2.36l0.21,0.44l1.12,0.4l-0.6,0.77l-0.09,1.01l0.13,0.59l0.82,0.5l0.16,1.45l-0.26,0.92l0.26,1.27l0.55,0.61l0.3,1.93l-0.22,1.33l0.23,0.72l-0.57,0.92l0.02,0.79l0.45,0.88l1.23,0.63l0.25,2.5l1.1,0.51l0.03,0.79l1.18,2.75l-0.23,0.96l1.16,0.21l0.8,0.99l1.1,0.24l-0.15,0.96l1.31,1.68l-0.21,1.12l0.51,0.91l-26.15,1.05l-27.83,0.63l-27.84,0.14l-27.89,-0.35l0.46,-21.66l-0.39,-0.41l-32.36,-1.04l1.85,-43.24l43.36,1.22l44.67,-0.04Z"
                    data-code="US-NE"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M508.97,412.97l-1.33,-21.76l51.44,-4.07l0.34,0.83l1.48,0.66l-0.92,1.35l-0.25,2.13l0.49,0.72l1.18,0.31l-1.21,0.47l-0.45,0.78l0.45,1.36l1.05,0.84l0.08,2.15l0.46,0.54l1.51,0.74l0.45,1.05l1.42,0.44l-0.87,1.22l-0.85,2.34l-0.75,0.04l-0.52,0.51l-0.02,0.73l0.63,0.72l-0.22,1.16l-1.35,0.96l-1.08,1.89l-1.37,0.67l-0.68,0.83l-0.79,2.42l-0.25,3.52l-1.55,1.74l0.13,1.21l0.62,0.96l-0.35,2.38l-1.61,0.29l-0.6,0.57l0.28,0.97l0.64,0.59l-0.26,1.41l0.98,1.51l-1.18,1.18l-0.08,0.45l0.4,0.23l6.18,-0.55l29.23,-2.92l-0.68,3.47l-0.52,1.02l-0.2,2.24l0.69,0.98l-0.09,0.66l0.6,1.0l1.31,0.7l1.22,1.42l0.14,0.88l0.89,1.39l0.14,1.05l1.11,1.84l-1.85,0.39l-0.38,-0.08l-0.01,-0.56l-0.53,-0.57l-1.28,0.28l-1.18,-0.59l-1.51,0.17l-0.61,-0.98l-1.24,-0.86l-2.84,-0.47l-1.24,0.63l-1.39,2.3l-1.3,1.42l-0.42,0.91l0.07,1.2l0.55,0.89l0.82,0.57l4.25,0.82l3.35,-1.0l1.32,-1.19l0.68,-1.19l0.34,0.59l1.08,0.43l0.59,-0.4l0.81,0.03l0.51,-0.46l-0.76,1.21l-1.12,-0.12l-0.57,0.32l-0.38,0.62l0.0,0.83l0.77,1.22l1.48,-0.02l0.65,0.89l1.1,0.48l0.94,-0.21l0.51,-0.45l0.46,-1.11l-0.02,-1.37l0.93,-0.58l0.42,-0.99l0.23,0.05l0.1,1.16l-0.24,0.25l0.18,0.57l0.43,0.15l-0.07,0.75l1.34,1.08l0.34,-0.16l-0.48,0.59l0.18,0.63l-0.35,0.13l-0.52,-0.57l-0.92,-0.19l-1.0,1.89l-0.85,0.14l-0.46,0.53l0.16,1.19l-1.6,-0.61l-0.43,0.19l0.04,0.46l1.14,1.06l-1.17,-0.14l-0.92,0.61l0.68,0.43l1.26,2.04l2.74,0.97l-0.08,1.2l0.34,0.41l2.07,-0.32l0.77,0.17l0.17,0.53l0.73,0.32l1.35,-0.34l0.53,0.78l1.08,-0.46l1.13,0.74l0.14,0.3l-0.4,0.62l1.54,0.86l-0.39,0.65l0.39,0.58l-0.18,0.62l-0.95,1.49l-1.3,-1.56l-0.68,0.34l0.1,0.66l-0.38,0.12l0.41,-1.88l-1.33,-0.76l-0.5,0.5l0.2,1.18l-0.54,0.45l-0.27,-1.02l-0.57,-0.25l-0.89,-1.27l0.03,-0.77l-0.96,-0.14l-0.47,0.5l-1.41,-0.17l-0.41,-0.61l0.14,-0.63l-0.39,-0.46l-0.45,-0.02l-0.81,0.73l-1.18,0.02l0.12,-1.23l-0.46,-0.88l-0.91,0.04l0.09,-0.96l-0.37,-0.36l-0.91,-0.03l-0.22,0.58l-0.85,-0.38l-0.48,0.27l-2.61,-1.26l-1.24,-0.03l-0.67,-0.64l-0.61,0.19l-0.3,0.56l-0.05,1.25l1.72,0.94l1.67,0.35l-0.16,0.92l0.28,0.39l-0.34,0.35l0.23,0.68l-0.76,0.95l-0.02,0.66l0.81,0.97l-0.95,1.43l-1.33,0.94l-0.76,-1.15l0.22,-1.5l-0.35,-0.92l-0.49,-0.18l-0.4,0.36l-1.15,-1.08l-0.59,0.42l-0.76,-1.05l-0.62,-0.2l-0.64,1.33l-0.85,0.26l-0.88,-0.53l-0.86,0.53l-0.1,0.62l0.48,0.41l-0.68,0.56l-0.13,1.44l-0.46,0.13l-0.39,0.83l-0.92,0.08l-0.11,-0.68l-1.6,-0.4l-0.77,0.97l-1.92,-0.93l-0.3,-0.54l-0.99,0.01l-0.35,0.6l-1.16,-0.51l0.42,-0.4l0.01,-1.46l-0.38,-0.57l-1.9,-1.19l-0.08,-0.54l-0.83,-0.72l-0.09,-0.91l0.73,-1.15l-0.34,-1.14l-0.87,-0.19l-0.34,0.57l0.16,0.43l-0.59,0.81l0.04,0.91l-1.8,-0.4l0.07,-0.39l-0.47,-0.54l-1.97,0.76l-0.7,-2.22l-1.32,0.23l-0.18,-2.12l-1.31,-0.35l-1.89,0.3l-1.09,0.65l-0.21,-0.71l0.84,-0.26l-0.05,-0.8l-0.6,-0.58l-1.03,-0.1l-0.85,0.42l-0.95,-0.15l-0.4,0.8l-2.0,1.11l-0.63,-0.31l-1.29,0.71l0.54,1.37l0.8,0.31l0.97,1.51l-1.39,0.19l-1.83,1.03l-3.69,-0.4l-1.24,0.21l-3.09,-0.45l-1.99,-0.68l-1.81,-1.07l-3.7,-1.1l-3.19,-0.48l-2.53,0.58l-5.62,0.45l-1.0,0.26l-1.82,1.25l-0.59,-0.63l-0.26,-1.08l1.59,-0.47l0.7,-1.76l-0.02,-1.55l-0.39,-0.56l1.11,-1.54l0.23,-1.59l-0.5,-1.83l0.07,-1.46l-0.66,-0.7l-0.21,-1.04l0.83,-2.22l-0.64,-1.95l0.76,-0.84l0.3,-1.49l0.78,-0.94l0.79,-2.83l-0.18,-1.42l0.58,-0.97l-0.75,-1.33l0.84,-0.39l0.2,-0.44l-0.89,-1.36l0.03,-2.13l-1.07,-0.23l-0.57,-1.57l-0.92,-0.84l0.28,-1.27l-0.81,-0.76l-0.33,-0.95l-0.64,-0.34l0.22,-0.98l-1.16,-0.58l-0.81,-0.93l0.16,-2.46l-0.68,-1.93l-1.33,-1.98l-2.63,-2.21ZM607.49,467.45l-0.03,-0.03l-0.07,-0.04l0.13,-0.01l-0.03,0.08ZM607.51,465.85l-0.02,-0.01l0.03,-0.01l-0.02,0.02ZM567.04,468.98l-2.0,-0.42l-0.66,-0.5l0.73,-0.43l0.35,-0.76l0.39,0.49l0.83,0.21l-0.15,0.61l0.5,0.81ZM550.39,463.0l1.73,-1.05l3.34,1.07l-0.69,0.56l-0.17,0.81l-0.68,0.17l-3.53,-1.57Z"
                    data-code="US-LA"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M336.37,128.84l0.3,-0.53l0.75,-19.93l28.5,0.93l28.4,0.37l28.4,-0.19l27.78,-0.73l-0.18,1.71l-0.73,1.71l-2.9,2.46l-0.42,1.27l1.59,2.13l1.06,2.06l0.55,0.36l1.74,0.24l1.01,0.84l0.57,1.02l1.45,38.83l-1.84,0.09l-0.42,0.56l0.24,1.44l0.88,1.14l0.01,1.45l-0.65,0.36l0.17,1.48l0.48,0.43l1.09,0.04l0.34,1.68l-0.16,0.91l-0.62,0.83l0.02,1.73l-0.68,2.45l-0.49,0.44l-0.67,1.88l0.5,1.1l1.33,1.08l-0.16,0.62l0.64,0.66l0.35,1.15l-1.65,-0.28l-0.34,-0.94l-0.85,-0.73l0.19,-0.61l-0.28,-0.59l-1.58,-0.23l-1.03,-1.18l-1.57,-0.11l-1.51,-0.75l-1.34,-0.12l-2.38,-1.99l-3.78,0.6l-1.65,-0.25l-1.19,0.46l-2.62,-0.33l-0.98,0.48l-0.76,1.45l-0.72,0.05l-3.67,-1.82l-4.13,-2.8l-44.83,0.05l-43.33,-1.22l1.79,-43.2Z"
                    data-code="US-SD"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M781.25,216.97l0.45,-0.77l2.04,1.26l-0.66,1.14l-0.55,-1.05l-1.28,-0.58Z"
                    data-code="US-DC"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M798.52,195.11l0.42,-1.51l0.92,-1.11l1.72,-0.71l1.12,0.06l-0.33,0.56l-0.08,1.38l-1.13,1.92l0.1,1.09l1.11,1.1l-0.07,1.52l2.29,2.48l1.25,0.6l0.93,1.52l0.99,3.35l1.72,1.57l0.57,1.32l3.06,1.99l1.44,-0.09l0.45,1.25l-1.06,0.56l0.16,1.32l0.36,0.19l-0.83,0.57l-0.08,1.21l0.66,0.21l0.85,-0.73l0.71,0.34l0.3,-0.21l0.75,1.55l-10.19,2.82l-8.12,-26.12Z"
                    data-code="US-DE"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M630.28,423.69l47.19,-6.86l1.53,1.91l0.87,2.72l1.47,1.0l48.79,-5.11l1.03,1.38l0.03,1.09l0.55,1.05l1.04,0.48l1.64,-0.28l0.85,-0.75l-0.14,-4.57l-0.98,-1.49l-0.22,-1.77l0.28,-0.74l0.62,-0.3l0.12,-0.7l5.6,0.96l4.03,-0.16l0.14,1.24l-0.75,-0.12l-0.33,0.43l0.25,1.54l2.11,1.81l0.22,1.01l0.42,0.38l0.29,1.92l1.87,3.29l1.7,4.87l0.73,0.84l0.51,1.5l1.64,2.46l0.64,1.57l2.79,3.71l1.93,3.18l2.29,2.77l0.16,0.6l0.63,0.36l6.82,7.53l-0.48,-0.03l-0.27,0.61l-1.35,-0.02l-0.34,-0.65l0.38,-1.38l-0.16,-0.56l-2.3,-0.92l-0.46,0.53l1.0,2.8l0.78,0.97l2.14,4.77l9.92,13.71l1.37,3.11l3.66,5.34l-1.38,-0.35l-0.43,0.74l0.8,0.65l0.85,0.24l0.56,-0.22l1.46,0.94l2.05,3.05l-0.5,0.34l-0.12,0.53l1.16,0.53l0.89,1.83l-0.08,1.06l0.59,0.95l0.61,2.64l-0.27,0.75l0.93,8.98l-0.31,1.07l0.46,0.67l0.5,3.1l-0.81,1.46l0.07,2.23l-0.84,0.74l-0.22,1.8l-0.48,0.85l0.21,1.47l-0.3,1.75l0.54,1.74l0.45,0.23l-1.15,1.8l-0.39,1.28l-0.94,0.24l-0.53,-0.22l-1.37,0.45l-0.35,1.06l-0.89,0.3l-0.18,0.58l-0.85,0.67l-1.44,0.14l-0.27,-0.32l-1.23,-0.1l-0.9,1.05l-3.17,1.13l-1.06,-0.59l-0.7,-1.04l0.06,-1.79l1.0,0.84l1.64,0.47l0.26,0.63l0.52,0.07l1.35,-0.72l0.2,-0.69l-0.26,-0.64l-1.58,-1.11l-2.4,-0.26l-0.91,-0.46l-0.85,-1.67l-0.89,-0.72l0.22,-0.98l-0.48,-0.28l-0.53,0.15l-1.38,-2.51l-0.44,-0.3l-0.64,0.07l-0.44,-0.61l0.22,-0.89l-0.7,-0.65l-1.21,-0.6l-1.06,-0.08l-0.75,-0.54l-0.57,0.18l-2.8,-0.59l-0.5,0.64l0.25,-0.91l-0.46,-0.42l-0.87,0.12l-0.26,-0.72l-0.88,-0.65l-0.61,-1.41l-0.55,-0.11l-0.72,-2.94l-0.77,-1.0l-0.16,-1.52l-0.44,-0.83l-0.71,-0.89l-0.49,-0.15l-0.12,0.93l-1.29,-0.26l1.06,-1.3l0.3,-0.75l-0.12,-0.63l0.86,-1.46l0.65,-0.34l0.28,-0.83l-0.61,-0.38l-1.42,0.93l-0.89,1.29l-0.42,2.17l-1.37,0.35l-0.21,-1.33l-0.79,-1.33l-0.27,-4.04l-0.86,-0.6l1.63,-1.33l0.22,-0.97l-0.58,-0.42l-3.06,1.92l-0.75,-0.66l-0.4,0.26l-1.27,-0.89l-0.37,0.74l1.13,1.09l0.52,0.1l1.26,2.0l-1.04,0.23l-1.42,-0.38l-0.84,-1.6l-1.13,-0.6l-1.94,-2.55l-1.04,-2.28l-1.28,-0.87l0.1,-0.87l-0.97,-1.8l-1.77,-0.98l0.09,-0.67l0.99,-0.41l-0.35,-0.49l0.44,-0.73l-0.39,-0.35l0.4,-1.21l2.47,-4.47l-1.05,-2.41l-0.68,-0.46l-0.92,0.42l-0.28,0.93l0.29,1.2l-0.24,0.03l-0.73,-2.44l-0.99,-0.28l-1.19,-0.87l-1.52,-0.31l0.29,1.95l-0.48,0.61l0.27,0.59l2.21,0.56l0.25,0.97l-0.37,2.46l-0.31,-0.58l-0.8,-0.22l-2.13,-1.53l-0.41,0.2l-0.29,-0.63l0.59,-2.11l0.07,-2.97l-0.66,-1.97l0.42,-0.51l0.48,-1.91l-0.24,-0.54l0.66,-3.04l-0.35,-5.26l-0.71,-1.7l0.35,-0.47l-0.47,-2.18l-2.1,-1.33l-0.05,-0.52l-0.55,-0.43l-0.1,-1.01l-0.92,-0.73l-0.55,-1.51l-0.64,-0.25l-1.44,0.32l-1.03,-0.2l-1.57,0.54l-1.14,-1.74l-1.51,-0.48l-0.19,-0.6l-1.35,-1.51l-0.87,-0.59l-0.62,0.07l-1.52,-1.16l-0.8,-0.21l-0.51,-2.75l-3.06,-1.13l-0.65,-0.59l-0.52,-1.23l-2.15,-1.93l-2.19,-1.09l-1.45,-0.12l-3.44,-1.68l-2.85,0.98l-1.0,-0.4l-1.05,0.42l-0.35,0.68l-1.33,0.68l-0.5,0.7l0.03,0.64l-0.73,-0.22l-0.59,0.6l0.67,0.94l1.51,0.08l0.41,0.21l-3.03,0.23l-1.58,1.51l-0.91,0.45l-1.3,1.56l-1.56,1.03l-0.32,0.13l0.2,-0.48l-0.26,-0.54l-0.66,-0.04l-0.96,0.75l-1.12,1.5l-2.2,0.23l-2.11,1.06l-0.78,0.03l-0.27,-2.03l-1.71,-2.23l-2.21,-1.0l-0.18,-0.41l-2.51,-1.5l2.79,1.33l1.21,-0.74l0.0,-0.74l-1.32,-0.34l-0.36,0.55l-0.21,-1.01l-0.34,-0.1l0.13,-0.52l-0.49,-0.33l-1.39,0.61l-2.3,-0.76l0.65,-1.08l0.83,-0.1l1.03,-1.45l-0.91,-0.95l-0.46,0.12l-0.49,1.02l-0.44,-0.04l-0.81,0.56l-0.72,-0.9l-0.7,0.09l-0.17,0.38l-1.34,0.73l-0.14,0.68l0.29,0.46l-3.95,-1.35l-5.05,-0.71l0.12,-0.24l1.27,0.29l0.61,-0.53l2.1,0.39l0.23,-0.78l-0.94,-1.02l0.09,-0.7l-0.63,-0.28l-0.5,0.32l-0.28,-0.47l-1.9,0.19l-2.25,1.1l0.3,-0.63l-0.41,-0.58l-0.96,0.35l-0.58,-0.25l-0.23,0.44l0.2,0.71l-1.45,0.8l-0.4,0.63l-5.18,0.97l0.32,-0.52l-0.4,-0.52l-1.35,-0.28l-0.72,-0.53l0.69,-0.53l0.01,-0.78l-0.68,-0.13l-0.81,-0.66l-0.46,0.11l0.14,0.76l-0.42,1.77l-1.05,-1.39l-0.69,-0.45l-0.55,0.07l-0.3,0.71l0.82,1.77l-0.25,0.79l-1.39,0.99l-0.05,1.04l-0.6,0.22l-0.17,0.57l-1.48,0.56l0.28,-0.65l-0.21,-0.46l1.14,-1.03l0.07,-0.74l-0.4,-0.58l-1.19,-0.24l-0.41,-0.84l0.3,-1.7l-0.18,-1.61l-2.17,-1.12l-2.39,-2.46l0.32,-1.44l-0.15,-1.04ZM767.29,490.44l0.48,1.07l0.9,0.39l0.78,-0.15l1.41,1.67l0.91,0.58l1.86,0.69l1.61,0.07l0.55,-0.44l-0.08,-0.87l0.55,-0.65l-0.16,-1.21l0.76,-1.36l0.09,-1.81l-0.64,-1.62l-1.46,-2.01l-1.74,-1.32l-1.19,-0.13l-1.12,0.83l-1.83,3.16l-2.12,1.94l-0.13,0.77l0.57,0.41ZM644.36,434.13l-0.94,0.26l0.41,-0.44l0.53,0.18ZM665.13,435.7l0.98,-0.28l0.35,0.32l0.09,0.72l-1.42,-0.75ZM770.56,455.01l0.42,0.56l-0.43,0.75l0.0,-1.31ZM788.88,525.23l0.01,-0.07l0.01,0.03l-0.03,0.04ZM789.47,522.87l-0.22,-0.23l0.49,-0.32l-0.27,0.55ZM768.83,453.61l0.21,0.76l-0.31,2.33l0.28,1.79l-1.38,-3.23l1.19,-1.65ZM679.81,445.61l0.22,-0.2l0.36,0.02l-0.11,0.42l-0.47,-0.25Z"
                    data-code="US-FL"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M38.52,55.26l0.46,-1.32l0.18,0.45l0.65,0.3l1.04,-0.74l0.43,0.59l0.7,-0.03l0.17,-0.77l-0.92,-1.56l0.79,-0.74l-0.09,-1.36l0.49,-0.39l-0.1,-1.03l0.81,-0.27l0.05,0.5l0.48,0.41l0.95,-0.31l-0.09,-0.68l-1.35,-1.65l-0.9,0.15l-1.88,-0.56l0.17,-1.98l0.66,0.53l0.52,-0.07l0.29,-0.56l-0.16,-0.67l3.3,-0.52l0.26,-0.69l-1.7,-0.96l-0.86,-0.14l-0.37,-1.51l-0.7,-0.42l-0.81,-0.02l0.32,-4.73l-0.49,-1.28l0.1,-0.69l-0.4,-0.34l0.76,-5.74l-0.13,-2.46l-0.45,-0.62l-0.16,-1.36l-0.65,-1.33l-0.73,-0.57l-0.32,-2.45l0.35,-2.27l-0.15,-1.11l1.74,-3.3l-0.52,-1.23l4.59,3.9l1.19,0.38l0.92,0.75l0.81,1.3l1.86,1.08l3.24,0.91l0.84,0.77l1.42,0.11l1.73,1.02l2.33,0.73l1.46,-0.47l0.52,0.29l0.55,0.69l-0.03,1.09l0.55,0.74l0.31,0.11l0.49,-0.35l0.07,-0.75l0.45,0.03l0.63,1.39l-0.4,0.58l0.34,0.49l0.56,-0.04l0.72,-0.84l-0.38,-1.7l1.03,-0.24l-0.44,0.23l-0.21,0.69l1.27,4.41l-0.46,0.1l-1.67,1.73l0.22,-1.29l-0.22,-0.41l-1.31,0.31l-0.38,0.81l0.09,0.95l-1.37,1.7l-1.98,1.38l-1.06,1.41l-0.96,0.69l-1.1,1.67l-0.06,0.71l0.62,0.6l0.96,0.12l2.77,-0.48l1.22,-0.58l-0.03,-0.7l-0.64,-0.23l-2.94,0.79l-0.35,-0.3l3.23,-3.42l3.06,-0.88l0.89,-1.51l1.73,-1.54l0.53,0.57l0.54,-0.19l0.22,-1.81l-0.06,2.25l0.26,0.91l-0.99,-0.21l-0.64,0.77l-0.41,-0.73l-0.52,-0.19l-0.39,0.64l0.3,0.71l0.02,1.63l-0.21,-1.07l-0.67,-0.21l-0.47,0.69l-0.07,0.75l0.46,0.66l-0.63,0.58l-0.0,0.45l0.42,0.17l1.68,-0.57l0.25,1.09l-1.08,1.79l-0.08,1.05l-0.83,0.7l0.13,1.0l-0.85,-0.68l1.12,-1.44l-0.23,-0.96l-1.96,1.08l-0.38,0.64l-0.05,-2.11l-0.52,0.02l-1.03,1.59l-1.26,0.53l-1.14,1.87l-1.51,0.3l-0.46,0.43l-0.21,1.18l1.11,-0.03l-0.25,0.36l0.27,0.37l0.93,0.02l0.06,0.68l0.53,0.47l0.52,-0.27l0.35,-1.76l0.14,0.42l0.83,-0.15l1.11,1.48l1.31,-0.61l1.65,-1.48l0.98,-1.56l0.63,0.78l0.73,0.14l0.44,-0.23l-0.06,-0.86l1.56,-0.55l0.35,-0.94l-0.33,-1.27l0.22,-1.19l-0.18,-1.36l0.83,0.2l0.3,-0.92l-0.19,-0.75l-0.72,-0.63l0.89,-1.13l0.07,-1.75l1.24,-1.24l0.61,-1.37l1.61,-0.49l0.78,-1.16l-0.45,-0.66l-0.51,-0.02l-0.86,-1.3l0.16,-2.09l-0.26,-0.87l0.49,-0.79l0.06,-0.84l-1.15,-1.73l-0.63,-0.4l-0.17,-0.64l0.18,-0.5l0.59,0.23l0.53,-0.33l0.24,-1.8l0.79,-0.24l0.3,-1.0l-0.61,-2.32l0.44,-0.53l-0.03,-0.86l-0.96,-0.88l-0.95,0.3l-1.09,-2.66l0.93,-1.83l41.31,9.4l38.96,7.65l-9.66,54.39l-0.47,1.02l1.04,3.0l0.13,2.0l-1.0,1.3l0.73,1.88l-31.18,-5.92l-1.67,0.79l-7.24,-1.02l-1.68,0.92l-4.19,-0.12l-3.18,0.45l-1.64,0.75l-0.88,-0.26l-1.2,0.3l-1.51,-0.23l-2.43,-0.94l-0.91,0.46l-3.45,0.51l-2.11,-0.71l-1.65,0.3l-0.31,-1.36l-1.09,-0.88l-4.34,-1.46l-2.32,-0.11l-1.15,-0.51l-1.27,0.21l-1.89,0.86l-4.5,0.58l-1.11,-0.71l-1.15,-0.3l-1.61,-1.15l-1.84,-0.51l-0.63,-0.81l0.64,-6.82l-0.47,-0.95l-0.22,-1.9l-0.98,-1.35l-1.96,-1.67l-2.82,-0.11l-1.03,-1.31l-0.15,-1.05l-0.56,-0.63l-2.36,-0.31l-0.56,-0.3l-0.24,-0.79l-0.5,-0.18l-0.97,0.35l-0.84,-0.26l-1.1,0.4l-0.97,-1.47l-0.89,-0.22ZM61.85,39.78l0.16,0.74l-0.42,0.49l0.0,-0.91l0.26,-0.31ZM71.27,20.38l-0.61,0.87l-0.15,0.52l0.11,-1.01l0.65,-0.38ZM71.14,15.62l-0.09,-0.05l0.05,-0.04l0.04,0.1ZM70.37,15.48l-0.77,0.39l0.37,-0.68l-0.07,-0.6l0.22,-0.07l0.25,0.97ZM57.56,42.45l0.05,-0.02l-0.01,0.01l-0.04,0.02ZM67.75,19.23l1.73,-2.1l0.47,-0.02l0.53,1.71l-0.35,-0.55l-0.51,-0.12l-0.55,0.44l-0.35,-0.09l-0.35,0.73l-0.63,-0.01ZM67.87,20.4l0.44,0.0l0.61,0.5l0.08,0.35l-0.79,-0.2l-0.33,-0.65ZM68.84,23.16l-0.1,0.51l-0.0,0.0l-0.02,-0.24l0.12,-0.28ZM69.15,25.42l0.08,0.04l0.12,-0.04l-0.16,0.11l-0.05,-0.1ZM69.52,25.33l0.48,-0.93l1.02,1.21l0.11,1.12l-0.34,0.36l-0.34,-0.09l-0.27,-1.55l-0.67,-0.12ZM66.34,9.97l0.48,-0.34l0.18,1.51l-0.22,-0.05l-0.44,-1.12ZM68.04,9.66l0.83,0.8l-0.65,0.31l-0.18,-1.11ZM66.69,38.03l0.34,-1.07l0.21,-0.25l-0.03,1.07l-0.52,0.26ZM66.99,33.31l0.1,-1.04l0.35,-0.34l-0.23,1.56l-0.22,-0.18ZM66.51,14.27l-0.41,-0.4l0.6,-0.75l-0.18,0.61l-0.01,0.55ZM66.68,14.62l0.4,0.2l-0.08,0.12l-0.29,-0.12l-0.03,-0.2ZM66.74,12.96l-0.01,-0.1l0.05,-0.12l-0.04,0.23ZM64.36,13.12l-1.06,-0.82l0.19,-1.81l1.33,1.92l-0.35,0.18l-0.11,0.54ZM62.18,42.55l0.23,-0.25l0.02,0.01l-0.13,0.31l-0.12,-0.07ZM60.04,40.3l-0.09,-0.19l0.04,-0.07l0.0,0.13l0.05,0.14Z"
                    data-code="US-WA"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                    cursor="pointer"
                  />
                  <path
                    d="M477.9,239.67l0.44,0.63l0.76,0.18l1.04,0.8l2.19,-1.08l-0.0,0.75l1.08,0.79l0.23,1.44l-0.95,-0.15l-0.6,0.31l-0.17,0.97l-1.14,1.37l-0.06,1.14l-0.79,0.5l0.04,0.64l1.56,2.1l2.0,1.49l0.2,1.13l0.42,0.86l0.74,0.56l0.32,1.11l1.89,0.91l1.54,0.26l2.67,46.82l-31.55,1.48l-31.97,0.88l-31.98,0.26l-32.05,-0.37l1.21,-65.47l27.9,0.35l27.86,-0.14l27.85,-0.64l27.68,-1.12l1.65,1.23Z"
                    data-code="US-KS"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M598.7,107.43l0.83,-0.15l-0.13,0.81l-0.56,0.01l-0.14,-0.68ZM594.22,116.05l0.47,-0.41l0.26,-2.36l0.95,-0.25l0.64,-0.69l0.22,-1.4l0.41,-0.63l0.63,-0.03l0.06,0.38l-0.76,0.06l-0.18,0.51l0.17,1.27l-0.38,0.17l-0.11,0.58l0.56,0.57l-0.24,0.65l-0.5,0.33l-0.69,1.91l0.07,1.23l-1.05,2.28l-0.41,0.15l-0.86,-0.97l-0.19,-0.72l0.31,-1.57l0.62,-1.05ZM510.06,124.08l0.41,-0.27l0.28,-0.9l-0.45,-1.48l0.04,-1.91l0.7,-1.16l0.53,-2.25l-1.61,-2.91l-0.83,-0.36l-1.28,-0.01l-0.21,-2.31l1.67,-2.26l-0.05,-0.77l0.77,-1.55l1.95,-1.09l0.48,-0.75l0.97,-0.25l0.45,-0.75l1.16,-0.14l1.04,-1.56l-0.97,-12.11l1.03,-0.35l0.22,-1.1l0.73,-0.97l0.78,0.69l1.68,0.64l2.61,-0.56l3.28,-1.57l2.65,-0.82l2.21,-2.12l0.31,0.29l1.39,-0.11l1.25,-1.48l0.79,-0.58l1.04,-0.1l0.4,-0.52l1.07,0.99l-0.48,1.68l-0.67,1.01l0.23,1.61l-1.21,2.21l0.64,0.66l2.5,-1.09l0.72,-0.86l2.16,1.22l2.34,0.47l0.44,0.54l0.86,-0.13l1.6,0.7l2.23,3.54l15.48,2.52l4.65,1.96l1.68,-0.17l1.63,0.42l1.33,-0.59l3.17,0.71l2.18,0.09l0.85,0.41l0.56,0.89l-0.42,1.09l0.41,0.77l3.4,0.63l1.41,1.13l-0.16,0.71l0.59,1.11l-0.36,0.81l0.43,1.25l-0.78,1.25l-0.03,1.76l0.91,0.63l1.38,-0.26l1.02,-0.72l0.2,0.26l-0.79,2.44l0.04,1.31l1.32,1.46l0.84,0.35l-0.24,2.02l-2.42,1.2l-0.51,0.79l0.04,1.26l-1.61,3.49l-0.4,3.5l1.11,0.82l0.92,-0.04l0.5,-0.36l0.49,-1.37l1.82,-1.47l0.66,-2.53l1.06,-1.7l0.14,0.25l0.45,-0.07l0.57,-0.7l0.88,-0.4l1.12,1.12l0.59,0.19l-0.29,2.21l-1.18,2.82l-0.56,5.58l0.23,1.11l0.8,0.93l0.07,0.52l-0.51,0.98l-1.3,1.34l-0.86,3.89l0.15,2.57l0.72,1.2l0.06,1.24l-1.07,3.22l0.12,2.12l-0.73,2.11l-0.28,2.47l0.59,2.02l-0.04,1.32l0.49,0.54l-0.21,1.7l0.92,0.78l0.54,2.43l1.2,1.54l0.08,1.69l-0.33,1.45l0.47,2.95l-44.2,4.6l-0.19,-0.79l-1.56,-2.19l-4.94,-0.84l-1.06,-1.35l-0.36,-1.69l-0.9,-1.21l-0.86,-4.9l1.04,-2.62l-0.09,-0.99l-0.71,-0.79l-1.44,-0.48l-0.71,-1.76l-0.47,-6.02l-0.7,-1.4l-0.52,-2.56l-1.15,-0.6l-1.1,-1.56l-0.93,-0.11l-1.17,-0.75l-1.71,0.09l-2.67,-1.79l-2.3,-3.5l-2.64,-2.1l-2.94,-0.53l-0.73,-1.24l-1.12,-1.0l-3.12,-0.45l-3.53,-2.74l0.45,-1.24l-0.12,-1.61l0.25,-0.81l-0.88,-3.11ZM541.58,78.25l0.05,-0.28l0.03,0.16l-0.08,0.12ZM537.91,83.72l0.28,-0.21l0.05,0.08l-0.33,0.12Z"
                    data-code="US-WI"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M10.69,140.12l0.01,-1.77l0.5,-0.84l0.32,-1.95l1.12,-1.91l0.24,-1.9l-0.72,-2.57l-0.33,-0.15l-0.12,-1.81l3.04,-3.82l2.5,-5.98l0.01,0.77l0.52,0.52l0.49,-0.28l0.6,-1.6l0.47,-0.48l0.31,0.98l1.12,0.41l0.33,-0.54l-0.45,-1.76l0.27,-0.87l-0.45,-0.14l-0.79,0.32l1.74,-3.16l1.13,-0.96l0.89,0.3l0.49,-0.29l-0.47,-1.08l-0.81,-0.4l1.77,-4.63l0.47,-0.57l0.02,-0.99l1.08,-2.67l0.62,-2.6l1.04,-1.92l0.33,0.28l0.66,-0.33l-0.04,-0.6l-0.76,-0.62l1.06,-2.6l0.32,0.22l0.59,-0.19l0.13,-0.35l-0.04,-0.51l-0.57,-0.32l0.85,-3.84l1.23,-1.8l0.83,-3.04l1.14,-1.76l0.83,-2.45l0.26,-1.21l-0.18,-0.5l1.19,-1.08l-0.32,-1.64l0.96,0.57l0.78,-0.63l-0.39,-0.75l0.2,-0.65l-0.77,-0.77l0.51,-1.07l1.3,-0.86l0.06,-0.46l-0.93,-0.34l-0.33,-1.25l0.97,-2.14l-0.04,-1.48l0.86,-0.53l0.58,-1.33l0.18,-1.96l-0.21,-1.45l0.83,1.17l0.6,0.18l-0.11,0.89l0.55,0.53l0.83,-0.96l-0.27,-0.99l0.21,-0.07l0.24,0.56l0.69,0.32l1.51,0.04l0.37,-0.36l1.37,-0.19l0.99,2.08l2.43,0.92l1.25,-0.64l0.78,0.04l1.72,1.51l0.77,1.04l0.21,1.9l0.43,0.78l-0.03,2.05l-0.39,1.24l0.19,0.93l-0.43,1.74l0.26,1.45l0.79,0.85l1.94,0.56l1.44,1.05l1.36,0.41l1.04,0.69l4.98,-0.53l2.9,-1.06l1.14,0.51l2.23,0.09l4.24,1.43l0.69,0.54l0.19,1.15l0.57,0.58l1.86,-0.27l2.11,0.71l3.79,-0.55l0.69,-0.42l2.19,0.93l1.64,0.24l1.2,-0.3l0.88,0.26l1.89,-0.78l3.07,-0.43l4.16,0.13l1.61,-0.91l7.17,1.02l0.96,-0.19l0.79,-0.58l31.27,5.93l0.23,1.81l0.93,1.82l1.16,0.63l1.96,1.86l0.57,2.45l-0.16,1.0l-3.69,4.55l-0.4,1.41l-1.39,2.63l-2.21,2.42l-0.65,2.68l-1.49,1.84l-2.23,1.5l-1.92,3.35l-1.49,1.27l-0.62,2.02l-0.12,1.87l0.28,0.92l0.56,0.61l0.54,0.04l0.39,-0.35l0.63,0.76l0.89,-0.05l0.07,0.88l0.81,0.95l-0.46,1.0l-0.65,0.06l-0.33,0.4l0.21,1.8l-1.03,2.56l-1.22,1.41l-6.86,39.16l-26.21,-4.99l-28.9,-6.05l-28.8,-6.61l-28.95,-7.24l-1.48,-2.59l0.2,-2.36l-0.23,-0.89Z"
                    data-code="US-OR"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                    cursor="pointer"
                  />
                  <path
                    d="M583.02,306.59l0.35,-2.18l1.13,0.96l0.72,0.2l0.75,-0.36l0.46,-0.88l0.87,-3.55l-0.54,-1.75l0.38,-0.86l-0.1,-1.88l-1.27,-2.04l1.79,-3.21l1.24,-0.51l0.73,0.06l7.03,2.56l0.81,-0.2l0.65,-0.72l0.24,-1.93l-1.49,-2.14l-0.24,-1.44l0.2,-0.87l0.4,-0.52l1.1,-0.18l1.24,-0.83l3.0,-0.95l0.64,-0.51l0.15,-1.13l-1.53,-2.05l-0.08,-0.68l1.33,-1.97l0.14,-1.16l1.25,0.42l1.12,-1.33l-0.68,-2.0l1.92,0.9l1.72,-0.84l0.03,1.18l1.0,0.46l0.99,-0.94l0.02,-1.36l0.51,0.16l1.9,-0.96l4.41,1.52l0.64,0.94l0.86,0.18l0.59,-0.59l0.73,-2.53l1.38,-0.55l1.39,-1.34l0.86,1.29l0.77,0.42l1.16,-0.13l0.11,0.75l0.95,0.19l0.67,-0.62l0.03,-1.01l0.84,-0.38l0.26,-0.48l-0.25,-2.09l0.84,-0.4l0.34,-0.56l-0.06,-0.69l1.25,-0.56l0.34,-0.72l0.38,1.47l0.61,0.6l1.46,0.64l1.25,-0.0l1.11,0.81l0.53,-0.11l0.26,-0.55l1.1,-0.46l0.53,-0.69l0.04,-3.48l0.85,-2.18l1.02,0.18l1.55,-1.19l0.75,-3.46l1.04,-0.37l1.65,-2.23l0.0,-0.81l-1.18,-2.88l2.78,-0.59l1.54,0.81l3.85,-2.82l2.23,-0.46l-0.18,-1.07l0.36,-1.47l-0.32,-0.36l-1.22,-0.04l0.58,-1.39l-1.09,-1.54l1.65,-1.83l1.81,1.18l0.92,-0.11l1.93,-1.01l0.78,0.88l1.76,0.54l0.57,1.28l0.94,0.92l0.79,1.84l2.6,0.67l1.87,-0.57l1.63,0.27l2.18,1.85l0.96,0.43l1.28,-0.18l0.61,-1.31l0.99,-0.54l1.35,0.5l1.34,0.04l1.33,1.09l1.26,-0.69l1.41,-0.15l1.81,-2.55l1.72,-1.03l0.92,2.35l0.7,0.83l2.45,0.81l1.35,0.97l0.75,1.05l0.93,3.35l-0.37,0.45l0.09,0.72l-0.44,0.61l0.02,0.53l2.24,2.62l1.35,0.92l-0.08,0.89l1.34,0.97l0.58,1.36l1.55,1.2l0.98,1.62l2.14,0.84l1.09,1.12l2.14,0.25l-4.86,6.13l-5.06,4.16l-0.42,0.86l0.22,1.25l-2.07,1.93l0.04,1.64l-3.06,1.63l-0.8,2.38l-1.71,0.6l-2.7,1.83l-1.66,0.48l-3.39,2.42l-23.95,3.09l-8.8,1.42l-7.47,0.86l-7.68,0.46l-22.71,3.52l-0.64,-0.56l-3.63,0.09l-0.41,0.6l1.03,3.57l-23.0,2.73ZM580.9,306.78l-0.59,0.08l-0.06,-0.55l0.47,-0.01l0.18,0.49Z"
                    data-code="US-KY"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M364.18,239.57l-1.22,65.87l-29.29,-0.9l-29.38,-1.43l-29.35,-1.95l-32.17,-2.75l8.33,-87.15l27.79,2.4l28.23,1.92l29.58,1.46l27.95,0.87l-0.46,21.66Z"
                    data-code="US-CO"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M664.99,178.81l1.67,0.47l1.04,-0.3l1.74,1.07l2.07,0.26l1.47,1.18l1.71,0.23l-2.19,1.18l-0.12,0.47l0.42,0.24l2.46,0.19l1.39,-1.1l1.77,-0.25l3.39,0.96l0.92,-0.08l1.48,-1.29l1.74,-0.6l1.15,-0.96l1.91,-0.97l2.62,-0.03l1.09,-0.62l1.24,-0.06l1.07,-0.8l4.24,-5.46l4.53,-3.47l6.92,-4.36l5.83,28.05l-0.51,0.54l-1.28,0.43l-0.41,0.95l1.65,2.24l0.02,2.11l0.41,0.26l0.31,0.94l-0.04,0.76l-0.54,0.83l-0.5,4.08l0.18,3.21l-0.58,0.41l0.34,1.11l-0.35,1.74l-0.39,0.54l0.76,1.23l-0.25,1.87l-2.41,2.65l-0.82,1.86l-1.37,1.5l-1.24,0.67l-0.6,0.7l-0.87,-0.92l-1.18,0.14l-1.32,1.74l-0.09,1.32l-1.78,0.85l-0.78,2.25l0.28,1.58l-0.94,0.85l0.3,0.67l0.63,0.41l0.27,1.3l-0.8,0.17l-0.5,1.6l0.06,-0.93l-0.91,-1.26l-1.53,-0.55l-1.07,0.71l-0.82,1.98l-0.34,2.69l-0.53,0.82l1.22,3.58l-1.27,0.39l-0.28,0.42l-0.25,3.12l-2.66,1.2l-1.0,0.05l-0.76,-1.06l-1.51,-1.1l-2.34,-0.73l-1.17,-1.92l-0.31,-1.14l-0.42,-0.33l-0.73,0.13l-1.84,1.17l-1.1,1.29l-0.4,1.05l-1.43,0.15l-0.87,0.61l-1.11,-1.0l-3.14,-0.59l-1.37,0.72l-0.53,1.25l-0.71,0.05l-3.04,-2.26l-1.93,-0.29l-1.77,0.56l-2.14,-0.52l-0.55,-1.54l-0.96,-0.97l-0.63,-1.38l-2.03,-0.76l-1.14,-1.01l-0.97,0.26l-1.31,0.89l-0.46,0.03l-1.79,-1.23l-0.61,0.2l-0.6,0.71l-8.53,-55.69l20.43,-4.26ZM675.61,181.34l0.53,-0.79l0.67,0.41l-0.48,0.35l-0.72,0.03ZM677.31,180.77l0.01,-0.0l0.01,-0.0l-0.02,0.0Z"
                    data-code="US-OH"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M399.06,359.31l-0.05,-42.03l-0.39,-0.4l-26.69,-0.22l-25.13,-0.6l0.31,-10.23l36.7,0.74l36.0,-0.07l35.99,-0.86l35.56,-1.62l0.6,10.68l4.55,24.34l1.41,37.88l-1.2,-0.22l-0.29,-0.36l-2.13,-0.21l-0.82,-0.79l-2.11,-0.39l-1.77,-2.05l-1.23,-0.22l-2.25,-1.57l-1.5,-0.4l-0.8,0.46l-0.23,0.88l-0.82,0.24l-0.46,0.62l-2.47,-0.14l-0.47,-0.19l-0.27,-0.68l-1.05,-0.61l-2.3,1.29l-1.17,0.2l-0.19,0.56l-0.63,0.28l-2.12,-0.77l-1.7,1.18l-1.17,0.08l-0.89,0.42l-0.83,1.37l-1.48,0.06l-0.57,1.25l-1.26,-1.55l-1.7,-0.1l-0.32,-0.58l-1.21,-0.46l-0.02,-0.96l-0.44,-0.5l-1.24,-0.18l-0.73,1.38l-0.66,0.11l-0.84,-0.5l-0.97,0.07l-0.71,-1.51l-1.09,-0.35l-1.17,0.57l-0.45,1.7l-0.7,-0.08l-0.49,0.43l0.29,0.73l-0.51,1.68l-0.43,0.19l-0.55,-0.55l-0.3,-0.91l0.39,-1.65l-0.75,-0.86l-0.8,0.18l-0.49,0.76l-0.84,-0.18l-0.92,0.98l-1.07,0.13l-0.53,-1.36l-1.99,-0.19l-0.3,-1.48l-1.19,-0.53l-0.82,0.33l-2.12,2.15l-1.21,0.51l-0.97,-0.38l0.19,-1.25l-0.28,-1.13l-2.33,-0.68l-0.07,-2.18l-0.43,-0.55l-2.11,0.39l-2.52,-0.25l-0.64,0.26l-0.81,1.21l-0.95,0.06l-1.77,-1.77l-0.97,-0.12l-1.5,0.56l-2.68,-0.63l-1.86,-1.0l-1.05,0.25l-2.46,-0.3l-0.17,-2.12l-0.85,-0.87l-0.44,-1.02l-1.16,-0.41l-0.7,-0.83l-0.83,0.08l-0.44,1.64l-2.22,-0.68l-1.07,0.6l-0.96,-0.09l-3.79,-3.78l-1.12,-0.43l-0.8,0.08Z"
                    data-code="US-OK"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M693.03,248.42l3.95,-1.54l0.35,-0.71l0.12,-2.77l1.15,-0.22l0.4,-0.61l-0.57,-2.49l-0.61,-1.24l0.49,-0.64l0.36,-2.77l0.68,-1.66l0.45,-0.39l1.24,0.55l0.41,0.71l-0.14,1.13l0.71,0.46l0.78,-0.44l0.48,-1.42l0.49,0.21l0.57,-0.2l0.2,-0.44l-0.63,-2.09l-0.75,-0.55l0.81,-0.79l-0.26,-1.71l0.74,-2.0l1.65,-0.51l0.17,-1.6l1.02,-1.42l0.43,-0.08l0.65,0.79l0.67,0.19l2.28,-1.59l1.5,-1.64l0.79,-1.83l2.45,-2.67l0.37,-2.41l-0.73,-1.0l0.71,-2.33l-0.25,-0.76l0.59,-0.58l-0.27,-3.43l0.47,-3.93l0.53,-0.8l0.08,-1.11l-0.38,-1.21l-0.39,-0.33l-0.04,-2.01l-1.57,-1.91l0.44,-0.54l0.85,-0.1l0.3,-0.33l4.03,19.34l0.47,0.31l16.6,-3.55l2.17,10.68l0.5,0.37l2.06,-2.5l0.97,-0.56l0.34,-1.03l1.63,-1.99l0.25,-1.05l0.52,-0.4l1.19,0.45l0.74,-0.32l1.32,-2.6l0.6,-0.46l-0.04,-0.85l0.42,0.59l1.81,0.52l3.2,-0.57l0.78,-0.86l0.07,-1.46l2.0,-0.74l1.02,-1.69l0.67,-0.1l3.16,1.5l1.81,-0.71l-0.45,1.02l0.56,0.92l1.27,0.42l0.09,0.96l1.13,0.43l0.09,1.2l0.33,0.42l-0.58,3.64l-9.0,-4.48l-0.64,0.24l-0.31,1.14l0.38,1.61l-0.52,1.62l0.41,2.28l-1.36,2.4l-0.42,1.76l-0.72,0.53l-0.42,1.11l-0.27,0.21l-0.61,-0.23l-0.37,0.33l-1.25,3.28l-1.84,-0.78l-0.64,0.25l-0.94,2.77l0.08,1.47l-0.73,1.14l-0.19,2.33l-0.89,2.2l-3.25,-0.36l-1.44,-1.76l-1.71,-0.24l-0.5,0.41l-0.26,2.17l0.19,1.3l-0.32,1.45l-0.49,0.45l-0.31,1.04l0.23,0.92l-1.58,2.44l-0.04,2.1l-0.52,2.0l-2.58,4.73l-0.75,3.16l0.14,0.76l1.14,0.55l-1.08,1.38l0.06,0.6l0.45,0.4l-2.16,2.13l-0.55,-0.7l-0.84,0.15l-3.12,2.53l-1.03,-0.56l-1.32,0.26l-0.44,0.91l0.45,1.17l-0.91,0.91l-0.73,-0.05l-2.27,1.0l-1.21,0.96l-2.18,-1.36l-0.73,-0.01l-0.82,1.58l-1.1,0.49l-1.22,1.46l-1.08,0.08l-1.98,-1.09l-1.31,-0.01l-0.61,-0.74l-1.19,-0.6l-0.31,-1.33l-0.89,-0.55l0.36,-0.67l-0.3,-0.81l-0.85,-0.37l-0.84,0.25l-1.33,-0.17l-1.26,-1.19l-2.06,-0.79l-0.76,-1.43l-1.58,-1.24l-0.7,-1.49l-1.0,-0.6l-0.12,-1.09l-1.38,-0.95l-2.0,-2.27l0.71,-2.03l-0.25,-1.62l-0.66,-1.46Z"
                    data-code="US-WV"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M218.53,207.02l10.1,-86.6l25.46,2.74l26.8,2.4l26.83,1.91l27.85,1.46l-3.67,87.11l-27.32,-1.41l-28.21,-1.97l-29.69,-2.63l-28.14,-3.02Z"
                    data-code="US-WY"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M178.67,180.38l41.53,5.44l-2.51,21.5l0.35,0.45l32.24,3.43l-8.33,87.15l-42.54,-4.67l-42.41,-5.77l16.08,-108.34l5.58,0.82ZM187.74,191.46l-0.3,0.04l-0.25,0.62l0.74,3.68l-0.81,0.19l-0.5,1.31l1.15,0.59l0.35,-0.84l0.37,-0.18l0.92,1.14l0.83,1.68l-0.25,1.0l0.16,1.45l-0.4,0.77l0.4,0.52l-0.05,0.56l1.58,1.84l0.02,0.59l1.13,1.92l0.71,-0.1l0.83,-1.74l0.08,2.28l0.53,0.94l0.06,1.8l0.99,0.47l1.65,-0.67l2.48,-1.77l0.37,-1.25l3.32,-1.44l0.17,-0.54l-0.52,-1.02l-0.68,-0.84l-1.36,-0.7l-1.87,-4.59l-0.87,-0.46l0.87,-0.92l1.3,0.6l1.33,-0.15l0.92,-0.83l-0.06,-1.12l-1.55,-0.5l-0.81,0.42l-1.17,-0.12l0.27,-0.76l-0.58,-0.79l-1.86,-0.22l-0.56,1.13l0.28,0.78l-0.35,0.69l0.55,2.44l-0.91,0.32l-0.34,-0.42l0.22,-1.8l-0.42,-0.69l-0.06,-1.74l-0.68,-0.6l-1.32,-0.11l-1.07,-1.55l-0.19,-0.69l0.64,-0.55l0.36,-1.29l-0.83,-1.38l-1.23,-0.28l-0.99,0.81l-2.73,0.2l-0.35,0.63l0.62,0.83l-0.28,0.43ZM199.13,204.0l0.03,0.02l0.04,0.11l-0.07,-0.13ZM199.17,204.81l0.31,0.91l-0.18,0.9l-0.39,-0.93l0.25,-0.88Z"
                    data-code="US-UT"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                    cursor="pointer"
                  />
                  <path
                    d="M600.86,189.63l1.43,0.87l2.1,0.14l1.52,-0.38l2.63,-1.39l2.73,-2.1l32.3,-4.83l8.81,57.45l-0.66,1.15l0.3,0.92l0.81,0.79l-0.66,1.14l0.49,0.8l1.12,0.04l-0.36,1.14l0.18,0.51l-1.81,0.29l-3.18,2.55l-0.43,0.17l-1.4,-0.81l-3.46,0.91l-0.09,0.78l1.19,3.1l-1.4,1.88l-1.18,0.49l-0.45,0.89l-0.31,2.6l-1.11,0.88l-1.06,-0.24l-0.47,0.47l-0.85,1.95l0.05,3.14l-0.39,1.0l-1.38,0.85l-0.93,-0.68l-1.24,0.01l-1.48,-0.69l-0.62,-1.84l-1.89,-0.73l-0.44,0.3l-0.04,0.5l0.83,0.68l-0.62,0.31l-0.89,-0.35l-0.36,0.29l-0.04,0.48l0.54,0.93l-1.08,0.68l0.14,2.37l-1.06,0.65l-0.0,0.83l-0.16,0.37l0.08,-0.5l-0.33,-0.51l-1.6,0.18l-1.4,-1.69l-0.5,-0.08l-1.67,1.5l-1.57,0.69l-1.07,2.89l-0.81,-1.07l-2.79,-0.77l-1.11,-0.61l-1.08,-0.18l-1.76,0.92l-0.64,-1.02l-0.58,-0.18l-0.53,0.56l0.64,1.86l-0.34,0.84l-0.28,0.09l-0.02,-1.18l-0.42,-0.4l-0.58,0.01l-1.46,0.79l-1.41,-0.84l-0.85,0.0l-0.48,0.95l0.71,1.55l-0.49,0.74l-1.15,-0.39l-0.07,-0.54l-0.53,-0.44l0.55,-0.63l-0.35,-3.09l0.96,-0.78l-0.07,-0.58l-0.44,-0.23l0.69,-0.46l0.25,-0.61l-1.17,-1.47l0.46,-1.16l0.32,0.19l1.39,-0.55l0.33,-1.8l0.55,-0.4l0.44,-0.92l-0.06,-0.83l1.52,-1.07l0.06,-0.69l-0.41,-0.93l0.57,-0.86l0.14,-1.29l0.87,-0.51l0.4,-1.91l-1.08,-2.54l0.22,-0.8l-0.16,-1.11l-0.93,-0.91l-0.61,-1.5l-1.05,-0.78l-0.04,-0.59l0.92,-1.39l-0.63,-2.25l1.27,-1.31l-6.5,-50.68Z"
                    data-code="US-IN"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M540.07,225.55l0.86,-0.35l0.37,-0.67l-0.23,-2.33l-0.73,-0.93l0.15,-0.41l0.72,-0.69l2.42,-0.98l0.71,-0.65l0.63,-1.68l0.17,-2.11l1.65,-2.47l0.27,-0.94l-0.03,-1.22l-0.59,-1.95l-2.23,-1.88l-0.11,-1.77l0.67,-2.38l0.45,-0.37l4.6,-0.85l0.81,-0.41l0.82,-1.12l2.55,-1.0l1.43,-1.56l-0.01,-1.57l0.4,-1.71l1.42,-1.46l0.29,-0.74l0.33,-4.37l-0.76,-2.14l-4.02,-2.47l-0.28,-1.5l-0.48,-0.82l-3.64,-2.48l44.58,-4.64l-0.01,2.66l0.57,2.59l1.37,2.49l1.31,0.95l0.76,2.6l1.26,2.71l1.42,1.84l6.6,51.49l-1.22,1.13l-0.1,0.69l0.67,1.76l-0.84,1.09l-0.03,1.11l1.19,1.09l0.56,1.41l0.89,0.82l-0.1,1.8l1.06,2.31l-0.28,1.49l-0.87,0.56l-0.21,1.47l-0.59,0.93l0.34,1.2l-1.48,1.13l-0.23,0.41l0.28,0.7l-0.93,1.17l-0.31,1.19l-1.64,0.67l-0.63,1.67l0.15,0.8l0.97,0.83l-1.27,1.15l0.42,0.76l-0.49,0.23l-0.13,0.54l0.43,2.94l-1.15,0.19l0.08,0.45l0.92,0.78l-0.48,0.17l-0.03,0.64l0.83,0.29l0.04,0.42l-1.31,1.97l-0.25,1.19l0.59,1.22l0.7,0.64l0.37,1.08l-3.31,1.22l-1.19,0.82l-1.24,0.24l-0.77,1.01l-0.18,2.04l0.3,0.88l1.4,1.93l0.07,0.54l-0.53,1.19l-0.96,0.03l-6.3,-2.43l-1.08,-0.08l-1.57,0.64l-0.68,0.72l-1.44,2.95l0.06,0.66l-1.18,-1.2l-0.79,0.14l-0.35,0.47l0.59,1.13l-1.24,-0.79l-0.01,-0.68l-1.6,-2.21l-0.4,-1.12l-0.76,-0.37l-0.05,-0.49l0.94,-1.35l0.2,-1.03l-0.32,-1.01l-1.44,-2.02l-0.47,-3.18l-2.26,-0.99l-1.55,-2.14l-1.95,-0.82l-1.72,-1.34l-1.56,-0.14l-1.82,-0.96l-2.32,-1.78l-2.34,-2.44l-0.36,-1.95l2.37,-6.85l-0.25,-2.32l0.98,-2.06l-0.38,-0.84l-2.66,-1.45l-2.59,-0.67l-1.29,0.45l-0.86,1.45l-0.46,0.28l-0.44,-0.13l-1.3,-1.9l-0.43,-1.52l0.16,-0.87l-0.54,-0.91l-0.29,-1.65l-0.83,-1.36l-0.94,-0.9l-4.11,-2.52l-1.01,-1.64l-4.53,-3.53l-0.73,-1.9l-1.04,-1.21l-0.04,-1.6l-0.96,-1.48l-0.75,-3.54l0.1,-2.94l0.6,-1.28ZM585.52,295.52l0.05,0.05l0.04,0.04l-0.05,-0.0l-0.04,-0.09Z"
                    data-code="US-IL"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M89.36,517.03l0.84,0.08l0.09,0.36l-0.3,0.32l-0.64,0.3l-0.15,-0.15l0.25,-0.4l-0.12,-0.31l0.04,-0.2ZM91.79,517.2l0.42,-0.02l0.19,-0.11l0.26,-0.56l1.74,-0.37l2.26,0.07l1.57,0.63l0.84,0.69l0.02,1.85l0.32,0.18l0.0,0.34l0.25,0.27l-0.35,0.09l-0.25,-0.16l-0.23,0.08l-0.41,-0.33l-0.29,-0.04l-0.69,0.23l-0.91,-0.21l-0.07,-0.26l-0.24,-0.17l0.27,-0.21l0.74,0.72l0.46,-0.02l0.2,-0.48l-0.28,-0.44l-0.03,-0.3l-0.31,-0.67l-0.96,-0.52l-1.05,0.27l-0.57,0.69l-1.04,0.3l-0.44,-0.3l-0.48,0.12l-0.06,0.12l-0.63,-0.14l-0.26,0.06l-0.22,0.24l0.2,-0.3l-0.1,-0.55l0.12,-0.79ZM99.83,520.19l0.3,-0.07l0.29,-0.28l-0.03,-0.55l0.31,0.2l-0.06,0.45l0.83,0.92l-0.93,-0.51l-0.44,0.41l-0.13,-0.54l-0.13,-0.04ZM100.07,520.81l0.0,0.04l-0.03,0.0l0.02,-0.04ZM102.01,520.78l0.05,-0.34l0.33,-0.2l0.01,-0.12l-0.58,-1.24l0.1,-0.2l0.59,-0.24l0.29,-0.3l0.65,-0.34l0.62,-0.01l0.41,-0.13l0.81,0.1l1.42,-0.06l0.64,0.15l0.49,0.27l0.88,0.11l0.27,0.15l0.23,-0.22l0.27,-0.05l0.39,0.09l0.2,0.21l0.26,-0.05l0.2,0.38l0.44,0.31l0.1,0.23l0.7,-0.06l0.3,-0.77l0.44,-0.61l0.47,-0.21l1.78,-0.45l0.5,0.04l0.37,0.23l1.13,-0.38l0.66,0.04l-0.11,0.41l0.43,0.51l0.42,0.26l0.62,0.06l0.42,-0.43l0.14,-0.42l-0.34,-0.29l-0.31,-0.03l0.15,-0.44l-0.15,-0.38l1.04,-1.0l0.83,-0.99l0.12,-0.08l0.34,0.17l0.38,-0.02l0.32,0.3l0.19,0.37l0.66,-0.29l-0.1,-0.57l-0.43,-0.58l-0.46,-0.24l0.15,-0.44l0.77,-0.47l0.36,0.04l0.68,-0.2l0.8,-0.08l0.58,0.18l0.45,-0.16l-0.12,-0.52l0.66,-0.6l0.4,0.06l0.26,-0.11l0.43,-0.52l0.34,-0.12l0.23,-0.46l-0.42,-0.3l-0.38,0.03l-0.33,0.15l-0.36,0.39l-0.51,-0.09l-0.5,0.27l-2.19,-0.52l-1.69,-0.24l-0.71,-0.26l-0.12,-0.2l0.17,-0.32l0.04,-0.44l-0.28,-0.56l0.45,-0.35l0.43,-0.13l0.36,0.38l0.04,0.25l-0.15,0.44l0.07,0.39l0.56,0.12l0.32,-0.15l-0.03,-0.3l0.16,-0.35l-0.05,-0.75l-0.84,-1.05l0.01,-0.7l-0.67,-0.19l-0.19,0.24l-0.06,0.48l-0.41,0.22l-0.09,0.03l-0.26,-0.56l-0.34,-0.09l-0.51,0.41l-0.02,0.26l-0.15,0.15l-0.38,-0.02l-0.48,0.27l-0.24,0.54l-0.22,1.13l-0.13,0.32l-0.19,0.05l-0.31,-0.31l0.1,-2.67l-0.23,-0.99l0.19,-0.33l0.02,-0.27l-0.16,-0.29l-0.53,-0.27l-0.46,0.26l-0.1,-0.07l-0.35,0.13l-0.01,-0.54l-0.54,-0.61l0.19,-0.22l0.08,-0.65l-0.16,-0.37l-0.55,-0.26l-1.89,-0.01l-0.58,-0.34l-1.01,-0.12l-0.16,-0.12l-0.07,-0.22l-0.23,-0.07l-1.06,0.53l-0.75,-0.16l-0.12,-0.44l0.3,0.09l0.48,-0.08l0.31,-0.44l-0.21,-0.49l0.37,-0.49l0.83,0.04l0.43,-0.16l0.12,-0.35l-0.14,-0.42l-1.11,-0.64l0.09,-0.27l0.34,-0.17l0.38,-0.44l1.12,-0.0l0.23,-0.09l0.19,-0.32l0.03,-0.95l0.22,-0.54l0.07,-1.42l0.25,-0.45l-0.08,-0.58l0.07,-0.2l0.88,-0.74l0.02,-0.1l-0.09,-0.02l0.19,-0.16l-0.31,-0.35l-0.27,0.05l-0.04,-0.25l-0.09,-0.04l0.57,-0.22l0.33,-0.25l0.51,-0.1l0.24,-0.25l0.42,-0.0l0.19,0.18l0.41,0.08l0.29,-0.08l0.44,-0.55l-0.3,-0.34l-0.39,-0.07l-0.05,-0.33l-0.27,-0.31l-0.6,0.4l-0.43,-0.07l-1.12,0.62l-1.04,0.06l-0.34,0.18l-0.48,-0.03l-0.12,0.5l0.4,0.64l-0.26,0.19l-0.29,0.45l-0.19,-0.09l-0.17,-0.27l-0.76,-0.04l-1.16,-0.25l-0.81,-0.4l-1.05,-0.59l-0.78,-0.61l-0.52,-0.69l0.01,-0.21l0.6,-0.1l-0.06,-0.4l0.1,-0.24l-0.51,-1.06l0.1,-0.78l-0.18,-0.52l0.33,-0.54l-0.4,-0.34l-0.23,0.0l-0.44,-0.69l-0.01,-0.2l0.59,-0.14l0.3,-0.37l-0.05,-0.44l-0.36,-0.26l0.72,0.04l0.29,-0.13l0.18,-0.25l0.63,0.01l0.08,0.51l0.56,0.51l0.32,0.49l-0.03,0.09l-0.79,0.11l-0.53,0.51l0.31,0.45l0.94,-0.08l0.4,0.24l0.26,-0.01l0.39,-0.22l0.29,0.03l0.08,0.07l-0.51,0.6l-0.05,0.38l0.22,0.43l0.46,0.24l1.42,0.07l0.28,-0.17l0.16,-0.35l0.19,-0.08l-0.2,-0.74l0.35,-0.35l-0.02,-0.33l-0.18,-0.25l0.15,-0.43l-0.08,-0.13l-0.52,-0.26l-0.77,-0.01l-0.34,0.1l-1.51,-1.2l-0.01,-0.53l-0.35,-0.39l-0.26,-0.12l-0.15,-0.38l0.55,0.15l0.53,-0.4l-0.17,-0.41l-0.7,-0.51l0.4,-0.45l-0.14,-0.5l0.31,-0.15l0.27,0.08l0.44,-0.1l0.45,0.27l0.75,-0.04l0.67,-0.44l-0.08,-0.48l-0.18,-0.19l-0.48,-0.03l-0.51,0.16l-0.43,-0.19l-1.02,-0.02l-0.26,0.14l-0.44,0.04l-0.36,0.29l-0.62,0.09l-0.15,0.12l-0.15,0.42l-0.13,-0.19l0.27,-0.52l0.36,-0.24l-0.1,-0.44l-0.48,-0.6l0.03,-0.1l0.37,0.1l0.4,-0.18l0.16,-0.22l0.07,-0.36l-0.22,-0.6l0.55,0.23l0.42,-0.5l-0.44,-0.59l0.38,0.32l0.94,0.37l0.2,-0.44l0.14,0.01l-0.04,-0.54l0.12,-0.36l0.48,-0.28l0.49,0.01l1.96,-0.47l0.8,-0.03l0.3,0.25l-0.01,0.44l0.19,0.27l-0.27,0.16l0.13,0.47l0.35,0.15l0.74,0.01l0.29,-0.39l-0.13,-0.45l0.08,-0.34l1.21,-0.11l0.29,-0.63l-0.31,-0.24l-0.93,-0.04l0.03,-0.08l0.41,-0.03l0.15,-0.63l0.72,-0.27l0.86,0.88l0.32,0.11l0.38,-0.28l0.08,-0.27l-0.04,-0.41l-0.18,-0.26l0.34,0.0l0.69,0.32l0.35,0.31l0.54,0.81l-0.06,0.29l-0.38,-0.09l-0.52,0.21l-0.13,0.47l0.43,0.24l1.07,0.06l0.05,0.52l0.31,0.3l0.91,0.49l1.02,0.09l0.53,-0.18l0.41,0.17l0.49,-0.0l1.61,-0.32l0.1,0.49l1.67,0.97l0.28,0.31l0.53,0.32l1.06,0.37l1.81,-0.2l0.56,-0.21l0.47,-0.49l0.2,-0.57l0.15,-0.95l0.61,-1.1l0.01,-0.29l-0.24,-0.88l0.14,-0.05l-0.03,-0.19l0.58,0.25l0.2,-0.1l0.86,0.0l0.36,-0.17l0.41,-0.47l0.07,-0.93l-0.19,-0.43l0.22,-0.03l0.11,-0.44l-0.23,-0.32l-0.73,-0.39l-0.29,0.12l-0.43,-0.04l-0.52,0.2l-0.21,-0.12l-0.29,-0.6l-0.31,-0.29l-0.51,0.0l-0.02,0.1l-0.52,-0.04l-0.43,-0.31l-0.56,-0.02l-0.32,0.1l-1.04,-0.24l-0.48,0.03l-0.33,0.16l0.04,-0.42l-0.29,-0.71l-0.21,-0.97l-0.49,-0.23l-0.55,-0.08l-0.29,0.09l-0.47,-0.64l-0.48,-0.4l-0.5,-0.25l-1.14,-1.02l-0.95,-0.24l-0.2,-0.27l-0.49,-0.27l-0.11,-0.23l-0.63,-0.01l-0.04,0.13l-0.9,-1.22l-1.86,-2.14l-0.25,-0.55l-0.0,-0.32l0.07,-0.19l0.27,0.06l0.27,-0.13l0.35,-0.76l-0.41,-1.02l0.05,-0.11l0.4,0.19l0.51,-0.05l0.41,-0.17l0.51,0.66l0.43,0.23l0.48,-0.4l-0.02,-0.33l-0.32,-0.66l-0.48,-0.41l-0.46,-0.78l-0.84,-0.88l-0.12,-0.02l-0.98,-1.16l-0.33,-0.52l-0.04,-0.3l-0.46,-0.96l0.41,0.03l0.54,0.45l0.34,0.15l0.44,-0.1l0.12,-0.17l0.2,0.03l0.06,-0.15l0.18,0.03l0.17,0.41l0.2,0.18l1.09,0.35l1.08,-0.18l1.53,0.45l0.14,0.13l-0.06,0.06l0.19,0.45l0.88,0.89l1.03,0.47l0.56,-0.36l-0.06,-0.35l-0.37,-0.64l1.48,0.48l0.36,0.26l0.11,0.4l0.61,0.16l1.2,0.07l0.48,0.24l1.49,0.99l0.18,0.45l-0.34,0.04l-0.1,0.06l-0.4,0.34l-0.16,0.3l-0.6,-0.28l-0.52,-0.06l-0.12,0.69l0.62,0.52l0.02,0.52l0.16,0.37l0.28,0.32l0.91,0.59l0.18,0.29l0.46,0.4l0.69,0.3l0.39,0.29l-0.14,0.25l0.02,0.32l0.38,0.24l0.2,-0.05l0.26,0.12l0.44,0.49l0.56,0.16l0.39,0.46l-0.08,0.39l0.24,0.31l0.41,0.19l0.41,-0.15l0.03,-0.15l1.39,-0.46l0.24,0.52l0.24,0.25l-0.25,0.06l0.01,0.5l0.38,0.29l0.43,0.02l0.5,-0.24l0.36,-0.41l-0.05,-0.98l-0.45,-0.65l0.19,0.01l0.65,1.54l0.23,0.25l1.6,0.95l0.53,-0.01l0.29,-0.27l0.34,-0.59l-0.02,-0.44l0.3,-0.38l-0.16,-0.23l-0.72,-0.38l-0.44,-0.04l-0.49,-0.92l-0.89,-0.53l-0.42,-0.12l-0.61,0.21l-0.32,-0.28l-0.0,-0.43l-0.16,-0.19l-0.23,-0.71l0.64,-0.39l0.29,-0.02l0.35,0.29l0.32,0.05l0.37,-0.41l-0.0,-0.15l-0.75,-1.21l-1.13,-0.68l-0.06,-0.29l0.18,-0.28l-0.15,-0.48l-0.43,-0.23l-0.43,0.29l-0.42,0.07l-0.25,-0.44l-0.53,-0.4l-0.31,-0.1l-0.25,-0.41l-1.35,-1.4l0.59,-1.11l0.15,-1.07l-0.1,-1.05l-0.51,-1.13l-0.29,-1.11l-0.36,-0.48l-0.85,-2.25l-1.06,-1.45l-0.08,-0.73l-0.38,-0.89l0.17,-0.17l0.91,-0.32l1.04,-1.04l1.08,1.08l1.75,1.29l0.84,0.44l1.33,0.95l1.37,0.54l1.36,0.24l1.49,-0.09l0.3,0.11l0.42,-0.05l0.4,-0.16l0.23,-0.26l0.3,-0.14l0.42,-0.5l0.56,-0.03l0.17,-0.31l1.66,0.14l0.96,-0.29l0.5,0.12l0.03,0.15l0.87,0.52l0.35,0.13l0.52,-0.01l0.77,0.56l0.91,0.33l0.1,0.2l0.28,-0.04l0.42,0.16l1.99,0.27l-0.05,0.31l0.11,0.18l-0.18,0.06l-0.15,0.66l0.44,0.21l0.04,0.83l0.28,0.36l0.44,-0.14l0.1,-0.13l0.05,-0.46l0.22,-0.51l1.1,0.62l0.73,0.1l0.29,-0.35l-0.22,-0.39l-0.74,-0.5l-0.43,-0.14l-0.07,-0.18l0.03,-0.25l0.76,-0.07l0.26,0.1l0.01,0.3l0.27,0.62l0.54,0.33l0.14,-0.17l0.45,0.24l0.16,-0.08l0.63,0.55l1.13,0.63l0.13,-0.03l0.81,0.55l0.59,0.22l1.21,0.25l1.27,0.12l1.06,-0.17l1.19,0.0l0.01,0.22l0.26,0.49l0.68,0.48l0.08,0.62l0.56,0.17l0.57,0.45l-0.61,-0.02l-0.77,-0.42l-0.42,0.03l-0.44,0.21l0.1,0.48l0.23,0.26l-0.19,0.32l0.18,0.59l0.33,0.11l0.33,-0.12l0.64,0.36l0.3,0.06l0.31,-0.08l0.23,-0.23l0.33,-0.02l0.39,0.36l0.26,0.01l0.25,0.18l0.33,0.02l0.27,-0.16l0.13,0.09l0.16,0.38l-0.54,-0.04l-0.29,0.34l0.21,0.4l0.2,0.11l0.07,0.35l0.89,0.58l-0.04,0.13l0.18,0.3l0.49,0.21l0.94,-0.04l0.96,0.68l0.58,0.26l0.32,0.03l0.37,0.42l0.23,0.1l0.1,0.31l0.34,0.26l0.21,0.38l0.34,0.08l0.26,-0.12l0.25,0.23l-0.55,0.05l-0.29,0.34l-0.41,0.04l-0.18,0.63l0.35,0.33l1.4,0.72l-0.08,0.69l1.48,0.96l0.49,0.67l0.27,0.15l0.49,-0.16l1.05,0.48l0.24,-0.05l0.38,0.32l0.16,0.58l1.1,0.42l0.72,0.06l0.21,0.19l0.85,0.38l0.32,0.34l0.31,0.09l0.59,0.53l0.2,0.37l0.73,0.47l0.25,0.29l0.1,0.53l0.48,0.29l0.55,0.03l0.31,0.44l0.56,0.33l-0.11,0.34l0.39,0.41l1.66,1.19l0.76,0.36l0.16,-0.03l1.78,1.0l0.42,0.4l0.69,0.34l0.47,0.65l0.08,-0.08l-0.02,0.25l0.22,0.06l0.5,0.55l0.02,0.21l0.5,0.23l0.54,0.42l1.19,0.58l0.8,0.03l0.63,0.31l0.03,0.31l0.43,0.12l0.33,-0.2l0.19,-0.0l0.43,0.12l1.02,0.51l0.05,0.25l0.41,0.27l0.22,-0.19l0.58,0.53l0.31,0.09l0.53,0.55l-0.01,0.24l0.49,0.42l0.02,0.24l0.27,0.43l0.55,0.34l0.18,0.4l0.42,0.15l0.58,0.51l0.56,0.96l0.35,0.26l0.53,0.01l0.15,0.11l-23.69,51.51l0.09,0.46l1.53,1.4l0.52,0.02l0.19,-0.15l1.17,1.29l0.41,0.12l1.37,-0.4l1.79,0.68l-0.86,0.96l-0.08,0.38l0.35,1.01l0.91,0.92l-0.08,0.65l0.1,0.44l2.43,4.76l-0.2,1.48l-0.29,0.38l0.19,0.62l0.58,0.12l0.83,-0.25l0.54,-0.07l0.07,0.08l0.03,0.1l-0.66,0.3l-0.33,0.34l0.29,0.54l0.35,-0.0l0.37,-0.18l0.25,0.12l0.02,0.21l0.44,0.11l0.09,0.11l0.26,1.19l-0.17,0.03l-0.1,0.51l0.24,0.32l0.94,0.22l0.04,0.16l-0.27,0.18l0.01,0.12l0.21,0.32l0.21,0.09l-0.05,0.37l-0.24,-0.02l-0.1,-0.46l-0.35,-0.31l-0.11,0.06l-0.28,-0.47l-0.47,-0.03l-0.26,0.35l-0.45,0.01l-0.08,0.13l-0.26,-0.63l-0.14,0.01l-0.35,-0.41l-0.47,-0.12l-0.89,-1.43l0.11,-0.01l0.32,-0.49l-0.08,-0.26l-0.34,-0.28l-0.51,0.01l-0.47,-0.93l-0.05,-0.15l0.12,-0.53l-0.08,-0.41l-0.52,-1.06l-0.46,-0.7l-0.19,-0.07l0.1,-0.61l-0.29,-0.28l-0.72,-0.14l-1.24,-1.44l-0.27,-0.47l-0.01,-0.21l-0.32,-0.23l-0.24,-0.34l-0.28,-0.11l-0.49,-0.63l0.39,-0.11l0.12,-0.23l0.05,0.05l0.59,-0.3l-0.02,0.13l-0.16,0.06l-0.16,0.55l0.3,0.41l0.38,0.07l0.43,-0.3l0.25,-1.03l0.15,-0.22l0.42,0.2l0.36,0.46l0.36,0.04l0.35,-0.35l-0.47,-0.83l-0.69,-0.39l-0.27,-0.91l-0.35,-0.63l-0.4,-0.17l-0.67,0.44l-0.39,0.06l-0.79,0.37l-1.9,-0.05l-1.0,-0.5l-0.45,-0.34l-1.46,-1.5l0.23,-0.14l0.21,-0.32l0.16,-0.74l-0.43,-0.94l-0.52,-0.09l-0.33,0.19l-0.12,0.52l-0.6,-0.04l-0.85,-0.89l-2.81,-1.97l-1.68,-0.48l-1.62,-0.65l-1.13,-0.19l-0.1,-0.53l-0.27,-0.5l0.13,-0.25l-0.02,-0.26l-0.22,-0.25l-0.8,-0.28l-0.36,-0.35l-0.17,-0.01l-0.13,-0.55l-0.2,-0.34l-0.2,-0.12l0.7,-0.5l0.09,-0.27l-0.09,-0.08l0.21,-0.27l0.23,-0.09l0.38,0.08l0.38,-0.17l0.18,-0.32l-0.03,-0.34l-0.35,-0.22l-0.55,-0.07l-0.81,0.27l-0.24,0.2l-0.57,0.02l-0.56,0.35l-0.61,0.15l-0.2,-0.13l-0.19,-0.59l-0.58,-0.63l0.77,-0.37l0.19,-0.38l-0.32,-0.45l-0.53,-0.01l-0.15,-0.48l-0.19,-0.17l0.09,-0.49l-0.16,-0.25l0.04,-0.22l-0.31,-0.55l-0.43,-0.22l-0.53,0.17l-0.07,-0.2l-0.27,-0.03l-0.09,-0.14l0.22,-0.56l0.26,0.03l0.08,-0.09l0.65,0.37l0.38,0.07l0.42,-0.49l-0.14,-0.42l-0.27,-0.26l-1.05,-0.52l-1.54,0.27l-0.1,-0.21l-0.41,-0.3l-0.42,-0.01l-0.08,-0.23l-0.47,0.02l-0.21,-0.16l0.21,-0.26l-0.05,-0.39l0.14,-0.4l-0.28,-0.27l-0.25,-0.05l0.21,-0.77l-0.33,-0.28l-0.29,0.02l-1.36,0.57l0.02,-0.11l-0.34,-0.35l-1.19,-0.19l-0.14,0.25l-0.55,0.26l0.08,0.49l0.21,0.14l-0.01,0.1l-0.83,-0.27l-0.63,-0.03l-0.23,0.49l-0.51,0.38l0.12,0.52l0.31,0.16l0.46,-0.02l-0.05,0.11l-0.98,0.16l-0.3,0.14l-0.16,0.16l-0.05,0.46l0.37,0.28l0.83,-0.12l0.12,0.14l-0.04,0.25l0.31,0.21l-0.27,0.12l-0.15,0.24l-0.51,-0.02l-0.23,0.34l-0.3,0.12l0.05,0.54l-0.3,0.32l-0.12,-0.14l-0.66,0.24l-0.32,-0.27l-0.44,-0.13l-0.32,-0.39l0.11,-0.5l-0.38,-0.29l-0.64,0.04l0.13,-0.4l-0.05,-0.34l-0.23,-0.26l-0.26,-0.07l-0.4,0.16l-0.47,0.73l-0.25,-0.01l-0.23,-0.49l-0.46,-0.07l-0.37,0.4l-0.4,-0.06l-0.16,0.33l-0.29,-0.31l-0.42,-0.03l-0.26,0.25l-0.01,0.21l-0.31,-0.08l-0.11,-0.32l-0.12,-0.03l-0.37,0.06l-0.72,0.4l-0.01,-0.27l-0.13,-0.08l-0.8,-0.04l-0.38,0.2l-0.0,0.45l-0.09,0.05l-1.16,0.08l-0.3,0.13l-0.87,-0.77l-0.22,-0.05l-0.29,0.29l-0.4,-0.28l-1.02,-0.03l0.03,-0.13l-0.35,-0.39l-0.01,-0.13l0.45,0.02l0.16,-0.37l0.53,0.01l0.43,0.3l0.3,0.45l0.49,-0.04l0.2,-0.43l0.23,0.09l0.44,-0.04l0.48,-0.17l0.06,-0.15l0.45,-0.23l0.46,-0.08l0.32,-0.52l-0.21,-0.37l-0.49,-0.19l-1.84,0.04l-0.57,-0.71l-0.07,-0.28l1.28,-0.98l1.62,-0.44l0.37,-0.26l0.33,-0.45l0.46,-0.1l0.65,-0.89l0.14,-1.04l0.36,-0.03l0.74,0.3l1.54,-0.17l1.4,0.03l0.01,0.5l0.23,0.42l0.56,0.48l1.06,0.16l0.14,0.1l0.28,0.41l0.4,0.26l1.19,1.07l0.2,0.34l0.25,0.13l0.5,-0.37l0.0,-0.44l-0.13,-0.39l-0.42,-0.46l-0.43,-0.13l-0.32,-0.52l-0.43,-0.35l-0.69,-1.19l0.45,-0.11l0.44,-0.3l0.35,0.02l0.33,-0.17l1.56,0.33l0.37,-0.06l0.15,-0.62l-0.09,-0.11l-0.67,-0.46l-0.84,-0.3l-0.61,-0.04l-0.74,0.14l-0.37,0.19l-0.29,0.35l-0.76,-0.52l-0.11,-0.24l-0.42,-0.02l-0.16,-0.12l0.14,-0.2l-0.17,-0.67l-0.09,-0.02l-1.07,0.27l-0.85,-0.19l-0.49,0.0l-0.85,0.41l-0.65,-0.15l-0.6,-0.29l-1.18,0.04l-0.71,0.35l-0.19,0.5l-0.35,-0.15l-0.65,0.04l-0.5,0.24l-0.62,0.03l-0.54,0.15l-0.41,0.33l-0.12,0.36l-0.49,0.22l-0.59,-0.02l-0.4,-0.27l-0.26,-0.68l-0.43,-0.32l-0.3,-0.11l-0.42,0.02l-0.3,0.28l0.16,0.51l0.31,0.08l0.01,0.37l0.37,0.61l0.21,0.72l-0.38,0.08l-0.35,0.26l-0.33,-0.06l-0.56,-0.39l-0.98,-0.37l-0.58,0.21l0.02,0.44l-0.07,-0.38l-0.32,-0.34l-0.42,0.19l-0.23,0.4l-0.2,-0.38l-0.81,0.14l-0.08,0.05l-0.02,0.41l-0.37,-0.32l-0.33,-0.04l-0.36,0.28l0.13,0.39l-1.49,-0.27l-0.16,0.49l-0.25,0.14l-0.28,0.36l-0.51,0.04l-0.02,0.17l-0.2,0.09l0.03,0.42l-0.16,0.27l-0.01,0.39l0.33,0.34l0.59,-0.05l0.39,0.38l0.56,0.31l0.08,0.49l0.23,0.34l0.3,0.19l0.03,0.3l-0.64,0.54l-0.5,-0.05l-0.44,0.18l-0.88,-0.46l-0.37,0.02l-0.48,0.41l-0.2,-0.12l-0.45,-0.01l-0.34,0.59l-0.75,-0.12l-0.4,0.05l-0.27,0.3l-0.1,-0.02l0.07,0.06l-0.11,0.01l0.0,0.1l-0.42,-0.28l-0.36,0.33l-0.19,-0.1l-0.32,0.19l-0.3,-0.11l-0.37,0.07l-0.53,-0.44l-0.45,-0.15l-0.9,0.53l-0.18,-0.15l-0.71,-0.02l-0.45,0.28l-0.15,-0.37l-0.41,-0.28l-0.42,0.1l-0.43,0.49l-0.37,-0.15l-0.28,0.31l-0.47,-0.08l-0.4,-0.43l-0.4,0.07l-0.3,0.24l-0.14,-0.11l-0.43,-0.05l-0.14,0.08l-1.45,-0.04l-0.31,0.12l-0.22,0.28l0.24,0.95l-0.31,-0.03l-0.15,0.18l-0.69,-0.24l-0.41,-0.28l-0.26,0.05l-0.26,0.26l-0.2,-0.24l-0.49,0.22l-0.65,0.09l-0.32,-0.22l-0.27,0.2l-0.19,-0.65l-0.39,-0.22l-0.43,0.08l-0.28,0.31l-0.44,0.09l-0.26,-0.07l-0.14,0.34l-0.06,-0.31l-0.26,-0.25l-0.54,-0.14l-1.29,-0.05l-0.62,0.31l-0.42,-0.34l-0.51,-0.04l-0.84,0.27l-0.73,0.11l-0.16,0.12l-0.11,0.56l-0.26,-0.07l-0.44,0.3l-0.03,0.21l-0.23,0.15l-0.26,-0.25l-0.37,-0.03l-0.36,0.17l-0.6,-0.33l-0.87,-0.22l-0.41,-0.18l-0.09,-0.37l-0.55,-0.15l-0.25,0.15l-0.71,-0.67l-0.41,0.02l-0.78,-0.24l-0.4,0.21ZM111.25,502.71l-0.44,0.21l-0.03,-0.02l0.24,-0.26l0.23,0.07ZM128.45,468.26l-0.1,0.14l-0.06,0.02l0.02,-0.15l0.14,-0.02ZM191.55,470.09l-0.0,0.04l-0.02,-0.04l0.03,-0.01ZM191.85,541.2l-0.08,-0.21l0.06,-0.51l0.25,-0.06l0.08,0.39l-0.31,0.39ZM165.84,518.29l-0.19,0.37l-0.34,0.04l-0.07,0.31l-0.27,-0.07l-0.45,0.06l-0.04,-0.09l0.46,-0.29l0.06,-0.15l0.84,-0.19ZM162.12,521.34l0.09,0.0l-0.06,0.02l-0.02,-0.03ZM162.26,521.34l0.08,-0.02l0.01,0.04l-0.04,0.04l-0.05,-0.05ZM141.64,514.73l0.19,0.06l0.26,0.22l-0.46,0.03l-0.07,-0.12l0.08,-0.19ZM132.07,521.13l-0.0,0.0l0.0,-0.0l0.0,0.0ZM132.06,520.84l-0.02,-0.07l0.06,-0.01l-0.03,0.08ZM109.91,522.38l0.07,-0.02l0.05,0.12l-0.03,0.01l-0.09,-0.11ZM107.83,523.67l0.01,0.02l-0.02,0.0l0.0,-0.02l0.01,-0.01ZM136.02,515.64l-0.01,-0.04l0.07,0.01l-0.06,0.03ZM199.71,549.76l0.43,-0.06l0.87,0.3l0.36,-0.05l0.76,-0.54l0.39,-0.87l0.67,-0.03l0.47,-0.34l0.17,-0.49l0.96,0.19l1.89,-0.14l0.49,0.7l0.06,0.43l0.38,0.59l-0.1,0.26l-0.29,0.17l-0.1,0.55l0.11,0.16l-0.11,0.33l0.13,0.53l0.17,0.24l0.69,0.46l0.02,0.37l0.3,0.56l0.35,0.24l0.08,0.34l-0.15,0.26l0.26,1.28l1.33,1.5l0.24,0.78l-0.64,-0.19l-0.38,0.04l-0.33,0.37l-0.51,0.26l-0.01,0.29l-0.38,0.15l-0.21,0.29l-0.52,-0.98l-0.84,-0.64l0.11,-0.44l-0.27,-1.06l0.14,-0.11l0.26,-1.09l-0.26,-0.26l0.04,-0.09l-0.12,-0.01l0.04,-0.06l-0.09,0.05l-0.1,-0.1l-0.04,0.1l-0.12,-0.01l-0.03,-0.07l0.24,-0.92l0.1,-1.07l-0.15,-1.05l0.51,-0.94l0.02,-0.37l-0.66,-0.25l-0.5,0.69l-0.24,-0.13l-0.45,0.11l0.01,0.55l-0.32,0.35l0.3,1.04l-0.34,0.85l0.13,1.32l-0.11,0.36l0.04,0.39l-0.27,0.34l0.03,1.86l-0.28,0.29l-0.27,-0.31l0.02,-1.36l-0.28,-0.43l-0.53,0.1l-0.08,0.1l-0.88,-0.14l0.22,-0.05l0.2,-0.25l0.2,-0.91l-0.12,-0.1l-0.13,-1.06l0.88,0.13l0.45,-0.45l-0.11,-0.33l-0.74,-0.45l-0.23,0.1l0.0,-0.84l-0.33,-0.34l-0.31,-0.01l-0.29,0.56l-0.24,0.06l-0.27,0.41l0.12,0.13l-0.5,-0.23l0.24,-0.5l-0.28,-0.54l-0.29,-0.02l-0.18,-0.5l-0.47,-0.15l-0.19,0.31l-0.22,-0.47ZM201.64,551.89l0.21,0.2l-0.19,0.19l-0.03,-0.38ZM210.83,558.1l0.42,0.83l-0.23,0.38l0.09,0.66l0.47,1.27l0.06,1.07l0.15,0.48l-0.33,-0.38l-1.31,-0.73l-0.26,-0.05l0.19,-0.2l-0.17,-0.39l0.14,-0.1l0.31,-0.63l-0.47,-0.31l-0.27,0.01l-0.75,0.68l-0.11,-0.36l0.09,-0.18l-0.03,-0.41l0.26,-0.33l0.36,-0.19l0.16,-0.56l0.43,-0.42l0.36,0.09l0.44,-0.23ZM211.88,563.05l1.25,5.46l-0.54,0.45l0.03,0.64l0.81,0.55l-0.47,0.67l0.05,0.52l0.58,0.54l-0.08,0.3l0.06,0.48l-0.14,0.55l0.15,0.3l0.2,0.13l0.9,0.26l1.46,1.84l1.18,0.8l0.34,0.76l0.55,0.42l-0.01,0.53l0.1,0.24l0.78,0.58l0.49,0.11l0.03,0.16l-0.16,0.69l-0.68,0.46l-0.31,0.4l-0.04,0.78l-0.31,0.67l0.11,0.99l-0.15,0.54l0.03,0.33l-0.4,0.17l-1.34,1.4l-0.41,0.31l-0.48,0.16l-0.2,-0.13l-0.28,0.01l0.12,-0.5l-0.16,-0.42l-0.64,0.07l-0.08,0.17l-0.1,-0.51l0.24,-0.03l0.12,0.14l0.5,0.14l1.27,-0.81l0.75,-0.65l-0.23,-0.63l-0.48,0.07l0.01,-0.13l-0.37,-0.36l-0.54,0.12l0.59,-1.72l0.0,-0.38l0.15,-0.3l-0.06,-0.43l0.09,-0.51l-0.36,-0.24l-0.06,-0.35l-0.27,-0.49l0.49,-0.15l0.35,-0.35l0.18,-0.48l-0.43,-0.27l-0.43,0.08l-0.61,0.31l-0.45,0.04l-0.55,-0.29l-1.43,0.28l-0.59,-0.05l0.17,-0.09l0.2,-0.36l0.21,-0.85l0.32,0.02l0.81,0.41l0.31,0.03l0.71,-0.34l-0.07,-0.49l-0.33,-0.19l-0.4,0.02l-0.88,-0.43l0.03,-0.84l-0.23,-0.29l-0.46,-0.26l0.02,-0.43l-0.43,-0.61l0.27,-0.3l-0.16,-0.68l-0.35,-0.03l0.1,-0.07l0.01,-0.21l0.42,-0.17l0.22,-0.62l-0.38,-0.26l-0.67,0.18l-0.27,-0.29l-0.2,-0.32l-0.06,-0.35l0.33,-0.21l0.18,-1.04l-0.39,-0.3l-0.47,0.16l-0.17,-0.08l-0.29,-0.36l0.13,-0.2l-0.14,-0.35l-0.45,-0.27l1.08,-0.08l0.35,-0.42l-0.28,-0.52l-0.49,0.08l-0.44,-0.14l0.18,-0.32l-0.03,-0.32l-0.51,-0.26l0.04,-0.13l0.64,0.01l0.41,0.72l0.28,0.23l0.31,0.02l0.28,-0.15l0.04,-0.52l-0.24,-0.23l-0.1,-0.4l-0.37,-0.63l-0.78,-0.91l0.12,-0.39l1.23,0.83l0.52,-0.45ZM214.19,585.45l-0.17,0.68l-0.05,-0.01l0.09,-0.42l0.13,-0.25ZM215.44,583.76l-0.46,0.24l-0.25,-0.22l-0.63,0.14l0.05,-0.14l0.52,-0.28l0.76,0.25ZM211.63,577.78l-0.08,0.43l0.26,0.27l-0.46,0.4l-0.51,-0.23l-0.26,0.45l0.06,0.32l-0.15,-0.2l0.08,-0.67l0.25,-0.15l0.49,-0.04l0.32,-0.57ZM209.08,567.17l-0.25,-0.24l0.08,-0.14l0.49,0.2l-0.32,0.18ZM138.39,458.34l-0.47,-0.44l0.06,-0.45l0.41,0.27l0.0,0.62ZM108.63,500.59l-0.13,0.01l0.09,-0.03l0.04,0.02ZM211.75,580.86l0.58,-0.24l-0.2,0.44l0.02,0.52l-0.22,-0.23l-0.18,-0.5ZM212.61,580.43l0.18,-0.49l-0.1,-0.18l0.52,-0.05l0.31,-0.26l0.18,-0.36l0.14,-0.03l0.14,-0.52l0.57,-0.03l0.29,1.05l0.12,1.09l-0.15,0.19l0.03,0.12l-0.16,0.04l-0.27,0.73l-0.28,0.21l-0.2,-0.36l0.13,-1.47l-0.39,-0.42l-0.41,0.19l-0.18,0.46l-0.46,0.07ZM211.52,574.36l0.23,0.31l0.37,0.12l0.01,0.48l-0.14,0.07l-0.12,-0.08l-0.4,-0.44l-0.11,-0.22l0.15,-0.24ZM209.53,575.0l0.17,-0.21l0.28,-0.04l-0.06,0.38l0.09,0.09l0.27,0.14l0.34,0.0l0.41,0.28l0.04,0.12l-0.35,0.14l0.09,0.38l-0.06,0.17l-0.28,0.08l0.14,-0.47l-0.34,-0.41l-0.06,-0.25l-0.69,-0.39ZM210.36,574.41l0.1,-0.07l0.07,0.06l-0.0,0.01l-0.16,-0.0ZM209.54,571.91l0.03,-0.1l0.32,-0.15l0.14,-0.29l-0.04,-0.37l0.05,-0.1l0.34,1.01l-0.09,-0.09l-0.52,-0.06l-0.15,0.21l-0.08,-0.04ZM206.97,580.16l0.1,-0.52l-0.42,-0.36l0.1,-0.03l-0.05,-0.5l-0.28,-0.2l0.14,-0.17l0.28,-0.1l0.36,0.03l0.21,-0.67l-0.39,-0.23l-1.18,-0.03l-0.2,-0.17l0.19,-0.17l0.46,-0.05l0.67,-0.52l0.19,-0.54l-0.08,-0.32l-0.26,-0.01l0.23,-0.63l0.14,0.22l0.53,0.22l0.24,0.31l0.4,0.27l0.42,1.0l0.12,0.56l-0.14,0.62l-0.17,-0.03l-0.11,0.19l-0.32,0.19l0.02,0.34l-0.75,0.25l-0.08,0.43l0.07,0.45l0.56,-0.01l-0.02,0.13l0.38,0.45l0.22,-0.01l0.23,0.23l0.25,-0.06l0.21,0.38l-0.39,-0.07l-0.32,0.43l-0.06,0.32l0.22,0.37l0.41,0.04l0.21,0.09l-0.2,-0.03l-0.41,0.47l-0.47,0.15l0.11,0.7l0.38,0.27l-0.13,0.2l0.18,0.53l-0.2,0.06l-0.06,0.23l-0.22,-0.08l0.18,-0.35l-0.4,-1.09l0.11,-0.08l0.05,-0.73l-0.28,-0.13l-0.15,-0.32l0.01,-0.81l-0.21,-0.78l-0.46,-0.01l-0.11,0.08l-0.05,-0.39ZM207.26,574.01l-0.02,-0.27l-0.21,-0.27l0.29,-0.14l0.03,0.3l0.15,0.15l-0.04,0.21l-0.2,0.0ZM206.9,573.41l-0.43,-0.14l-0.38,-0.35l0.21,-0.11l0.28,0.14l0.04,0.28l0.27,0.18ZM208.72,573.09l0.26,-0.17l0.43,0.23l0.25,-0.0l-0.15,0.15l-0.09,0.37l-0.14,0.04l-0.23,-0.02l-0.33,-0.6ZM206.49,567.38l1.0,0.59l0.81,0.7l0.06,0.4l-0.46,0.04l-0.19,0.76l0.03,0.31l0.19,0.26l-0.17,0.31l0.43,0.76l-0.15,0.1l-0.85,-0.57l-0.44,0.12l-0.01,0.16l-0.22,-0.06l0.24,-0.51l-0.06,-0.27l0.08,0.03l0.08,-0.27l-0.06,-0.29l0.42,-0.7l0.08,-0.44l-0.28,-0.43l0.06,-0.22l-0.32,-0.31l-0.25,-0.5ZM208.6,569.24l0.34,0.07l0.2,-0.33l0.2,0.07l0.2,0.44l-0.0,0.19l-0.3,0.2l-0.13,0.86l-0.14,-0.44l-0.01,-0.6l-0.07,-0.17l-0.2,-0.03l-0.09,-0.25ZM209.57,569.66l0.0,-0.0l0.03,-0.02l-0.04,0.02ZM204.29,565.52l0.44,-0.15l-0.03,-0.36l0.29,-0.2l0.29,0.26l0.51,-0.3l-0.08,0.47l-0.15,0.23l-0.33,-0.04l-0.36,0.3l-0.27,-0.06l-0.16,0.09l0.02,0.12l-0.36,0.07l0.19,-0.44ZM206.36,564.27l-0.49,0.31l-0.02,-0.59l-0.46,-0.14l-0.02,-0.1l0.53,-0.05l0.24,-0.65l-0.35,-0.23l-0.51,-0.03l-0.1,-0.28l0.09,-0.84l0.2,-0.34l0.16,-0.72l0.07,-1.03l0.34,-0.33l0.69,0.17l0.26,0.31l-0.04,0.27l-0.16,0.12l0.03,0.24l-0.13,0.05l-0.05,0.65l-0.22,0.57l0.02,0.09l0.33,0.11l0.23,1.01l-0.15,0.27l0.43,0.45l-0.08,0.23l-0.57,-0.12l-0.09,0.19l-0.15,0.04l-0.01,0.39ZM206.15,574.28l-0.13,-0.03l0.0,-0.02l0.15,-0.04l-0.02,0.09ZM205.18,574.32l-0.02,0.0l0.01,-0.01l0.01,0.0ZM204.96,570.25l-0.05,-0.24l0.09,0.22l-0.04,0.01ZM205.25,569.02l-0.25,0.19l-0.3,-0.19l-0.18,-0.37l-0.42,-0.07l0.04,-0.08l0.41,0.09l0.15,-0.2l0.31,0.17l0.28,-0.13l0.03,0.52l-0.07,0.07ZM198.99,558.2l0.09,-0.07l0.23,0.49l-0.21,-0.07l-0.11,-0.35ZM199.36,558.71l0.38,0.44l0.56,-0.45l-0.44,-1.09l0.59,0.02l0.03,-0.77l0.24,0.32l0.51,0.01l0.2,-0.29l0.29,-0.06l0.19,0.34l0.24,0.12l0.18,0.27l-0.28,0.14l-0.69,-0.17l-0.13,0.26l-0.17,-0.1l-0.57,0.26l0.08,0.42l0.27,0.54l0.56,0.48l0.25,0.5l0.39,0.36l-0.12,0.15l0.09,0.44l-0.94,-1.32l-0.28,-0.2l-0.61,0.35l0.06,0.34l-0.2,0.14l0.2,0.7l0.21,0.07l-0.14,0.51l0.2,0.13l0.05,0.18l-0.28,0.06l-0.12,-0.56l-0.37,-0.57l0.25,-0.15l-0.16,-0.49l-0.21,-0.17l-0.02,-0.33l-0.28,-0.49l-0.01,-0.31ZM202.27,558.92l0.38,-0.28l0.43,-0.1l0.76,0.39l0.05,0.17l0.43,0.38l-0.11,0.18l-0.41,-0.45l-0.58,-0.11l-0.2,0.41l0.19,0.59l-0.97,-1.19ZM202.11,560.96l0.33,0.1l0.14,0.21l0.26,0.09l0.85,-0.01l-0.23,1.25l-0.31,-0.14l-1.03,-1.5ZM201.29,562.69l0.18,0.07l0.33,-0.09l0.0,0.25l0.48,0.21l0.22,0.28l-0.11,0.08l0.12,0.52l-0.05,0.29l0.23,0.34l-0.06,0.8l0.13,0.32l-0.1,0.03l-0.14,0.56l-0.14,0.99l0.02,0.73l-0.25,0.74l-0.22,-0.02l-0.19,0.34l-0.01,0.5l-0.44,1.06l-0.2,-0.86l-0.08,-0.92l0.3,-0.02l0.63,-0.49l-0.06,-0.73l-0.22,-0.05l0.02,-0.45l-0.19,-0.26l-0.25,-0.01l-0.16,-0.59l-0.47,-0.03l0.24,-0.17l0.01,-0.27l0.65,-0.05l0.22,-0.32l-0.13,-0.51l-0.53,-0.24l0.57,-0.27l-0.34,-1.16l-0.33,-0.12l0.28,-0.19l0.04,-0.3ZM199.27,560.14l0.0,0.0l-0.01,0.0l0.0,-0.0ZM199.1,564.31l0.25,-0.07l0.1,-0.06l-0.12,0.15l-0.23,-0.02ZM199.63,563.32l0.06,-0.2l-0.05,-0.13l0.09,0.13l-0.1,0.2ZM162.15,525.49l0.25,-0.21l0.11,-0.0l-0.2,0.31l-0.16,-0.1ZM136.7,524.68l0.22,0.25l0.59,-0.1l0.04,-0.44l0.61,0.38l0.29,-0.23l0.18,-0.67l0.1,-0.05l0.25,0.13l0.16,-0.06l-0.14,0.5l0.39,0.72l-0.5,0.38l-0.19,-0.72l-0.36,-0.02l-0.69,0.57l-0.12,-0.24l-0.46,0.06l-0.15,0.16l-0.22,-0.52l-0.13,-0.04l0.04,-0.14l0.07,0.07ZM139.88,525.13l-0.03,-0.01l0.02,-0.02l0.01,0.03ZM127.78,528.13l0.49,-0.13l0.09,0.05l-0.34,0.29l-0.18,0.01l-0.06,-0.22ZM128.01,526.82l0.09,-0.93l-0.34,-0.41l0.27,-0.06l0.19,-0.29l0.22,-0.02l0.24,-0.25l0.44,0.22l0.16,-0.11l0.5,0.1l0.1,-0.23l0.15,-0.03l0.38,0.09l0.25,0.25l-0.43,0.12l0.02,0.5l0.44,0.31l-0.25,0.64l0.13,1.11l0.36,0.59l0.43,0.15l-0.37,0.07l-0.19,0.39l-0.11,-0.05l0.03,-0.41l-0.23,-0.36l-0.69,-0.05l-0.43,-0.59l-0.47,-0.4l-0.65,-0.34l-0.26,-0.01ZM131.4,528.57l0.28,-0.39l-0.19,-0.6l0.07,-0.55l0.15,-0.28l0.3,0.13l0.31,-0.27l0.44,0.14l0.52,-0.02l0.3,-0.22l0.26,0.17l0.23,-0.03l0.19,0.33l0.66,-0.29l0.18,-0.29l0.28,0.22l-0.13,0.25l-0.0,0.39l0.26,0.35l0.46,-0.02l0.28,-0.39l0.28,0.18l0.44,-0.16l0.31,0.17l0.08,-0.05l-0.05,0.23l-0.73,0.21l-0.21,0.41l0.22,0.27l-0.07,0.65l0.3,0.23l0.29,0.05l-0.5,0.18l-0.19,-0.24l-0.3,-0.08l-0.09,-0.22l-0.26,-0.17l-0.13,-0.32l-0.96,-0.67l-0.23,0.18l-0.65,0.18l-0.19,0.27l0.12,0.28l-0.38,-0.39l-0.44,0.12l-0.19,0.46l-0.91,-0.26l-0.07,0.08l-0.35,-0.23ZM134.19,529.01l0.07,-0.02l0.09,0.03l-0.15,-0.01l-0.01,0.0ZM134.4,529.04l0.27,0.1l0.23,0.58l-0.25,-0.11l0.04,-0.1l-0.29,-0.47ZM135.83,526.14l0.09,-0.06l0.01,0.01l-0.11,0.04ZM132.89,525.47l-0.57,-0.58l0.11,-0.17l0.27,-0.08l0.34,0.07l0.08,0.37l-0.22,0.39ZM98.14,450.76l0.34,-0.44l0.56,-0.16l0.06,0.49l-0.13,0.02l0.1,0.29l0.7,0.54l0.29,0.6l0.36,0.4l-0.66,-0.36l-1.21,-0.26l-0.45,-0.8l0.04,-0.32ZM100.81,452.78l1.01,0.2l0.26,0.2l0.38,0.11l0.3,0.33l0.23,0.8l-0.26,0.19l-0.26,0.4l0.43,0.51l0.28,0.71l0.39,0.33l-0.09,0.31l0.05,0.32l0.21,0.31l0.5,0.32l0.0,0.35l-0.82,-0.26l-0.09,0.09l-0.51,-0.1l-0.33,0.07l-0.08,-0.93l-0.57,-1.1l0.12,-0.48l-0.3,-0.98l-0.39,-0.84l-0.28,-0.35l-0.01,-0.23l-0.17,-0.28ZM104.84,458.76l0.28,0.01l0.41,0.53l-0.25,0.05l-0.44,-0.59ZM96.98,478.79l0.06,-0.22l1.37,1.26l0.38,-0.0l0.32,-0.21l0.21,0.06l0.2,0.25l0.72,-0.01l-0.01,0.32l0.69,0.19l0.2,0.27l-0.05,0.32l0.09,0.16l0.27,0.29l0.49,0.19l0.07,0.2l-0.23,0.33l-0.32,0.22l-0.42,1.13l-0.7,-0.22l-0.36,-0.42l-0.19,0.11l-0.26,-0.08l-0.29,-0.35l-0.42,-0.13l-0.26,-0.41l-0.51,-0.41l-0.61,-1.56l0.07,-0.19l-0.47,-0.5l0.04,-0.31l-0.09,-0.3ZM97.68,522.17l0.05,-0.07l0.04,-0.11l0.07,0.18l-0.15,-0.01ZM98.03,522.39l0.04,0.02l-0.0,0.03l-0.03,-0.05ZM80.23,514.88l0.08,-0.15l0.69,0.24l0.38,-0.02l1.55,-0.69l0.18,0.0l0.16,0.37l0.44,0.39l0.27,0.08l0.4,-0.16l0.54,0.24l0.6,-0.01l0.53,0.26l0.44,0.41l0.03,0.72l-0.26,0.4l-0.13,0.44l-0.31,0.06l-0.22,0.21l-0.27,0.01l-0.3,-0.08l-0.46,-0.58l-1.38,-0.93l-0.45,-0.11l-0.76,0.03l-0.42,0.3l-0.21,0.03l-0.91,-0.42l-0.33,-0.34l0.14,-0.67ZM74.26,514.0l0.03,-0.25l0.32,0.05l0.02,0.35l-0.37,-0.15ZM64.81,513.23l0.09,-0.01l0.13,0.09l-0.17,0.0l-0.05,-0.08ZM70.29,514.35l-0.12,-0.05l-0.16,0.39l-0.25,-0.27l-0.36,0.08l0.24,-0.12l0.32,0.02l0.41,-0.61l-0.31,-0.35l-0.31,-0.63l-0.3,-0.24l0.05,-0.29l0.13,-0.06l0.67,0.13l0.43,0.28l0.16,0.24l-0.29,0.4l0.11,0.51l-0.06,0.17l-0.33,0.11l-0.04,0.31ZM68.8,514.2l-0.28,0.32l-0.09,-0.1l0.24,-0.29l-0.1,-0.27l0.19,-0.02l0.04,0.36ZM59.97,511.71l0.2,-0.13l0.18,-0.38l0.48,-0.06l0.27,0.03l0.13,0.21l0.36,0.14l0.1,0.15l-0.09,0.12l-0.23,-0.03l-0.61,0.18l-0.41,-0.22l-0.36,0.0ZM62.67,511.56l0.07,-0.35l0.28,-0.32l0.75,-0.02l0.67,0.35l0.17,0.49l-0.28,0.29l-1.25,-0.24l-0.41,-0.2ZM37.79,498.38l0.07,-0.23l-0.1,-0.23l0.32,0.03l0.09,0.49l-0.29,0.05l-0.1,-0.11ZM36.41,498.87l-0.02,0.01l0.01,-0.02l0.01,0.01ZM36.85,498.71l-0.0,-0.07l-0.0,-0.01l0.02,0.01l-0.01,0.07ZM30.2,493.17l-0.02,-0.03l0.04,-0.04l0.0,0.08l-0.02,-0.0ZM26.76,492.74l0.41,-0.33l0.12,0.35l-0.02,0.08l-0.25,0.01l-0.26,-0.12ZM25.01,490.83l0.02,0.0l-0.01,0.01l-0.02,-0.01ZM23.18,488.38l-0.09,0.01l0.05,-0.17l0.04,0.08l0.01,0.08ZM23.19,487.9l-0.06,0.1l-0.14,-0.54l0.19,0.18l0.0,0.26ZM15.95,478.85l0.25,0.07l-0.02,0.19l-0.14,-0.01l-0.09,-0.25ZM1.23,449.67l0.23,0.17l0.21,0.66l0.47,0.45l-0.25,0.16l0.12,0.39l-0.24,-0.38l-0.54,-0.19l-0.11,-0.3l0.19,-0.08l0.2,-0.42l-0.28,-0.47Z"
                    data-code="US-AK"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                    cursor="pointer"
                  />
                  <path
                    d="M801.67,165.24l1.31,-1.55l0.48,-1.57l0.5,-0.62l0.54,-1.45l0.11,-2.05l0.68,-1.35l0.92,-0.71l14.12,4.17l-0.3,5.66l-0.51,0.83l-0.13,-0.3l-0.65,-0.07l-0.34,0.44l-0.56,1.46l-0.46,2.72l0.26,1.55l0.63,0.61l1.06,0.15l1.23,-0.43l2.46,0.29l0.66,1.87l-0.2,4.55l0.29,0.47l-0.54,0.44l0.27,0.81l-0.72,0.74l0.03,0.35l0.43,0.22l-0.21,0.6l0.48,0.6l-0.17,3.8l0.59,0.52l-0.36,1.36l-1.14,1.82l-0.11,0.94l-1.36,0.07l0.09,1.21l0.64,0.83l-0.82,0.56l-0.18,1.15l1.05,0.77l-0.31,0.29l-0.17,-0.44l-0.53,-0.18l-0.5,0.22l-0.44,1.51l-1.28,0.61l-0.2,0.45l0.46,0.55l0.8,0.06l-0.66,1.26l-0.26,1.5l-0.68,0.65l0.19,0.48l0.4,0.04l-0.89,1.57l0.07,0.95l-1.56,1.66l-0.17,-1.65l0.33,-2.07l-0.11,-0.87l-0.58,-0.82l-0.89,-0.28l-1.11,0.34l-0.81,-0.35l-1.51,0.88l-0.31,-0.71l-1.62,-0.96l-1.0,0.04l-0.65,-0.71l-0.7,0.07l-3.24,-2.03l-0.06,-1.72l-1.02,-0.94l0.48,-0.68l0.0,-0.88l0.43,-0.83l-0.12,-0.73l0.51,-1.19l1.2,-1.16l2.6,-1.49l0.54,-0.86l-0.38,-0.85l0.5,-0.37l0.47,-1.44l1.24,-1.7l2.52,-2.22l0.18,-0.67l-0.47,-0.82l-4.26,-2.78l-0.75,-1.05l-0.9,0.24l-0.48,-0.33l-1.24,-2.46l-1.62,-0.02l-1.0,-3.45l1.02,-1.03l0.36,-2.23l-1.87,-1.91Z"
                    data-code="US-NJ"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M837.04,56.27l0.86,-1.15l1.42,1.7l0.84,0.04l0.39,-2.12l-0.46,-2.19l1.7,0.36l0.73,-0.42l0.21,-0.52l-0.32,-0.7l-1.18,-0.47l-0.44,-0.62l0.19,-1.43l0.86,-2.02l2.08,-2.25l0.01,-0.98l-0.52,-0.93l1.02,-1.64l0.39,-1.51l-0.22,-0.91l-1.02,-0.35l-0.07,-1.42l-0.4,-0.43l0.55,-0.96l-0.04,-0.63l-1.0,-1.26l0.13,-1.73l0.37,-0.63l-0.15,-0.97l1.22,-1.93l-0.96,-6.17l5.58,-18.88l2.25,-0.23l1.15,3.18l0.55,0.43l2.54,0.56l1.83,-1.73l1.68,-0.83l1.24,-1.72l1.25,-0.12l0.64,-0.47l0.25,-1.43l0.42,-0.3l1.36,0.04l3.68,1.41l1.14,0.96l2.36,1.05l8.38,22.7l0.64,0.65l-0.25,0.95l0.72,1.02l-0.1,1.41l0.54,1.3l0.67,0.47l1.05,-0.12l1.12,0.58l0.97,0.1l2.47,-0.53l0.4,0.95l-0.59,1.42l1.69,1.86l0.28,2.69l2.72,1.68l0.98,-0.1l0.47,-0.74l-0.06,-0.5l1.21,0.25l2.95,2.8l0.04,0.47l-0.52,-0.14l-0.38,0.41l0.18,0.77l-0.76,-0.15l-0.35,0.4l0.15,0.63l1.84,1.62l0.16,-0.88l0.39,-0.17l0.8,0.32l0.27,-0.83l0.33,0.41l-0.31,0.85l-0.53,0.19l-1.21,3.24l-0.62,-0.04l-0.31,0.44l-0.55,-1.05l-0.72,0.03l-0.3,0.5l-0.56,0.06l-0.02,0.49l0.58,0.85l-0.91,-0.45l-0.32,0.63l0.26,0.52l-1.2,-0.28l-0.37,0.3l-0.37,0.78l0.08,0.45l0.44,0.08l0.07,1.21l-0.37,-0.57l-0.54,-0.06l-0.39,0.45l-0.2,1.09l-0.48,-1.53l-1.14,0.01l-0.68,0.75l-0.36,1.48l0.59,0.63l-0.83,0.63l-0.7,-0.46l-0.73,1.04l0.1,0.64l0.99,0.63l-0.35,0.21l-0.1,0.82l-0.45,-0.2l-0.85,-1.82l-1.03,-0.46l-0.39,0.22l-0.45,-0.41l-0.57,0.63l-1.25,-0.19l-0.26,0.86l0.78,0.4l0.01,0.37l-0.51,-0.06l-0.56,0.4l-0.09,0.69l-0.49,-1.02l-1.17,-0.02l-0.16,0.64l0.52,0.87l-1.44,0.96l0.84,1.11l0.08,1.06l0.53,0.65l-0.96,-0.41l-0.96,0.22l-1.2,-0.42l-0.17,-0.91l0.74,-0.28l-0.08,-0.55l-0.43,-0.5l-0.67,-0.12l-0.3,0.33l-0.23,-2.37l-0.37,-0.22l-1.1,0.26l0.04,1.96l-1.85,1.92l0.02,0.49l1.25,1.47l-0.64,0.96l-0.19,3.87l0.77,1.41l-0.57,0.53l0.0,0.63l-0.51,0.55l-0.8,-0.19l-0.45,0.93l-0.62,-0.06l-0.41,-1.15l-0.73,-0.21l-0.52,1.03l0.11,0.69l-0.45,0.59l0.12,2.41l-0.95,-1.01l0.14,-1.28l-0.24,-0.59l-0.81,0.29l-0.08,2.01l-0.44,-0.25l0.15,-1.55l-0.48,-0.4l-0.68,0.49l-0.76,3.04l-0.75,-1.84l0.07,-1.51l-0.77,0.05l-1.06,2.76l0.51,0.55l0.73,-0.25l0.91,2.04l-0.28,-0.59l-0.52,-0.23l-0.66,0.3l-0.07,0.64l-1.38,-0.1l-2.16,3.18l-0.53,1.86l0.29,0.6l-0.68,0.65l0.51,0.43l0.91,-0.21l0.37,0.92l-0.77,0.3l-0.2,0.39l-0.4,-0.04l-0.51,0.57l-0.14,1.03l0.67,1.37l-0.08,0.68l-0.79,1.29l-0.94,0.61l-0.41,1.07l-0.1,1.28l0.44,0.9l-0.4,2.81l-0.8,-0.33l-0.41,0.6l-1.02,-0.76l-0.57,-1.86l-0.93,-0.37l-2.36,-1.99l-0.76,-3.45l-13.25,-35.55ZM863.92,80.85l0.09,0.26l-0.08,0.23l0.03,-0.29l-0.04,-0.2ZM865.33,81.07l0.47,0.7l-0.04,0.47l-0.32,-0.25l-0.1,-0.93ZM867.67,77.93l0.43,0.83l-0.16,0.14l-0.42,-0.19l0.16,-0.77ZM877.04,64.5l-0.14,0.2l-0.03,-0.24l0.17,0.04ZM873.08,74.84l0.01,0.02l-0.03,0.03l0.01,-0.06ZM882.73,63.41l0.04,-1.17l0.41,-0.66l-0.18,-0.44l0.4,-0.5l0.62,-0.11l1.54,1.36l-0.49,0.65l-1.08,0.04l-0.27,0.43l0.57,1.3l-0.99,-0.18l-0.14,-0.57l-0.44,-0.16ZM879.31,65.98l0.61,0.41l-0.35,0.29l0.15,0.96l-0.39,-0.63l0.19,-0.53l-0.21,-0.5ZM878.07,70.51l0.09,-0.01l0.48,-0.08l-0.25,0.46l-0.32,-0.37Z"
                    data-code="US-ME"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M740.69,219.66l-2.04,-10.06l19.85,-4.49l-0.66,1.29l-0.94,0.08l-1.55,0.81l0.16,0.7l-0.42,0.49l0.23,0.78l-1.04,0.09l-0.72,0.41l-1.48,0.03l-1.14,-0.39l0.21,-0.36l-0.3,-0.49l-1.11,-0.31l-0.47,1.8l-1.63,2.85l-1.37,-0.39l-1.03,0.62l-0.41,1.26l-1.6,1.93l-0.36,1.04l-0.88,0.45l-1.3,1.87ZM760.76,204.58l37.02,-9.15l8.22,26.4l0.48,0.26l8.48,-2.22l0.24,0.71l0.6,0.03l0.38,0.95l0.52,-0.05l-0.38,1.96l-0.12,-0.26l-0.47,0.06l-0.73,0.86l-0.17,2.7l-0.6,0.19l-0.36,0.71l-0.02,1.47l-3.64,1.51l-0.37,0.76l-2.25,0.43l-0.56,0.65l-0.3,-1.09l0.5,-0.31l0.87,-1.85l-0.4,-0.51l-0.45,0.12l0.08,-0.5l-0.44,-0.42l-2.29,0.63l0.3,-0.6l1.15,-0.83l-0.17,-0.69l-1.36,-0.18l0.38,-2.24l-0.18,-1.02l-0.91,0.16l-0.53,1.76l-0.34,-0.69l-0.62,-0.07l-0.44,0.47l-0.5,1.39l0.53,1.02l-2.87,-2.14l-0.43,-0.19l-0.61,0.36l-0.73,-0.76l0.37,-0.84l-0.04,-0.84l0.76,-0.6l-0.08,-1.35l2.08,0.1l0.89,-0.45l0.36,-0.9l-0.32,-1.42l-0.43,-0.05l-0.54,1.31l-0.39,0.09l-1.05,-0.72l0.06,-0.4l-0.52,-0.28l-0.55,0.23l-0.22,-0.68l-0.73,0.1l-0.12,0.28l0.07,-0.74l0.65,-0.01l0.49,-0.37l0.22,-1.04l-0.54,-0.55l-0.57,0.71l-0.2,-0.53l0.88,-0.87l-0.25,-0.65l-0.54,-0.08l-0.09,-0.48l-0.42,-0.27l-0.35,0.15l-0.66,-0.53l0.89,-0.8l-0.24,-1.03l0.94,-2.38l-0.17,-0.43l-0.46,0.02l-0.66,0.66l-0.56,-0.16l-0.61,0.95l-0.74,-0.6l0.49,-3.59l0.6,-0.52l0.06,-0.61l4.22,-1.21l0.12,-0.7l-0.51,-0.3l-2.38,0.43l0.76,-1.27l1.42,-0.05l0.35,-0.5l-0.99,-0.67l0.44,-1.9l-0.63,-0.32l-1.2,1.82l0.05,-1.5l-0.59,-0.34l-0.68,1.1l-1.62,0.67l-0.31,1.65l0.39,0.54l0.65,0.12l-1.45,1.92l-0.2,-1.64l-0.64,-0.42l-0.61,0.73l0.07,1.45l-0.85,-0.29l-1.16,0.64l0.02,0.71l1.01,0.27l-0.37,0.54l-0.83,0.22l-0.05,0.34l-0.44,-0.04l-0.35,0.64l1.15,1.2l-1.88,-0.67l-1.21,0.59l0.16,0.69l1.56,0.58l0.91,0.93l0.72,-0.12l0.56,0.75l-0.98,-0.07l-1.15,1.36l0.32,0.77l1.57,0.92l-0.67,0.12l-0.21,0.41l0.8,1.08l-0.32,0.56l0.32,0.97l0.58,0.45l-0.52,1.09l0.99,1.25l0.96,3.54l0.61,0.84l2.07,1.63l0.42,0.81l-0.58,0.17l-0.64,-0.75l-1.45,-0.31l-1.64,-1.26l-1.33,-3.16l-0.73,-0.68l-0.3,0.37l0.11,0.7l1.28,3.54l1.14,1.31l2.05,0.74l1.03,1.11l0.64,0.14l0.91,-0.36l-0.03,1.11l1.66,1.54l0.1,1.1l-0.89,-0.35l-0.51,-1.29l-0.63,-0.45l-0.45,0.04l-0.13,0.44l0.27,0.79l-0.67,0.09l-0.65,-0.82l-1.41,-0.67l-2.39,0.63l-0.7,-0.67l-0.71,-1.49l-1.26,-0.71l-0.46,0.14l0.01,0.48l1.13,1.84l-0.22,-0.08l-1.62,-1.2l-1.66,-2.28l-0.45,-0.02l-0.37,1.44l-0.32,-0.79l-0.74,0.2l-0.21,0.27l0.33,0.72l-0.11,0.56l-0.76,0.53l-0.94,-1.5l0.07,-1.68l0.76,-0.6l-0.19,-0.74l0.78,-0.47l0.21,-1.61l1.07,-1.03l-0.0,-1.03l-0.46,-0.86l1.27,-2.19l-0.14,-0.54l-2.72,-1.68l-0.56,0.14l-0.63,1.08l-1.87,-0.26l-0.52,-0.83l-1.11,-0.51l-2.41,0.07l-1.25,-0.91l0.61,-1.35l-0.4,-0.97l-1.19,-0.3l-0.89,-0.66l-2.69,0.07l-0.36,-0.23l-0.11,-1.26l-1.04,-0.6l0.09,-1.2l-0.51,-0.29l-0.49,0.19l-0.23,-0.64l-0.52,-0.13l0.26,-0.83l-0.45,-0.58l-0.69,-0.12l-1.81,0.67l-2.24,-1.27ZM790.04,212.1l1.14,0.18l0.3,0.17l-0.52,0.29l-0.93,-0.63ZM803.05,225.67l-0.02,0.33l-0.21,-0.15l0.23,-0.19ZM807.02,229.13l-0.16,0.3l-0.13,0.07l0.02,-0.24l0.26,-0.12ZM797.57,220.61l-0.06,0.01l-0.09,0.03l0.12,-0.07l0.03,0.02ZM797.24,220.74l-0.26,0.56l-0.18,0.12l0.15,-0.61l0.29,-0.07ZM795.94,216.76l-0.29,0.29l-0.72,-0.27l0.02,-0.33l0.26,-0.36l0.72,0.67ZM794.58,212.85l-0.34,0.78l-0.59,0.23l0.02,-1.48l0.92,0.47ZM802.18,228.89l0.1,-0.11l0.12,0.08l-0.22,0.03Z"
                    data-code="US-MD"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M498.73,376.99l-1.42,-38.01l-4.48,-23.98l37.68,-2.58l39.02,-3.58l0.8,1.6l1.01,0.7l0.11,1.77l-0.77,0.57l-0.22,0.94l-1.42,0.93l-0.29,1.04l-0.83,0.54l-1.19,2.59l0.02,0.7l0.53,0.26l10.94,-1.46l0.86,0.93l-1.18,0.37l-0.52,0.96l0.25,0.49l0.84,0.41l-3.6,2.7l0.02,0.84l0.83,1.04l-0.6,1.15l0.62,0.97l-1.42,0.74l-0.11,1.44l-1.45,2.09l0.12,1.64l0.91,3.1l-0.15,0.27l-1.08,-0.01l-0.33,0.26l-0.51,1.73l-1.52,0.95l-0.04,0.51l0.79,0.91l0.05,0.65l-1.11,1.21l-2.02,1.13l-0.21,0.62l0.43,1.0l-0.19,0.27l-1.23,0.03l-0.42,0.67l-0.32,1.89l0.47,1.57l0.02,3.08l-1.27,1.09l-1.54,0.13l0.23,1.49l-0.21,0.48l-0.93,0.25l-0.59,1.77l-1.49,1.19l-0.02,0.93l1.39,0.76l-0.03,0.7l-1.23,0.3l-2.24,1.23l0.03,0.67l0.99,0.82l-0.45,1.14l0.53,1.38l-1.09,0.62l-1.9,2.57l0.52,0.7l1.0,0.49l0.01,0.58l-0.98,0.29l-0.42,0.64l0.51,0.84l1.63,1.01l0.06,1.77l-0.59,0.98l-0.09,0.84l0.29,0.4l1.05,0.39l0.5,2.17l-1.09,1.01l0.06,2.11l-51.46,4.07l-0.83,-11.53l-1.18,-0.85l-0.9,0.16l-0.83,-0.35l-0.93,0.39l-1.22,-0.33l-0.57,0.72l-0.47,0.01l-0.49,-0.48l-0.82,-0.15l-0.63,-1.0Z"
                    data-code="US-AR"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M877.65,135.84l1.07,-0.19l0.85,-1.13l0.45,0.58l-1.06,0.64l-1.31,0.1ZM831.87,132.65l-0.46,-0.28l-10.4,2.53l-0.25,-0.18l-0.27,-14.8l29.99,-7.86l1.53,-1.8l0.34,-1.48l0.95,-0.35l0.61,-1.04l1.3,-1.08l1.23,-0.08l-0.44,1.05l1.36,0.55l-0.16,0.61l0.44,0.83l1.0,0.36l-0.06,0.32l0.39,0.28l1.31,0.19l-0.16,0.56l-2.52,1.87l-0.05,1.07l0.45,0.16l-1.11,1.41l0.23,1.08l-1.01,0.96l0.58,1.41l1.4,0.45l0.5,0.63l1.36,-0.57l0.33,-0.59l1.2,0.09l0.79,0.47l0.23,0.68l1.78,1.37l-0.07,1.25l-0.36,0.29l0.11,0.61l1.58,0.82l1.19,-0.14l0.68,1.2l0.22,1.14l0.89,0.68l1.33,0.41l1.48,-0.12l0.43,0.38l1.05,-0.23l3.35,-2.76l0.39,-0.69l0.54,0.02l0.56,1.86l-3.32,1.52l-0.94,0.82l-2.75,0.98l-0.49,1.65l-1.94,1.27l-0.81,-2.53l0.11,-1.35l-0.55,-0.31l-0.5,0.39l-0.93,-0.11l-0.3,0.51l0.25,0.92l-0.26,0.79l-0.4,0.06l-0.63,1.1l-0.6,-0.2l-0.5,0.48l0.22,1.86l-0.9,0.87l-0.63,-0.8l-0.47,0.01l-0.11,0.55l-0.26,0.03l-0.7,-2.02l-1.02,-0.35l0.44,-2.5l-0.21,-0.4l-0.77,0.4l-0.29,1.47l-0.69,0.2l-1.4,-0.64l-0.78,-2.12l-0.8,-0.22l-0.78,-2.15l-0.49,-0.24l-6.13,2.0l-0.3,-0.15l-14.84,4.19l-0.28,0.5ZM860.89,110.08l-0.02,-0.37l-0.14,-0.48l0.51,0.23l-0.35,0.62ZM876.37,122.8l-0.42,-0.66l0.06,-0.05l0.44,0.67l-0.09,0.05ZM875.46,121.25l-0.86,-0.11l-0.94,-1.42l1.44,1.0l0.36,0.54ZM871.54,119.46l-0.06,0.25l-0.35,-0.2l0.13,0.02l0.29,-0.07ZM871.87,135.18l0.01,-0.02l0.01,0.04l-0.02,-0.02ZM867.18,137.63l0.78,-0.56l0.28,-1.17l0.84,-1.19l0.17,0.26l0.46,-0.11l0.34,0.52l0.71,-0.01l0.19,0.38l-2.11,0.73l-1.34,1.31l-0.33,-0.17Z"
                    data-code="US-MA"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M608.66,337.47l25.17,-2.91l19.4,-2.75l14.04,43.3l0.79,1.4l0.22,1.05l1.17,1.59l0.59,1.87l2.24,2.5l0.92,1.8l-0.11,2.13l1.8,1.13l-0.17,0.74l-0.63,0.1l-0.16,0.7l-0.98,0.84l-0.22,2.29l0.25,1.48l-0.77,2.3l-0.14,1.84l1.1,2.94l1.21,1.52l0.53,1.6l-0.08,5.02l-0.25,0.81l0.48,2.03l1.35,1.16l1.14,2.07l-47.65,6.92l-0.42,0.61l-0.08,2.99l2.64,2.75l2.0,0.97l-0.34,2.7l0.56,1.6l0.43,0.39l-0.94,1.69l-1.24,1.0l-1.13,-0.75l-0.34,0.49l0.66,1.46l-2.82,1.05l0.29,-0.64l-0.45,-0.86l-0.99,-0.77l-0.1,-1.11l-0.57,-0.22l-0.53,0.61l-0.32,-0.1l-0.89,-1.53l0.41,-1.67l-0.97,-2.21l-0.46,-0.45l-0.86,-0.2l-0.3,-0.89l-0.56,-0.17l-0.37,0.61l0.14,0.35l-0.77,3.1l-0.01,5.08l-0.59,0.0l-0.24,-0.71l-2.22,-0.44l-1.65,0.31l-5.46,-31.99l-0.99,-66.49l-0.02,-0.37l-1.07,-0.63l-0.69,-1.02Z"
                    data-code="US-AL"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M468.68,225.54l24.71,-0.73l18.94,-1.43l22.11,-2.58l0.42,0.35l0.39,0.91l2.43,1.65l0.29,0.74l1.21,0.87l-0.51,1.37l-0.1,3.21l0.78,3.65l0.95,1.44l0.03,1.59l1.11,1.37l0.46,1.55l4.96,4.1l1.06,1.69l4.93,3.31l0.7,1.15l0.27,1.62l0.5,0.82l-0.18,0.69l0.47,1.8l0.97,1.63l0.77,0.73l1.04,0.16l0.83,-0.56l0.84,-1.4l0.57,-0.19l2.41,0.61l1.68,0.76l0.84,0.77l-0.97,1.95l0.26,2.28l-2.37,6.86l0.01,1.02l0.7,1.92l4.67,4.05l1.99,1.05l1.46,0.09l1.66,1.31l1.91,0.8l1.51,2.11l2.04,0.83l0.42,2.96l1.72,2.9l-1.1,1.94l0.18,1.38l0.75,0.33l2.31,4.25l1.94,0.92l0.55,-0.32l0.0,-0.65l0.87,1.1l1.07,-0.08l0.14,1.85l-0.37,1.07l0.53,1.6l-1.07,3.86l-0.51,0.07l-1.37,-1.13l-0.65,0.13l-0.78,3.34l-0.52,0.74l0.13,-1.06l-0.56,-1.09l-0.97,-0.2l-0.74,0.63l0.02,1.05l0.53,0.66l-0.04,0.7l0.58,1.34l-0.2,0.4l-1.2,0.39l-0.17,0.41l0.15,0.55l0.86,0.84l-1.71,0.37l-0.14,0.62l1.53,1.97l-0.89,0.75l-0.63,2.13l-10.61,1.42l1.06,-2.28l0.87,-0.61l0.18,-0.87l1.44,-0.96l0.25,-0.96l0.63,-0.37l0.29,-0.59l-0.22,-2.28l-1.05,-0.75l-0.2,-0.77l-1.09,-1.18l-39.24,3.61l-37.72,2.58l-3.21,-58.2l-1.03,-0.63l-1.2,-0.02l-1.52,-0.73l-0.19,-0.93l-0.76,-0.59l-0.34,-0.71l-0.36,-1.55l-0.55,-0.09l-0.3,-0.56l-1.13,-0.66l-1.4,-1.84l0.73,-0.51l0.09,-1.24l1.12,-1.27l0.09,-0.79l1.01,0.16l0.56,-0.43l-0.2,-2.24l-1.02,-0.74l-0.32,-1.1l-1.17,-0.01l-1.31,0.96l-0.81,-0.7l-0.73,-0.17l-2.67,-2.35l-1.05,-0.28l0.13,-1.6l-1.32,-1.72l0.1,-1.02l-0.37,-0.36l-1.01,-0.18l-0.59,-0.85l-0.84,-0.26l0.07,-0.53l-1.24,-2.88l-0.0,-0.74l-0.4,-0.49l-0.85,-0.29l-0.05,-0.54ZM583.77,294.59l-0.1,-0.1l-0.08,-0.15l0.11,-0.01l0.07,0.26Z"
                    data-code="US-MO"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M439.34,42.76l26.81,-1.05l0.34,1.46l1.28,0.84l1.79,-0.5l1.05,-1.43l0.78,-0.31l2.13,2.19l1.71,0.28l0.31,1.2l1.83,1.4l1.79,0.48l2.64,-0.41l0.39,0.85l0.67,0.4l5.12,0.01l0.37,0.23l0.54,1.59l0.71,0.61l4.27,-0.78l0.77,-0.65l0.07,-0.69l2.43,-0.79l3.97,-0.02l1.42,0.7l3.39,0.66l-1.01,0.79l0.0,0.82l1.18,0.54l2.23,-0.16l0.52,2.08l1.58,2.29l0.71,0.05l1.03,-0.78l-0.04,-1.73l2.67,-0.46l1.43,2.17l2.01,0.79l1.54,0.18l0.54,0.57l-0.03,0.83l0.58,0.35l1.32,0.06l0.38,0.83l1.43,-0.19l1.12,0.22l2.22,-0.85l2.78,-2.55l2.49,-1.54l1.24,2.52l0.96,0.51l2.23,-0.66l0.87,0.36l5.98,-1.3l0.56,0.18l1.32,1.64l1.24,0.59l0.62,-0.01l1.61,-0.83l1.35,0.08l-0.93,1.03l-4.69,3.07l-6.35,2.82l-3.68,2.48l-2.15,2.49l-0.95,0.58l-6.63,8.66l-0.95,0.61l-1.08,1.56l-1.96,1.96l-4.17,3.55l-0.86,1.79l-0.55,0.44l-0.14,0.96l-0.78,-0.01l-0.46,0.51l0.98,12.22l-0.79,1.2l-1.05,0.08l-0.52,0.82l-0.83,0.15l-0.61,0.83l-2.06,1.19l-0.94,1.86l0.06,0.72l-1.69,2.39l-0.01,2.06l0.38,0.91l2.15,0.39l1.42,2.49l-0.52,1.92l-0.71,1.25l-0.05,2.12l0.45,1.32l-0.71,1.23l0.91,3.14l-0.51,4.08l3.95,3.03l3.02,0.4l1.89,2.25l2.87,0.5l2.45,1.93l2.39,3.59l2.64,1.8l2.09,0.09l1.07,0.71l0.88,0.1l0.82,1.36l1.03,0.45l0.23,0.39l0.28,2.03l0.68,1.3l0.39,4.82l-40.63,3.2l-40.63,2.09l-1.46,-38.98l-0.7,-1.27l-0.83,-0.78l-2.57,-0.79l-0.94,-1.91l-1.46,-1.79l0.21,-0.68l2.83,-2.34l0.97,-2.12l0.4,-2.44l-0.35,-1.58l0.23,-1.58l-0.18,-1.79l-0.5,-1.03l-0.18,-2.33l-1.81,-2.59l-0.47,-1.13l-0.21,-2.16l-0.66,-0.98l0.15,-1.66l-0.35,-1.52l0.53,-2.69l-1.08,-1.85l-0.49,-8.33l-0.42,-0.79l0.06,-3.92l-1.58,-3.96l-0.53,-0.65l-0.4,-1.37l0.05,-1.19l-0.48,-0.53l-1.36,-3.77l0.0,-3.22l-0.47,-1.97l0.27,-1.12l-0.57,-2.32l0.73,-2.56l-2.06,-6.9ZM468.97,33.61l1.22,0.46l0.99,-0.2l0.33,0.45l-0.05,1.72l-1.78,1.12l-0.15,-0.47l-0.4,-0.14l-0.16,-2.95Z"
                    data-code="US-MN"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M2.95,175.4l0.78,-1.24l0.46,0.46l0.59,-0.08l0.52,-1.18l0.8,-0.86l1.3,-0.26l0.56,-0.53l-0.15,-0.71l-0.93,-0.32l1.53,-2.79l-0.3,-1.58l0.14,-0.87l2.04,-3.3l1.31,-3.03l0.36,-2.12l-0.28,-1.0l0.16,-3.11l-1.36,-2.16l1.18,-1.38l0.67,-2.53l32.73,8.13l32.58,7.34l-13.67,64.68l25.45,34.66l36.6,51.1l13.3,17.72l-0.19,2.73l0.73,0.94l0.21,1.71l0.85,0.63l0.81,2.56l-0.07,0.91l0.63,1.46l-0.16,1.36l3.8,3.82l0.01,0.5l-1.95,1.53l-3.11,1.26l-1.2,1.99l-1.72,1.14l-0.33,0.81l0.38,1.03l-0.51,0.51l-0.1,0.9l0.08,2.29l-0.6,0.72l-0.64,2.44l-2.02,2.47l-1.6,0.14l-0.42,0.51l0.33,0.89l-0.59,1.34l0.54,1.12l-0.01,1.19l-0.78,2.68l0.57,1.02l2.74,1.13l0.34,0.83l-0.19,2.4l-1.18,0.78l-0.42,1.37l-2.27,-0.62l-1.25,0.6l-43.38,-3.34l0.17,-1.15l0.67,-0.51l-0.17,-1.06l-1.17,-1.38l-1.04,-0.15l0.23,-1.2l-0.28,-1.07l0.78,-1.33l-0.3,-4.25l-0.6,-2.3l-1.92,-4.07l-3.56,-4.07l-1.29,-1.98l-2.42,-2.11l-2.04,-3.01l-2.22,-0.89l-0.94,0.3l-0.39,0.96l-0.62,-0.73l-0.88,-0.22l-0.15,-0.31l0.61,-0.76l0.17,-1.57l-0.44,-2.06l-1.01,-1.95l-1.0,-0.74l-4.44,-0.19l-3.33,-1.81l-1.36,-1.26l-0.7,-0.12l-1.02,-1.19l-0.44,-2.6l-0.97,-0.47l-1.68,-2.31l-2.19,-1.73l-1.24,-0.41l-1.66,0.37l-1.15,-1.01l-1.25,0.03l-2.48,-1.83l-1.06,0.01l-1.49,-0.69l-4.91,-0.52l-1.12,-2.35l-1.43,-0.76l1.34,-2.45l-0.25,-1.36l0.74,-1.99l-0.63,-1.35l1.27,-2.45l0.33,-2.44l-0.99,-1.24l-1.26,-0.23l-1.4,-1.28l0.41,-1.62l0.79,-0.09l0.25,-0.45l-0.47,-2.2l-0.65,-0.77l-1.47,-0.84l-1.78,-3.97l-1.82,-1.25l-0.36,-2.75l-1.61,-2.58l0.07,-1.39l-0.33,-1.26l-1.16,-0.94l-0.74,-2.95l-2.41,-2.69l-0.55,-1.25l-0.02,-4.63l0.59,-0.57l-0.59,-1.14l0.51,-0.59l0.53,0.61l0.78,-0.02l0.84,-0.81l0.56,-1.33l0.8,0.04l0.21,-0.88l-0.43,-0.27l0.47,-1.19l-1.22,-3.68l-0.62,-0.48l-1.05,0.08l-1.93,-0.51l-1.04,-1.06l-1.89,-3.21l-0.8,-2.28l0.86,-2.39l0.09,-1.11l-0.27,-2.38l-0.32,-0.64l-0.54,-0.24l0.25,-1.19l0.69,-1.07l0.24,-2.71l0.47,-0.64l0.88,0.13l0.18,0.94l-0.7,2.13l0.05,1.15l1.18,1.32l0.55,0.1l0.58,1.28l1.16,0.78l0.4,1.01l0.89,0.41l0.83,-0.21l-0.21,-1.45l-0.65,-0.43l-0.18,-0.58l-0.24,-3.57l-0.56,-0.71l0.26,-0.69l-1.48,-1.06l0.5,-1.07l0.09,-1.06l-1.2,-1.58l0.78,-0.74l0.79,0.06l1.24,-0.73l1.25,1.02l1.87,-0.32l5.55,2.41l0.61,-0.09l0.64,-1.38l0.69,-0.04l1.92,2.53l0.25,0.18l0.63,-0.24l0.02,-0.38l-0.39,-0.93l-1.57,-1.89l-1.66,-0.32l0.27,-0.62l-0.28,-0.54l-0.48,0.09l-1.05,1.01l-1.84,-0.22l-0.43,0.28l-0.15,-0.51l-1.05,-0.4l0.24,-1.05l-0.85,-0.47l-1.0,0.28l-0.6,0.84l-1.09,0.4l-1.35,-0.9l-0.39,-0.88l-1.51,-1.44l-0.58,0.03l-0.64,0.61l-0.92,-0.12l-0.48,0.36l-0.33,1.88l0.21,0.78l-0.76,1.36l0.36,0.65l-0.47,0.59l-0.04,0.69l-2.16,-2.89l-0.44,-0.15l-0.25,0.32l-0.73,-1.0l-0.21,-1.03l-1.2,-1.17l-0.4,-1.05l-0.61,-0.18l0.65,-1.48l0.11,0.95l0.76,1.49l0.44,0.25l0.33,-0.38l-1.45,-5.21l-1.08,-1.42l-0.31,-2.68l-2.5,-2.87l-1.8,-4.48l-3.05,-5.54l1.09,-1.7l0.25,-1.97l-0.46,-2.11l-0.14,-3.61l1.34,-2.92l0.7,-0.74l-0.07,-1.54l0.42,-1.53l-0.41,-1.63l0.11,-1.96l-1.41,-4.06l-0.97,-1.15l0.06,-0.8l-0.42,-1.19l-2.91,-4.03l0.51,-1.35l-0.21,-2.69l2.23,-3.44ZM31.5,240.45l-0.06,0.1l-0.34,0.04l0.21,-0.05l0.19,-0.09ZM64.32,351.64l0.27,0.13l0.19,0.18l-0.31,-0.18l-0.15,-0.13ZM65.92,352.88l1.32,0.84l0.76,1.73l-0.89,-0.66l-1.14,0.03l-0.05,-1.94ZM62.72,363.08l1.36,2.08l0.57,0.53l-0.46,0.06l-0.83,-0.79l-0.65,-1.88ZM43.54,333.81l0.88,0.73l1.37,0.36l1.36,1.0l-2.82,-0.18l-0.71,-0.58l0.24,-0.66l-0.32,-0.67ZM47.89,335.89l0.94,-0.5l0.32,0.36l-0.37,0.14l-0.88,-0.0ZM46.05,352.4l0.29,-0.06l0.95,0.92l-0.61,-0.17l-0.64,-0.69ZM37.57,334.04l2.57,0.16l0.2,0.74l0.6,0.45l-1.21,0.64l-1.17,-0.1l-0.49,-0.44l-0.5,-1.44ZM34.94,332.37l0.06,-0.02l0.05,0.06l-0.01,-0.0l-0.1,-0.04Z"
                    data-code="US-CA"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M452.9,162.25l42.83,-2.19l40.56,-3.19l0.96,2.52l2.0,1.0l0.08,0.59l-0.9,1.8l-0.16,1.04l0.9,5.09l0.92,1.26l0.39,1.75l1.46,1.72l4.95,0.85l1.27,2.03l-0.3,1.03l0.29,0.66l3.61,2.37l0.85,2.41l3.84,2.31l0.62,1.68l-0.31,4.21l-1.64,1.98l-0.5,1.94l0.13,1.28l-1.26,1.36l-2.51,0.97l-0.89,1.18l-0.55,0.25l-4.56,0.83l-0.89,0.73l-0.61,1.71l-0.15,2.56l0.4,1.08l2.01,1.47l0.54,2.65l-1.87,3.25l-0.22,2.24l-0.53,1.42l-2.88,1.39l-1.02,1.02l-0.2,0.99l0.72,0.87l0.2,2.15l-0.58,0.23l-1.34,-0.82l-0.31,-0.76l-1.29,-0.82l-0.29,-0.51l-0.88,-0.36l-0.3,-0.82l-0.95,-0.68l-22.3,2.61l-15.13,1.17l-7.59,0.51l-20.78,0.47l-0.22,-1.06l-1.3,-0.73l-0.33,-0.67l0.58,-1.16l-0.21,-0.95l0.22,-1.39l-0.36,-2.19l-0.6,-0.73l0.07,-3.65l-1.05,-0.5l0.05,-0.91l0.71,-1.02l-0.05,-0.44l-1.31,-0.56l0.33,-2.54l-0.41,-0.45l-0.89,-0.16l0.23,-0.8l-0.3,-0.58l-0.51,-0.25l-0.74,0.23l-0.42,-2.81l0.5,-2.36l-0.2,-0.67l-1.36,-1.71l-0.08,-1.92l-1.78,-1.54l-0.36,-1.74l-1.09,-0.94l0.03,-2.18l-1.1,-1.87l0.21,-1.7l-0.27,-1.08l-1.38,-0.67l-0.42,-1.58l-0.45,-0.59l0.05,-0.63l-1.81,-1.82l0.56,-1.61l0.54,-0.47l0.73,-2.68l0.0,-1.68l0.55,-0.69l0.21,-1.19l-0.51,-2.24l-1.33,-0.29l-0.05,-0.73l0.45,-0.56l-0.0,-1.71l-0.95,-1.42l-0.05,-0.87Z"
                    data-code="US-IA"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M612.24,185.84l1.83,-2.17l0.7,-1.59l1.18,-4.4l1.43,-3.04l1.01,-5.05l0.09,-5.37l-0.86,-5.54l-2.4,-5.18l0.61,-0.51l0.3,-0.79l-0.57,-0.42l-1.08,0.55l-3.82,-7.04l-0.21,-1.11l1.13,-2.69l-0.01,-0.97l-0.74,-3.13l-1.28,-1.65l-0.05,-0.62l1.73,-2.73l1.22,-4.14l-0.21,-5.34l-0.77,-1.6l1.09,-1.15l0.81,-0.02l0.56,-0.47l-0.27,-3.49l1.08,-0.11l0.67,-1.43l1.19,0.48l0.65,-0.33l0.76,-2.59l0.82,-1.2l0.56,-1.68l0.55,-0.18l-0.58,0.87l0.6,1.65l-0.71,1.8l0.71,0.42l-0.48,2.61l0.88,1.42l0.73,-0.06l0.52,0.56l0.65,-0.24l0.89,-2.26l0.66,-3.52l-0.08,-2.07l-0.76,-3.42l0.58,-1.02l2.13,-1.64l2.74,-0.54l0.98,-0.63l0.28,-0.64l-0.25,-0.54l-1.76,-0.1l-0.96,-0.86l-0.52,-1.99l1.85,-2.98l-0.11,-0.73l1.72,-0.23l0.74,-0.94l4.16,2.0l0.83,0.13l1.98,-0.4l1.37,0.39l1.19,1.04l0.53,1.14l0.77,0.49l2.41,-0.29l1.7,1.02l1.92,0.09l0.8,0.64l3.27,0.45l1.1,0.78l-0.01,1.12l1.04,1.31l0.64,0.21l0.38,0.92l-0.16,0.54l-0.66,-0.25l-0.94,0.57l-0.23,1.83l0.81,1.29l1.6,0.99l0.69,1.37l0.65,2.26l-0.12,1.73l0.77,5.57l-0.14,0.6l-0.57,0.2l-0.48,0.96l-0.75,0.08l-0.79,0.81l-0.17,4.47l-1.12,0.49l-0.18,0.82l-1.86,0.43l-0.73,0.6l-0.58,2.61l0.26,0.45l-0.21,0.52l0.25,2.58l1.38,1.31l2.9,0.84l0.91,-0.07l1.08,-1.23l0.6,-1.44l0.62,0.19l0.38,-0.24l1.01,-3.59l0.6,-1.06l-0.08,-0.52l0.97,-1.45l1.39,-0.39l1.07,-0.69l0.83,-1.1l0.87,-0.44l2.06,0.59l1.13,0.7l1.0,1.09l1.21,2.16l2.0,5.91l0.82,1.6l1.03,3.71l1.49,3.63l1.27,1.73l-0.33,3.93l0.45,2.49l-0.48,2.79l-0.34,0.44l-0.24,-0.33l-0.31,-1.71l-1.46,-0.52l-0.47,0.08l-1.48,1.36l-0.06,0.83l0.55,0.67l-0.83,0.57l-0.29,0.79l0.28,2.94l-0.49,0.75l-1.62,0.92l-1.06,1.85l-0.43,3.73l0.27,1.55l-0.33,0.93l-0.42,0.19l0.02,0.91l-0.64,0.3l-0.37,1.08l-0.52,0.52l-0.5,1.28l-0.02,1.05l-0.52,0.78l-20.37,4.25l-0.14,-0.86l-0.46,-0.33l-31.6,4.74ZM621.47,115.87l0.0,-0.07l0.12,-0.12l-0.01,0.03l-0.11,0.16ZM621.73,114.95l-0.07,-0.16l0.07,-0.14l-0.0,0.3ZM543.48,88.04l4.87,-2.38l3.55,-3.62l5.77,-1.36l1.39,-0.84l2.36,-2.71l0.97,0.04l1.52,-0.73l1.0,-2.25l2.82,-2.84l0.23,1.72l1.85,0.59l0.05,1.45l0.66,0.14l0.51,0.6l-0.17,3.14l0.44,0.95l-0.34,0.47l0.2,0.47l0.74,-0.02l1.08,-2.21l1.08,-0.9l-0.42,1.15l0.59,0.45l0.82,-0.67l0.52,-1.22l1.0,-0.43l3.09,-0.25l1.51,0.21l1.18,0.93l1.54,0.44l0.47,1.05l2.31,2.58l1.17,0.55l0.53,1.55l0.73,0.34l1.87,0.07l0.73,-0.4l1.07,-0.06l0.52,-0.65l0.88,-0.43l1.0,1.11l1.1,0.64l1.02,-0.25l0.68,-0.82l1.87,1.06l0.64,-0.34l1.65,-2.59l2.81,-1.89l1.7,-1.65l0.91,0.11l3.27,-1.21l5.17,-0.25l4.49,-2.72l2.56,-0.37l-0.01,3.24l0.29,0.71l-0.36,1.1l0.67,0.85l0.66,0.11l0.71,-0.39l2.2,0.7l1.14,-0.43l1.03,-0.87l0.66,0.48l0.21,0.71l0.85,0.22l1.27,-0.8l0.95,-1.55l0.66,-0.02l0.84,0.75l1.98,3.78l-0.86,1.04l0.48,0.89l0.47,0.36l1.37,-0.42l0.58,0.46l0.64,0.04l0.18,1.2l0.98,0.87l1.53,0.52l-1.17,0.68l-4.96,-0.14l-0.53,0.29l-1.35,-0.17l-0.88,0.41l-0.66,-0.76l-1.63,-0.07l-0.59,0.47l-0.07,1.22l-0.49,0.75l0.38,2.05l-0.92,-0.22l-0.89,-0.92l-0.77,-0.13l-1.96,-1.65l-2.41,-0.6l-1.6,0.04l-1.04,-0.5l-2.89,0.47l-0.61,0.45l-1.18,2.52l-3.48,0.73l-0.58,0.77l-2.06,-0.34l-2.82,0.93l-0.68,0.83l-0.56,2.51l-0.78,0.28l-0.81,0.87l-0.65,0.28l0.16,-1.96l-0.75,-0.91l-1.02,0.34l-0.76,0.92l-0.97,-0.39l-0.68,0.17l-0.37,0.4l0.1,0.83l-0.73,2.01l-1.2,0.59l-0.11,-1.38l-0.46,-1.06l0.34,-1.69l-0.17,-0.37l-0.66,-0.17l-0.45,0.58l-0.6,2.12l-0.22,2.57l-1.12,0.91l-1.26,3.02l-0.62,2.66l-2.56,5.33l-0.69,0.74l0.12,0.91l-1.4,-1.28l0.18,-1.75l0.63,-1.69l-0.41,-0.81l-0.62,-0.31l-1.36,0.85l-1.16,0.09l0.04,-1.29l0.81,-1.45l-0.41,-1.34l0.3,-1.09l-0.58,-0.98l0.15,-0.83l-1.9,-1.55l-1.1,-0.06l-0.59,-0.44l-0.86,0.2l-0.62,-0.2l0.3,-1.36l-0.94,-1.45l-1.13,-0.51l-2.23,-0.1l-3.2,-0.71l-1.55,0.59l-1.43,-0.42l-1.62,0.17l-4.56,-1.94l-15.37,-2.5l-2.0,-3.4l-1.88,-0.96l-0.76,0.26l-0.1,-0.3ZM603.38,98.65l-0.01,0.52l-0.46,0.32l-0.7,1.39l0.08,0.57l-0.65,-0.58l0.91,-2.16l0.83,-0.06ZM643.87,87.47l1.99,-1.52l0.17,-0.57l-0.27,-0.64l1.05,0.16l0.8,1.24l0.81,0.19l-0.27,1.08l-0.36,0.19l-1.5,-0.34l-0.77,0.45l-1.63,-0.24ZM635.6,77.64l0.56,-0.83l0.52,0.05l-0.37,1.32l0.11,0.71l-0.35,-0.9l-0.46,-0.35ZM636.53,79.17l0.09,0.14l0.01,0.01l-0.02,-0.01l-0.08,-0.14ZM637.39,81.25l0.4,0.45l0.22,0.61l-0.63,-0.71l0.01,-0.34ZM633.73,93.13l1.41,0.25l0.36,-0.18l0.4,0.21l-0.17,0.52l-0.75,0.11l-1.24,-0.9ZM618.85,96.77l0.62,2.25l-0.8,0.78l-0.39,-0.27l0.56,-2.76ZM613.26,110.83l0.47,0.3l-0.09,0.57l-0.45,-0.69l0.06,-0.17ZM612.23,113.57l0.0,-0.03l0.02,-0.04l-0.03,0.07ZM599.41,82.64l-0.23,-0.37l0.03,-0.4l0.37,0.32l-0.17,0.45ZM570.51,72.75l-0.51,-0.27l-1.16,0.06l-0.04,-1.56l1.0,-1.03l1.17,-2.09l1.84,-1.49l0.63,-0.0l0.53,-0.58l2.08,-0.89l3.34,-0.42l1.1,0.66l-0.54,0.38l-1.31,-0.12l-2.27,0.78l-0.15,0.29l0.3,0.59l0.71,0.13l-1.19,0.98l-1.4,1.89l-0.7,0.29l-0.36,1.45l-1.15,1.37l-0.66,2.04l-0.67,-0.87l0.75,-0.97l0.14,-1.95l-0.63,-0.37l-0.21,0.15l-0.6,0.92l-0.05,0.67ZM558.28,58.21l0.75,-0.98l-0.39,-0.33l0.56,-0.53l4.62,-2.98l1.97,-1.72l0.62,-0.18l-0.45,0.65l0.1,0.79l-0.43,0.49l-4.25,2.56l-0.86,0.99l0.24,0.36l-1.87,1.17l-0.61,-0.28Z"
                    data-code="US-MI"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M654.05,331.71l22.02,-3.57l20.65,-3.86l-1.48,1.42l-0.51,1.68l-0.66,0.82l-0.41,1.73l0.11,1.23l0.82,0.78l1.84,0.8l1.03,0.12l2.7,2.03l0.84,0.24l1.9,-0.37l0.6,0.25l0.8,1.64l1.51,1.6l1.04,2.5l1.33,0.82l0.84,1.16l0.56,0.26l1.0,1.77l1.07,0.3l1.17,0.99l3.81,1.85l2.41,3.16l2.25,0.58l2.53,1.67l0.5,2.34l1.25,1.02l0.47,-0.16l0.31,0.49l-0.1,0.62l0.79,0.73l0.79,0.09l0.56,1.21l4.99,1.89l0.4,1.78l1.54,1.73l1.02,2.01l-0.07,0.81l0.49,0.69l0.11,1.24l1.04,0.79l1.17,0.17l1.25,0.62l0.28,0.53l0.57,0.23l1.12,2.56l0.76,0.57l0.08,2.68l0.77,1.48l1.38,0.9l1.52,-0.27l1.44,0.76l1.45,0.11l-0.59,0.78l-0.56,-0.35l-0.47,0.28l-0.4,0.99l0.62,0.91l-0.38,0.48l-1.38,-0.16l-0.77,-0.55l-0.65,0.44l0.26,0.71l-0.49,0.52l0.36,0.61l0.94,-0.04l0.5,0.29l-0.58,1.35l-1.43,0.27l-1.33,-0.44l-0.44,0.39l0.34,0.85l1.23,0.35l-0.5,0.87l0.23,0.35l-0.2,0.64l0.83,0.64l-0.33,0.44l-0.72,-0.13l-0.96,0.51l-0.1,0.62l1.09,0.45l0.05,0.95l0.48,-0.07l1.2,-1.17l-0.92,2.31l-0.31,-0.58l-0.59,-0.08l-0.44,0.72l0.29,0.7l0.98,0.83l-2.32,0.04l-0.92,-0.28l-0.63,0.3l0.06,0.63l0.55,0.34l2.76,0.24l1.07,0.66l-0.02,0.34l-0.56,0.22l-0.88,1.95l-0.5,-1.41l-0.45,-0.13l-0.6,0.33l-0.15,0.84l0.34,0.96l-0.6,0.11l-0.03,0.84l-0.3,0.16l0.07,0.46l1.33,1.15l-1.09,1.03l0.32,0.47l0.77,0.07l-0.39,0.92l0.06,0.88l-0.46,0.51l1.1,1.66l0.03,0.76l-0.79,0.33l-2.64,-0.17l-4.06,-0.96l-1.31,0.35l-0.18,0.74l-0.68,0.26l-0.35,1.25l0.28,2.08l0.95,1.36l0.13,4.25l-1.97,0.4l-0.54,-0.92l-0.12,-1.3l-1.33,-1.82l-49.22,5.14l-0.72,-0.56l-0.86,-2.7l-0.94,-1.51l-0.56,-0.38l0.16,-0.68l-0.73,-1.51l-1.82,-1.81l-0.43,-1.75l0.25,-0.8l0.06,-5.18l-0.6,-1.81l-1.19,-1.47l-1.03,-2.65l0.12,-1.65l0.78,-2.36l-0.25,-1.53l0.19,-2.11l1.62,-1.33l0.46,-1.47l-0.55,-0.61l-1.42,-0.69l0.09,-2.15l-0.97,-1.87l-2.18,-2.42l-1.03,-2.81l-0.75,-0.68l-0.17,-0.96l-0.77,-1.37l-13.99,-43.12ZM745.21,389.83l0.7,-0.26l-0.07,0.82l-0.29,-0.33l-0.34,-0.24ZM743.75,406.73l0.05,0.87l-0.01,0.46l-0.34,-0.56l0.3,-0.76Z"
                    data-code="US-GA"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M128.39,384.21l0.44,-1.81l1.29,-1.29l0.54,-1.11l0.48,-0.25l1.66,0.62l0.96,-0.03l0.52,-0.46l0.28,-1.17l1.31,-1.0l0.24,-2.73l-0.46,-1.24l-0.84,-0.66l-2.07,-0.67l-0.3,-0.61l0.8,-2.4l0.0,-1.39l-0.52,-1.2l0.57,-0.86l-0.2,-0.87l1.57,-0.27l2.29,-2.81l0.65,-2.43l0.65,-0.81l0.02,-3.17l0.55,-0.62l-0.29,-1.43l1.71,-1.14l1.03,-1.85l3.16,-1.29l2.03,-1.58l0.26,-0.53l-0.13,-1.04l-3.25,-3.49l-0.51,-0.22l0.22,-1.26l-0.66,-1.46l0.07,-0.91l-0.88,-2.76l-0.84,-0.56l-0.19,-1.65l-0.69,-0.8l0.19,-3.54l0.58,-0.87l-0.3,-0.86l1.04,-0.4l0.4,-1.42l0.14,-3.2l-0.76,-3.66l0.47,-0.88l0.29,-1.67l-0.4,-3.0l0.85,-2.56l-0.8,-1.87l-0.03,-0.92l0.43,-0.52l0.34,-1.35l2.54,-0.63l1.75,0.99l1.43,-0.19l0.96,2.24l0.79,0.71l1.54,0.14l1.01,-0.5l1.02,-2.27l0.94,-1.19l2.57,-16.95l42.43,5.78l42.56,4.67l-11.82,123.66l-36.89,-4.05l-36.34,-18.98l-28.44,-15.56Z"
                    data-code="US-AZ"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                    cursor="pointer"
                  />
                  <path
                    d="M166.3,57.31l0.69,-0.1l0.33,-0.38l-0.9,-1.99l0.83,-0.96l-0.39,-1.3l0.09,-0.96l-1.24,-1.93l-0.24,-1.49l-1.03,-1.33l-1.19,-2.44l3.53,-20.65l43.66,6.71l43.06,5.23l42.75,3.84l43.15,2.53l-3.53,86.06l-28.11,-1.47l-26.82,-1.91l-26.78,-2.4l-25.84,-2.79l-0.44,0.35l-1.22,10.41l-1.51,-2.01l-0.03,-0.91l-1.19,-2.35l-1.25,-0.74l-1.8,0.92l0.03,1.05l-0.72,0.42l-0.34,1.56l-2.42,-0.41l-1.91,0.57l-0.92,-0.85l-3.36,0.09l-2.38,-0.96l-1.68,0.58l-0.84,1.49l-4.66,-1.6l-1.3,0.37l-1.12,0.9l-0.31,0.67l-1.65,-1.4l0.22,-1.43l-0.9,-1.71l0.4,-0.36l0.07,-0.62l-1.17,-3.08l-1.45,-1.25l-1.44,0.36l-0.21,-0.64l-1.08,-0.9l-0.41,-1.37l0.68,-0.61l0.2,-1.41l-0.77,-2.38l-0.77,-0.35l-0.31,-1.58l-1.51,-2.54l0.23,-1.51l-0.56,-1.26l0.34,-1.4l-0.73,-0.86l0.48,-0.98l-0.21,-0.74l-1.14,-0.75l-0.13,-0.59l-0.85,-0.91l-0.8,-0.4l-0.51,0.37l-0.07,0.74l-0.7,0.27l-1.13,1.22l-1.75,0.37l-1.21,1.07l-1.08,-0.85l-0.64,-1.01l-1.06,-0.44l0.02,-0.86l0.74,-0.63l0.24,-1.06l-0.61,-1.6l0.9,-1.09l1.07,-0.08l0.83,-0.8l-0.26,-1.14l0.38,-1.07l-0.95,-0.81l-0.04,-0.81l0.66,-1.28l-0.59,-1.07l0.74,-0.07l0.38,-0.42l-0.04,-1.77l1.83,-3.73l-0.14,-1.05l0.89,-0.62l0.6,-3.17l-0.78,-0.5l-1.8,0.37l-1.33,-0.11l-0.64,-0.55l0.37,-0.83l-0.62,-0.97l-0.66,-0.23l-0.72,0.35l-0.07,-0.95l-1.74,-1.63l0.04,-1.84l-1.68,-1.82l-0.08,-0.69l-1.55,-2.88l-1.07,-1.29l-0.57,-1.63l-2.35,-1.34l-0.95,-1.95l-1.44,-1.19Z"
                    data-code="US-MT"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M555.49,431.1l0.67,-0.97l-1.05,-1.76l0.18,-1.63l-0.81,-0.87l1.69,-0.25l0.47,-0.54l0.4,-2.74l-0.77,-1.82l1.56,-1.79l0.25,-3.58l0.74,-2.26l1.89,-1.25l1.15,-1.97l1.4,-1.04l0.34,-0.78l-0.04,-0.99l-0.63,-0.96l1.14,-0.28l0.96,-2.59l0.91,-1.31l-0.16,-0.86l-1.54,-0.43l-0.35,-0.96l-1.83,-1.04l-0.07,-2.14l-0.93,-0.74l-0.45,-0.84l-0.02,-0.37l1.14,-0.29l0.47,-0.69l-0.26,-0.89l-1.41,-0.49l0.23,-1.77l0.98,-1.54l-0.77,-1.06l-1.08,-0.31l-0.15,-2.82l0.9,-0.54l0.23,-0.8l-0.62,-2.52l-1.25,-0.66l0.7,-1.33l-0.07,-2.22l-2.02,-1.52l1.14,-0.47l0.12,-1.41l-1.34,-0.89l1.58,-2.04l0.93,-0.31l0.36,-0.69l-0.52,-1.56l0.42,-1.35l-0.9,-0.89l1.6,-0.83l1.24,-0.27l0.59,-0.77l-0.09,-1.07l-1.41,-0.95l1.39,-1.08l0.62,-1.77l0.5,0.11l0.45,-0.28l0.34,-0.98l-0.2,-0.77l1.48,-0.43l1.22,-1.21l0.07,-3.53l-0.46,-1.53l0.36,-1.78l0.73,0.09l0.68,-0.33l0.42,-0.87l-0.41,-1.06l2.72,-1.71l0.58,-1.06l-0.29,-1.28l36.45,-4.1l0.86,1.26l0.85,0.45l0.99,66.5l5.52,32.95l-0.73,0.69l-1.53,-0.3l-0.91,-0.94l-1.32,1.06l-1.23,0.17l-2.17,-1.26l-1.85,-0.19l-0.83,0.36l-0.34,0.44l0.32,0.41l-0.56,0.36l-3.96,1.66l-0.05,-0.5l-0.96,-0.52l-1.0,0.04l-0.59,1.0l0.76,0.61l-1.59,1.21l-0.32,1.28l-0.69,0.3l-1.34,-0.06l-1.16,-1.86l-0.08,-0.89l-0.92,-1.47l-0.21,-1.01l-1.4,-1.63l-1.16,-0.54l-0.47,-0.78l0.1,-0.62l-0.69,-0.92l0.21,-1.99l0.5,-0.93l0.66,-2.98l-0.06,-1.23l-0.43,-0.29l-34.66,3.41Z"
                    data-code="US-MS"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M697.56,324.11l4.86,-2.69l1.02,-0.05l1.11,-1.38l3.93,-1.9l0.45,-0.88l0.63,0.22l22.71,-3.36l0.07,1.22l0.42,0.57l0.71,0.01l1.21,-1.3l2.82,2.54l0.46,2.48l0.55,0.52l19.74,-3.49l22.74,15.07l0.02,0.55l-2.48,2.18l-2.44,3.67l-2.41,5.72l-0.09,2.74l-1.08,-0.21l0.85,-2.73l-0.64,-0.23l-0.76,0.87l-0.56,1.38l-0.11,1.55l0.84,0.95l1.05,0.23l0.44,0.91l-0.75,0.08l-0.41,0.56l-0.87,0.02l-0.24,0.68l0.94,0.45l-1.1,1.13l-0.07,1.02l-1.34,0.63l-0.5,-0.61l-0.5,-0.08l-1.07,0.87l-0.56,1.76l0.43,0.87l-1.2,1.23l-0.61,1.44l-1.2,1.01l-0.9,-0.4l0.27,-0.6l-0.53,-0.74l-1.38,0.31l-0.11,0.43l0.36,0.77l-0.52,0.03l0.05,0.76l0.72,0.58l1.3,0.43l-0.12,0.39l-0.88,0.94l-1.22,0.23l-0.25,0.51l0.33,0.45l-2.3,1.34l-1.42,-0.85l-0.56,0.11l-0.11,0.67l1.19,0.78l-1.54,1.57l-0.72,-0.75l-0.5,0.52l-0.0,0.74l-0.69,-0.37l-0.85,-0.0l-1.34,-0.84l-0.45,0.5l0.16,0.53l-1.73,0.17l-0.44,0.37l-0.06,0.77l0.65,0.23l1.43,-0.17l-0.26,0.55l0.42,0.25l1.91,-0.15l0.11,0.22l-0.97,0.86l-0.32,0.78l0.57,0.49l0.94,-0.53l0.03,0.21l-1.12,1.09l-0.99,0.43l-0.21,-2.04l-0.69,-0.27l-0.22,-1.55l-0.88,-0.15l-0.31,0.58l0.86,2.7l-1.12,-0.66l-0.63,-1.0l-0.4,-1.76l-0.65,-0.2l-0.52,-0.63l-0.69,0.0l-0.27,0.6l0.84,1.02l0.01,0.68l1.11,1.83l-0.02,0.86l1.22,1.17l-0.62,0.35l0.03,0.98l-1.2,3.56l-1.52,-0.78l-1.52,0.26l-0.97,-0.68l-0.54,-1.03l-0.17,-2.93l-0.86,-0.75l-1.06,-2.47l-1.04,-0.95l-3.23,-1.33l-0.49,-2.65l-1.12,-2.17l-1.43,-1.58l-0.06,-1.07l-0.76,-1.21l-4.82,-1.69l-0.58,-1.27l-1.21,-0.37l0.02,-0.7l-0.53,-0.87l-0.87,0.0l-0.73,-0.61l0.03,-1.21l-0.66,-1.26l-2.7,-1.78l-2.16,-0.52l-2.36,-3.12l-3.93,-1.93l-1.22,-1.03l-0.83,-0.12l-1.05,-1.81l-0.51,-0.22l-0.91,-1.21l-1.18,-0.68l-0.99,-2.42l-1.54,-1.65l-1.02,-1.87l-1.06,-0.37l-1.93,0.37l-0.46,-0.16l-2.75,-2.19l-1.06,0.02l-1.7,-0.74l-0.52,-0.53l0.36,-2.22l0.64,-0.78l0.34,-1.39l1.36,-1.23l0.4,-0.98ZM750.38,375.27l0.73,-0.08l0.51,0.45l-1.23,1.9l0.28,-1.22l-0.3,-1.06Z"
                    data-code="US-SC"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M859.15,133.1l0.33,0.01l1.02,2.65l-0.31,0.56l-1.04,-3.22ZM858.41,136.77l-0.28,-0.34l0.24,-1.5l0.41,1.53l-0.37,0.31ZM851.13,141.49l0.22,-0.46l-0.53,-2.22l-3.14,-10.0l5.61,-1.84l0.76,2.06l0.8,0.25l0.19,0.73l0.08,0.41l-0.77,0.25l0.03,0.29l0.51,1.45l0.59,0.5l-0.6,0.15l-0.46,0.73l0.87,0.97l-0.14,1.22l0.94,2.18l-0.32,2.08l-1.33,0.23l-3.15,2.19l-0.16,-1.21ZM855.93,131.57l0.26,0.1l0.01,0.09l-0.17,-0.08l-0.1,-0.11ZM857.32,132.24l0.23,0.48l-0.2,0.31l-0.04,-0.39l0.01,-0.4ZM855.92,145.03l0.11,0.11l-0.18,0.1l-0.03,-0.14l0.11,-0.07Z"
                    data-code="US-RI"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                  <path
                    d="M823.44,156.54l2.83,-3.23l-0.07,-0.54l-1.31,-1.25l-3.5,-15.89l9.81,-2.41l0.6,0.46l0.65,-0.26l0.23,-0.58l14.16,-4.0l3.2,10.18l0.47,1.96l-0.04,1.69l-1.65,0.32l-0.91,0.81l-0.69,-0.36l-0.5,0.11l-0.18,0.91l-1.15,0.07l-1.27,1.27l-0.62,-0.14l-0.56,-1.02l-0.89,-0.09l-0.21,0.67l0.75,0.64l0.08,0.54l-0.89,-0.02l-1.02,0.87l-1.65,0.07l-1.15,0.94l-0.86,-0.09l-2.05,0.82l-0.4,-0.68l-0.61,0.11l-0.89,2.12l-0.59,0.29l-0.83,1.29l-0.79,-0.05l-0.94,0.74l-0.2,0.63l-0.53,0.05l-0.88,0.75l-2.77,3.07l-0.96,0.27l-1.24,-1.04Z"
                    data-code="US-CT"
                    fill="#C8D0D8"
                    fillOpacity={1}
                    stroke="none"
                    strokeWidth={0}
                    fillRule="evenodd"
                    className="jvm-region jvm-element"
                  />
                </g>
                <g id="jvm-regions-labels-group">
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-VA"
                    x="569.6521953507423"
                    y="153.21430152330686"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    VA
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-PA"
                    x="578.0339675692685"
                    y="109.23623890603795"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    PA
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-TN"
                    x="505.71691762831637"
                    y="191.20624125042886"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    TN
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-ID"
                    x="220.15598208783962"
                    y="63.05498116637056"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    ID
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-NV"
                    x="184.91120836028918"
                    y="150.23803269910633"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    NV
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-TX"
                    x="355.5371357170943"
                    y="264.7944107615299"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    TX
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-NH"
                    x="627.4940107619148"
                    y="52.9344056776034"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    NH
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-NY"
                    x="593.0192613472865"
                    y="74.35812621524828"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    NY
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-HI"
                    x="286.6731456686758"
                    y="320.5582961220965"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    HI
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-VT"
                    x="613.4651806531743"
                    y="56.1734896260487"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    VT
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-NM"
                    x="288.851864083238"
                    y="221.05763220505"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    NM
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-NC"
                    x="571.7420431964199"
                    y="181.822050046417"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    NC
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-ND"
                    x="353.30032970824226"
                    y="46.120123087834756"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    ND
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-NE"
                    x="359.20391860364487"
                    y="126.00609194118596"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    NE
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-LA"
                    x="453.24709963518393"
                    y="262.0900131403997"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    LA
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-SD"
                    x="353.64247673577376"
                    y="89.0103488609254"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    SD
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-DC"
                    x="590.7029940459407"
                    y="132.86314174372748"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    DC
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-DE"
                    x="606.0853611527209"
                    y="126.20473118439794"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    DE
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-FL"
                    x="546.5599100659246"
                    y="287.02472613095335"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    FL
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-WA"
                    x="170.6531705167519"
                    y="27.1043257853776"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    WA
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-KS"
                    x="373.77062547447275"
                    y="166.30813957713033"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    KS
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-WI"
                    x="450.8055835814049"
                    y="77.82944047699407"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    WI
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-OR"
                    x="160.81067050181707"
                    y="70.02510547919645"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    OR
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-KY"
                    x="505.4390222502723"
                    y="166.71760629372557"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    KY
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-CO"
                    x="298.0954383608899"
                    y="157.88957885973215"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    CO
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-OH"
                    x="528.4638479658024"
                    y="125.98163621538325"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    OH
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-OK"
                    x="370.60791496257974"
                    y="208.19301587404573"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    OK
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-WV"
                    x="558.9601240537544"
                    y="141.8714095088228"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    WV
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-WY"
                    x="281.8022878032666"
                    y="102.81309988920904"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    WY
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-UT"
                    x="236.93806997990015"
                    y="146.03945784020573"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    UT
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-IN"
                    x="495.8653959217776"
                    y="139.75994084321243"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    IN
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-IL"
                    x="463.27597081486505"
                    y="143.17316751066838"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    IL
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-AK"
                    x="179.9303681389398"
                    y="313.7898744293849"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    AK
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-NJ"
                    x="609.2237325056644"
                    y="111.17357534365446"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    NJ
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-ME"
                    x="643.1270245791336"
                    y="30.792607205946442"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    ME
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-MD"
                    x="587.7572657372802"
                    y="130.77913622873254"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    MD
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-AR"
                    x="440.03107620582944"
                    y="213.68114185392417"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    AR
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-MA"
                    x="632.1142359049078"
                    y="74.56592528178523"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    MA
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-AL"
                    x="505.50913021846475"
                    y="235.8106781847395"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    AL
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-MO"
                    x="434.88832382397925"
                    y="165.13163965306623"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    MO
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-MN"
                    x="414.9770640350303"
                    y="59.56534725797486"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    MN
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-CA"
                    x="157.21100418658855"
                    y="160.8414152715006"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    CA
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-IA"
                    x="421.0488822129804"
                    y="116.6097078443287"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    IA
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-MI"
                    x="485.2650300995443"
                    y="72.52164341902596"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    MI
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-GA"
                    x="541.4324605805633"
                    y="227.9360930071885"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    GA
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-AZ"
                    x="225.60434012007815"
                    y="217.37544384317968"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    AZ
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-MT"
                    x="266.0805619480836"
                    y="47.09490756943075"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    MT
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-MS"
                    x="470.2124446085073"
                    y="239.16592916208472"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    MS
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-SC"
                    x="563.3206755491966"
                    y="212.09212116171082"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    SC
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-RI"
                    x="634.4579943329137"
                    y="83.1800315581113"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    RI
                  </text>
                  <text
                    textAnchor="middle"
                    alignmentBaseline="central"
                    data-code="US-CT"
                    x="623.3717965172126"
                    y="87.52224475620699"
                    fontFamily="Satoshi"
                    fontSize={12}
                    fontWeight="semibold"
                    cursor="default"
                    fill="#fff"
                    className="jvm-region jvm-element"
                  >
                    CT
                  </text>
                </g>
                <g id="jvm-lines-group" />
                <g id="jvm-markers-group" />
                <g id="jvm-markers-labels-group" />
              </svg>
              <div className="jvm-zoom-btn jvm-zoomin">+</div>
              <div className="jvm-zoom-btn jvm-zoomout">−</div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-8">
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
              <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Top Channels
              </h4>
              <div className="flex flex-col">
                <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
                  <div className="p-2.5 xl:p-5">
                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                      Source
                    </h5>
                  </div>
                  <div className="p-2.5 text-center xl:p-5">
                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                      Visitors
                    </h5>
                  </div>
                  <div className="p-2.5 text-center xl:p-5">
                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                      Revenues
                    </h5>
                  </div>
                  <div className="hidden p-2.5 text-center sm:block xl:p-5">
                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                      Sales
                    </h5>
                  </div>
                  <div className="hidden p-2.5 text-center sm:block xl:p-5">
                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                      Conversion
                    </h5>
                  </div>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 border-b border-stroke dark:border-strokedark">
                  <div className="flex items-center gap-3 p-2.5 xl:p-5">
                    <div className="flex-shrink-0">
                      <img src="/assets/brand-01-10b0313f.svg" alt="Brand" />
                    </div>
                    <p className="hidden text-black dark:text-white sm:block">Google</p>
                  </div>
                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-black dark:text-white">3.5K</p>
                  </div>
                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-meta-3">$5,768</p>
                  </div>
                  <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                    <p className="text-black dark:text-white">590</p>
                  </div>
                  <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                    <p className="text-meta-5">4.8%</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 border-b border-stroke dark:border-strokedark">
                  <div className="flex items-center gap-3 p-2.5 xl:p-5">
                    <div className="flex-shrink-0">
                      <img src="/assets/brand-02-31d534b8.svg" alt="Brand" />
                    </div>
                    <p className="hidden text-black dark:text-white sm:block">
                      Twitter
                    </p>
                  </div>
                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-black dark:text-white">2.2K</p>
                  </div>
                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-meta-3">$4,635</p>
                  </div>
                  <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                    <p className="text-black dark:text-white">467</p>
                  </div>
                  <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                    <p className="text-meta-5">4.3%</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 border-b border-stroke dark:border-strokedark">
                  <div className="flex items-center gap-3 p-2.5 xl:p-5">
                    <div className="flex-shrink-0">
                      <img src="/assets/brand-03-6cc453d1.svg" alt="Brand" />
                    </div>
                    <p className="hidden text-black dark:text-white sm:block">Github</p>
                  </div>
                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-black dark:text-white">2.1K</p>
                  </div>
                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-meta-3">$4,290</p>
                  </div>
                  <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                    <p className="text-black dark:text-white">420</p>
                  </div>
                  <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                    <p className="text-meta-5">3.7%</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 border-b border-stroke dark:border-strokedark">
                  <div className="flex items-center gap-3 p-2.5 xl:p-5">
                    <div className="flex-shrink-0">
                      <img src="/assets/brand-04-1c41292a.svg" alt="Brand" />
                    </div>
                    <p className="hidden text-black dark:text-white sm:block">Vimeo</p>
                  </div>
                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-black dark:text-white">1.5K</p>
                  </div>
                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-meta-3">$3,580</p>
                  </div>
                  <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                    <p className="text-black dark:text-white">389</p>
                  </div>
                  <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                    <p className="text-meta-5">2.5%</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 ">
                  <div className="flex items-center gap-3 p-2.5 xl:p-5">
                    <div className="flex-shrink-0">
                      <img src="/assets/brand-05-b51c44b2.svg" alt="Brand" />
                    </div>
                    <p className="hidden text-black dark:text-white sm:block">
                      Facebook
                    </p>
                  </div>
                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-black dark:text-white">3.5K</p>
                  </div>
                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-meta-3">$6,768</p>
                  </div>
                  <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                    <p className="text-black dark:text-white">390</p>
                  </div>
                  <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                    <p className="text-meta-5">4.2%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
            <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
              Chats
            </h4>
            <div>
              <a
                className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
                href="/"
              >
                <div className="relative h-14 w-14 rounded-full">
                  <img src="/assets/user-01-b007ff3f.png" alt="User" />
                  <span
                    className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white"
                    style={{ backgroundColor: "rgb(16, 185, 129)" }}
                  />
                </div>
                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <h5 className="font-medium text-black dark:text-white">
                      Devid Heilo
                    </h5>
                    <p>
                      <span className="text-sm text-black dark:text-white">
                        How are you?
                      </span>
                      <span className="text-xs"> . 12 min</span>
                    </p>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <span className="text-sm font-medium text-white"> 3</span>
                  </div>
                </div>
              </a>
              <a
                className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
                href="/"
              >
                <div className="relative h-14 w-14 rounded-full">
                  <img src="/assets/user-02-5a304001.png" alt="User" />
                  <span
                    className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white"
                    style={{ backgroundColor: "rgb(220, 53, 69)" }}
                  />
                </div>
                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <h5 className="font-medium text-black dark:text-white">
                      Henry Fisher
                    </h5>
                    <p>
                      <span className="text-sm text-black dark:text-white">
                        Waiting for you!
                      </span>
                      <span className="text-xs"> . 12 min</span>
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
                href="/"
              >
                <div className="relative h-14 w-14 rounded-full">
                  <img src="/assets/user-04-04f11146.png" alt="User" />
                  <span
                    className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white"
                    style={{ backgroundColor: "rgb(16, 185, 129)" }}
                  />
                </div>
                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <h5 className="font-medium text-black dark:text-white">Jhon Doe</h5>
                    <p>
                      <span className="text-sm text-black dark:text-white">
                        What's up?
                      </span>
                      <span className="text-xs"> . 32 min</span>
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
                href="/"
              >
                <div className="relative h-14 w-14 rounded-full">
                  <img src="/assets/user-05-d5425ed5.png" alt="User" />
                  <span
                    className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white"
                    style={{ backgroundColor: "rgb(255, 186, 0)" }}
                  />
                </div>
                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <h5 className="font-medium text-black dark:text-white">Jane Doe</h5>
                    <p>
                      <span className="text-sm text-black dark:text-white">Great</span>
                      <span className="text-xs"> . 32 min</span>
                    </p>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <span className="text-sm font-medium text-white"> 2</span>
                  </div>
                </div>
              </a>
              <a
                className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
                href="/"
              >
                <div className="relative h-14 w-14 rounded-full">
                  <img src="/assets/user-01-b007ff3f.png" alt="User" />
                  <span
                    className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white"
                    style={{ backgroundColor: "rgb(16, 185, 129)" }}
                  />
                </div>
                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <h5 className="font-medium text-black dark:text-white">Jhon Doe</h5>
                    <p>
                      <span className="text-sm text-black dark:text-white">
                        How are you?
                      </span>
                      <span className="text-xs"> . 32 min</span>
                    </p>
                  </div>
                </div>
              </a>
              <a
                className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
                href="/"
              >
                <div className="relative h-14 w-14 rounded-full">
                  <img src="/assets/user-03-3c4ef32c.png" alt="User" />
                  <span
                    className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white"
                    style={{ backgroundColor: "rgb(255, 186, 0)" }}
                  />
                </div>
                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <h5 className="font-medium text-black dark:text-white">Jhon Doe</h5>
                    <p>
                      <span className="text-sm text-black dark:text-white">
                        How are you?
                      </span>
                      <span className="text-xs"> . 32 min</span>
                    </p>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <span className="text-sm font-medium text-white"> 3</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
