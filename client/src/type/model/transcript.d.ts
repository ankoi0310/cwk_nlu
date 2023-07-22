export class TranscriptResponse {
  total_items: number
  total_pages: number
  is_kkbd: boolean
  ds_diem_hocky: SemesterScore[]
}

export class SemesterScore {
  loai_nganh: number
  hoc_ky: string
  ten_hoc_ky: string
  dtb_hk_he10: string
  dtb_hk_he4: string
  dtb_tich_luy_he_10: string
  dtb_tich_luy_he_4: string
  so_tin_chi_dat_hk: string
  so_tin_chi_dat_tich_luy: string
  hien_thi_tk_he_10: boolean
  hien_thi_tk_he_4: boolean
  ds_diem_mon_hoc: SubjectScore[]
}

export class SubjectScore {
  ma_mon: string
  ma_mon_tt: string
  nhom_to: string
  ten_mon: string
  mon_hoc_nganh: boolean
  so_tin_chi: string
  diem_thi: string
  diem_giua_ky: string
  diem_tk: string
  diem_tk_so: string
  diem_tk_chu: string
  ket_qua: number
  hien_thi_ket_qua: boolean
  loai_nganh: number
  KhoaThi: number
  ds_diem_thanh_phan: SubjectScoreDetail[]
}

export class SubjectScoreDetail {
  ky_hieu: string
  ten_thanh_phan: string
  trong_so: string
  diem_thanh_phan: string
}
