import React, { useState } from "react";
import "./Vedio.css";
import abc_icon from "./../../assets/abc.png";

const Vedio = () => {
  const [action, setAction] = useState("Video Evidence");
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  // rest of the component code
  const handleDelete = () => {
    setFile(null);
    setFileUrl(null);
  };

  function callback(res) {
    console.log("===============response ------ ", res.body);
  }

  // function uploadPic(){
  //   console.log("hello")
  // }
  // function uploadPi(){
  //   console.log("hi")
  // }

  // function add(a, b, callback) {
  //   console.log(a + b);
  //   callback();
  // }
  
  // let a = 15;
  // let b = 20;
  
  // add(a, b, uploadPic);
  // add(20, 20, uploadPi);
  // add(20, 20, function(){
  //   console.log("byeeee...")
  // })

// let arr = [2, 4, 6, 8, 10]
// let arr1 = []
// arr1 = arr.map((count)=>count * 5)
// let arr1 = []
// for(let i =0; i<arr.length; i++){
//     arr1[i] = arr[i] * 2;
// }
// let arr1 = arr.map(function(count){
//   return count * 3;
// })
// console.log(arr1);


// let x = myFunction(4, 3);
// console.log(x) ;

// function myFunction(a, b) {
//   return a * b;
// }

// function toCelsius(f) {
//   return (5/9) * (f-32);
// }

// let value = toCelsius(200);
// console.log(value);

function myFunction() {
  console.log("x");
}

function myCalculator(num1, num2, callback) {
  console.log(num1 + num2);
    callback(); 
}
let num1= 35
let num2= 5
myCalculator(num1, num2, myFunction)



  const handleSave = () => {
    fetch("http://localhost:8080")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("================ datat ios ----------- ", data);
      });

    if (file) {
      console.log("File saved:", file.name);
    } else {
      console.log("No file to save.");
    }
  };

  return (
    <div>
      <div className="policestation">POLICE STATION</div>
      <div className="underlin"></div>
      <div className="fcontainer">
        <div
          className={
            action === "Video Evidence" ? "fcontainer purple" : "fcontainer"
          }
          onClick={() => {
            setAction("Video Evidence");
          }}
        >
          Video Evidence
        </div>
        <div
          className={
            action === "Crime Scene Details"
              ? "fcontainer purple"
              : "fcontainer"
          }
          onClick={() => {
            setAction("Crime Scene Details");
          }}
        >
          Crime Scene Details
        </div>
        <div
          className={
            action === "User Complain" ? "fcontainer purple" : "fcontainer"
          }
          onClick={() => {
            setAction("User Complain");
          }}
        >
          User Complain
        </div>
      </div>

      {action === "Video Evidence" && (
        <div>
          <div className="underl"></div>
          <div className="underli"></div>
          <div className="line">Submit Video Evidence</div>
          <div className="Hero">
            <label htmlFor="input file" id="drop-area">
              <form>
                <input type="file" accept="video/*" id="input-file" />
                <div id="image-view">
                  <img src={abc_icon} alt="" />
                  <p className="file">Start by uploading a file</p>
                  <p className="file2">click here to upload video</p>
                </div>
              </form>
            </label>
            <div id="button-b">
              <button type="button" className="button-v" onClick={handleDelete}>
                Delete
              </button>
              <button type="button" className="button-n" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CRIME SCENE START */}

      {action === "Crime Scene Details" && (
        <div>
          {/* Render content for Crime Scene Details here */}
          <div className="underline-crimescenedetails"></div>
          <div className="underli"></div>
          <div className="line-c">Crime Video content</div>
          <div className="Hero">
            <label htmlFor="input file" id="drop-are">
              <form>
                <input type="file" accept="video/*" id="input-file" />
                <div id="image-view">
                  <img src={abc_icon} alt="" />
                  <p className="file">Start by uploading a file</p>
                  <p className="file2">click here to upload video</p>
                </div>
              </form>
            </label>
            {/* crime scene details box */}
            <div>
              <div className="detail">Crime Details (How it happened?) </div>
              <div className="written">
                <input type="text" placeholder="Enter details here " />
              </div>
              {/* ANOTHER DETAIL BOX DETAIL */}
              <div>
                <div className="detail">Crime Details (Where it happened?)</div>
                <div className="written">
                  <input type="text" placeholder="Enter details here " />
                </div>
              </div>
            </div>
            {/* buttons of delete and save */}
            <div id="button-b">
              <button type="button" className="button-d" onClick={handleDelete}>
                Delete
              </button>
              <button type="button" className="button-s" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* the navbar topic user complain starts from here  */}
      {action === "User Complain" && (
        <div>
          {/* Render content for User Complain here */}
          <div>
            <div className="underline-usercomplain"></div>
            <div className="underli"></div>
            {/* making placeholders inputs  */}
            <div className="arrange">
              <div className="boxes">Name</div>
              <div className="happened-box">What has happened?</div>
            </div>
            <div className="name-box">
              <input type="text" placeholder="enter name" />
              <input type="text" placeholder="Enter detail" />
            </div>
            {/* ANOTHER LINE BEGINS OF PLACEHOLDERS FROM HERE */}
            <div className="arrange">
              <div className="boxes">Email</div>
              <div className="happened-box">Who is the culprit?</div>
            </div>
            <div className="name-box">
              <input type="text" placeholder="enter  email" />
              <input type="text" placeholder="Enter your address" />
            </div>
            <div className="arrange">
              <div className="boxes">How many times it happened?</div>
              <div className="happened-bo">How can we make this right?</div>
            </div>
            <div className="name-box">
              <input type="text" placeholder="enter details" />
              <input type="text" placeholder="enter details" />
            </div>
            <div className="arrange">
              <div className="boxe">What do you want from police?</div>
            </div>
            <div className="name-bo">
              <input type="text" placeholder="enter details" />
            </div>
            <div id="button-b">
              <button type="button" className="button-dd" onClick={handleDelete}>
                Delete
              </button>
              <button type="button" className="button-ss" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vedio;
