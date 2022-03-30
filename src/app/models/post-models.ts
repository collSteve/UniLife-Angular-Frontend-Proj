export enum PostType  {
  SellingPost= "SellingPost",
  HousingPost= "HousingPost",
  SocialMediaPost= "SocialMediaPost"
};

export const enum PostOrderByValue  {
  CreatedDate=0,
  Title=1
};

export type UIPost = {
  pid: number,
  title: string,
  description: string,
  creator: string,
  create_date: Date,
  num_likes: number,
  num_dislikes: number,
  email?: string,
  phone_num?: string,
  address?: string,
  thum_nail_img?: string
}


export type PostModel = {
  pid:number,
  title: string,
  postBody: string
  createdDate:Date,
  creatorAid:number,
  numLikes:number,
  numDislikes: number,
  creatorName:string,
  email?: string,
  phoneNum?:string,
  address?:string
};

export type UserPostInfo = {
  likedByMe: boolean,
  dislikedByMe: boolean,
  thum_nail_img?:string
}

export type CommentModel = {
  creatorName: string,
  commentBody: string,
  cid: number,
  creatorUid: number,
  pid: number
}

export type PostCreateRequestObject = {
  PostType: string,
  postTitle: string,
  postBody: string,
  createDate: Date,
  creatorUID: number,
  email?: string,
  phoneNumber?: number,
  address?:string
}
