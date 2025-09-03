import React, { useState } from 'react';

function R05_Event(props) {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
        console.log("state값:", text);
    }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleClick = () => {
        const text = document.querySelectorAll("input")[1].value;
        console.log("입력값(DOM탐색이용)", text);
    }

    return (
        <div>
            <input
                type="text"
                placeholder='아무 글자나 입력하세요'
                value={text}
                onChange={handleChange}
            />
            <br />
            <input
                type="text"
                name="name"
                placeholder='이름'
                value={formData.name}
                onChange={handleChangeForm}
            />
            <button onClick={handleClick}>확인</button>
        </div>
    );
}

export default R05_Event;