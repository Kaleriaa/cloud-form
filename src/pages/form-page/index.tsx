import { FormData } from '@entities/form-data/type'
import { useSendForm } from '@features/send-form/useSendForm'
import { yupResolver } from '@hookform/resolvers/yup'
import { FieldsId, RoutePaths } from '@shared/constants'
import { ButtonUI } from '@shared/ui'
import { FormStepper } from '@widgets/stepper'
import { FormProvider, useForm } from 'react-hook-form'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { defaultAdvantages, schemasYup } from './constants'
import { useChangeUrl } from './hooks/useChangeUrl'
import {
    BackButton,
    BtnStyleConfig,
    ButtonWrapper,
    Form,
    Layout,
    SubmitButton,
} from './styled'

export const FormPage = () => {
    const { pathname } = useLocation()
    const { next, back } = useChangeUrl()
    const navigate = useNavigate()
    const onSubmit = useSendForm()

    const methods = useForm<FormData>({
        resolver: yupResolver(schemasYup[pathname as RoutePaths]),
        defaultValues: {
            advantages: defaultAdvantages,
        },
    })

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
