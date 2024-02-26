export const InputField = (props) => {

    return (
        <>
            <div className={`${props.size === "full" ? 'col-12' : 'col-6'} my-3`}>
                <label htmlFor={props.name} className="fw-bold">{props.label}
                    {props.required && <strong className="text-danger">*</strong>}
                </label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <i className={`bi ${props.icon}`}></i>
                    </span>
                    <input type={props.type} name={props.name} className="form-control" placeholder={props.placeholder} id={props.name} aria-label={props.placeholder} aria-describedby="basic-addon1" required={props.required} />
                </div>
            </div>
        </>
    )

}

export const SelectField = (props) => {
    return (
        <>
            <div className={`${props.size === "full" ? 'col-12' : 'col-6'} my-3`}>
                <label htmlFor={props.name} className="fw-bold">{props.label} {props.required && <strong className="text-danger">*</strong>}</label>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">
                        <i className={`bi ${props.icon}`}></i>
                    </label>
                    <select name={props.name} class="form-select" id={props.name}>
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </>
    )
}