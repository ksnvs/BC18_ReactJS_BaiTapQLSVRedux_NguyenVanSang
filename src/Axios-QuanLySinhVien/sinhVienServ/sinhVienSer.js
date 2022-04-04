import axios from "axios";

const BASE_URL = "https://620e4f3d585fbc3359dda8e8.mockapi.io/sinhvien";
export const sinhVienServ = {
  layDanhSinhVien: () => {
    return axios({
      method: "GET",
      url: BASE_URL,
    });
  },
};
