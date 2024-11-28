import { http } from "./config";

export const khoaHocService = {
  getCourse: () => {
    // /QuanLyKhoaHoc/LayDanhSachKhoaHoc
    return http.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc");
  },
};
