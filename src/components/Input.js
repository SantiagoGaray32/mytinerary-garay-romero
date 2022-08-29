import React from "react"
import "../styles/Input.css"

const renderInput = (Input) => {
    return Input.map((categories) =>(
        <div className="form" key={Input.url}>
            <form>
            <div>
                <label for="city">City
                    <input id="city" src={categories.city}></input>
                </label>
            </div> 
            <div>
                <label for="country">Country
                    <input id="country" src={categories.country}></input>
                </label>
            </div>
            <div>
                <input src={categories.photo}></input>
            </div>
            <div>
                <input src={categories.population}></input>
            </div>
            <button type="submit" >Submit</button>
            </form>

        </div>

    ))
   } 
  const inputCategories = {
        allCategories: renderInput([
            {city:"",
             country:"",
             photo:"",
             population:"",}
        ])

  }   
function Forms (){
    return(
        <div className="formContainer">
            {inputCategories.allCategories}


        </div>

    )
}
export default Forms