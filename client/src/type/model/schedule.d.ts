declare class SemesterFilter {
  hiendiensv: number
  hoc_ky: number
  ngay_bat_dau_hk: string
  ngay_ket_thuc_hk: string
  ten_hoc_ky: string
}

declare class ObjectFilter {
  loai_doi_tuong: number
  ten_doi_tuong: string
}

declare class ScheduleItem {
  id_to_hoc: string
  id_mon: string
  ma_mon: string
  ten_mon: string
  so_tc: string
  so_tc_so: number
  is_vuot: boolean
  nhom_to: string
  lop: string
  ds_lop: []
  is_kdk: boolean
  sl_dk: number
  sl_cp: number
  sl_cl: number
  tkb: string
  is_hl: boolean
  enable: boolean
  hauk: boolean
  is_dk: boolean
  is_rot: boolean
  is_ctdt: boolean
  is_chctdt: boolean
  is_kg_lt: boolean
  thu: number
  tbd: number
  so_tiet: number
  tu_gio: string
  den_gio: string
  phong: string
  gv: string
  gc_to_hoc: string
  is_kg_huy_kqdk: boolean
}
