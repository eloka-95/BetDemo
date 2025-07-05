import React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { Contest } from "../types"
import { Text, Box } from "../design-system"
import { fontSz, hp, wp } from "../utils"
import { SVGIcon } from "../shared/SVGIcon"

interface StatusButtonProps {
    status: Contest["status"]
    onPress?: () => void
}

export const StatusButton: React.FC<StatusButtonProps> = ({ status, onPress }) => {
    const getStatusColor = (status: Contest["status"]) => {
        switch (status) {
            case "won":
                return "#00FF88"
            case "lost":
                return "#FF4444"
            case "in-progress":
                return "#888888"
            default:
                return "#888888"
        }
    }

    return (
        <Box
            width={wp(20)}
            height={hp(20)}
            backgroundColor={getStatusColor(status)}
            borderRadius={100}
            as={TouchableOpacity}
            activeOpacity={0.8}
            style={styles.statusButton}
            onPress={onPress}>
            <Box style={[styles.statusIcon, { color: getStatusColor(status) }]}>
                {status === "lost" ? (<SVGIcon name="arrowRightWhite" />) : (<SVGIcon name="arrowRight" />)}
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    statusButton: {
        position: 'relative',
        padding: 8,
    },
    statusIcon: {
        position: 'absolute',
        top: 3,
        left: 8,
    },
})
