import React, { useState } from "react";
import * as _ from "lodash";
import type { TableProps, Order, IMustHave } from "./types";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import EnhancedTableHeader from "./enchanced-header/enchanced-header";

function Index<T extends IMustHave>(props: TableProps<T>) {
  const { columns, data, defaultSortedColumn } = props;

  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof T>(defaultSortedColumn);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof T
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <>
      <Table stickyHeader>
        <EnhancedTableHeader
          columns={columns}
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
        />
        <>
          {data.length > 0 ? (
            <TableBody>
              {_.orderBy(data, [orderBy], [order]).map((item) => {
                return (
                  <TableRow key={item.Id}>
                    {columns.map((column) => (
                      <React.Fragment key={column.id as string}>
                        {column.id === "Checkbox" ? (
                          <TableCell component="td">
                            <>show cell checkbox</>
                          </TableCell>
                        ) : (
                          <TableCell align="left" variant="body" component="td">
                            {column.render(item)}
                          </TableCell>
                        )}
                      </React.Fragment>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          ) : null}
        </>
      </Table>

      {data.length === 0 ? <>no data</> : null}
    </>
  );
}

export default Index;
