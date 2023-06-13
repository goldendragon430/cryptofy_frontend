import React,{useState,useEffect} from "react";
import { BACKEND_URL } from "../../config";
import {toast} from 'react-toastify'
import { useAuth } from "../../contexts/SessionContext";
import { useApi } from "../../contexts/ApiContext";



const EditContact: React.FC = () => {

  const [image, setImage] = useState(null)
  const [image2, setImage2] = useState(null)
  const [{ doPost }] = useApi()
  const [user,] = useAuth()
  const token = user?.token

  const [title,setTitle] = useState('')
  const [phone1,setPhone1] = useState('')
  const [phone2,setPhone2] = useState('')
  const [email1,setEmail1] = useState('')
  const [email2,setEmail2] = useState('')
  const [address,setAddress] = useState('')

  const get_data = async() =>{
    const response = await doPost('admin/get_contact', {
      token: token
    })
    if (response.error || response.result == 'failed') {
      toast.error('Server Error')
    }
    else {
      const data = response['data'][0]
      setTitle(data['title'])
      setPhone1(data['phone1'])
      setPhone2(data['phone2'])
      setEmail1(data['email1'])
      setEmail2(data['email2'])
      setAddress(data['address'])
    }
  }
  const put_data = async() =>{
    const response = await doPost('admin/set_contact', {
      token: token,
      title : title,
      email1 : email1,
      email2 : email2,
      phone1 : phone1,
      phone2 : phone2,
      address : address
    })
    if (response.error || response.result == 'failed') {
      toast.error('Server Error')
    }
    else {
      toast.success("Success")
    }
  }
  
  const handleUploadImage = async(e) => {
 
    const [file] = e.target.files;


    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
    const formData = new FormData();
    formData.append("files", e.target.files[0]);
    const url = BACKEND_URL + 'upload_file?name=banner_3.png';
    if(e.target.files[0])
      await fetch(url, {
        method: "POST",
        body: formData 
      })

  }  

  const handleUploadImage2 = async(e) => {
 
    const [file] = e.target.files;

    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setImage2(e.target.result);
      };
      reader.readAsDataURL(file);
    }
    const formData = new FormData();
    formData.append("files", e.target.files[0]);
    const url = BACKEND_URL + 'upload_file?name=banner_4.png';
    if(e.target.files[0])
      await fetch(url, {
        method: "POST",
        body: formData 
      })
  }  

  const refresh = async() =>{
    get_data()
  }
  useEffect(()=>{
    if(token){
      refresh()
      setImage(BACKEND_URL + 'get_file?name=banner_3.png')
      setImage2(BACKEND_URL + 'get_file?name=banner_4.png')
    }
  },[token])


  return (
    <div className="mt-20 w-full px-2">
      <div className="rounded-lg bg-white p-1 py-3">
        <div className="flex w-full items-center justify-center">
          <div className="flex w-full flex-col gap-4 lg:grid lg:w-[80%] lg:grid-cols-2">
            <div className="flex flex-col justify-center gap-3 px-2">
              <div className="flex w-full items-center justify-center " style = {{backgroundImage:`url(${image})`,height:250}}>
              
              </div>
              <label htmlFor="drop" className="w-full relative">
                <button className="flex items-center w-full justify-center rounded-md bg-cblack py-2 font-semibold text-white shadow-md">
                  Header background
                </button>
                <input id="drop" type="file" onChange = {handleUploadImage} className="opacity-0 absolute h-full w-full top-0 left-0 cursor-pointer" />
              </label>
              <p className="text-sm">
                Supported file, <strong>.jpeg</strong>
                <strong>.jpg</strong>
                <strong>.png</strong> | will be resized to:{" "}
                <strong>1920x825</strong>
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 px-2">
              <div className="flex w-full items-center justify-center " style = {{backgroundImage:`url(${image2})`,height:250}}>
              
              </div>

              <label htmlFor="drop" className="w-full relative cursor-pointer">
                <button className="flex items-center w-full justify-center rounded-md bg-cblack py-2 font-semibold text-white shadow-md"   >
                  image
                </button>
                <input id="drop" type="file" className="opacity-0 absolute h-full w-full top-0 left-0  cursor-pointer" onChange = {handleUploadImage2} />
              </label>
              <p className="text-sm">
                Supported file, <strong>.jpeg</strong>
                <strong>.jpg</strong>
                <strong>.png</strong> | will be resized to:{" "}
                <strong>1920x825</strong>
              </p>
            </div>
          </div>
        </div>
        <form action="#" className="mt-4 flex flex-col justify-start gap-2">
          <div className="flex w-full flex-col justify-center gap-2 px-2">
            <label className="self-start">Address</label>
            <input
              type="text"
              placeholder="634 dolphin road 5643"
              value = {address}
              onChange = {e=>setAddress(e.target.value)}
              className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-2 px-2">
            <label className="self-start">Email one</label>
            <input
              type="email"
              value = {email1}
              onChange = {e=>setEmail1(e.target.value)}
              placeholder="johndoe@2013"
              className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-2 px-2">
            <label className="self-start">Email two</label>
            <input
              type="email"
              value = {email2}
              onChange = {e=>setEmail2(e.target.value)}
              placeholder="johndoe@2013"
              className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-2 px-2">
            <label className="self-start">Phone one</label>
            <input
              type="tel"
              placeholder="+ 663 237626763632"
              value = {phone1}
              onChange = {e=>setPhone1(e.target.value)}
              className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-2 px-2">
            <label className="self-start">Phone two</label>
            <input
              type="tel"
              placeholder="+ 663 237626763632"
              value = {phone2}
              onChange = {e=>setPhone2(e.target.value)}
              className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
            />
          </div>

          <div className="flex w-full flex-col justify-center gap-2 px-2">
            <label className="self-start">Form title</label>
            <input
              type="text"
              placeholder="Send us a message"
              value = {title}
              onChange = {e=>setTitle(e.target.value)}
              className="rounded-md border-[1px] border-gray-600 px-3 py-2 outline-none"
            />
          </div>
          <button
            type="button"
            className="mx-2 flex items-center justify-center rounded-md bg-cblack py-2 font-semibold text-white shadow-md"
            onClick = {put_data}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
