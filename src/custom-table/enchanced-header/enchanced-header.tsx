import { TableHead, TableRow, TableCell, TableSortLabel } from "@mui/material";
import React from "react";
import type { EnhancedHeaderProps, IMustHave } from "../types";

function EnhancedTableHeader<T extends IMustHave>(
  props: EnhancedHeaderProps<T>
) {
  const { columns, orderBy, order, onRequestSort } = props;

  const createSortHandler =
    (property: keyof T) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  if (columns.length > 0) {
    return (
      <TableHead>
        <TableRow>
          {columns.map((column, index) => (
            <React.Fragment key={index}>
              <TableCell
                align={column?.align || "left"}
                sortDirection={orderBy === column.id ? order : false}
                style={{
                  minWidth: column.minWidth,
                }}
                component="th"
              >
                {column.id === "Checkbox" ? (
                  <>show all checkbox</>
                ) : (
                  <TableSortLabel
                    active={orderBy === column.id && column.canBeSorted}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={
                      column.canBeSorted
                        ? createSortHandler(column.id as keyof T)
                        : undefined
                    }
                    hideSortIcon={!column.canBeSorted}
                    style={{
                      cursor: `${!column.canBeSorted && "auto"}`,
                    }}
                  >
                    {column.label}
                  </TableSortLabel>
                )}
              </TableCell>
            </React.Fragment>
          ))}
        </TableRow>
      </TableHead>
    );
  } else {
    return null;
  }
}

export default EnhancedTableHeader;
