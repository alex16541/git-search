import { AppBar, Toolbar, Input, Button } from '@mui/material';
import { ChangeEventHandler } from 'react';

import cls from './Header.module.scss';

interface HeaderProps {
    onClick: () => void;
    onInputChange: ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
}

// Компонент шапки приложения
export const Header = (props: HeaderProps) => {
    const { onClick, onInputChange, disabled = false } = props;

    return (
        <AppBar className={cls.Header} position="relative">
            <Toolbar className={cls.toolbar}>
                <Input
                    placeholder="Введите поисковый запрос"
                    className={cls.input}
                    onChange={onInputChange}
                    disabled={disabled}
                />
                <Button variant="contained" className={cls.search} onClick={onClick} disabled={disabled}>
                    ИСКАТЬ
                </Button>
            </Toolbar>
        </AppBar>
    );
};
