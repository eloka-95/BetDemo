import type React from "react"
import { StyleSheet } from "react-native"
import { Text, Box } from "../design-system"
import { fontSz, wp } from "../utils"

interface ContestStakeInfoProps {
    stake: number
    date: string
}

export const ContestStakeInfo: React.FC<ContestStakeInfoProps> = ({ stake, date }) => {
    return (
        <Box style={styles.rightSection}>
            <Box>
                <Text style={styles.stakeLabel}>Stake</Text>
                <Text style={styles.stakeAmount}>${stake}</Text>
            </Box>
            <Box>
                <Text style={styles.dateLabel}>Date</Text>
                <Text style={styles.dateValue}>{date}</Text>
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    rightSection: {
        width: wp(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 16,
    },

    stakeLabel: {
        color: "#888888",
        fontSize: fontSz(12),
        marginBottom: 2,
    },
    stakeAmount: {
        color: "#ffffff",
        fontSize: fontSz(16),
        fontWeight: "bold",
    },

    dateLabel: {
        color: "#888888",
        fontSize: fontSz(12),
        marginBottom: 2,
    },
    dateValue: {
        color: "#ffffff",
        fontSize: fontSz(12),
    },
})
