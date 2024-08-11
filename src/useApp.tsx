import { GridEventListener } from '@mui/x-data-grid';
import { useState, useCallback, ChangeEventHandler, useMemo } from 'react';

import { useSearchRepoByNameMutation } from './api';
import { DataGridRow } from './components/SearchResults';

// Хук с логикой копонента App
export const useApp = () => {
    const [selectedRepo, setSelectedRepo] = useState<DataGridRow | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchRepo, { data, isLoading, error }] = useSearchRepoByNameMutation();

    // Хэндлер для изменения значения в инпуте поиска
    const onInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
        setSearchQuery(e.target.value ?? '');
    }, []);

    // Хэндлер для кнопки поиска
    const onSearch = useCallback(() => {
        if (searchQuery.length) searchRepo(searchQuery);
    }, [searchQuery, searchRepo]);

    // Преобразование данных из API в формат для DataGrid
    const rows = useMemo(() => {
        if (!data) return [];

        return data?.map((node) => {
            return {
                id: node.id,
                name: node.nameWithOwner,
                language: node.primaryLanguage?.name,
                description: node.description,
                license: node.licenseInfo?.name,
                forkCount: node.forkCount,
                updateDate: new Date(node.updatedAt),
                stars: node.stargazers?.totalCount ?? 0,
                tags: node.repositoryTopics?.nodes.map((node) => node.topic.name),
            };
        });
    }, [data]);

    // Хэндлер клика на строку для DataGrid
    const onRowClick = useCallback<GridEventListener<'rowClick'>>((data) => {
        setSelectedRepo(data.row);
    }, []);

    return { onInputChange, onSearch, rows, onRowClick, data, isLoading, error, selectedRepo };
};
