import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://645b685c99b618d5f31a5bdd.mockapi.io/',
  }),
  tagTypes: ['Todo'],
  endpoints: builder => ({
    fetchTodos: builder.query({
      query: () => '/todos',
      providesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation({
      query: todoId => ({
        url: `/todos/${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
    createTodo: builder.mutation({
      query: todoContent => ({
        url: '/todos',
        method: 'POST',
        body: {
          content: todoContent,
        },
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const {
  useFetchTodosQuery,
  useDeleteTodoMutation,
  useCreateTodoMutation,
} = todoApi;