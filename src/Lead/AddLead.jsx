import React, { useState } from "react";
import { InputField, SelectField } from "../components/FormHelper";

const AddLead = () => {

    window.document.title = "Add Lead"

    return (
        <>
            <section id="add-lead" className="page-wrapper">
                <div className="container">
                    <div className="row dc-lead-form">
                        <div className="title-header d-flex align-items-center">
                            <h4 className="title w-100">
                                Magnabox Private Limited
                            </h4>
                            <img src="/images/3sigma-logo.png" alt="img-fluid" className="title-logo flex-shrink" />
                        </div>
                        <div className="page-title d-flex align-items-center mt-4 mb-5">
                            <h5 className="page-title-heading w-100">
                                Add new lead form
                            </h5>
                            <button type="button" className="page-title-button">Cancel</button>
                        </div>
                        <div className="form-section">
                            <form action="">
                                <InputField type="text" name="lead_name" icon="bi-person-fill" label="Lead Name" placeholder="Enter Lead Name" required={true} size="full" />
                                <InputField type="email" name="email" icon="bi-envelope-fill" label="Email ID" placeholder="Example@anyemail.com" required={true} size="full" />
                                <InputField type="tel" name="phone_number" icon="bi-telephone-fill" label="Phone number" placeholder="+91 8800688763" required={true} size="full" />
                                <InputField type="text" name="address" icon="bi-globe" label="Address" placeholder="Gurugram, India" required={false} size="full" />
                                <div className="col-12">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112284.10145997732!2d76.90734827483215!3d28.422932746599823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1701077819976!5m2!1sen!2sin" width="100%" height="350" style={{ borderRadius: "10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <InputField type="text" name="sale-rupee" icon="bi-currency-rupee" label="Sale Value" placeholder="50,00,000" required={false} size="full" />
                                <InputField type="date" name="date" icon="bi-calendar3" label="Date" placeholder="29 August 2023" required={false} size="full" />
                                <InputField type="time" name="time" icon="bi-clock" label="Time" placeholder="20:21 PM" required={false} size="full" />
                                <SelectField name="options" icon="bi-list-ul" label="Options" required={false} size="full" />
                                <SelectField name="products" icon="bi-list-ul" label="Products" required={false} size="full" />
                                <div className="col-12">
                                    <label htmlFor="notes" className="fw-bold">Notes</label>
                                    <textarea name="notes" id="notes" className="form-control" cols="30" rows="6"></textarea>
                                </div>
                                <div className="col-12 mt-5 mb-2">
                                    <button type="button" className="btn btn-primary w-100 py-3 fs-5">Add lead</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default AddLead;