import { AppDispatch, useAppDispatch } from '@shared/store'
import { useSendFormMutation } from '../../shared/api'
import { openModal } from '@entities/modal/slice'
import { prepareData } from '@features/prepare-data/prepareData'
import { FormData } from '@entities/form-data/type'

export const useSendForm = () => {
    const [sendForm] = useSendFormMutation()
    const dispatch = useAppDispatch()

    return async (data: FormData) => {
        const formattedData = prepareData(data)
        try {
            await sendForm(formattedData).unwrap()
            dispatch(
                openModal({
                    isSuccess: true,
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
