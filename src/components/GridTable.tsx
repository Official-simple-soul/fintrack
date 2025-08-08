'use client';

import { colors } from '@/theme/theme';
import { IconCaretDownFilled, IconCaretUpFilled } from '@tabler/icons-react';
import type { ReactNode } from 'react';
import { useState, useMemo } from 'react';

export type Column<T> = {
  header: string | ReactNode;
  accessor?: keyof T;
  colSpan: number;
  render?: (row: T) => ReactNode;
  sortable?: boolean;
};

type GridTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  className?: string;
};

export function GridTable<T extends Record<string, unknown>>({
  columns,
  data,
  className = '',
}: GridTableProps<T>) {
  const [sortBy, setSortBy] = useState<keyof T | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const handleSort = (accessor: keyof T) => {
    if (sortBy === accessor) {
      setSortDir((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(accessor);
      setSortDir('asc');
    }
  };

  const sortedData = useMemo(() => {
    if (!sortBy) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];

      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDir === 'asc' ? aVal - bVal : bVal - aVal;
      }

      return sortDir === 'asc'
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  }, [data, sortBy, sortDir]);

  return (
    <div className={`overflow-x-auto w-full`}>
      <div className={`min-w-[640px] grid ${className}`}>
        {/* Header */}
        <div className="grid grid-cols-10 gap-2 w-full">
          {columns.map((col, idx) => {
            const isSorted = sortBy === col.accessor;
            const canSort = col.sortable && col.accessor;

            return (
              <div
                key={idx}
                style={{
                  gridColumn: `span ${col.colSpan} / span ${col.colSpan}`,
                }}
                className="border-b pb-2 border-info-light font-medium text-[13px] text-info flex items-center gap-2 cursor-pointer select-none"
                onClick={() => canSort && handleSort(col.accessor!)}
              >
                {col.header}
                {canSort &&
                  (isSorted ? (
                    sortDir === 'asc' ? (
                      <IconCaretUpFilled size={16} color={colors.info} />
                    ) : (
                      <IconCaretDownFilled size={16} color={colors.info} />
                    )
                  ) : (
                    <IconCaretDownFilled size={16} color={colors.info} />
                  ))}
              </div>
            );
          })}
        </div>

        {/* Body */}
        {sortedData.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-10 gap-2 items-center w-full"
          >
            {columns.map((col, colIndex) => (
              <div
                key={colIndex}
                style={{
                  gridColumn: `span ${col.colSpan} / span ${col.colSpan}`,
                }}
                className="border-b border-info-light text-[15px] text-dark h-[55px] flex flex-col justify-center"
              >
                {col.render
                  ? col.render(row)
                  : col.accessor
                  ? (row[col.accessor] as ReactNode) ?? '—'
                  : '—'}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
