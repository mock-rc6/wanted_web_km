export interface IJobDetail {
  photos: []
  title: string
  response_rate: number
  detail: string
  deadline: string
}

export interface IDetailData extends Array<IJobDetail> {}

export interface IRecruits {
  id: number
  title: string
  company_name: string
  response_rate: number
}
