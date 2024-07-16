import { useState, useEffect } from "react"

function App() {

  const [navColor, setNavColor] = useState("");
  const [secondDropDownValue, setSecondDropdownValue] = useState([]);
  const [names, setNames] = useState([]);


  // useEffect(() => {
  //   getNames();
  // }, [])

  const changeNavColor = () => {
    setNavColor(navColor === '' ? 'blue' : '#faebd7');
  };

  // const getNames = async () => {
  //   const url = new URL("https://jsonplaceholder.typicode.com/users");
  //   const request = new Request(url);

  //   const response = await fetch(request);
  //   if (response.ok) {
  //     const data = await response.json();
  //     setNames(data.map(user => user.username));
  //   }
  // }

  const navigateToSecondDropdown = (event) =>{
    const value = event.target.value;
    if(value === 'react'){
      setSecondDropdownValue(['react7', 'react8', 'react9']);
    }
    else if(value === 'angular'){
      setSecondDropdownValue(['angular7', 'angular8', 'angular9']);
    }
    else {
      setSecondDropdownValue(['nodejs8', 'nodejs8.1', 'nodejs8.2']);
    }
  };

  return (
    <>
      <div className='nav' style={{ backgroundColor: navColor }}>
        <div className="start">
          <img className="logo" src="/images-removebg-preview.png" alt="logo"></img>
          <h3>KreatX</h3>
        </div>
        <div className="navElements">
          <a href="https://react.dev/">Go to React Documentation</a>
          <button onClick={
            changeNavColor
          }>About Us</button>
          <select name='frameworks' onChange={navigateToSecondDropdown}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="nodejs">NodeJs</option>
          
          {/* names.map(option => (
            <option key={option} value={option}>{option}</option>
          )) */}
          
          

          
          </select>
          <select name='frameworks-specified'>
            {
              secondDropDownValue.map(option => (
                <option key={option} value={option}>{option}</option>
              ))
            }
          </select>
        </div>
      </div>
    </>
  )
}

export default App
