import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from './constants'

export const formApi = createApi({
    reducerPath: 'formApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    endpoints: (build) => ({
        sendForm: build.mutation({
            query: (formData) => ({
                url: `bootcamp/frontend`,
                method: 'POST',
                body: formData,
            }),
        }),
    }),
})

export const { useSendFormMutation } = formApi
