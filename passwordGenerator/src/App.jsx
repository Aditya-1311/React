import { useCallback, useEffect, useRef,useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number,setNumber]=useState(false);
  const [char,setChar]=useState(false)
  const[password,setPassword]=useState("")

  const passwordRef= useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+="0123456789"
    if(char) str+="!@#$%^&*_+=-[]{}"

    for(let i=1;i<=length;i++)
    {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length,number,char,setPassword])

  const copyPaaswordToClipboard= useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password]
  )

  useEffect(() =>{
    passwordGenerator()

  },[length,number,char,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
    <h1 className='text-white text-center'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-4'
          placeholder='Password'
          readOnly
          ref={passwordRef}
           />
           <button onClick={copyPaaswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>copy</button>

    </div>
    <div className='flex text-sm gap-x-3'>
      <div className='flex items-center gap-x-3'>
        <input
         type="range"
         min={6}
         max={100}
         value={length}
         className='cursor-pointer' 
         onChange={(e)=>{setLength(e.target.value)}}
         />
         <label > Length {length}</label>
      </div>
      <div className='flex items-center gap-x-2'>
        <input type="checkbox"
        defaultChecked={number}
        id='numberInput'
        onChange={()=>
        {
          setNumber((prev)=> !prev)
        }
        } />
        <label> Number</label>
      </div>

      <div className='flex items-center gap-x-2'>
        <input type="checkbox"
        defaultChecked={char}
        id='numberInput'
        onChange={()=>
        {
          setChar((prev)=> !prev)
        }
        } />
        <label> Special Character</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
