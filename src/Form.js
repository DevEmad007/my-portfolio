import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("your name");
    const [age, setAge] = useState("your age");

    const changeHandler = (name, age) => {
        setName(name);
        setAge(age);
    };

    return (
        <div
            className="formContainer"
            style={{ textAlign: "center", fontFamily: "sans-serif", paddingBottom:"15px" ,boxShadow:"2px 2px 2px gray"}}
        >
            <h1>Write in the box</h1>
            <div className="output">
                <span>{name}</span>
                <br />
                <span>{age}</span>
            </div>

            <form className="form">
                <input
                    placeholder="Name"
                    type="text"
                    onChange={(e) => {
                        changeHandler(e.currentTarget.value, age);
                    }}
                />
                <br />
                <input
                    placeholder="Age"
                    type="number"
                    onChange={(e) => {
                        changeHandler(name, e.currentTarget.value);
                    }}
                />
            </form>
        </div>
    );
};

export default Form;
