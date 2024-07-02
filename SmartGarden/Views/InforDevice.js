import React, { useState, useEffect } from "react";
import axios from "axios";

const InforDevice = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    axios.get("http://localhost:5555/getall")
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: '16px',
      height: '100vh',
      overflowY: 'scroll',
    },
    itemContainer: {
      marginBottom: '20px',
      backgroundColor: '#f0f0f0',
      padding: '16px',
      borderRadius: '8px',
      textAlign: 'center',
      width: '80%',
    },
    image: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      marginBottom: '10px',
    },
    name: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    description: {
      fontSize: '14px',
      marginBottom: '5px',
    },
    type: {
      fontSize: '16px',
      color: '#007BFF',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Device Information</h1>
      {data.map((item) => (
        <div style={styles.itemContainer} key={item.id}>
          <img src={item.image} alt={item.name} style={styles.image} />
          <h2 style={styles.name}>{item.name}</h2>
          <p style={styles.description}>{item.description}</p>
          <p style={styles.type}>{item.type}</p>
        </div>
      ))}
    </div>
  );
};

export default InforDevice;
