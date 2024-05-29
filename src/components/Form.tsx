import React, { FormEvent, useRef } from 'react'
import { useForm } from 'react-hook-form';

const Form = () => {
    // using hookform library with less code to get from data
    const  { register, handleSubmit } = useForm();

    // submit function to server
    const onSubmit = (data: any) => {
        console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}> 
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input {...register('name')} id="name" type="text" className="form-control" />
        </div> 
        <div className="mb-3">
            <label htmlFor="age" className="form-label">age</label>
            <input {...register('age')} id="age" type="number" className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>     
    </form>
  )
}

export default Form