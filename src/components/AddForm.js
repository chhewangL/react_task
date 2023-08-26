import React from 'react'
import {
  Card,
  Input,
  Radio,
  Button,
  Typography,
  Checkbox,
  Select,
  Option,
  Textarea
} from "@material-tailwind/react";
import { country, gender, hobies } from '../data/form_data';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addUser } from '../features/userSlice';

const AddForm = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const userSchema = Yup.object().shape({
    username: Yup.string().required("username is required"),
    email: Yup.string().email().required("email is required"),
    country: Yup.string().required(),
    gender: Yup.string().required(),
    hobies: Yup.array().min(1).required(),
    img: '',
    msg: Yup.string().required()
  })

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      country: '',
      gender: '',
      hobies: [],
      img: '',
      msg: '',
      id: nanoid()
    },
    onSubmit: (val) => {
      dispatch(addUser(val));
      nav(-1);
    },
    validationSchema: userSchema




  })

  return (
    <Card color="transparent" shadow={true} className='max-w-xl mx-auto p-[20px] mt-4'>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={formik.handleSubmit}>
        <div className="mb-4 flex flex-col gap-4">
          <div>

            <Input size="lg" label="Name" name="username" onChange={formik.handleChange} />
            {formik.errors.username && formik.touched.username &&
              <h1 className='text-pink-700'>{formik.errors.username}</h1>
            }
          </div>



          <Input size="lg" label="Email" name='email' onChange={formik.handleChange} />
          {formik.errors.email && formik.touched.email &&
            <h1 className='text-red-500'>{formik.errors.email}</h1>}


          <div>
            <Typography variant="h6" color="blue-gray">
              Select your Country
            </Typography>
            <div className="w-72">
              <Select label="Select Country" name='country' onChange={(e) => formik.setFieldValue('country', e)} >
                {country.map((cont) => {
                  return <Option value={cont.value}>{cont.label}</Option>
                })}

              </Select>
              {formik.errors.country && formik.touched.country &&
                <h1 className='text-red-500'>{formik.errors.country}</h1>}

            </div>

          </div>
          <div>
            <Typography variant="h6" color="blue-gray">
              Select your Gender
            </Typography>
            <div className="flex gap-10">
              {gender.map((gen, i) => {
                return <Radio name="gender" onChange={formik.handleChange} label={gen.label} color={gen.color} value={gen.value} key={i} />

              })}


            </div>
            {formik.errors.gender && formik.touched.gender &&
              <h1 className='text-red-500'>{formik.errors.gender}</h1>}


          </div>
          <div>
            <Typography variant="h6" color="blue-gray">
              Select your hobies
            </Typography>
            <div>
              {hobies.map((hobie, i) => {
                return <Checkbox onChange={formik.handleChange} label={hobie.label} value={hobie.value} name="hobies" color={hobie.color} />;
              })}
              {formik.errors.hobies && formik.touched.hobies &&
                <h1 className='text-red-500'>{formik.errors.hobies}</h1>}


            </div>

          </div>
          <div>
            <Typography variant="h6" color="blue-gray">
              Select your Image
            </Typography>
            <Input type='file' size="lg" label="Select your Image" name='img'
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.addEventListener('load', (e) => {
                  formik.setFieldValue('img', e.target.result);
                })
              }} />
            {formik.values.img && <img src={formik.values.img} />}
          </div>
          <div>
            <Typography variant="h6" color="blue-gray">
              Message
            </Typography>
            <div className="w-96">
              <Textarea label="Message" name="msg" onChange={formik.handleChange} />
            </div>
            {formik.errors.msg && formik.touched.msg &&
              <h1 className='text-red-500'>{formik.errors.msg}</h1>}


          </div>
        </div>
        <Button className="mt-6" fullWidth type='submit'>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}


export default AddForm