import React, { useState, useEffect } from 'react';

const ApiFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data || !data.title) return <p>No data available.</p>;
  return <div className='text-2xl text-green-400'>{data.title}</div>;
  
};

export default ApiFetch;
