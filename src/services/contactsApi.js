import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const CONTACTS_API_BASE_URL = 'https://62f4ce3a535c0c50e762a3ba.mockapi.io/api/v1/';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: CONTACTS_API_BASE_URL }),
    endpoints: (builder) => ({
      getAllContacts: builder.query({
        query: () => '/contacts',
        providesTags: ['Contacts']
      }),
      createContact: builder.mutation({
        query: newContact => ({
          url: '/contacts',
          method: 'POST',
          body: newContact
        }),
        invalidatesTags: ['Contacts']
      }),
      deleteContact: builder.mutation({
        query: contactId => ({
          url: `contacts/${contactId}`,
          method: 'DELETE'
        }),
        invalidatesTags: ['Contacts']
      }),
      chechContact: builder.query({
        query: (contactName) => `/contacts?name=${contactName}`
      })
    }),
  })

export const {
  useGetAllContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useChechContactQuery
} = contactsApi;