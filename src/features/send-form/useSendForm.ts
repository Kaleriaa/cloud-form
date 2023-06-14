import { useAppDispatch } from '@shared/store'
import { useSendFormMutation } from '@shared/api'
import { openModal } from '@entities/modal/slice'
import { prepareData } from '@shared/utils/prepareData'
import { FormData } from '@shared/types/formData'
import { isFetchBaseQueryError } from './helpers'

export const useSendForm = () => {
    const [sendForm, { isLoading }] = useSendFormMutation()
    const dispatch = useAppDispatch()

    return {
        isLoading,
        mutate: async (data: FormData) => {
            const formattedData = prepareData(data)
            try {
                const { status, message } = await sendForm(
                    formattedData,
                ).unwrap()

                dispatch(
                    openModal({
                        isSuccess: status === 'success',
                        isVisible: true,
                        message,
                    }),
                )
            } catch (err) {
                let message = 'Ошибка'
                if (isFetchBaseQueryError(err) && err.data) {
                    const { message: statusMessage } = err.data as {
                        message: string
                    }
                    message = statusMessage
                }

                dispatch(
                    openModal({
                        isSuccess: false,
                        isVisible: true,
                        message,
                    }),
                )
            }
        },
    }
}
