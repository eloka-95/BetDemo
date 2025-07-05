import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { Box } from "../design-system"
import { fontSz, wp } from "../utils"
import { SVGIcon } from "../shared/SVGIcon"



interface FilterButtonProps {
    label: string
    isSelected?: boolean
    onPress?: () => void
}

export const FilterButton: React.FC<FilterButtonProps> = ({ label, isSelected = false, onPress }) => {
    return (
        <Box
            as={TouchableOpacity}
            style={[styles.filterButton,
            isSelected && styles.filterButtonSelected]}
            onPress={onPress}>
            <Text style={[styles.filterText, isSelected && styles.filterTextSelected]}>{label}</Text>
            <SVGIcon name="smallArrowDown" />
        </Box>
    )
}

const styles = StyleSheet.create({
    filterButton: {
        width: wp(135),
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#3a3a3a",
    },
    filterButtonSelected: {
        borderColor: "#4a4a4a",
    },
    filterText: {
        color: "#ffffff",
        fontSize: fontSz(14),
        marginRight: 8,
    },
    filterTextSelected: {
        color: "#ffffff",
    },
    dropdownIcon: {
        color: "#888888",
        fontSize: fontSz(14),
    },
})
