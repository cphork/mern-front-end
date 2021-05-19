import React from 'react';

const Form = (props) => {

const [formData, setFormData] = React.useState(props.car);

const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(formData);
    props.history.push("/");
};


const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value});
};


return (
    <form className="create-forms" onSubmit = {handleSubmit}>
        <input  
        placeholder="year"
        type="text"
        name="year"
        value={formData.year}
        onChange={handleChange}
        />


        <input  
        placeholder="make"
        type="text"
        name="make"
        value={formData.make}
        onChange={handleChange}
        />


        <input  
        placeholder="model"
        type="text"
        name="model"
        value={formData.model}
        onChange={handleChange}
        />


        <input  
        placeholder="img url"
        type="text"
        name="img"
        value={formData.img}
        onChange={handleChange}
        />


        <input  
        placeholder="description"
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        />


        <input className="create-btn" type="submit" value={props.label} />


    </form>
)



}


export default Form;