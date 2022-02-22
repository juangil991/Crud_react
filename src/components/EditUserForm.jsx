import React from 'react'
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

    const { register, formState: { errors }, handleSubmit, setValue } = useForm({
            defaultValues: props.currentUser
        }
    );

    setValue('name',props.currentUser.name)
    setValue('username',props.currentUser.username)
    
    const onSubmit = (data, e) => {
        e.target.reset();
        props.updateUser(props.currentUser.id, data)
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
            <button>Edit user</button>
        </form>
    );
}

export default EditUserForm;