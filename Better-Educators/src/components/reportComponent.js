import { React, useState } from 'react';


export const Form = ({ onSubmit }) => {

    const [value, setValue] = useState(false);
    const [open, setOpen] = useState(false);

    const handleChangeOne = () => {
        setValue('invalid link');
    }
    const handleChangeTwo = () => {
        setValue('Inappropriate link/content');
    }
    const handleChangeThree = () => {
        setValue('Fraud');
    }
    const handleChangeFour = () => {
        setValue('Other');
    }
    const handleSubmit = (event) => {

        event.preventDefault(event);
        console.log("this is getting called")
        setOpen(true)
        setTimeout(() => {
            onSubmit()
            setOpen(false)
            console.log("did this work")
        }, 4000)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h4 className='form-header'>Found a problem? Fill out this form to let us know!
                    <br />
                    🦉</h4>
                <p className='type-of-issue'>Type of issue: </p>
            </div>
            <div className='radio'>
                <label>
                    <input type='radio' value='option 1' name='radiofamily' checked={value === 'invalid link'} onChange={handleChangeOne} required />
                    invalid link
                </label>
            </div>
            <div className='radio'>
                <label>
                    <input type='radio' value='option 2' name='radiofamily' checked={value === 'Inappropriate link/content'} onChange={handleChangeTwo} required />
                    Inappropriate link/content
                </label>
            </div>
            <div className='radio'>
                <label>
                    <input type='radio' value='option 3' name='radiofamily' checked={value === 'Fraud'} onChange={handleChangeThree} required />
                    Fraud
                </label>
            </div>
            <div className='radio'>
                <label>
                    <input type='radio' value='option 4' name='radiofamily' checked={value === 'Other'} onChange={handleChangeFour} required />
                    Other
                </label>
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input className='form-control' id='name' placeholder='first name' required />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email address</label>
                <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='name@example.com'
                    required />
            </div>
            <div className='form-group'>
                <label htmlFor='school'>School</label>
                <input className='form-control' id='school' placeholder='school name' required />
            </div>
            <div className='form-group'>
                <label htmlFor='resource'>Resource</label>
                <input className='form-control' id='resource'
                    placeholder='resource in question' required />

            </div>
            <div className='form-group'>
                <label htmlFor='description'>Description</label>
                <textarea className='form-control' id='description' placeholder='what is the issue?' required />
            </div>
            <div className="form-group">
                <button className="form-control btn btn-primary" type="submit">
                    Submit
                </button>
            </div>

            <div className='thank-you-div' style={{ display: open ? "block" : "none" }}>
                Thank you for submitting! Now returning to the previous page.
                <br />
                🦉
            </div>
        </form>
    );
};
export default Form;