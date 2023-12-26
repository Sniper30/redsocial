import z from 'zod';
export interface atributesInterface {
  alt: string | "profile picture" ;
  height?: 40 | number;
  width?: 40 | number;
  src?:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" | string;
}

export interface user_credentials {
  id:string;
  username:string;
  email:string;
  password:string;
  token:string;
}

export default interface createUser {
  id:string
  email:string
  password:string
  name:string
  lastname:string
  age:number
  street: string
  state:string 
  city: string
  zipcode:string
}

export const user = z.object({
  name: z.string().min(1),
  lastname: z.string().min(1),
  username: z.string().min(5),
  age: z.number().max(100),
  zipcode: z.string().regex(/^\d{5}$/),
  city: z.string(),
  street: z.string(),
  state: z.string(),
  email: z.string(),
  password: z
      .string()
      .min(10)
      .refine((pw) => /[0-9]/.test(pw), "Password must contain a number"),
});

export type modal_styles = {
  btn: {action:()=> void, title:string},
  type: modal,
  visible: boolean
} 

export type modal = 'warning' | 'success'