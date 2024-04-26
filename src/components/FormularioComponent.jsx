import { useForm } from "../hooks/useForm"

export const FormularioComponent = () => {
    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }
    const {formState, userName, email, password, onInputChange} = useForm(initialForm)
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState);
    }
    return (
    <form onSubmit = {onSubmit}>
        <div className='form-group'>
            <label htmlFor='userName' className='form-label'>User Name</label>
            <input
            type='text'
            className='form-control'
            name='userName'
            placeholder="Enter your username"
            value={userName}
            onChange={onInputChange}
            />
        </div>

        <div className="form-group">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter mail"
            value={email}
            onChange={onInputChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
            type="password"
            className="form-control"
            name="password"
            placeholder="password"
            value={password}
            onChange={onInputChange}
            />
        </div>
        <button
        type="submit"
        className="btn btn-outline-success"
        >Submit
        </button>
    </form>
    
    )
}
