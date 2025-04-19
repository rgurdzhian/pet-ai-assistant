import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import { colors } from '@/contants/theme'
import { TypographyProps } from '@/types'
import { verticalScale } from '@/utils/styling'

const Typography = ({
    size,
    color = colors.text,
    fontWeight = '400',
    children,
    style,
    textProps = {}
}: TypographyProps) => {
    const textStyle: TextStyle = {
        fontSize: size ? verticalScale(size) : verticalScale(18),
        fontWeight,
        color,
    }
    return (
        <Text style={[textStyle, style]} {...textProps}>{children}</Text>
    )
}

export default Typography

const styles = StyleSheet.create({})