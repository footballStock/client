import axios from 'axios';

const baseurl = 'https://bamsgod.pythonanywhere.com/api';

export const apiLists = ['/stock_overview', '/posts'];

export const getData = async (endpoint: string) => {
  try {
    const response = await axios.get(baseurl + endpoint);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(baseurl + endpoint, data);
    return response.data; // 서버로부터 응답 데이터 반환
  } catch (error) {
    return null;
  }
};
