import React,{useState} from 'react';
export default function TextForn(props) {
    const onClickUpFun = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const onClickLoFun = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const onClickClFun = () =>{
        let newText = "";
        setText(newText);
    }
    const onChangeFun=(event)=>{
        console.log("change ; ");
        setText(event.target.value);
    }
    const [text,setText] = useState(" ");
    return (
        <>
            <div>
                <div className="mb-3">
                <h2 className="my-5">{props.heading}</h2>
                    <textarea className="form-control" onChange={onChangeFun} value={text} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={onClickUpFun}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={onClickLoFun}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={onClickClFun}>Clear Text</button>
            </div>
            <div className="container">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length}</p>
                <h2>Preview</h2>
                <p>{text} Minutes</p>
            </div>
        </>
            )
}
