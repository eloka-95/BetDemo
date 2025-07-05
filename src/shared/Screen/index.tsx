import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box } from '../../design-system';
import { hp, isAndroid } from '../../utils';

interface Props {
    children: React.ReactNode | React.ReactNode[];
    backgroundColor?: string;
    removeSafeArea?: boolean; // ✅ Fixed typo: was "removeSafeaArea"
    opacity?: number;
}

export const Screen = ({
    children,
    backgroundColor = '#1a1a1a', // ✅ Default to dark background
    removeSafeArea, // ✅ Fixed typo
    opacity,
}: Props) => {
    const { top } = useSafeAreaInsets();

    // ✅ Determine if background is dark to set appropriate status bar style
    const isDarkBackground = backgroundColor === '#1a1a1a' || backgroundColor === 'black' || backgroundColor?.startsWith('#1') || backgroundColor?.startsWith('#2') || backgroundColor?.startsWith('#3');

    return (
        <>
            {removeSafeArea ? (
                <Box
                    backgroundColor={backgroundColor}
                    flex={1}
                    opacity={opacity || 1}
                    pt={isAndroid ? top + hp(10) : top}
                >
                    <StatusBar
                        backgroundColor={backgroundColor}
                        translucent={false}
                        barStyle={isDarkBackground ? "light-content" : "dark-content"} // ✅ Dynamic bar style
                    />
                    {children}
                </Box>
            ) : (
                <Box
                    backgroundColor={backgroundColor}
                    flex={1}
                    as={SafeAreaView}
                >
                    <StatusBar
                        backgroundColor={backgroundColor} // ✅ Use dynamic background color
                        translucent={false} // ✅ Set to false for consistent behavior
                        barStyle={isDarkBackground ? "light-content" : "dark-content"} // ✅ Dynamic bar style
                    />
                    {children}
                </Box>
            )}
        </>
    );
};