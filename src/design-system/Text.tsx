import { TextProps as RNTextProps } from 'react-native';
import styled from '@emotion/native';
import {
    color,
    ColorProps,
    compose,
    flexbox,
    FlexboxProps,
    fontSize,
    FontSizeProps,
    layout,
    LayoutProps,
    position,
    PositionProps,
    space,
    SpaceProps,
    typography,
    TypographyProps,
    textStyle,
    variant,
} from 'styled-system';
import theme, { Theme } from '../theme';

export interface TextProps
    extends ColorProps,
    FlexboxProps,
    FontSizeProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    RNTextProps,
    TypographyProps {
    variant?: keyof Theme['typography'];
}

const TextOptions = compose(
    variant({
        prop: 'variant',
        scale: 'typography',
    }),
    color,
    flexbox,
    fontSize,
    layout,
    position,
    space,
    textStyle,
    typography,
);

const Text = styled.Text<TextProps>(TextOptions);

Text.defaultProps = {
    color: theme.colors.BLACK,
    variant: 'body',
};

Text.displayName = 'Text';
export { Text };
export default Text;

