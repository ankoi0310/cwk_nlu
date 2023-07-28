declare class CourseFaculty {
  ma: string
  ten: string
}

declare class CourseClass {
  ma: string
  ten: string
}

declare class CourseSubject {
  ma: string
  ten: string
}

declare class Course {
  id_to_hoc: string
  id_mon: string
  ma_mon: string
  ten_mon: string
  so_tc: string
  so_tc_so: number
  is_vuot: boolean
  nhom_to: string
  to: string
  lop: string
  ds_lop: string[]
  ds_khoa: string[]
  is_kdk: boolean
  sl_dk: number
  sl_cp: number
  sl_cl: number
  tkb: string
  is_hl: boolean
  enable: boolean
  hauk: boolean
  is_dk: boolean
  gc_enable: string
  is_rot: boolean
  is_ctdt: boolean
  is_chctdt: boolean
  is_kg_lt: boolean
  thu: number
  tbd: number
  so_tiet: number
  is_kg_huy_kqdk: boolean
}

declare class CourseResponse {
  total_items: number
  total_pages: number
  dien_giai_enable_chung: string
  ghi_chu_dkmh: string
  trong_thoi_gian_dang_ky: boolean
  trong_thoi_gian_duyet_kqdk: boolean
  hien_cot_tach_phieu_nop_tien: boolean
  addin_duyet_kqdk: boolean
  hien_cot_hoc_phi: boolean
  hien_cot_ma_lop: boolean
  hien_thi_cot_lich_thi: boolean
  hoc_ky_dang_ky: string
  is_show_tietbd: boolean
  ds_khoa: CourseFaculty[]
  ds_lop: CourseClass[]
  ds_mon_hoc: CourseSubject[]
  ds_nhom_to: Course[]
}

declare class CourseRegistrationResponse {
  is_thanh_cong: boolean
  thong_bao_loi: string
  is_chung_nhom_mon_hoc: boolean
  is_show_nganh_hoc: boolean
  ket_qua_dang_ky: {
    id_kqdk: string
    ngay_dang_ky: string
    is_da_rut_mon_hoc: boolean
    enable_xoa: boolean
    hoc_phi_tam_tinh: number
  }
}

declare class CourseRegistrationResult {
  total_items: number
  total_pages: number
  so_tin_chi_min: number
  ngay_in: string
  is_show_nganh_hoc: boolean
  ds_kqdkmh: RegisteredCourse[]
}

declare class RegisteredCourse {}
