import axios from 'axios';

export const apiLists = ['/stock_overview', '/posts'];

export const getData = async (endpoint: string) => {
  try {
    const response = await axios.get(process.env.REACT_APP_BASEURL + endpoint);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BASEURL + endpoint,
      data,
    );
    return response.data; // 서버로부터 응답 데이터 반환
  } catch (error) {
    return null;
  }
};
