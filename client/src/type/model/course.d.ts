declare class Faculty {
  ma: string
  ten: string
}

declare class Class {
  ma: string
  ten: string
}

declare class Subject {
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

declare class CourseData {
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
  ds_khoa: Faculty[]
  ds_lop: Class[]
  ds_mon_hoc: Subject[]
  ds_nhom_to: Course[]
}