import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Repository } from './types';
import { GITHUB_TOKEN } from './consts';

interface SearchRepoByNameResult {
    data: {
        search: {
            nodes: Repository[];
        };
    };
}

// Запрос поиска репозиториев в GitHub Graphql API
const getSearchRepoByNameQuery = (name: string) => {
    return {
        query: `{ 
            search(query: "${name} in:name", type: REPOSITORY, first: 100) 
            { 
                nodes { 
                    ... on Repository {
                        id 
                        nameWithOwner 
                        description 
                        forkCount 
                        updatedAt 
                        licenseInfo { name } 
                        primaryLanguage { name } 
                        stargazers { totalCount } 
                        repositoryTopics(first: 3) {
                            nodes { 
                                topic { name } 
                            } 
                        } 
                    } 
                } 
            }
        }`,
    };
};

// API для поиска репозиториев в GitHub
export const searchRepoApi = createApi({
    reducerPath: 'searchRepoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/graphql' }),
    endpoints: (builder) => ({
        searchRepoByName: builder.mutation<Repository[], string>({
            query(searchQuery) {
                return {
                    method: 'POST',
                    body: JSON.stringify(getSearchRepoByNameQuery(searchQuery)),
                    url: '',
                    headers: {
                        Authorization:
                            'bearer ' + GITHUB_TOKEN,
                    },
                };
            },
            transformResponse(responce: SearchRepoByNameResult) {
                return responce.data.search.nodes;
            },
        }),
    }),
});

export const { useSearchRepoByNameMutation } = searchRepoApi;
