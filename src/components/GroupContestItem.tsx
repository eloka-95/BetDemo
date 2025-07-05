import type React from "react"
import { Image, StyleSheet } from "react-native"
import { GroupContest } from "../types"
import { ParticipantAvatars } from "./ParticipantAvatars"
import { ContestStakeInfo } from "./ContestStakeInfo"
import { Box, Text } from "../design-system"
import { StatusButton } from "./StatusButton"
import { fontSz, hp, wp } from "../utils"
import theme from "../theme"


interface GroupContestItemProps {
    contest: GroupContest
    onPress?: () => void
}

export const GroupContestItem: React.FC<GroupContestItemProps> = ({ contest, onPress }) => {
    return (
        <Box style={styles.contestItem}>
            <Box style={styles.leftSection}>
                <Text style={styles.contestType}>{contest.type.charAt(0).toUpperCase() + contest.type.slice(1)}</Text>
                <Box style={styles.trophyIcon}>
                    <Image
                        source={theme.images.tr}
                        style={{ width: 20, height: 20 }}
                    />
                </Box>
            </Box>

            <Box style={styles.middleSection}>
                <Text style={styles.participantCount}>{contest.participantCount} Participants</Text>
                <ParticipantAvatars participants={contest.participants} />
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
        padding: 16,
        marginBottom: 12,
        borderBottomWidth: 1,
        borderColor: "#3a3a3a",
    },
    leftSection: {
        alignItems: "center",
        marginRight: 16,
    },
    contestType: {
        color: "#888888",
        fontSize: fontSz(12),
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
    participantCount: {
        color: "#888888",
        fontSize: fontSz(12),
        marginBottom: 8,
    },
})
