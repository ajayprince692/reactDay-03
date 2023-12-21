import React,{useState} from 'react'
import Card from './components/card'
import Header from './components/Header'
import TopBar from './components/TopBar'
import Base from './components/Base'

function App() {
  let data=[
    {
      product:"Fancy Product",
      price:"40.00-$80.00"
    },
    {
      product:"Special Item",
      price:"18.00"
    },
    {
      product:"Sale Item",
      price:"25.00"
    },
    {
      product:"Popular Item",
      price:"40.00"
    },
    {
      product:"Sale Item",
      price:"25.00"
    },
    {
      product:"Fancy Product",
      price:"120.00 - $280.00"
    },
    {
      product:"Special Item",
      price:"18.00"
    },
    {
      product:"Popular Item",
      price:"40.00"
    },
  ]

  let[count,setCount]=useState(0);
  return <>
  
  <TopBar count={count} setCount={setCount}/>
  <Header/>
  
  <section className="py-5">
  
      
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {
       data.map((e,i)=>{
          return <Card data={e} count={count} setCount={setCount} key={i}/>
        })
      }
                </div>
              </div>
                  
                </section>
                <Base/>
  </>

 
}

export default App