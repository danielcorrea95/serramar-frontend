import {
  ArrowDown,
  ArrowUp,
  Buildings,
  File,
  FlagPennant,
  GameController,
  GitDiff,
  House,
  Layout,
  SoccerBall,
  User,
  Users,
} from '@phosphor-icons/react'
export const SidebarData = [
  {
    title: 'Home',
    path: '/admin',
    icon: <House size={24} />,
    iconClosed: <ArrowDown />,
    iconOpened: <ArrowUp />,
    permission: 'list_player',

    // subNav: [
    //   {
    //     title: 'Users',
    //     path: '/overview/users',
    //     icon: <User />,
    //   },
    //   {
    //     title: 'Revenue',
    //     path: '/overview/revenue',
    //     icon: <User />,
    //   },
    // ],
  },
  {
    title: 'Empresas',
    path: '/admin/companies',
    icon: <Buildings size={24} />,
    permission: 'list_company',
  },
  {
    title: 'Layout',
    path: '/admin/layout',
    icon: <Layout size={24} />,
    permission: 'create_layout',
  },
  {
    title: 'Competições',
    path: '/admin/cups',
    icon: <SoccerBall size={24} />,
    permission: 'list_cup',
  },
  {
    title: 'Equipes',
    path: '/admin/teams',
    icon: <FlagPennant size={24} />,
    permission: 'list_team',
  },
  {
    title: 'Atletas',
    path: '/admin/players',
    icon: <Users size={24} />,
    permission: 'list_player',
  },
  {
    title: 'Comissão Técnica',
    path: '/admin/technical-committee',
    icon: <GitDiff size={24} />,
    permission: 'list_technical_committee',
  },
  {
    title: 'Jogos',
    path: '/admin/games',
    icon: <GameController size={24} />,
    permission: 'list_games',
  },
  {
    title: 'Súmulas',
    path: '/admin/scoresheet',
    icon: <File size={24} />,
    permission: 'list_docket',
  },
  {
    title: 'Usuários',
    path: '/admin/users',
    icon: <User size={24} />,
    permission: 'list_users',
  },
]
