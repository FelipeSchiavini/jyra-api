export enum JiraStatus {
  InProgress ="In Progress",
  Open="Open",
  Resolved ="Resolved",
  Closed= "Closed",
  Reopened="Reopened",
  InReview ="In Review",
  Qa = "In Testing",
  Blocked ="Blocked"
}

export interface Issue {
  expand: string
  id: string
  self: string
  key: string
  fields: Field
}

export interface IssueResponse {
  expand: string
  startAt: number
  maxResults: number
  total: string
  issues: Issue[]
}

interface Field {
  statuscategorychangedate: string;
  assignee: {
    displayName: string
  } | null;
  issuetype: {
    self: string
    id: string
    description:string
    iconUrl: string
    name: string
    subtask: boolean,
    avatarId: number,
    entityId: string,
    hierarchyLevel: number
  },
  project: {
    self: string
    id: string
    key: string
    name: string
    projectTypeKey: string
    simplified: true,
    avatarUrls: {
      '48x48': string
      '24x24': string
      '16x16': string
      '32x32': string   
     }
  },
  watches: {
    self: string
    watchCount: number,
    isWatching: boolean
  },
  created:string

  priority: {
    self: string
    iconUrl: string
    name: string
    id: string;
  },
  updated: string
  status: {
    self: string
    description: string,
    iconUrl: string
    name: string
    id: string
    statusCategory: {
      self: string
      id: number
      key: string
      colorName: string
      name: string
    }
  },
  summary: string;
  creator: {
    self: string
    accountId: string
    avatarUrls: {
      '48x48': string
      '24x24': string
      '16x16': string
      '32x32': string   
    },
    displayName: 'André Faggion',
    active: true,
    timeZone: 'Etc/GMT',
    accountType: 'atlassian'
  },
  reporter: {
    self: 'https://beepay.atlassian.net/rest/api/3/user?accountId=712020%3A0ea62297-1e1a-4532-866f-23daef4f0224',
    accountId: '712020:0ea62297-1e1a-4532-866f-23daef4f0224',
    avatarUrls: {
      '48x48': string
      '24x24': string
      '16x16': string
      '32x32': string   
    },
    displayName: string
    active: true,
    timeZone: string
    accountType: string
  },

  votes: {
    self: string
    votes: number,
    hasVoted: false
  }
}

