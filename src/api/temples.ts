import axios from "axios";

const getTemples = async (
  province: string,
  callBack: (response: string[], province: string) => void
) => {
  try {
    const res = await axios.get(`http://127.0.0.1:8000/api/temple/${province}`);
    callBack(res.data.data, province);
  } catch (error) {
    throw error;
  }
};

export { getTemples };
