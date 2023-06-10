import { StepIcon, StepIndicator, StepStatus } from '@chakra-ui/react'
import {
    StepActive,
    StepIncomplete,
    StepSeparatopTheme,
    StepStyled,
    StepperTheme,
    StepperWrapper,
    TitleWrapper,
} from './styled'
import { useLocation, useNavigate } from 'react-router-dom'
import { RoutePaths, RoutePathsIndex } from '@shared/constants'
import { useFormContext } from 'react-hook-form'

export const FormStepper = () => {
    const { pathname } = useLocation()
    const methods = useFormContext()
    const navigate = useNavigate()

    const onNextStep = async (index: number) => {
        const isValid = await methods.trigger()
        if (isValid) navigate(RoutePathsIndex[index])
    }

    return (
        <StepperWrapper>
            <StepperTheme
                size="sm"
                index={RoutePathsIndex.indexOf(pathname as RoutePaths)}
                gap="0">
                {[...new Array(3)].map((_, index) => (
                    <StepStyled
                        key={index}
                        gap="0"
                        onClick={() => onNextStep(index)}>
                        <StepIndicator border="none" width="16px" height="16px">
                            <StepStatus
                                complete={
                                    <StepIcon width="12px" height="12px" />
                                }
                                active={<StepActive />}
                                incomplete={<StepIncomplete />}
                            />
                        </StepIndicator>
                        <StepSeparatopTheme _horizontal={{ ml: '0' }} />
                    </StepStyled>
                ))}
            </StepperTheme>
            <TitleWrapper>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </TitleWrapper>
        </StepperWrapper>
    )
}
