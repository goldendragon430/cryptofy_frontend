import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { useEffect, useState } from "react";

export default function Example(props) {

  const {data} = props
  const [trs,setTrs] = useState(data)
  useEffect(()=>{
    if(data)
      {
        setTrs(data)
        console.log(data)
      }

  },[data])
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
            <table>
                <thead style = {{height:50}}>
                  <th>No</th>
                  <th>Referral User</th>
                  <th>Time</th>
                  <th>Amount</th>
                  <th>Bonus</th>
                </thead>
                <tbody style={{textAlign:'center'}}>

                  { trs[0].map((item, i) => (
                      <tr
                        style = {{height:40}}
                        key={i}
                      >
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.time}</td>
                        <td>{item.amount}</td>
                        <td>{item.bonus}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            { trs[0]?.length == 0 &&<p style = {{margin:30,textAlign:'center'}} >No Transactions yet.</p>}
          </Tab.Panel>
          <Tab.Panel className="flex w-full flex-col justify-center overflow-hidden border-b-[0.1rem] border-b-gray-500 text-white">
          <table>
                <thead style = {{height:50}}>
                  <th>No</th>
                  <th>Referral User</th>
                  <th>Time</th>
                  <th>Amount</th>
                  <th>Bonus</th>
                </thead>
                <tbody style={{textAlign:'center'}}>

                  { trs[1].map((item, i) => (
                      <tr
                        style = {{height:40}}
                        key={i}
                      >
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.time}</td>
                        <td>{item.amount}</td>
                        <td>{item.bonus}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            { trs[1]?.length == 0 &&<p style = {{margin:30,textAlign:'center'}} >No Transactions yet.</p>}
          </Tab.Panel>
          <Tab.Panel className="flex w-full flex-col justify-center overflow-hidden border-b-[0.1rem] border-b-gray-500 text-white">
          <table>
                <thead style = {{height:50}}>
                  <th>No</th>
                  <th>Referral User</th>
                  <th>Time</th>
                  <th>Amount</th>
                  <th>Bonus</th>
                </thead>
                <tbody style={{textAlign:'center'}}>

                  { trs[2].map((item, i) => (
                      <tr
                        style = {{height:40}}
                        key={i}
                      >
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.time}</td>
                        <td>{item.amount}</td>
                        <td>{item.bonus}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            { trs[0]?.length == 0 &&<p style = {{margin:30,textAlign:'center'}} >No Transactions yet.</p>}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
