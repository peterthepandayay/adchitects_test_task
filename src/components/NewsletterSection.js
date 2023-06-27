import React, { useState } from 'react';
import { submitNewsletter } from '../services/api';

function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitNewsletter(email)
            .then((response) => setMessage(response.message))
            .catch((error) => console.error(error));
    };

    return (
        <section className="newsletter">
            <h2>Sign up for Newsletter</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Type your email" value={email} onChange={handleEmailChange} />
                <button type="submit" className="contact">Submit</button>
            </form>
            {message && <p className="thankYou">{message}</p>}
        </section>
    );
}

export default NewsletterSection;
