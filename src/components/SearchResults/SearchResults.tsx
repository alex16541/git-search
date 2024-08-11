import { Box, Typography } from '@mui/material';
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
import classNames from 'classnames';

import { columns } from './columns';
import cls from './SearchResults.module.scss';
import { DataGridRow } from './types';

interface SearchResultsProps {
    className?: string;
    rows?: DataGridRow[];
    onRowClick?: GridEventListener<'rowClick'>;
}

// Компонент с результатами поиска в виде таблицы
export const SearchResluts = (props: SearchResultsProps) => {
    const { className, rows = [], onRowClick } = props;
    return (
        <Box component="article" className={classNames(cls.SearchResluts, {}, [className])}>
            <Typography variant="h3" className={cls.title}>
                Результаты поиска
            </Typography>
            <DataGrid
                className={cls.dataGrid}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[5, 10, 25, 50, 100]}
                disableRowSelectionOnClick
                onRowClick={onRowClick}
            />
        </Box>
    );
};
