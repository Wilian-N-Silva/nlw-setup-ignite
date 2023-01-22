import { TouchableOpacity, TouchableOpacityProps, View, Text } from "react-native";
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";


interface Props extends TouchableOpacityProps {
    title: string
    checked?: boolean
}

export function Checkbox({ title, checked = false, ...rest }: Props) {
    return (
        <TouchableOpacity
            className="flex-row mb-2 items-center"
            activeOpacity={0.7}
            {...rest}
        >
            {
                checked
                    ?
                    <Animated.View
                        className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center"
                        entering={ZoomIn}
                        exiting={ZoomOut}
                    >
                        <Feather
                            name="check"
                            color={colors.white}
                            size={20}
                        />
                    </Animated.View>
                    :
                    <View className="h-8 w-8 bg-zinc-900 border-2 border-zinc-800 rounded-lg" />
            }

            <Text className="text-white text-base text-semibold ml-3">
                {title}
            </Text>
        </TouchableOpacity>
    )
}