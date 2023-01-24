import './HomeworkForm.css';
import React, { useState } from 'react';

function HomeworkForm() {
    const [formData, setFormData] = useState({
        title: '',
        dueDate: '',
        subject: '',
        description: ''
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        // Send the formData to the server
        console.log(formData);
    }

    return (
        <>
        <h1 className='section'><p>H</p>ome<p>w</p>ork<p>F</p>orm</h1>
        <form id="homework-form" onSubmit={handleSubmit}>
            <label htmlFor="title-input">Title:</label>
            <input
                type="text"
                id="title-input"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
            />
            <br />
            <label htmlFor="due-date-input">Due Date:</label>
            <input
                type="date"
                id="due-date-input"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleInputChange}
                required
            />
            <br />
            <label htmlFor="subject-input">Subject:</label>
            <input
                type="text"
                id="subject-input"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
            />
            <br />
            <label htmlFor="description-input">Description:</label>
            <textarea
                id="description-input"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
            />
            <br />
            <button type="submit">Submit</button>
        </form>
        </>
    );
}

export default HomeworkForm;