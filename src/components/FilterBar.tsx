import type React from "react"
import { ScrollView, StyleSheet } from "react-native"
import { FilterButton } from "./FilterButton"
import { FilterOption } from "../types"
import { Box } from "../design-system"
import { hp, wp } from "../utils"

interface FilterBarProps {
    filters: FilterOption[]
    selectedFilter?: string
    onFilterPress?: (value: string) => void
}

export const FilterBar: React.FC<FilterBarProps> = ({ filters, selectedFilter, onFilterPress }) => {
    return (
        <Box>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.filtersContainer}
            >
                {filters.map((filter, index) => (
                    <FilterButton
                        key={filter.value}
                        label={filter.label}
                        isSelected={selectedFilter === filter.value || (index === 0 && !selectedFilter)}
                        onPress={() => onFilterPress?.(filter.value)}
                    />
                ))}
            </ScrollView>
        </Box>
    )
}

const styles = StyleSheet.create({
    filtersContainer: {
        flexDirection: "row",
        paddingHorizontal: wp(20),
        paddingVertical: hp(15),
        gap: 10,
    },
})
