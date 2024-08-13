import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger,TabsContent } from '@/components/ui/tabs'
import React, { useState } from 'react'

 const Auth = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [conformPassword, setconformPassword] = useState("")
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
      <div className='h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl  grid xl:grid-cols-2'>
        <div className='flex flex-col gap-10 items-center justify-center'>
          <div className='flex items-center justify-center flex-col'>
            <div className='flex items-center justify-center'>
              <h1 className='text-5xl font-bold md:text-6xl'>Welcome</h1>
              <img src="" alt="" />
            </div>
            <p className='font font-medium text-center'>
               Fill in the details to get started with best chat app!
              </p>
            </div>
            <div className='flex items-center justify-center w-full'>
            <Tabs defaultValue="signin" className="w-3/4">
              <TabsList className="bg-transparent rounded-none w-full">
                <TabsTrigger  value="signin" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Signin</TabsTrigger>
                <TabsTrigger value="signup" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300" >Signup</TabsTrigger>
              </TabsList>
             <TabsContent value="signin">
             <Input placeholder="Name" type="name" className="roundrd-fill p-6" value={name} onChange={(e)=>setname(e.target.value)}/>
              <Input placeholder="email" type="email" className="roundrd-fill p-6" value={email} onChange={(e)=>setemail(e.target.value)}/>
              <Input placeholder="password" type="password" className="roundrd-fill p-6" value={password} onChange={(e)=>setpassword(e.target.value)}/>
              <Input placeholder="Conform Password" type="conformpassword" className="roundrd-fill p-6" value={conformPassword} onChange={(e)=>setconformPassword(e.target.value)}/>
              <Button className=" rounded-full pl-36 pr-36 ">Login</Button>
             </TabsContent>
             <TabsContent value="signup">
             <Input placeholder="email" type="email" className="roundrd-fill p-6" value={email} onChange={(e)=>setemail(e.target.value)}/>
             <Input placeholder="password" type="password" className="roundrd-fill p-6" value={password} onChange={(e)=>setpassword(e.target.value)}/>
             <Button className=" rounded-full pl-36 pr-36 " >Login</Button>
             </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src="" ref=""/>
        </div>
      </div>
    </div>
  )
}
export default Auth
