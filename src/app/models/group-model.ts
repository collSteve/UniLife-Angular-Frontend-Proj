export type GroupModel = {
  gid: number,
  groupName: string,
  memberCount?: number,
  role?: string,
}

export type GroupInfo = {
  MemberCount: number,
  MemberAid: number
}

export type GroupNewObj = {
  groupName: string,
  aid: number;
}

export type JoinGroupReq = {
  aid: number,
  gid: number,
  role: string,
}

export type changeNameObj = {
  name: string,
  gid: number
}

export type newGroupPost = {
  gid?: number,
  pid?: number,
}
