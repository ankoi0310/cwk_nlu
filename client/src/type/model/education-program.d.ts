declare class EducationProgramResponse {
  total_items: number
  total_pages: number
  is_xem_tai_lieu: boolean
  is_show_nhomtc: boolean
  is_view_sodo: boolean
  tong_sotc_ctdt: number
  tong_sotctl: number
  message_tong_tiet: string
  is_show_tiettp: boolean
  so_tc_phai_dat: number
  ds_nganh_sinh_vien: EducationProgramMajor[]
  ds_CTDT_hocky: EducationProgram[]
  ds_CTDT_hocky_n2: EducationProgram[]
  ds_field_an: EducationProgramHiddenField[]
}

declare class EducationProgramMajor {
  loai_nganh: number
  ma_nganh: string
  ten_nganh: string
}

declare class EducationProgram {
  hoc_ky: string
  ten_hoc_ky: string
  ds_CTDT_mon_hoc: EducationProgramSubject[]
}

declare class EducationProgramSubject {
  id_khoi: string
  id_mon: string
  ma_mon: string
  ten_mon: string
  so_tin_chi: string
  mon_bat_buoc: string
  nhom_tc: string
  ma_chnganh: string
  mon_da_hoc: string
  ly_thuyet: string
  thuc_hanh: string
  tong_tiet: string
  so_tc_min: string
  so_tc_max: string
  mon_da_dat: string
  ghi_chu_mon_hoc: string
  ds_tiet_thanh_phan: EducationProgramSubjectDetail[]
}

declare class EducationProgramSubjectDetail {
  ten_thanh_phan: string
  so_tiet: string
}

declare class EducationProgramHiddenField {
  ten_field: string
  enable: boolean
}
