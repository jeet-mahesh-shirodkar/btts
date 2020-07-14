import React, { useState } from "react";

const Contact = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [msg,setMsg] = useState("");
    const [phone,setPhone] = useState("");

    const handleForm = (event) => {
        event.preventDefault();
        alert(name,email,msg,phone);
    }
    return(
    <React.Fragment>
            <div className="head">Contact <span role="img" aria-label="email-emoji">📧</span></div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={handleForm}>    
                <div class="mb-3">
                    <label className="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" className="form-control" required/>
                </div>
                <div class="mb-3">
                    <label className="form-label">Phone</label>
                    <input onChange={(e)=>{setPhone(e.target.value)}} value={phone} type="number" className="form-control" required/>
                </div>
                <div class="mb-3">
                    <label className="form-label">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" className="form-control" required/>
                </div>
                <div class="mb-3">
                    <label className="form-label">Enquire</label>
                    <textarea onChange={(e)=>{setMsg(e.target.value)}} value={msg} className="form-control" rows="3"></textarea>
                </div>
                <div class="mb-3">
                   <button class="btn btn-outline-primary" type="submit">Contact</button>
                </div>
                </form>  
                </div>
            </div>
        </div>
        <div className="preHead"></div>
    </React.Fragment>
    );
}

export default Contact;