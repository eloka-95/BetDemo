import type React from "react"
import {StyleSheet } from "react-native"
import { Text, Box } from "../design-system"
export const ContestLegend: React.FC = () => {
    return (
        <Box style={styles.legend}>
            <Box style={styles.legendItem}>
                <Box style={[styles.legendDot, { backgroundColor: "#888888" }]} />
                <Text style={styles.legendText}>In Progress</Text>
            </Box>
            <Box style={styles.legendItem}>
                <Box style={[styles.legendDot, { backgroundColor: "#00FF88" }]} />
                <Text style={styles.legendText}>Won</Text>
            </Box>
            <Box style={styles.legendItem}>
                <Box style={[styles.legendDot, { backgroundColor: "#FF4444" }]} />
                <Text style={styles.legendText}>Lost</Text>
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    legend: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 50,
        gap: 24,
    },
    legendItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    legendDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    legendText: {
        color: "#ffffff",
        fontSize: 12,
    },
})
