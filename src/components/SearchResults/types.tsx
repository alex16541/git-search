// Это преобразованный Repository для DataGrid
export interface DataGridRow {
    id: string;
    name: string;
    description?: string;
    license?: string;
    language?: string;
    forkCount?: number;
    updateDate?: Date;
    stars?: number;
    tags?: string[];
}
