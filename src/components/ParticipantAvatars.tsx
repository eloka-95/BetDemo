import type React from "react"
import { Image, StyleSheet } from "react-native"
import { Text, Box } from "../design-system"
import { fontSz, hp, wp } from "../utils"
import theme from "../theme"

interface ParticipantAvatarsProps {
    participants: string[] // You expect 4 strings here to match h1-h4
    maxVisible?: number
}

export const ParticipantAvatars: React.FC<ParticipantAvatarsProps> = ({ participants, maxVisible = 4 }) => {
    const avatarImages = [theme.images.h1, theme.images.h2, theme.images.h3, theme.images.h4]

    return (
        <Box style={styles.participantsContainer}>
            {participants.slice(0, maxVisible).map((participant, index) => (
                <Box key={index} style={[styles.participantAvatar, { zIndex: maxVisible - index }]}>
                    <Image
                        source={avatarImages[index]}
                        style={{ width: 27, height: 27, borderRadius: 100, }}
                        resizeMode='cover'
                    />
                </Box>
            ))}
        </Box>
    )
}

const styles = StyleSheet.create({
    participantsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    participantAvatar: {
        width: wp(27),
        height: hp(27),
        borderRadius: 16,
        backgroundColor: "#4a4a4a",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: -8,
        borderWidth: 2,
        borderColor: "#2a2a2a",
    },
    participantEmoji: {
        fontSize: fontSz(14),
        marginTop: 4,
    },
})
