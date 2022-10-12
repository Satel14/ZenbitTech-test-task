import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
height:45px;
border:1px solid #DCDCDC;
border-radius:5px;
width:100%;
margin-bottom:10px;
padding:0 20px;
box-sizing:border-box;
`;
const TextArea = styled.textarea`
height:90px;
border:1px solid #DCDCDC;
border-radius:5px;
width:100%;
margin-bottom:10px;
padding: 20px;
box-sizing:border-box;
resize:none;
`;
const Button = styled.button`
&:hover{
  border:1px solid #FAD34F;
  background:#fff;
  color:#FAD34F;
}
background: #FAD34F;
color:#fff;
border:1px solid #fff;
border-radius:20px;
margin-top:40px;
height:45px;
padding:0 25px;
cursor:pointer;
transition:.3s;

`;
const Title = styled.h2`
font-size:40px;
margin-bottom:40px;
font-family:Open-sans san-serif;
`;
function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangeDescription = (e) => {
        const description = e.target.value;
        setDescription(description);
    };
    function sendMessage(e) {
        e.preventDefault();
        axios.post('http://127.0.0.1:5000/send-message', {
            name,
            email,
            description
        })
            .then((res) => {
                console.log(res.status)
                document.getElementById('form').reset();
                alert('Your message has been sent. Please check your database')


            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <div>
            <Title>Reach out to us!</Title>
            <form id="form" onSubmit={sendMessage}>
                <Input placeholder="Your name*" onChange={onChangeName} />
                <Input placeholder="Your e-mail*" onChange={onChangeEmail} />
                <TextArea placeholder='Your message*' onChange={onChangeDescription} />
                <Button type="submit">Send message</Button>
            </form>
        </div>
    );
};
export default Form;