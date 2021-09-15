import React, { useState, useEffect } from "react";
import { useGetPokemonByNameQuery,useGetPokemonByOtherQuery,useGetUpdateDataMutation,useGetDeleteDataMutation } from "../features/Pokemon";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./index2.css";

const ProductChild = () => {

  const history = useHistory();
  const { id } = useParams();

  

  const [newValuw, setnewValuw] = useState({});
  const [updateValue, setupdateValue] = useState(false);
  const [user, setUser] = useState({});



  const { data, error, isLoading } = useGetPokemonByNameQuery();

  const resInfo = useGetPokemonByOtherQuery(id)

  const [newresponse,response] = useGetUpdateDataMutation( )

  console.log(response)


  const [deleteRes,responseDelete] = useGetDeleteDataMutation( )


  
  

useEffect(() => {

  if(resInfo.data){
    setUser(resInfo.data)
    

  }
  
  

},[resInfo])



 






  const clickUpdate=()=>{
      setupdateValue(!updateValue);


  }



   const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
   
   const newdata = {...data,id} 

    alert(
      
      JSON.stringify(newdata)
      
      
    
    );

    
    newresponse(newdata)


   window.location.reload();
    


  };


  const deleteFunc = () =>{

    alert("deleteed Id " , user.nameId)

    deleteRes(id)

   
  }


if(responseDelete.isSuccess){
   history.push("/");
   window.location.reload();
}

  return (
    <div>
      <div class="text-center">
        <h1>Full Description Page</h1>
        <hr />
        <p>{user?.nameId}</p>

        <img src={user?.img} alt="" />


        <h4 style={{ color: "green" }}> {user?.first_name} {user?.last_name}</h4>
        <h6 style={{ color: "#73318f" }}>Email : {user?.email}</h6>
        <h6>City : {user?.city}</h6>
        <h5>{user?.title}</h5>
        <p style={{ color: "#3cbd85" }}> {user?.words}</p>
       
        <hr />


        <div class="d-grid gap-15 d-md-block">
          <button onClick={()=>deleteFunc()} class="btn btn-danger" type="Delete">
           Delete
          </button>
          {" "}
          <button onClick={()=> clickUpdate()} class="btn btn-primary" type="Update">
            Update
          </button>
        </div>



      </div>
       {/* form start here  */}

        {updateValue ? <div className="nayeem">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Field</label>
          <input required placeholder="title" {...register("title")} type="text"/>
          <small style={{ color:'red'}}>first_name ,last_name,email,city</small>
        </div>

        <div>
          <label htmlFor="body">body</label>
          <input required placeholder="body" {...register("body")} />
        </div>

       
        <input type="submit" />
      </form>
    </div> :null
}




    </div>
  );
};

export default ProductChild;
