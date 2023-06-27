const API_BASE_URL = 'https://adchitects-cms.herokuapp.com';
const AUTH_USERNAME = 'adchitects';
const AUTH_PASSWORD = 'jsrulezzz';

export async function fetchPages() {
    const response = await fetch(`${API_BASE_URL}/pages`, {
        headers: {
            Authorization: `Basic ${btoa(`${AUTH_USERNAME}:${AUTH_PASSWORD}`)}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch pages');
    }

    return response.json();
}

export async function fetchPageData(id) {
    try {
        const pages = await fetchPages();
        console.log(pages)
        const page = pages.find((page) => page.id === id);
        if (!page) {
            throw new Error('Page not found');
        }
        const response = await fetch(`https://adchitects-cms.herokuapp.com/page/${page.id}`, {
            headers: {
                Authorization: `Basic ${btoa(`${AUTH_USERNAME}:${AUTH_PASSWORD}`)}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch page data');
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        throw new Error('Failed to fetch page data');
    }
}



export async function submitNewsletter(email) {
    const response = await fetch(`${API_BASE_URL}/newsletter`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${btoa(`${AUTH_USERNAME}:${AUTH_PASSWORD}`)}`,
        },
        body: JSON.stringify({ email }),
    });

    if (!response.ok) {
        throw new Error('Failed to submit newsletter');
    }

    return response.json();
}
