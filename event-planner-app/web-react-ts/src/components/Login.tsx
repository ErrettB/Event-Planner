import {React} from 'React'
import { useForm } from "react-hook-form"
import { useQuery } from 'graphql-hooks'

export default function Login() {
  const {register, handleSubmit} = useForm();
  const onSubmit = (d) =>
    alert(JSON.stringify(d));
  
  
return(
  <h1>Login Page</h1>
  <form onSubmit={handleSubmit(onSubmit)}>
    <label>
    First Name:
    <input {...register("firstName")}>
    </label>
    
    <label>
      Last Name:
      <input {...register("lastName")}>
    </label>
      </form>

)

}
