import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typography from '@/components/Typography'
import { colors, spacingX, spacingY } from '@/contants/theme'
import { verticalScale } from '@/utils/styling'
import BackButton from '@/components/BackButton'
import Input from '@/components/Input'
import * as Icons from 'phosphor-react-native'
import Button from '@/components/Button'
import { useRouter } from 'expo-router'
import { useAuth } from '@/contexts/authContext'

const Register = () => {
    const router = useRouter();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const fullNameRef = useRef('');
    const [isLoading, setIsLoading] = useState(false);
    const { register: registerUser } = useAuth();

    const handleSubmit = async () => {
        if (!emailRef.current || !passwordRef.current || !fullNameRef.current) {
            Alert.alert('Sign up', 'Please fill all the fields');
            return;
        }
        setIsLoading(true);
        const res = await registerUser(emailRef.current, passwordRef.current, fullNameRef.current);

        setIsLoading(false);

        if (!res.success) {
            Alert.alert('Sign Up', res.msg)
        }
    }

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <BackButton iconSize={28} />
                <View style={{ gap: 5, marginTop: spacingY._20 }}>
                    <Typography size={30} fontWeight={'800'}>Let's,</Typography>
                    <Typography size={30} fontWeight={'800'}>Get Started</Typography>
                </View>
                <View style={styles.form}>
                    <Typography size={16} color={colors.textLighter}>Create an account to get pet assistance</Typography>
                    <Input placeholder='Enter your Full Name' icon={<Icons.User weight='fill' color={colors.neutral300} size={verticalScale(26)} />} onChangeText={value => fullNameRef.current = value} />
                    <Input placeholder='Enter your email' icon={<Icons.At weight='fill' color={colors.neutral300} size={verticalScale(26)} />} onChangeText={value => emailRef.current = value} />
                    <Input secureTextEntry placeholder='Enter your password' icon={<Icons.Lock weight='fill' color={colors.neutral300} size={verticalScale(26)} />} onChangeText={value => passwordRef.current = value} />
                    <Button loading={isLoading} onPress={handleSubmit}>
                        <Typography fontWeight={'700'} color={colors.black} size={21}>Sign Up</Typography>
                    </Button>
                </View>
                <View style={styles.footer}>
                    <Typography size={15}>Aleady have an account?</Typography>
                    <Pressable onPress={() => router.navigate('/(auth)/login')}>
                        <Typography size={15} fontWeight={'700'} color={colors.primary}>Login</Typography>
                    </Pressable>
                </View>
            </View>

        </ScreenWrapper>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingX._20
    },
    welcomeText: {
        fontSize: verticalScale(20),
        fontWeight: 'bold',
        color: colors.text
    },
    form: {
        gap: spacingY._20
    },
    forgotPassword: {
        textAlign: 'right',
        fontWeight: '500',
        color: colors.text
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    footerText: {
        textAlign: 'center',
        color: colors.text,
        fontSize: verticalScale(15)
    }
})