import { Transaction } from '@/types/transaction.type';
import { User } from '@/types/user.types';

export const transactionData: Transaction[] = [
  {
    date: '2023-10-01',
    remark: 'Salary',
    amount: '$3,000',
    currency: 'USD',
    type: 'Credit',
  },
  {
    date: '2023-10-02',
    remark: 'Groceries',
    amount: '-$150',
    currency: 'USD',
    type: 'Debit',
  },
  {
    date: '2023-10-03',
    remark: 'Gym Membership',
    amount: '-$50',
    currency: 'USD',
    type: 'Debit',
  },
  {
    date: '2023-10-04',
    remark: 'Restaurant',
    amount: '-$70',
    currency: 'USD',
    type: 'Debit',
  },
  {
    date: '2023-10-05',
    remark: 'Freelance Payment',
    amount: '$800',
    currency: 'USD',
    type: 'Credit',
  },
  {
    date: '2023-10-06',
    remark: 'Electricity Bill',
    amount: '-$120',
    currency: 'USD',
    type: 'Debit',
  },
  {
    date: '2023-10-07',
    remark: 'Internet Subscription',
    amount: '-$60',
    currency: 'USD',
    type: 'Debit',
  },
  {
    date: '2023-10-08',
    remark: 'Stock Dividend',
    amount: '$200',
    currency: 'USD',
    type: 'Credit',
  },
  {
    date: '2023-10-09',
    remark: 'Movie Tickets',
    amount: '-$30',
    currency: 'USD',
    type: 'Debit',
  },
];

export const users: User[] = [
  { name: 'Ava', image: 'https://picsum.photos/200/200?random=1' },
  { name: 'Liam', image: 'https://picsum.photos/200/200?random=2' },
  { name: 'Noah', image: 'https://picsum.photos/200/200?random=3' },
  { name: 'Hon', image: 'https://picsum.photos/200/200?random=6' },
  { name: 'Hon', image: 'https://picsum.photos/200/200?random=6' },
  { name: 'Hon', image: 'https://picsum.photos/200/200?random=6' },
  { name: 'Hon', image: 'https://picsum.photos/200/200?random=6' },
  { name: 'Hon', image: 'https://picsum.photos/200/200?random=6' },
  { name: 'Hon', image: 'https://picsum.photos/200/200?random=6' },
  { name: 'Hon', image: 'https://picsum.photos/200/200?random=6' },
  { name: 'Hon', image: 'https://picsum.photos/200/200?random=6' },
];
