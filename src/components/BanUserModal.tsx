import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { ImBlocked } from "react-icons/im";
const BanUserModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center justify-center gap-1 rounded-md p-2  bg-orange-600 text-white"
      >
        <ImBlocked /> Ban User
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex w-full max-w-lg transform flex-col overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between border-b border-gray-200 p-6">
                    
                    <h1 className="text-xl font-medium">
                      Ban User
                    </h1>
                    <button
                      onClick={closeModal}
                      className="absolute right-4 top-3 text-white"
                    >
                      <GrFormClose className="cursor-pointer text-2xl text-cblack" />
                    </button>
                  </div>
                  <div className="flex flex-col justify-start gap-1 border-b border-gray-200 p-4">
                    <p>If you ban this user he/she won't able to access his/her dashboard.</p>
                    <h1>Reason</h1>
                    <textarea
                      placeholder="Reason"
                      className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
                    ></textarea>
                  </div>
                  <div className="w-full p-6">
                    <button className="flex w-full items-center justify-center rounded-md bg-cblack py-2 font-semibold text-white shadow-md">
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default BanUserModal;
