import React ,{useState} from 'react'

export default function Form(props) {

            const handleUp=()=>
            {
                settext(text.toUpperCase());
            }
            const handleLow=()=>
            {
                settext(text.toLowerCase());
            }

            const handleClear=()=>
            {
                settext("");
            }

            const handleSpace=()=>
            { 
              let txt=text.split(/[ ]+/)
                settext(txt.join(" "));
            }


            const handleOnChange=(event)=>{
              settext(event.target.value);
            }
                    const [text , settext] = useState("Text to be entered");
                     

  return (
              
              <>
              <h2>{props.heading}</h2>
            <div className="mb-5" >
            
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Write your blog content ...!</label>
            <textarea className="form-control" id="Textarea" value={text} onChange={handleOnChange} rows="9"></textarea>
          </div>
          <botton className="btn btn-primary mb-4" onClick={handleUp}>convert to uppercase</botton>
          <botton className="btn btn-primary mx-3 mb-4" onClick={handleLow}>convert to lowercase</botton>
          <botton className="btn btn-primary mx-2 mb-4" onClick={handleClear}>clear text</botton>
          <botton className="btn btn-primary mx-2 mb-4" onClick={handleSpace}>Remove extra space</botton>



            <div className='container'>
              <h2>Your Blog Summary</h2>
              <p>{text.split(" ").length} words and {text.length} characters</p>
              <p>It will take an average of {text.split(" ").length*0.008} minutes to read the text.</p>
            </div>
          </>

          

            )
          }
