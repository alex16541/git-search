import { GridColDef } from '@mui/x-data-grid';

import { DataGridRow } from './types';

// Описание колонок в DataGrid
export const columns: GridColDef<DataGridRow>[] = [
    {
        field: 'name',
        headerName: 'Название',
        width: 200,
        align: 'left',
        sortable: false,
    },
    {
        field: 'language',
        headerName: 'Язык',
        width: 120,
        align: 'left',
        sortable: false,
    },
    {
        field: 'forkCount',
        headerName: 'Число форков',
        type: 'number',
        width: 100,
        align: 'left',
    },
    {
        field: 'stars',
        headerName: 'Число звёзд',
        type: 'number',
        width: 120,
        align: 'left',
    },
    {
        field: 'updateDate',
        headerName: 'Дата обновления',
        width: 140,
        align: 'left',
        valueFormatter: (date: Date) => date.toLocaleDateString(),
        sortComparator: (v1: Date, v2: Date) => v1.valueOf() - v2.valueOf(),
    },
];
