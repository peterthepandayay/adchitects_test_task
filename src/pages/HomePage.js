import React, { useEffect, useState } from 'react';
import { fetchPages, fetchPageData } from '../services/api';
import HeroSection from '../components/HeroSection';
import TestimonialSection from '../components/TestimonialSection';
import NewsletterSection from '../components/NewsletterSection';
import '../App.css'
function HomePage() {
    const [sections, setSections] = useState([]);
    const [pageId, setPageId] = useState('');

    useEffect(() => {
        fetchPages()
            .then((pages) => {
                if (pages.length > 0) {
                    setPageId(pages[0].id);
                }
            })
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        if (pageId) {
            fetchPageData(pageId)
                .then((response) => {
                    setSections(response.sections);
                })
                .catch((error) => console.error(error));
        }
    }, [pageId]);

    return (
        <div>
            {sections.map((section, index) => {
                switch (section.type) {
                    case 'hero':
                        return <HeroSection key={index} text={section.text} img={section.img} />;
                    case 'testimonial':
                        return <TestimonialSection key={index} text={section.text} author={section.author} />;
                    case 'newsletter':
                        return <NewsletterSection key={index} />;
                    default:
                        return null;
                }
            })}
        </div>
    );
}

export default HomePage;
