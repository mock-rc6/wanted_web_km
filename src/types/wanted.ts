export interface IJobDetail {
  photos: string[]
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
  photos: string[]
}
