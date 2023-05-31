"use client";
import { removeAuthToken } from "@/config/cookie";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
function Navbar() {
  // @ts-ignore
  const data = JSON.parse(localStorage.getItem("login"));
  const user = data.data.user;
  let [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function handleLogout() {
    removeAuthToken();
    setTimeout(() => {
      typeof window != undefined ? window.location.reload() : undefined;
      router.push("/login");
    }, 2000);
  }
  return (
    <>
      <nav className="flex flex-row justify-between  items-center h-24 drop-shadow-xl px-10 bg-[#F2F3F7] mb-6 w-full">
        <Link href={"/"}>
          <Image className="bg-sky-100 font-bold " alt="stapa-logo.png" src="/images/STAPA.png " height={29} width={85}></Image>
        </Link>
        <div className="flex justify-between items-center font-medium gap-2">
          <div className="flex gap-2 items-center">
            <div className="capitalize font-semibold text-base">{user === undefined ? "user" : user.name}</div>
            <div className="" onClick={openModal}>
              <AiFillCaretDown />
            </div>
          </div>
        </div>
      </nav>
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                    <Dialog.Title as="h3" className="text-lg font-medium mb-5 leading-6 text-gray-900">
                      Are you sure want to logout?
                    </Dialog.Title>
                    <div className="w flex justify-center gap-x-10">
                      <button
                        className="inline-flex justify-center rounded-md border border-transparent bg-zinc-400 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        type="button"
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        Yes
                      </button>
                      <button
                        onClick={closeModal}
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        type="button"
                      >
                        No
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}

export default Navbar;
