import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from './api/requests';

export default function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보를 가져오기(여러 영화)
    const request = await axios.get(requests);
  };
  return <div>Banner</div>;
}
