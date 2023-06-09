import { yupResolver } from '@hookform/resolvers/yup'
import { FieldsId, RoutePaths } from '@shared/constants'
import { ButtonUI } from '@shared/ui'
import { FormStepper } from '@widgets/stepper'
import { FormProvider, useForm } from 'react-hook-form'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { defaultAdvantages, schemasYup } from './constants'
import {
    BackButton,
    BtnStyleConfig,
    ButtonWrapper,
    Form,
    Layout,
    SubmitButton,
} from './styled'
import { useChangeUrl } from './hooks/useChangeUrl'

export const FormPage = () => {
    const { pathname } = useLocation()
    const { next, back } = useChangeUrl()
    const navigate = useNavigate()

    const resolver = schemasYup.get(pathname as RoutePaths)

    const methods = useForm({
        resolver: resolver && yupResolver(resolver),
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
            <Layout
                onSubmit={methods.handleSubmit((data) => console.log(data))}>
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
