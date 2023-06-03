import { Tab } from "@headlessui/react";
import classNames from "classnames";
export default function Example() {
  return (
    <div className="box-2 w-[60rem] rounded-lg bg-cblack p-3 lg:w-full">
      <Tab.Group>
        <Tab.List className="flex justify-start border-b border-b-gray-200">
          <Tab
            className={({ selected }) =>
              classNames(
                "rounded-t-md p-2 text-white hover:outline-[0.1rem] hover:outline-white",
                {
                  "border-[0.1rem] border-[#ffc107] bg-blue-950 text-[#ffc107]":
                    selected,
                }
              )
            }
          >
            Level 1
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "rounded-t-md p-2 text-white hover:outline-[0.1rem] hover:outline-white",
                {
                  "border-[0.1rem] border-[#ffc107] bg-blue-950 text-[#ffc107]":
                    selected,
                }
              )
            }
          >
            Level 2
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "rounded-t-md p-2 text-white hover:outline-[0.1rem] hover:outline-white",
                {
                  "border-[0.1rem] border-[#ffc107] bg-blue-950 text-[#ffc107]":
                    selected,
                }
              )
            }
          >
            Level 3
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className="flex w-full flex-col justify-center overflow-hidden border-b-[0.01rem] border-b-gray-500 text-white">
            <div className="text-md flex justify-between px-10 py-5 font-bold">
              <h1>System</h1>
              <h1>Time</h1>
              <h1>Deposit</h1>
              <h1>Commission</h1>
              <h1>Bonus</h1>
              <h1>Comment</h1>
            </div>
            <div className="flex w-full items-center justify-center p-5">
              <p>You have no transactions yet</p>
            </div>
          </Tab.Panel>
          <Tab.Panel className="flex w-full flex-col justify-center overflow-hidden border-b-[0.1rem] border-b-gray-500 text-white">
            <div className="text-md flex justify-between px-10 py-5 font-bold">
              <h1>System</h1>
              <h1>Time</h1>
              <h1>Deposit</h1>
              <h1>Commission</h1>
              <h1>Bonus</h1>
              <h1>Comment</h1>
            </div>
            <div className="flex w-full items-center justify-center p-5">
              <p>You have no transactions yet</p>
            </div>
          </Tab.Panel>
          <Tab.Panel className="flex w-full flex-col justify-center overflow-hidden border-b-[0.1rem] border-b-gray-500 text-white">
            <div className="text-md flex justify-between px-10 py-5 font-bold">
              <h1>System</h1>
              <h1>Time</h1>
              <h1>Deposit</h1>
              <h1>Commission</h1>
              <h1>Bonus</h1>
              <h1>Comment</h1>
            </div>
            <div className="flex w-full items-center justify-center p-5">
              <p>You have no transactions yet</p>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
