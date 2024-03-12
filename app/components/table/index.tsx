"use client";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

export interface IBlockCraftTable {
  columns: any[];
  data: any[];
}

export function BlockCraftTable(props: IBlockCraftTable) {
  const { columns, data } = props;
  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: true,
    enableSorting: false,
    enableFilters: false,
    enableHiding: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableStickyHeader: false,
    enableTopToolbar: false,
    mrtTheme: (theme) => ({
      baseBackgroundColor: theme.palette.background.default,
    }),
    muiTableBodyRowProps: { hover: false },
    // renderCaption: ({ table }) =>
    //   `Toltal ${table.getRowModel().rows.length} rows.`,
  });

  return <MaterialReactTable table={table} />;
}
