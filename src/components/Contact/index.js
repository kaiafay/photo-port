import React, { useState } from 'react';

function ContactForm() {
    // set initial state to empty strings for input fields
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    // destructure formState object into its named properties
    const { name, email, message } = formState;

    // sync formState component with user input from the DOM
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    };

    return (
        <section>
            <h1>Contact Me</h1>
            <form id='contact-form'>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' defaultValue={name} onChange={handleChange} name='name' />
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' defaultValue={email} onChange={handleChange} name='email' />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' defaultValue={message} onChange={handleChange} rows='5' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;