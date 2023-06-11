import { useAppDispatch } from '@shared/store'
import { useSendFormMutation } from '@shared/api'
import { openModal } from '@entities/modal/slice'
import { prepareData } from '@shared/utils/prepareData'
import { FormData } from '@shared/types/formData'

export const useSendForm = () => {
    const [sendForm] = useSendFormMutation()
    const dispatch = useAppDispatch()

    return async (data: FormData) => {
        const formattedData = prepareData(data)
        try {
            const { status } = await sendForm(formattedData).unwrap()
            dispatch(
                openModal({
                    isSuccess: status === 'success',
                    isVisible: true,
                }),
            )
        } catch (err) {
            dispatch(
                openModal({
                    isSuccess: false,
                    isVisible: true,
                }),
            )
        }
    }
}
