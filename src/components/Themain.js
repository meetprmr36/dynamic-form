import React, { useState } from "react";

export default function Themain() {

    const [formValues, setFormValues] = useState({});

    const thedata = [
        { "label": "First Name", "type": "text", "required": true, "isEditable": true, "slug": "first_name" },
        { "label": "Middle Name", "type": "text", "required": false, "isEditable": true, "slug": "middle_name" },
        { "label": "Last Name", "type": "text", "required": true, "isEditable": true, "slug": "last_name" },
        { "label": "Age", "type": "number", "required": false, "isEditable": true, "slug": "age" },
        { "label": "Username", "type": "text", "required": true, "isEditable": true, "slug": "username" },
        {
            "label": "Skills", "type": "select", "required": true, "isEditable": true, "slug": "skills", "options":
                [
                    { "label": "React.js", "value": 1 },
                    { "label": "Node", "value": 2 }
                ]
        },
        { "label": "Email", "type": "email", "required": true, "isEditable": true, "slug": "email" },
        { "label": "Alternate Email", "type": "email", "required": false, "isEditable": true, "slug": "alt_email" },
        { "label": "Password", "type": "password", "required": true, "isEditable": true, "slug": "password" },
        { "label": "Confirm Password", "type": "password", "required": true, "isEditable": true, "slug": "confirm_password" },
        { "label": "Phone Number", "type": "tel", "required": true, "isEditable": true, "slug": "phone" },
        { "label": "Alternate Phone", "type": "tel", "required": false, "isEditable": true, "slug": "alt_phone" },
        { "label": "Short Bio", "type": "textarea", "required": false, "isEditable": true, "slug": "bio" },
        { "label": "Achievements", "type": "textarea", "required": false, "isEditable": true, "slug": "achievements" }
    ]


    // const thedata = [
    //     // Basic Info
    //     { "label": "First Name", "type": "text", "required": true, "isEditable": true, "slug": "first_name" },
    //     { "label": "Middle Name", "type": "text", "required": false, "isEditable": true, "slug": "middle_name" },
    //     { "label": "Last Name", "type": "text", "required": true, "isEditable": true, "slug": "last_name" },
    //     { "label": "Username", "type": "text", "required": true, "isEditable": true, "slug": "username" },
    //     { "label": "Email", "type": "email", "required": true, "isEditable": true, "slug": "email" },
    //     { "label": "Alternate Email", "type": "email", "required": false, "isEditable": true, "slug": "alt_email" },
    //     { "label": "Password", "type": "password", "required": true, "isEditable": true, "slug": "password" },
    //     { "label": "Confirm Password", "type": "password", "required": true, "isEditable": true, "slug": "confirm_password" },
    //     { "label": "Phone Number", "type": "tel", "required": true, "isEditable": true, "slug": "phone" },
    //     { "label": "Alternate Phone", "type": "tel", "required": false, "isEditable": true, "slug": "alt_phone" },
    //     { "label": "Age", "type": "number", "required": false, "isEditable": true, "slug": "age" },
    //     { "label": "Date of Birth", "type": "date", "required": true, "isEditable": true, "slug": "dob" },
    //     { "label": "Time of Birth", "type": "time", "required": false, "isEditable": true, "slug": "birth_time" },
    //     {
    //         "label": "Gender", "type": "radio", "required": true, "isEditable": true, "slug": "gender", "options": [
    //             { "label": "Male", "value": "male" },
    //             { "label": "Female", "value": "female" },
    //             { "label": "Other", "value": "other" }
    //         ]
    //     },
    //     {
    //         "label": "Marital Status", "type": "select", "required": false, "isEditable": true, "slug": "marital_status",
    //         "options": [
    //             { "label": "Single", "value": "single" },
    //             { "label": "Married", "value": "married" },
    //             { "label": "Divorced", "value": "divorced" }
    //         ]
    //     },
    //     {
    //         "label": "Blood Group", "type": "select", "required": false, "isEditable": true, "slug": "blood_group",
    //         "options": ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(b => ({ label: b, value: b }))
    //     },

    //     // Address
    //     { "label": "Address Line 1", "type": "text", "required": true, "isEditable": true, "slug": "address_line1" },
    //     { "label": "Address Line 2", "type": "text", "required": false, "isEditable": true, "slug": "address_line2" },
    //     { "label": "City", "type": "text", "required": true, "isEditable": true, "slug": "city" },
    //     { "label": "State", "type": "text", "required": true, "isEditable": true, "slug": "state" },
    //     {
    //         "label": "Country", "type": "select", "required": true, "isEditable": true, "slug": "country",
    //         "options": [
    //             { "label": "India", "value": "india" },
    //             { "label": "USA", "value": "usa" },
    //             { "label": "UK", "value": "uk" },
    //             { "label": "Canada", "value": "canada" }
    //         ]
    //     },
    //     { "label": "Zip Code", "type": "number", "required": true, "isEditable": true, "slug": "zip" },

    //     // Professional
    //     {
    //         "label": "Skills", "type": "select", "required": true, "isEditable": true, "slug": "skills",
    //         "options": [
    //             { "label": "React.js", "value": "react" },
    //             { "label": "Node.js", "value": "node" },
    //             { "label": "Python", "value": "python" },
    //             { "label": "Java", "value": "java" },
    //             { "label": "UI/UX Design", "value": "uiux" }
    //         ]
    //     },
    //     {
    //         "label": "Languages Known", "type": "checkbox", "required": false, "isEditable": true, "slug": "languages",
    //         "options": [
    //             { "label": "English", "value": "en" },
    //             { "label": "Gujarati", "value": "gu" },
    //             { "label": "Hindi", "value": "hi" },
    //             { "label": "Spanish", "value": "es" }
    //         ]
    //     },
    //     {
    //         "label": "Education Qualification", "type": "select", "required": true, "isEditable": true, "slug": "education",
    //         "options": [
    //             { "label": "High School", "value": "hs" },
    //             { "label": "Bachelor's", "value": "bachelor" },
    //             { "label": "Master's", "value": "master" },
    //             { "label": "PhD", "value": "phd" }
    //         ]
    //     },
    //     { "label": "Experience (Years)", "type": "number", "required": false, "isEditable": true, "slug": "experience" },
    //     { "label": "Current Employer", "type": "text", "required": false, "isEditable": true, "slug": "employer" },
    //     { "label": "Designation", "type": "text", "required": false, "isEditable": true, "slug": "designation" },
    //     {
    //         "label": "Employment Type", "type": "radio", "required": false, "isEditable": true, "slug": "employment_type",
    //         "options": [
    //             { "label": "Full-time", "value": "fulltime" },
    //             { "label": "Part-time", "value": "parttime" },
    //             { "label": "Freelance", "value": "freelance" },
    //             { "label": "Internship", "value": "internship" }
    //         ]
    //     },

    //     // Uploads
    //     { "label": "Resume Upload", "type": "file", "required": false, "isEditable": true, "slug": "resume" },
    //     { "label": "Profile Picture", "type": "file", "required": false, "isEditable": true, "slug": "profile_pic" },

    //     // Social Links
    //     { "label": "Website", "type": "url", "required": false, "isEditable": true, "slug": "website" },
    //     { "label": "LinkedIn", "type": "url", "required": false, "isEditable": true, "slug": "linkedin" },
    //     { "label": "GitHub", "type": "url", "required": false, "isEditable": true, "slug": "github" },
    //     { "label": "Twitter", "type": "url", "required": false, "isEditable": true, "slug": "twitter" },
    //     { "label": "Portfolio", "type": "url", "required": false, "isEditable": true, "slug": "portfolio" },

    //     // Preferences
    //     { "label": "Preferred Job Location", "type": "text", "required": false, "isEditable": true, "slug": "preferred_location" },
    //     { "label": "Expected Salary", "type": "number", "required": false, "isEditable": true, "slug": "expected_salary" },
    //     {
    //         "label": "Willing to Relocate?", "type": "radio", "required": false, "isEditable": true, "slug": "relocation",
    //         "options": [
    //             { "label": "Yes", "value": "yes" },
    //             { "label": "No", "value": "no" }
    //         ]
    //     },
    //     {
    //         "label": "Work Mode Preference", "type": "radio", "required": false, "isEditable": true, "slug": "work_mode",
    //         "options": [
    //             { "label": "Remote", "value": "remote" },
    //             { "label": "Hybrid", "value": "hybrid" },
    //             { "label": "On-site", "value": "onsite" }
    //         ]
    //     },

    //     // Emergency Contact
    //     { "label": "Emergency Contact Name", "type": "text", "required": true, "isEditable": true, "slug": "emergency_name" },
    //     { "label": "Emergency Contact Relation", "type": "text", "required": true, "isEditable": true, "slug": "emergency_relation" },
    //     { "label": "Emergency Contact Phone", "type": "tel", "required": true, "isEditable": true, "slug": "emergency_phone" },

    //     // Banking Info
    //     { "label": "Bank Name", "type": "text", "required": false, "isEditable": true, "slug": "bank_name" },
    //     { "label": "Account Number", "type": "number", "required": false, "isEditable": true, "slug": "account_number" },
    //     { "label": "IFSC Code", "type": "text", "required": false, "isEditable": true, "slug": "ifsc" },
    //     { "label": "PAN Number", "type": "text", "required": false, "isEditable": true, "slug": "pan" },
    //     { "label": "Aadhar Number", "type": "number", "required": false, "isEditable": true, "slug": "aadhar" },

    //     // Extras
    //     { "label": "Short Bio", "type": "textarea", "required": false, "isEditable": true, "slug": "bio" },
    //     { "label": "Achievements", "type": "textarea", "required": false, "isEditable": true, "slug": "achievements" },
    //     { "label": "Hobbies", "type": "textarea", "required": false, "isEditable": true, "slug": "hobbies" },
    //     {
    //         "label": "Join Newsletter", "type": "checkbox", "required": false, "isEditable": true, "slug": "newsletter", "options": [
    //             { "label": "Yes, subscribe me", "value": "yes" }
    //         ]
    //     },
    //     {
    //         "label": "Agree to Terms & Conditions", "type": "checkbox", "required": true, "isEditable": true, "slug": "terms",
    //         "options": [{ "label": "I Agree", "value": "agree" }]
    //     }
    // ];



    const handleChange = (e, slug) => {
        setFormValues({
            ...formValues,
            [slug]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    const renderElement = (element) => {
        switch (element.type) {
            case 'text':
                return (
                    <div className={`${element.slug} Allcss`}>
                        <label>{element.label}
                            {element.required && !formValues[element.slug] && (
                                <span className="Redpara"> * </span>
                            )}</label>
                        <input
                            className="widthInput"
                            type={element.type}
                            value={formValues[element.slug] || ""}
                            required={element.required}
                            onChange={e => handleChange(e, element.slug)}
                            disabled={!element.isEditable} />
                        {/* {element.required && !formValues[element.slug] && (
                            <p className="Redpara">please enter {element.label}</p>
                        )} */}
                    </div>
                )
            case 'number':
                return (
                    <div className={`${element.slug} Allcss`}>
                        <label>{element.label}
                            {element.required && !formValues[element.slug] && (
                                <span className="Redpara"> * </span>
                            )}</label>
                        <input
                            className="widthInput"
                            type={element.type}
                            value={formValues[element.slug] || ""}
                            required={element.required}
                            onChange={e => handleChange(e, element.slug)}
                            disabled={!element.isEditable}
                        />
                    </div>
                )
            case 'tel':
                return (
                    <div className={`${element.slug} Allcss`}>
                        <label>{element.label}
                            {element.required && !formValues[element.slug] && (
                                <span className="Redpara"> * </span>
                            )}</label>
                        <input
                            className="widthInput"
                            type={element.type}
                            value={formValues[element.slug] || ""}
                            required={element.required}
                            onChange={e => handleChange(e, element.slug)}
                            disabled={!element.isEditable}
                        />
                    </div>
                )
            case 'email':
                return (
                    <div className={`${element.slug} Allcss`}>
                        <label>{element.label}
                            {element.required && !formValues[element.slug] && (
                                <span className="Redpara"> * </span>
                            )}
                        </label>
                        <input
                            className="widthInput"
                            type={element.type}
                            required={element.required}
                            value={formValues[element.slug] || ""}
                            onChange={e => handleChange(e, element.slug)}
                            disabled={!element.isEditable} />
                    </div>
                )
            case 'password':
                return (
                    <div className={`${element.slug} Allcss`}>
                        <label>{element.label}
                            {element.required && !formValues[element.slug] && (
                                <span className="Redpara"> * </span>
                            )}</label>
                        <input
                            className="widthInput"
                            type={element.type}
                            required={element.required}
                            value={formValues[element.slug] || ""}
                            onChange={e => handleChange(e, element.slug)}
                            disabled={!element.isEditable} 
                            />
                    </div>
                )
            case 'select':
                return (
                    <div className={`${element.slug} Allcss`}>
                        <label>{element.label}
                            {element.required && !formValues[element.slug] && (
                                <span className="Redpara"> * </span>
                            )}</label>
                        <select
                            className="lowwidthInput"
                            required={element.required}
                            value={formValues[element.slug] || ""}
                            onChange={e => handleChange(e, element.slug)}
                            disabled={!element.isEditable}>
                            <option value="">Select an option</option>
                            {element.options.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                )
            case 'radio':
                return (
                    <div className={`${element.slug} Allcss`}>
                        <label>{element.label}
                            {element.required && !formValues[element.slug] && (
                                <span className="Redpara"> * </span>
                            )}</label>
                        {element.options.map(option => (
                            <div key={option.value}>
                                <input
                                    className="widthInput"
                                    type={element.type}
                                    name={element.slug}
                                    value={option.value}
                                    onChange={e => handleChange(e, element.slug)}
                                    disabled={!element.isEditable} />
                                <label>{option.label}</label>
                            </div>
                        ))}
                    </div>
                )
            case 'checkbox':
                return (
                    <div className={`${element.slug} Allcss`}>
                        <label>{element.label}
                            {element.required && !formValues[element.slug] && (
                                <span className="Redpara"> * </span>
                            )}</label>
                        {element.options.map(option => (
                            <div key={option.value}>
                                <input
                                    className="widthInput marginzero"
                                    type={element.type}
                                    name={element.slug}
                                    value={option.value}
                                    onChange={e => handleChange(e, element.slug)}
                                    disabled={!element.isEditable} />
                                <label>{option.label}</label>
                            </div>
                        ))}
                    </div>
                )
            case 'textarea':
                return (
                    <div className={`${element.slug} Allcss`}>
                        <label>{element.label}
                            {element.required && !formValues[element.slug] && (
                                <span className="Redpara"> * </span>
                            )}</label>
                        <textarea
                            className="widthInput"
                            value={formValues[element.slug] || ""}
                            onChange={e => handleChange(e, element.slug)}
                            disabled={!element.isEditable}
                        />
                    </div >
                )
            default:
                return null;
        }
    }

    return (
        <div className="themain">
            <div className="form">
                <div className="header">
                    <div className="heading">
                        Dynamic Form
                    </div>
                </div>
                <div className="line">
                    <form className="formbody" onSubmit={handleSubmit}>
                        {thedata.map(item => renderElement(item))}
                        <div className="thebtn">
                            <button type="submit" className="Submitbutton">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}