import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" {...register("example")} /> <br />
<br />
                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} /> <br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>

        </div>
    );
};

export default Contact;