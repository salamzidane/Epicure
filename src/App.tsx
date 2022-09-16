import Layout from './components/layout/Layout';
import React from 'react';


export default function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.connect));
  }, []);
 console.log("my data is",data);

  return (
    <div className="App">
      {/* <Layout /> */}
     {data}
    </div>
  );
}

