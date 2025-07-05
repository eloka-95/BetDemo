export interface TeamContest {
    id: string
    type: "1vs1"
    team1: {
      name: string
      logo: string
    }
    team2: {
      name: string
      logo: string
    }
    stake: number
    date: string
    status: "in-progress" | "won" | "lost"
  }

  export interface GroupContest {
    id: string
    type: "daily" | "weekly"
    participants: string[] // Array of participant avatar URLs
    participantCount: number
    stake: number
    date: string
    status: "in-progress" | "won" | "lost"
  }

  export type Contest = TeamContest | GroupContest

  export interface FilterOption {
    label: string
    value: string
  }
  