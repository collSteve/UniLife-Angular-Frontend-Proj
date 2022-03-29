
export type Post = {
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

export type UserPostInfo = {
  likedByMe: boolean,
  dislikedByMe: boolean
}
