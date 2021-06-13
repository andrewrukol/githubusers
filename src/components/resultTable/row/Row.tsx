import React from 'react';
import type { SearchResultItem } from '../../../types';
import { Image } from '../../image/Image';

import styles from './Row.module.css';

export type RowProps = SearchResultItem;

export const Row: React.FC<RowProps> = ({ avatar_url, login, type }) => {
  return (
    <tr>
      <td>
        <div className={styles.imageContainer}>
          <Image key={avatar_url} src={avatar_url} />
        </div>
      </td>
      <td>{login}</td>
      <td>{type}</td>
    </tr>
  );
}
