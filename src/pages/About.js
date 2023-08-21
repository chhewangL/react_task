import React from 'react'
import ApiHooks from '../hooks/ApiHooks'
import Loading from '../components/Loading'

const About = () => {
  const [data, load, err] = ApiHooks('https://www.themealdb.com/api/json/v1/1/categories.php');
  console.log(data);
  if (load) {
    return <Loading />
  }
  if (err) {
    return (
      <div>
        <h1>{err}</h1>
      </div>
    )
  }
  return (<div className='grid grid-cols-3 gap-5 px-5'>
    {
      data.categories.map((meal) => {
        return <div key={meal.id}>
          <h1 className='text-center text-lg font-bold'>{meal.strCategory}</h1>
          <img src={meal.strCategoryThumb
          } alt="" />
          <p>{meal.strCategoryDescription}
          </p>

        </div>
      })
    }
  </div>

  )
}

export default About