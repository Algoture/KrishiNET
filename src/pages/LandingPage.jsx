import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <NavLink
        to="/home"
        className="text-3xl font-semibold absolute left-8 top-8 font-Poppins"
      >
        Krishi<span className="text-accent">NET</span>
      </NavLink>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 ">
        <h1 className="text-center text-base/7 font-semibold text-indigo-600">
          Connecting Farmers & Buyers Seamlessly
        </h1>
        <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-5xl font-medium tracking-tight ">
          Empowering{" "}
          <span className="text-accent font-Sat lg:text-8xl sm:text-6xl tracking-tight">
            Agriculture
          </span>{" "}
          through Technology
        </p>
        <div className="w-full flex justify-center mt-12">
          <NavLink
            to="/login"
            className="bg-accent relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600  rounded-xl hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Get Started</span>
          </NavLink>
        </div>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Mobile Friendly Platform
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Access and manage contracts, communicate, and negotiate from
                  anywhere with our mobile-first design.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-">
                  <img
                    className="size-full object-cover object-top"
                    src="https://res.cloudinary.com/dtwoxusxz/image/upload/v1727849479/sf4qvkz8gv18nftikgge.png"
                    alt="Mobile-friendly interface"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-accent lg:rounded-l-[2rem]"></div>
          </div>

          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex  flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Local Sourcing
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  We prioritize local farmers, ensuring fresh and readily
                  available produce while supporting local economies.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <iframe className="w-full " src="https://lottie.host/embed/f6b3d945-d207-4c63-88f0-ffd1c26c64bb/5DS0RUv5yi.json"></iframe>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-accent max-lg:rounded-t-[2rem]"></div>
          </div>

          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Top-notch Security
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  We safeguard all transactions and communications with
                  end-to-end encryption.
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2 justify-center">
                <img
                  className="h-[min(170px,50cqw)] w-2/3"
                  src="https://res.cloudinary.com/dtwoxusxz/image/upload/v1727868586/bzjmnpaoiazlm4eiz6ty.png"
                  alt="Security features"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-accent"></div>
          </div>

          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Personalized Recommendations
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Receive crop suggestions tailored to your needs and
                  preferences. Our smart algorithms ensure you get the best
                  matches for your farming requirements.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full">
                <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded-tl-xl ">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5 justify-center">
                    <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400"></div>
                  </div>
                  <div className="px-6 pb-14 pt-6 flex justify-center items-center">
                    <iframe className="w-full h-56" src="https://lottie.host/embed/63c961ab-8566-4b20-b3b8-c4b13c464941/Uv3g8H272w.json"></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-accent max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
