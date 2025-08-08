'use client';
import { type ReactNode, useState } from 'react';
import {
  AppShell,
  Burger,
  Group,
  Avatar,
  Box,
  ScrollArea,
  Menu,
  TextInput,
  Transition,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import {
  IconLayoutGrid,
  IconSearch,
  IconWallet,
  IconCreditCard,
  IconTransfer,
  IconSettings,
  IconX,
} from '@tabler/icons-react';
import AppLogo from '@/components/AppLogo';
import { links } from './data/sidebar_data';
import { colors } from '@/theme/theme';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened] = useDisclosure(true);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 368,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="xl"
    >
      <AppShell.Header
        p="xl"
        bg={colors.layout}
        className="flex items-center justify-between"
        withBorder={false}
      >
        <Group>
          {isMobile && (
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom="sm"
              size="sm"
            />
          )}
          <AppLogo />
        </Group>

        <Group gap="lg">
          {/* Search */}
          <Box>
            <Transition
              mounted={true}
              transition="pop"
              duration={200}
              timingFunction="ease"
            >
              {(styles) =>
                searchOpen ? (
                  <TextInput
                    placeholder="Search anything..."
                    size="xs"
                    radius="xl"
                    className="w-48"
                    style={styles}
                    onBlur={() => setSearchOpen(false)}
                    leftSection={
                      <IconX
                        color="red"
                        size={14}
                        className="cursor-pointer"
                        onClick={() => setSearchOpen(false)}
                      />
                    }
                  />
                ) : (
                  <IconSearch
                    className="cursor-pointer"
                    onClick={() => setSearchOpen(true)}
                    color={colors.dark}
                    size={22}
                  />
                )
              }
            </Transition>
          </Box>

          <Menu shadow="md" width={200} position="bottom-end" radius="md">
            <Menu.Target>
              <IconLayoutGrid
                className="cursor-pointer"
                size={22}
                color={colors.dark}
              />
            </Menu.Target>
            <Menu.Dropdown bg={colors.primaryLight}>
              <Menu.Item leftSection={<IconWallet size={18} />}>
                My Wallet
              </Menu.Item>
              <Menu.Item leftSection={<IconCreditCard size={18} />}>
                Cards
              </Menu.Item>
              <Menu.Item leftSection={<IconTransfer size={18} />}>
                Transfer
              </Menu.Item>
              <Menu.Item leftSection={<IconSettings size={18} />}>
                Settings
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Avatar
            src={'https://picsum.photos/200/200?random=6'}
            alt={'profile'}
            radius="xl"
            color={colors.primary}
            size="md"
            style={{ textTransform: 'uppercase' }}
          >
            AD
          </Avatar>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar
        bg={colors.layout}
        pt={'xl'}
        px={'xl'}
        withBorder={false}
      >
        <AppShell.Section grow component={ScrollArea} scrollbarSize={0}>
          {links.map((link, index) => (
            <Link
              href={link.route}
              key={index}
              className={`flex flex-col gap-1 py-2 px-5 mb-1 transition-all ease-in-out cursor-pointer rounded-app-radius text-start ${
                pathname === link.route
                  ? 'text-primary bg-primary-light font-medium'
                  : 'text-dark font-medium'
              }`}
            >
              <p className="text-[15px]">{link.label}</p>
            </Link>
          ))}
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main bg={colors.background}>{children}</AppShell.Main>
    </AppShell>
  );
};

export default DashboardLayout;
