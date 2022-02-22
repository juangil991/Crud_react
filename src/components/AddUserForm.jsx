import React from 'react'
import { useForm } from 'react-hook-form';

const AddUserForm = ({ addUser }) => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        addUser(data);
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text"
                {...register("name", { required: true })}
            />
            {errors.name?.type === 'required' && "Campo requerido"}
            <label>Username</label>
            <input type="text" name="username"
                {...register("username", { required: true })}
            />
            <div>
                {errors.username?.type === 'required' && "Campo requerido"}
            </div>
            <button>Add new user</button>
        </form>
    );
}

export default AddUserForm;