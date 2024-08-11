import StarIcon from '@mui/icons-material/Star';
import { Box, Chip, Stack } from '@mui/material';
import classNames from 'classnames';

import { DataGridRow } from '../SearchResults';

import cls from './RepoDetails.module.scss';

interface RepoDetailsProps {
    className?: string;
    repo: DataGridRow;
}

// Компонент с детальной информацией о репозитории
export const RepoDetails = (props: RepoDetailsProps) => {
    const { className, repo } = props;

    return (
        <Box className={classNames(cls.RepoDetails, {}, [className])}>
            <Box component="h4" className={cls.name}>
                {repo.name}
            </Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                {repo.language && <Chip className={cls.language} label={repo.language} color="primary" />}
                <Stack className={cls.stars} direction="row" alignItems="center" spacing={1}>
                    <StarIcon />
                    {repo.stars ?? 0}
                </Stack>
            </Stack>
            <Box className={cls.tags} display="flex" gap="8px">
                {repo.tags?.map((tag, i) => <Chip key={i} size="small" className={cls.tag} label={tag} />)}
            </Box>
            <Box component="p" className={cls.description}>
                {repo.description}
            </Box>
            <Box component="p" className={cls.license}>
                {repo.license}
            </Box>
        </Box>
    );
};
