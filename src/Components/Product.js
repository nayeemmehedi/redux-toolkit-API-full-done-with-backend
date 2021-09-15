import * as React from "react";
import { useGetPokemonByNameQuery } from "../features/Pokemon";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




export default function Product() {
  const { data, error, isLoading } = useGetPokemonByNameQuery();
 
 console.log(data);
 

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className="row">
          <h1 class="text-center">REDUX Toolkit Project</h1>
          <br />

         
          {data.map((fakedata) => (
            <div className="col-5  ms-5 mb-4">
              <div class="card border border-danger">
                <div class="card-header text-center">
                  <h3>{fakedata.nameId}</h3>
                </div>

                <p class="text-center">Name : {fakedata.first_name} {fakedata.last_name}</p>
                <div class="card-body">
                  <div class="text-center">
                    <small class="text-center">{fakedata.words}</small> <br />
                    <hr />
                  </div>

                  <p class="text-center">email : {fakedata.email}</p>

                  <div class="text-center">

                   <Link to ={`./product/${fakedata._id}`}>
                    <button class="btn btn-danger text-center">Submit</button>

                    </Link>
                   


                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
