
import React from 'react'
import styled from 'styled-components';
import Form from './components/Form'

const FormWrapper = styled.div`
width:33.33%;
margin-top:100px;
margin-left:100px;
`

function App() {
    return (
        <div className="App">
            <FormWrapper className='form-wrapper'>
                <Form />
            </FormWrapper>
        </div>
    );
}

export default App;
