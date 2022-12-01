import type React from "react";

export interface TableColumnType<T> {
  id: keyof T | "Action" | "Checkbox";
  label: React.ReactNode;
  canBeSorted: boolean;
  align?: "left" | "right";
  minWidth?: string | number;
  render: (data: T) => React.ReactNode;
}

export interface IMustHave {
  Id: string;
}

export type Order = "asc" | "desc";

export interface EnhancedHeaderProps<T extends IMustHave> {
  columns: TableColumnType<T>[];
  order: Order;
  orderBy: keyof T;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
}

export interface TableProps<T extends IMustHave> {
  columns: TableColumnType<T>[];
  data: T[];
  defaultSortedColumn: keyof T;
}
