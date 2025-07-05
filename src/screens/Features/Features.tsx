import React from "react"
import { useState } from "react"
import { FlatList, StyleSheet } from "react-native"
import { Contest, FilterOption } from "../../types"
import { ContestHeader } from "../../components/ContestHeader"
import { FilterBar } from "../../components/FilterBar"
import { TeamContestItem } from "../../components/TeamContestItem"
import { GroupContestItem } from "../../components/GroupContestItem"
import { ContestLegend } from "../../components/ContestLegend"
import { mockContests } from "../../theme/data"
import { Screen } from "../../shared/Screen"
import { Box } from "../../design-system"


const filterOptions: FilterOption[] = [
  { label: "All Contest", value: "all" },
  { label: "Today", value: "today" },
  { label: "Over / Under", value: "over-under" },
]

export const Features: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all")

  const handleCalendarPress = () => {
    console.log("Calendar pressed")
  }

  const handleFilterPress = (value: string) => {
    setSelectedFilter(value)
    console.log("Filter selected:", value)
  }

  const handleContestPress = (contestId: string) => {
    console.log("Contest pressed:", contestId)
  }

  const renderContest = ({ item }: { item: Contest }) => {
    if (item.type === "1vs1") {
      return <TeamContestItem contest={item} onPress={() => handleContestPress(item.id)} />
    } else {
      return <GroupContestItem contest={item} onPress={() => handleContestPress(item.id)} />
    }
  }

  return (
    <Screen >
      <Box style={styles.container}>
      <ContestHeader title="My Contests" onCalendarPress={handleCalendarPress} />
      <FilterBar filters={filterOptions} selectedFilter={selectedFilter} onFilterPress={handleFilterPress} />

      <FlatList
        data={mockContests}
        renderItem={renderContest}
        keyExtractor={(item) => item.id}
        style={styles.contestsList}
        showsVerticalScrollIndicator={false}
      />

      <ContestLegend />
      </Box>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  contestsList: {
    flex: 1,
    paddingHorizontal: 20,
  },
})

export default Features


