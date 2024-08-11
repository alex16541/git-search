import { Box, Grid } from '@mui/material';

import cls from './App.module.scss';
import { Header } from './components/Header';
import { RepoDetails } from './components/RepoDetails';
import { SearchResluts } from './components/SearchResults';
import { AppLayout } from './layouts/AppLayout';
import { useApp } from './useApp';
import { GITHUB_TOKEN } from './consts';

// Корневой компонент приложения
function App() {
    const { onInputChange, onSearch, rows, onRowClick, data, isLoading, error, selectedRepo } = useApp();

    return (
        <AppLayout
            Header={<Header onClick={onSearch} onInputChange={onInputChange} disabled={isLoading || !GITHUB_TOKEN} />}
            Content={
                <Box className={cls.Page}>
                    {!error && data ? (
                        <Grid container className={cls.content} columnSpacing={2}>
                            <Grid component="main" item xs={8}>
                                <SearchResluts
                                    className={cls.searchResults}
                                    rows={rows}
                                    onRowClick={onRowClick}
                                />
                            </Grid>
                            <Grid component="aside" item xs={4}>
                                <Box className={cls.details}>
                                    {selectedRepo ? (
                                        <RepoDetails className={cls.info} repo={selectedRepo} />
                                    ) : (
                                        <Box component="p" className={cls.hint}>
                                            Выберите репозиторий
                                        </Box>
                                    )}
                                </Box>
                            </Grid>
                        </Grid>
                    ) : (
                        <Box className={cls.wellcome}>
                            {!isLoading && !error && GITHUB_TOKEN && 'Добро пожаловать'}
                            {error && 'Ошибка загрузки репозиториев'}
                            {isLoading && 'Поиск репозиториев...'}
                            {!GITHUB_TOKEN && 'Отсутствует токен Github. Пожалуйста, укажите его в consts.ts'}
                        </Box>
                    )}
                </Box>
            }
        />
    );
}

export default App;
