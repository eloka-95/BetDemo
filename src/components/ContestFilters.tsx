import React from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

interface FilterButtonProps {
    label: string
    isSelected?: boolean
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isSelected = false }) => (
    <TouchableOpacity style={[styles.filterButton, isSelected && styles.filterButtonSelected]}>
        <Text style={[styles.filterText, isSelected && styles.filterTextSelected]}>{label}</Text>
        <Text style={styles.dropdownIcon}>▼</Text>
    </TouchableOpacity>
)

interface ContestFiltersProps {
    selectedFilters: {
        contest: string
        time: string
        type: string
    }
}

export const ContestFilters: React.FC<ContestFiltersProps> = ({ selectedFilters }) => {
    return (
        <View style={styles.filtersContainer}>
            <FilterButton label="All Contest" isSelected={selectedFilters.contest === "all"} />
            <FilterButton label="Today" isSelected={selectedFilters.time === "today"} />
            <FilterButton label="Over / U..." isSelected={selectedFilters.type === "over-under"} />
        </View>
    )
}

const styles = StyleSheet.create({
    filtersContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 15,
        gap: 10,
    },
    filterButton: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "#2a2a2a",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#3a3a3a",
    },
    filterButtonSelected: {
        borderColor: "#4a4a4a",
    },
    filterText: {
        color: "#ffffff",
        fontSize: 14,
        marginRight: 8,
    },
    filterTextSelected: {
        color: "#ffffff",
    },
    dropdownIcon: {
        color: "#888888",
        fontSize: 12,
    },
})