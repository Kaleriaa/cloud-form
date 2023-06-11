import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from './constants'
import { prepareData } from '@shared/utils/prepareData'

export const formApi = createApi({
    reducerPath: 'formApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    endpoints: (build) => ({
        sendForm: build.mutation<
            { status: string },
            ReturnType<typeof prepareData>
        >({
            query: (formData) => ({
                url: `bootcamp/frontend`,
                method: 'POST',
                body: formData,
            }),
        }),
    }),
})

export const { useSendFormMutation } = formApi
