import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function EditCarPage(props) {

    const location = useLocation()

    const [invalidForm, setValidForm] = useState(true);
    const [formData, setFormData] = useState(location.state.car)

    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleUpdateCar(formData);
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <h1>Edit Car</h1>
            <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Cars year (required)</label>
                    <input
                        className="form-control"
                        name="year"
                        value={formData.year}
                        type="number"
                        placeholder="Car year"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Car Make(required)</label>
                    <input
                        className="form-control"
                        name="make"
                        placeholder="Make"
                        value={formData.make}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Car Model(required)</label>
                    <input
                        className="form-control"
                        name="model"
                        placeholder="Model"
                        value={formData.model}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Car Color(required)</label>
                    <input
                        className="form-control"
                        name="color"
                        placeholder="Color"
                        value={formData.color}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn"
                    disabled={invalidForm}
                >
                SAVE Car
              </button>&nbsp;&nbsp;
              <Link to='/cars'>CANCEL</Link>
            </form>
          </>
    );
}
