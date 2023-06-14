import { FormData } from '@shared/types/formData'
import { useSendForm } from '@features/send-form/useSendForm'
import { yupResolver } from '@hookform/resolvers/yup'
import { FieldsId, FieldsName, RoutePaths } from '@shared/constants'
import { ButtonUI } from '@shared/ui'
import { FormStepper } from '@widgets/stepper'
import { FormProvider, useForm } from 'react-hook-form'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { defaultAdvantages, SCHEMA_YUP } from './constants'
import { useChangeUrl } from './hooks/useChangeUrl'
import {
    BackButton,
    BtnStyleConfig,
    ButtonWrapper,
    Form,
    Layout,
    SubmitButton,
} from './styled'
import { useEffect } from 'react'

export const FormPage = () => {
    const { pathname } = useLocation()
    const { next, back } = useChangeUrl()
    const navigate = useNavigate()
    const { mutate: onSubmit, isLoading } = useSendForm()

    const methods = useForm<FormData>({
        resolver: yupResolver(SCHEMA_YUP[pathname as RoutePaths]),
        defaultValues: {
            [FieldsName.ADVANTAGES]: defaultAdvantages,
        },
    })

    // Если на предыдущих шагах не заполнены поля, значит нужно зайти на форму заново (при перезагрузке страницы)
    useEffect(() => {
        if (!methods.getValues(FieldsName.NICKNAME)) navigate(RoutePaths.STEP1)
    }, [methods, navigate])

    const handleNext = async () => {
        const isValid = await methods.trigger()
        if (isValid) navigate(next)
    }

    return (
        <FormProvider {...methods}>
            <Layout onSubmit={methods.handleSubmit(onSubmit)}>
                <FormStepper />
                <Form>
                    <Outlet />
                </Form>
                <ButtonWrapper>
                    <BackButton
                        label="Назад"
                        onClick={() => navigate(back)}
                        id={FieldsId.BACK}
                    />

                    {pathname === RoutePaths.STEP3 ? (
                        <SubmitButton
                            style={BtnStyleConfig}
                            type="submit"
                            isLoading={isLoading}
                            id={FieldsId.SEND}>
                            Отправить
                        </SubmitButton>
                    ) : (
                        <ButtonUI
                            onClick={handleNext}
                            label="Далее"
                            id={FieldsId.NEXT}
                        />
                    )}
                </ButtonWrapper>
            </Layout>
        </FormProvider>
    )
}
