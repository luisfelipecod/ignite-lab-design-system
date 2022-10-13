import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "./Text";
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm">Lembrar de mim por 30 dias</Text>
                </div>
            )
        }
    ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps>= {}