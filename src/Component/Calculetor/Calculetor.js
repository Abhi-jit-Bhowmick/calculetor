import React, { useState } from 'react'
import "../../Css/Style.css"

function Calculetor() {
    const [input, setInput] = useState("")

    const handleClickNumber = (event) => {
        setInput(prevInput => (
            prevInput += event.target.value
        ))
    }

    const handleReset = () => {
        setInput("")
    }

    const handleDelete = () => {
        setInput(input.slice(0, -1))
    }

    function result() {
        let result;
        try {
            // eslint-disable-next-line no-eval
            result = eval(input)
        }
        catch (error) {
            result = "Error"
        }
        return result
    }
    const handleResult = () => {
        setInput(result())
    }

    return (
        console.log(typeof (input)),
        <div className='calculetor-container'>
            <div className='calculetor-display'>
                <form>
                    <div className='calculetor-display-view'>
                        <input name="display" type='text' value={input} readOnly={true} />
                    </div>
                    <div>
                        <input onClick={handleReset} type='button' value="AC" />
                        <input onClick={handleDelete} type='button' value="DE" />
                        <input className="operetor" onClick={(e) => handleClickNumber(e)} type="button" value="." />
                        <input className="operetor" onClick={(e) => handleClickNumber(e)} type='button' value="/" />
                    </div>
                    <div>
                        <input onClick={(e) => handleClickNumber(e)} type='button' value="7" />
                        <input onClick={(e) => handleClickNumber(e)} type='button' value="8" />
                        <input onClick={(e) => handleClickNumber(e)} type="button" value="9" />
                        <input className="operetor" onClick={(e) => handleClickNumber(e)} type='button' value="*" />
                    </div>
                    <div>
                        <input onClick={(e) => handleClickNumber(e)} type='button' value="4" />
                        <input onClick={(e) => handleClickNumber(e)} type='button' value="5" />
                        <input onClick={(e) => handleClickNumber(e)} type="button" value="6" />
                        <input className="operetor" onClick={(e) => handleClickNumber(e)} type='button' value="-" />
                    </div>
                    <div>
                        <input onClick={(e) => handleClickNumber(e)} type='button' value="1" />
                        <input onClick={(e) => handleClickNumber(e)} type='button' value="2" />
                        <input onClick={(e) => handleClickNumber(e)} type="button" value="3" />
                        <input className="operetor" onClick={(e) => handleClickNumber(e)} type='button' value="+" />
                    </div>
                    <div>
                        <input onClick={(e) => handleClickNumber(e)} type='button' value="00" />
                        <input onClick={(e) => handleClickNumber(e)} type='button' value="0" />
                        <input className="equal operetor" onClick={handleResult} type="button" value="=" />
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Calculetor