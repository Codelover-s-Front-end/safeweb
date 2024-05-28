'use client'
import Image from "next/image";
import logo from './assets/img/icon-64.png'
export default function Personal() {
  return (
    <main>
      <div className="absolute top-0 right-0 left-0 bottom-0 z-50">

      </div>
      <section  className="w-full bg-white mx-auto relative rounded-[40px] z-10 overflow-hidden h-[100vh]">
          <div className="max-w-7xl px-6 lg:px-10 mx-auto">
            <div className="w-full absolute top-0 left-0 text-center">
              <div className="text-xl mt-10 text-blue5 font-bold">
                Buy now, pay later with PayPal
              </div>
              <div className="text-4xl md:text-6xl mt-4 text-blue3 font-bold">
                Enjoy now.<span className="text-blue2"> Pay later.</span>
              </div>
              <div className="flex justify-center space-x-6 mt-6">
                <div className="text-sm rounded-full w-fit px-4 py-2 text-white bg-blue5 hover:bg-blue2 duration-500 font-semibold cursor-pointer">
                  Start Shopping
                </div>
                <div className="text-sm rounded-full w-fit px-4 py-2 text-blue5 hover:text-blue2 border-[1px] border-blue5 hover:border-blue2 font-semibold cursor-pointer duration-500">
                  Sign Up
                </div>
              </div>
              
            </div>
          </div>
        </section>
    </main>
  );
}
