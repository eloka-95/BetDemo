import React from "react"
import { StyleSheet, Image } from "react-native"
import { TeamContest } from "../types"
import { ContestStakeInfo } from "./ContestStakeInfo"
import { StatusButton } from "./StatusButton"
import { Text, Box } from "../design-system"
import theme from "../theme"
import { fontSz, hp, wp } from "../utils"

interface TeamContestItemProps {
    contest: TeamContest
    onPress?: () => void
}

export const TeamContestItem: React.FC<TeamContestItemProps> = ({ contest, onPress }) => {
    return (
        <Box style={styles.contestItem}>
            <Box style={styles.leftSection}>
                <Text style={styles.contestType}>1 vs 1</Text>
                <Box style={styles.trophyIcon}>
                    <Image
                        source={theme.images.tr}
                        style={{ width: 20, height: 20 }}
                    />
                </Box>
            </Box>

            <Box style={styles.middleSection}>
                <Box style={styles.teamsContainer}>
                    <Box style={styles.teamRow}>
                        <Image
                            source={theme.images.Ar}
                            style={{ width: 15, height: 15 }}
                        />
                        <Text mb={1} style={styles.teamName}>{contest.team1.name}</Text>
                    </Box>
                    <Box style={styles.teamRow}>
                        <Image
                            source={theme.images.bac}
                            style={{ width: 15, height: 15 }}
                        />
                        <Text style={styles.teamName}>{contest.team2.name}</Text>
                    </Box>
                </Box>
            </Box>

            <ContestStakeInfo stake={contest.stake} date={contest.date} />
            <StatusButton status={contest.status} onPress={onPress} />
        </Box>
    )
}

const styles = StyleSheet.create({
    contestItem: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,        
        borderBottomWidth:1,
        borderColor: "#3a3a3a",
    },
    leftSection: {
        alignItems: "center",
        marginRight: 16,
    },
    contestType: {
        color: "#888888",
        fontSize: 12,
        marginBottom: 8,
    },
    trophyIcon: {
        width: wp(40),
        height: hp(40),
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    trophy: {
        fontSize: fontSz(20),
    },
    middleSection: {
        flex: 1,
        marginRight: 16,
    },
    teamsContainer: {
        gap: 4,
    },
    teamRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    teamLogo: {
        fontSize: fontSz(16),
    },
    teamName: {
        color: "#ffffff",
        fontSize: fontSz(14),
        fontWeight: "500",
    },
})
