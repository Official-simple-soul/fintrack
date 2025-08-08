import { colors } from '@/theme/theme';
import { Menu } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';

type SummaryCardProps = {
  title: string;
  value: string;
  percentage: string;
};

const SummaryCard = ({ title, value, percentage }: SummaryCardProps) => {
  return (
    <div className="bg-primary-light rounded-app-radius p-[28px]">
      <div className="space-y-4">
        <div className="flex items-center justify-between font-bold">
          <p>{title}</p>
          <Menu shadow="md" width={160} position="bottom-end">
            <Menu.Target>
              <IconDots className="cursor-pointer" />
            </Menu.Target>
            <Menu.Dropdown bg={colors.primaryLight}>
              <Menu.Item>View Details</Menu.Item>
              <Menu.Item>Edit</Menu.Item>
              <Menu.Item color="red">Delete</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
        <h1 className="text-3xl font-bold">{value}</h1>
      </div>
      <p className="text-primary text-[13px]">{percentage}</p>
    </div>
  );
};

export default SummaryCard;
