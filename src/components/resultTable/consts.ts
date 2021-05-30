import type { Sorting } from "../../types";
import type { ColumnConfigItem } from "./types";

export const ITEMS_PER_PAGE = 9;

export const INITIAL_SORTING: Sorting = {
  field: "login",
  order: "ASC",
}

export const COLUMNS_CONFIG: ColumnConfigItem[] = [
  {
    field: "avatar_url",
    label: "Avatar URL",
  },
  {
    field: "login",
    label: "Login",
  },
  {
    field: "type",
    label: "Type",
  },
];
