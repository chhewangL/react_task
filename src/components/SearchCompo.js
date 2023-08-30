import React from 'react'
import {

  Button,
  Input,
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import * as Yup from 'yup'

const SearchCompo = () => {
  const validate = Yup.object().shape({
    search: Yup.string().required()

  })
  const nav = useNavigate();

  const formik = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (val, { resetForm }) => {
      nav(`/movieSearch/${val.search}`);
      resetForm()
    },
    validationSchema: validate
  })
  return (

    <div className="relative flex w-full gap-2 md:w-max">
      <form onSubmit={formik.handleSubmit}>
        <Input
          name="search"
          onChange={formik.handleChange}
          type="search"
          color="white"
          label="Search"
          className="pr-20"
          containerProps={{
            className: "max-w-[288px]",
          }}
        />
        <Button
          size="sm"
          color="white"
          className="!absolute right-1 top-1 rounded"
          type='submit'
        >
          Search
        </Button>
      </form>
    </div>

  )
}

export default SearchCompo