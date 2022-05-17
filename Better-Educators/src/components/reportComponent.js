import { React, useState } from 'react';


export const Form = ({ onSubmit }) => {

    const [value, setValue] = useState(false);

    const handleChangeOne = () => {
        setValue('invalid link');
    }
    const handleChangeTwo = () => {
        setValue('Inappropriate link/content');
    }
    const handleChangeThree = () => {
        setValue('Fraud');
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h4 className='form-header'>Found a problem? Fill out this form to let us know!
                    <br />
                    🦉</h4>
                <p className='type-of-issue'>Type of issue: </p>
            </div>
            <div className='radio'>
                <label>
                    <input type='radio' value='option 1' checked={value === 'invalid link'} onChange={handleChangeOne} />
                    invalid link
                </label>
            </div>
            <div className='radio'>
                <label>
                    <input type='radio' value='option 2' checked={value === 'Inappropriate link/content'} onChange={handleChangeTwo} />
                    Inappropriate link/content
                </label>
            </div>
            <div className='radio'>
                <label>
                    <input type='radio' value='option 3' checked={value === 'Fraud'} onChange={handleChangeThree} />
                    Fraud
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
                <button className="form-control btn btn-primary" type="submit" >
                    Submit

                </button>
            </div>
        </form>
    );
};
export default Form;