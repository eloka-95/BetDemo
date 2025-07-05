import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Contest } from "../types"

interface GroupContestProps {
    contest: Contest & { type: "daily" | "weekly" }
    getStatusColor: (status: Contest["status"]) => string
    getStatusIcon: (status: Contest["status"]) => string
}

export const GroupContest: React.FC<GroupContestProps> = ({ contest, getStatusColor, getStatusIcon }) => (
    <View style={styles.contestItem}>
        <View style={styles.leftSection}>
            <Text style={styles.contestType}>{contest.type.charAt(0).toUpperCase() + contest.type.slice(1)}</Text>
            <View style={styles.trophyIcon}>
                <Text style={styles.trophy}>🏆</Text>
            </View>
        </View>

        <View style={styles.middleSection}>
            <Text style={styles.participantCount}>{contest.participantCount} Participants</Text>
            <View style={styles.participantsContainer}>
                {contest.participants.slice(0, 4).map((participant, index) => (
                    <View key={index} style={[styles.participantAvatar, { zIndex: 4 - index }]}>
                        <Text style={styles.participantEmoji}>{participant}</Text>
                    </View>
                ))}
            </View>
        </View>

        <View style={styles.rightSection}>
            <View style={styles.stakeSection}>
                <Text style={styles.stakeLabel}>Stake</Text>
                <Text style={styles.stakeAmount}>${contest.stake}</Text>
            </View>
            <View style={styles.dateSection}>
                <Text style={styles.dateLabel}>Date</Text>
                <Text style={styles.dateValue}>{contest.date}</Text>
            </View>
        </View>

        <TouchableOpacity style={styles.statusButton}>
            <Text style={[styles.statusIcon, { color: getStatusColor(contest.status) }]}>
                {getStatusIcon(contest.status)}
            </Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    contestItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2a2a2a",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
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
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#3a3a3a",
        justifyContent: "center",
        alignItems: "center",
    },
    trophy: {
        fontSize: 20,
    },
    middleSection: {
        flex: 1,
        marginRight: 16,
    },
    participantCount: {
        color: "#888888",
        fontSize: 12,
        marginBottom: 8,
    },
    participantsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    participantAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#4a4a4a",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: -8,
        borderWidth: 2,
        borderColor: "#2a2a2a",
    },
    participantEmoji: {
        fontSize: 14,
    },
    rightSection: {
        alignItems: "flex-end",
        marginRight: 16,
    },
    stakeSection: {
        alignItems: "flex-end",
        marginBottom: 8,
    },
    stakeLabel: {
        color: "#888888",
        fontSize: 12,
        marginBottom: 2,
    },
    stakeAmount: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
    dateSection: {
        alignItems: "flex-end",
    },
    dateLabel: {
        color: "#888888",
        fontSize: 12,
        marginBottom: 2,
    },
    dateValue: {
        color: "#ffffff",
        fontSize: 12,
    },
    statusButton: {
        padding: 8,
    },
    statusIcon: {
        fontSize: 16,
        fontWeight: "bold",
    },
})