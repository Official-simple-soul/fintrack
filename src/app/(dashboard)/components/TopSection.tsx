import { AppButton } from '@/components/AppButton';
import StatusPill from '@/components/StatusPill';
import { colors } from '@/theme/theme';
import { Menu } from '@mantine/core';
import { IconCaretDownFilled, IconDots } from '@tabler/icons-react';
import React from 'react';

function TopSection({ status = 'active' }: { status: string }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-2">
        <p className="flex font-app items-center gap-3 text-dark text-2xl sm:text-3xl font-bold">
          Wallet Ledger
          <span>
            <Menu shadow="md" width={160} position="bottom-end">
              <Menu.Target>
                <IconCaretDownFilled
                  size={18}
                  color={colors.dark}
                  className="cursor-pointer"
                />
              </Menu.Target>
              <Menu.Dropdown bg={colors.primaryLight}>
                <Menu.Item>Wallet Ledger</Menu.Item>
                <Menu.Item>Spotlight</Menu.Item>
                <Menu.Item color="red">Fast Track</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </span>
        </p>
        <div className="mt-1 sm:mt-0">
          <StatusPill label={status} />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <AppButton c={colors.dark} fz={'15px'} leftSection={<></>}>
          Share
        </AppButton>
        <div className="border border-info-light rounded-app-radius p-1.5">
          <Menu shadow="md" width={160} position="bottom-end">
            <Menu.Target>
              <IconDots className="cursor-pointer" />
            </Menu.Target>
            <Menu.Dropdown bg={colors.primaryLight}>
              <Menu.Item>More</Menu.Item>
              <Menu.Item>About</Menu.Item>
              <Menu.Item color="red">Info</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
