export interface SearchResultItem {
    avatar_url: string;
    login: string;
    type: string;
}

export interface SearchResult {
    incomplete_results: boolean;
    items: SearchResultItem[];
    total_count: number;
}

export type SortOrder = "ASC" | "DESC";

export interface Sorting {
  field: string;
  order: SortOrder;
}

export type SortDirection = "ASC" | "DESC" | undefined;
