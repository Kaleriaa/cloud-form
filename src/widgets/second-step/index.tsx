import { AddAdvantages } from '@features/add-advantages'
import { CheckBoxGroup, RadioGroup } from './components'
import { FormWrapperSteps } from '@shared/ui'

export const SecondStep = () => {
    return (
        <FormWrapperSteps>
            <AddAdvantages label="Advantages" />
            <CheckBoxGroup />
            <RadioGroup />
        </FormWrapperSteps>
    )
}
