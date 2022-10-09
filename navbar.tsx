import React from 'react';
import { Navbar, Tooltip, UnstyledButton, createStyles, Group } from '@mantine/core';
import {
  Icon as TablerIcon,
  Home2,
  Settings,
  Logout,
  SwitchHorizontal,
  Anchor,
} from 'tabler-icons-react';
import { Link } from 'react-router-dom';



const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
    },
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label,onClick, active }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" withArrow transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon />
      </UnstyledButton>
    </Tooltip>
  );
}


export function NavbarMinimal() {

  return (
    <Navbar height={750} width={{ base: 80 }} p="md">
      <Navbar.Section>
      <Navbar.Section mt={10}>
        <Group direction="column" align="center" spacing={0}>
          <Link to={'/Home'} target='_top'><NavbarLink icon={Home2} label="Home" /></Link>
          <Link to={'/Services'} target='_top'><NavbarLink icon={Anchor} label="Services" /></Link>
          <Link to={'/Settings'} target='_top'><NavbarLink icon={Settings} label="Settings" /></Link>
        </Group>
      </Navbar.Section>
      </Navbar.Section>
      <Navbar.Section grow mt={360}>
        <Group direction="column" align="center" spacing={0}>
          <NavbarLink icon={SwitchHorizontal} label="Change account" />
          <NavbarLink icon={Logout} label="Logout" />
        </Group>
      </Navbar.Section>
    </Navbar>
  );
}

function toggleOpened(): void {
  throw new Error('Function not implemented.');
}
