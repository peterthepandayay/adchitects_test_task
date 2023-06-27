import React from 'react';
import icon from "../img/quote-mark-svgrepo-com.svg"
function TestimonialSection({ text, author }) {
    return (
        <section className="testimonial">
            <div className="testimonial-content">
                <object data={icon} type="image/svg+xml">
                </object>
                <p className="main">{text}</p>
                <p className="author">{author}</p>
            </div>
        </section>
    );
}

export default TestimonialSection;
