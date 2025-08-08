import { Column } from '@/components/GridTable';
import StatusPill from '@/components/StatusPill';
import { Transaction } from '@/types/transaction.type';

export const overviewColumn: Column<Transaction>[] = [
  { header: 'Date', accessor: 'date', colSpan: 5, sortable: true },
  { header: 'Remark', accessor: 'remark', colSpan: 2, sortable: true },
  { header: 'Amount', accessor: 'amount', colSpan: 1, sortable: true },
  { header: 'Currency', accessor: 'currency', colSpan: 1, sortable: true },
  {
    header: 'Type',
    accessor: 'type',
    colSpan: 1,
    sortable: true,
    render: (row: Transaction) => (
      <StatusPill
        label={row.type}
        dotColor={row.type === 'Credit' ? 'bg-red-700' : 'bg-green-700'}
      />
    ),
  },
];
