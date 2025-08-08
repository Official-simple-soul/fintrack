'use client';
import React from 'react';
import { overviewColumn } from '@/columns/overviewColumn';
import { EmptyState } from '@/components/EmptyState';
import { GridTable } from '@/components/GridTable';
import { transactionData, users } from '@/data/mock';
import DashboardLayout from '@/layout/DashboardLayout';
import { colors } from '@/theme/theme';
import { Tabs } from '@mantine/core';
import SummarySection from './SummarySection';
import ListUserSection from './ListUserSection';
import TopSection from './TopSection';

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <TopSection status="active" />
        <ListUserSection users={users} />
        <Tabs defaultValue="overview" color="#437D8E">
          <Tabs.List c={colors.info}>
            <Tabs.Tab value="overview" c={'#437D8E'}>
              Overview
            </Tabs.Tab>
            <Tabs.Tab value="transactions">Transactions</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" py={'lg'}>
            <div className="space-y-6">
              <SummarySection />
              <GridTable columns={overviewColumn} data={transactionData} />
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="transactions">
            <EmptyState title="No transactions yet" />
          </Tabs.Panel>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
