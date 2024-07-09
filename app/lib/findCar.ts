import axios from 'axios';

type FindCarParams = {
  location: string;
  checkInDate: string;
  checkInTime: string;
  carType: string;
};

export const findCar = async (params: FindCarParams): Promise<string> => {
  const response = await axios.post('/api/vapi/findCar', params);
  return response.data.url;
};
