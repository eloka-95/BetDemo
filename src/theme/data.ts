
export const mockContests: Contest[] = [
  {
    id: "1",
    type: "1vs1",
    team1: { name: "Arsenal", logo: "🔴" },
    team2: { name: "Barcelona", logo: "🔵" },
    stake: 50,
    date: "1 Day ago",
    status: "won",
  },
  {
    id: "2",
    type: "daily",
    participants: ["👤", "👤", "👤", "👤"],
    participantCount: 6,
    stake: 100,
    date: "4hrs ago",
    status: "in-progress",
  },
  {
    id: "3",
    type: "weekly",
    participants: ["👤", "👤", "👤", "👤"],
    participantCount: 11,
    stake: 500,
    date: "2hrs ago",
    status: "lost",
  },
  {
    id: "4",
    type: "1vs1",
    team1: { name: "Arsenal", logo: "🔴" },
    team2: { name: "Barcelona", logo: "🔵" },
    stake: 50,
    date: "1 Day ago",
    status: "won",
  },
  {
    id: "5",
    type: "daily",
    participants: ["👤", "👤", "👤", "👤"],
    participantCount: 6,
    stake: 100,
    date: "4hrs ago",
    status: "in-progress",
  },
]

export const filterOptions: FilterOption[] = [
  { label: "All Contest", value: "all" },
  { label: "Today", value: "today" },
  { label: "Over / Under", value: "over-under" },
]

