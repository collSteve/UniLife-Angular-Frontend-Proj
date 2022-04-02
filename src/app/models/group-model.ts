export type GroupModel = {
  gid: number,
  groupName: string,
  MemberCount?: number,
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
