export const enum PostType  {
  SellingPost= "SellingPost",
  HousingPost= "HousingPost",
  SocialMediaPost= "SocialMediaPost"
};

export const enum PostOrderByValue  {
  CreatedDate=0,
  Title=1
};

export type PostsModel = {
  PID:number,
  title: string,
  post_body: string
  createdDate:Date,
  creatorAid:number,
  numLikes:number,
  numDislikes: number,
  email?: string,
  phoneNum?:string,
  address?:string
};


