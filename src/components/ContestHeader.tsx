import  React from "react"
import {TouchableOpacity, StyleSheet } from "react-native"
import { Box, Text } from "../design-system"
import theme from "../theme"
import { fontSz, hp, wp } from "../utils"
import { Image } from 'react-native';


interface ContestHeaderProps {
    title: string
    onCalendarPress?: () => void
}

export const ContestHeader: React.FC<ContestHeaderProps> = ({ title, onCalendarPress }) => {
    return (
        <Box style={styles.header}>
            <Text variant="header"
                color={theme.colors.WHITE}
                fontSize={fontSz(26)}>
                {title}
            </Text>

            <Box
                as={TouchableOpacity}
                activeOpacity={0.8}
                style={styles.calendarButton}
                onPress={onCalendarPress}>
                <Box style={styles.calendarIcon}>
                    {/* <SVGIcon name="callender" /> */}
                    <Image
                        source={theme.images.calImg}
                        style={{ width: 30, height: 30 }}
                    />
                </Box>
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 25,
    },
    calendarButton: {
        padding: 8,
    },
    calendarIcon: {
        width: wp(20),
        height: hp(20)
    },
})
