import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import configFile from "../config.json";
import { IAction } from "../models/IAction";

export const actionAPI = createApi({
    reducerPath: "actionAPI",
    baseQuery: fetchBaseQuery({ baseUrl: configFile.apiEndPoint }),
    tagTypes: ["Action"],
    endpoints: (build) => ({
        fetchAllAction: build.query<IAction[], number>({
            query: (limit: number = 5) => ({
                url: `/action`,
                params: {
                    _limit: limit,
                },
            }),
            providesTags: (result) => ["Action"],
        }),
        createAction: build.mutation<IAction, IAction>({
            query: (post) => ({
                url: `/action`,
                method: "POST",
                body: post,
            }),
            invalidatesTags: ["Action"],
        }),
    }),
});
