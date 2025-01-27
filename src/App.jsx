import './App.css';
import {useState,useEffect} from 'react';

function App() {
  const [city,setcity]=useState("hyderabad")
  const[weatherdata,setweatherdata]=useState(null)
  const currentdate = new Date();
  const months = ["January", "February", "March", "April", 
    "May", "June", "July", "August", "September",
     "October", "November", "December"];
  const month=months[currentdate.getMonth()];
  const day=currentdate.getDate();
  const year=currentdate.getFullYear();
  const formatdate=`${month}-${day}-${year}`
  
  const API_KEY="9e6b114cce9cdd482976ca873ed27cf3"
  //---------------------------------fetching the API 
  const fetchdata = async () => {
    try {
      console.log(`Fetching data for city: ${city}`); // Debugging
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("API Response:", data); // Debugging
      setweatherdata(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  
  useEffect(()=>{
    fetchdata();
  },[])
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setcity(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchdata();
  };
  

  return (
    <div
      style={{
        backgroundColor: "pink",
        height: "70vh",
        maxWidth: "300px",
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        margin: "0 auto",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "lightgray",
          padding: "10px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "16px",
          borderRadius: "5px",
          width: "100%",
        }}
      >
        <h1>{formatdate}</h1>
      </div>
  
      <div
        style={{
          fontWeight: "bold",
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        {weatherdata ? weatherdata.name : "Loading..."}
      </div>
  
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30%",
          width: "100%",
        }}
      >
        <img
          src="cloud.jpg"
          alt="Cloud with lightning"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </div>
  
      <div>
        <p>{weatherdata ? `${weatherdata.main.temp}°C` : "N/A"}</p>
        <p>{weatherdata ? weatherdata.weather[0].main : "Fetching weather..."}</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter the city" onChange={handleInputChange} />
          <button type="submit">GET</button>
        </form>
      </div>
    </div>
  );}
  

  
  /*function App() {
    const [city, setCity] = useState("hyderabad");
    const [weatherData, setWeatherData] = useState(null);
  
    const currentdate = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[currentdate.getMonth()];
    const day = currentdate.getDate();
    const year = currentdate.getFullYear();
    const formatDate = `${month}-${day}-${year}`;
  
    const API_KEY = "9e6b114cce9cdd482976ca873ed27cf3";
  
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
        setWeatherData(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const handleInputChange = (event) => {
      setCity(event.target.value);

    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      fetchData();
    };
  
    return (
      <div className="app-container">
        <div className="date-container">
          <h1>{formatDate}</h1>
        </div>
  
        <div className="city-name">
          {weatherData ? weatherData.name : "Loading..."}
        </div>
  
        <div className="image-container">
          <img
            src="cloud.jpg"
            alt="Cloud with lightning"
            className="weather-image"
          />
        </div>
  
        <div className="weather-details">
          <p>{weatherData ? `${weatherData.main.temp}°C` : "N/A"}</p>
          <p>{weatherData ? weatherData.weather[0].main : "Fetching weather..."}</p>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter the city" onChange={handleInputChange} />
            <button type="submit">GET</button>
          </form>
        
        </div>
      </div>
    );
  }*/
  /*const App = () => {
      const [tasks, setTasks] = useState([]);
      const [input, setInput] = useState("");
    
      const addTask = () => {
        if (input.trim() !== "") {
          setTasks([...tasks, input]);
          setInput("");
        }
      };
    
      const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
      };
    
      return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>To-Do List</h1>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
          />
          <button onClick={addTask}>Add</button>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}{" "}
                <button onClick={() => deleteTask(index)} style={{ color: "red" }}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    };*/
    
  
    

  
  
  
  
export default App;
