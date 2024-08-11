import { Box } from '@mui/material';
import { ReactNode } from 'react';

import cls from './AppLayout.module.scss';

interface AppLayoutProps {
    Header?: ReactNode;
    Content?: ReactNode;
}

// Шаблон для app компонента
export const AppLayout = (props: AppLayoutProps) => {
    const { Header = <header></header>, Content = <div></div> } = props;

    return (
        <Box className={cls.AppLayout}>
            <Box className={cls.header}>{Header}</Box>
            <Box className={cls.content}>{Content}</Box>
            <Box component="footer" className={cls.footer}></Box>
        </Box>
    );
};
