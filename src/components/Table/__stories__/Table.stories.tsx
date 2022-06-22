import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Table from '../Table';

export default {
  title: 'Data Display/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

interface Data {
  id: string;
  name: string;
  contactsAssigned: number;
  notAttempted: number;
  attemptedOnce: number;
  attemptedTwice: number;
  attemptedMore: number;
  reachedCustomer: number;
  closedConversation: number;
  optedOut: number;
}

const columns = [
  {
    id: 'name',
    Header: 'NAME',
    accessor: 'name',
    Cell: ({ value }: any) => value,
    border: true,
    large: true,
  },
  {
    id: 'contactsAssigned',
    Header: 'Assigned',
    accessor: 'contactsAssigned',
    Cell: ({ value }: any) =>
      String(value === 0 ? '-' : value.toLocaleString()),
    border: true,
    highlight: true,
    tooltipText: 'Contacts Assigned',
  },
  {
    id: 'notAttempted',
    Header: 'Zero Attempts',
    accessor: 'notAttempted',
    Cell: ({ value }: any) =>
      String(value === 0 ? '-' : value.toLocaleString()),
    tooltipText: 'Not Attempted',
  },
  {
    id: 'attemptedOnce',
    Header: 'First Attempt',
    accessor: 'attemptedOnce',
    Cell: ({ value }: any) =>
      String(value === 0 ? '-' : value.toLocaleString()),
    tooltipText: 'Attempted Once',
  },
  {
    id: 'attemptedTwice',
    Header: 'Second Attempt',
    accessor: 'attemptedTwice',
    Cell: ({ value }: any) =>
      String(value === 0 ? '-' : value.toLocaleString()),
    tooltipText: 'Attempted Twice',
  },
  {
    id: 'attemptedMore',
    Header: 'Third(+) Attempts',
    accessor: 'attemptedMore',
    Cell: ({ value }: any) =>
      String(value === 0 ? '-' : value.toLocaleString()),
    tooltipText: 'Attempted 3 or more',
  },
  {
    id: 'reachedCustomer',
    Header: 'Reached',
    accessor: 'reachedCustomer',
    Cell: ({ value }: any) =>
      String(value === 0 ? '-' : value.toLocaleString()),
    tooltipText: 'Reached Customer',
  },
  {
    id: 'closedConversation',
    Header: 'Closed',
    accessor: 'closedConversation',
    Cell: ({ value }: any) =>
      String(value === 0 ? '-' : value.toLocaleString()),
    border: true,
    tooltipText: 'Closed Conversation',
  },
  {
    id: 'optedOut',
    Header: 'Opted Out',
    accessor: 'optedOut',
    Cell: ({ value }: any) =>
      String(value === 0 ? '-' : value.toLocaleString()),
    tooltipText: 'Opted Out',
  },
];

const data: Data[] = [
  {
    id: 'ab',
    name: 'Alberta',
    contactsAssigned: 16524,
    notAttempted: 5548,
    attemptedOnce: 2928,
    attemptedTwice: 1036,
    attemptedMore: 2414,
    reachedCustomer: 1765,
    closedConversation: 1917,
    optedOut: 916,
  },
  {
    id: 'bc',
    name: 'British Columbia',
    contactsAssigned: 16938,
    notAttempted: 6610,
    attemptedOnce: 3228,
    attemptedTwice: 1334,
    attemptedMore: 1497,
    reachedCustomer: 1303,
    closedConversation: 2025,
    optedOut: 941,
  },
  {
    id: 'mb',
    name: 'Manitoba',
    contactsAssigned: 8203,
    notAttempted: 2791,
    attemptedOnce: 1233,
    attemptedTwice: 279,
    attemptedMore: 1193,
    reachedCustomer: 1193,
    closedConversation: 1143,
    optedOut: 371,
  },
  {
    id: 'ns',
    name: 'Nova Scotia',
    contactsAssigned: 8116,
    notAttempted: 2893,
    attemptedOnce: 1802,
    attemptedTwice: 321,
    attemptedMore: 847,
    reachedCustomer: 1091,
    closedConversation: 758,
    optedOut: 404,
  },
  {
    id: 'on',
    name: 'Ontario',
    contactsAssigned: 15313,
    notAttempted: 5444,
    attemptedOnce: 2433,
    attemptedTwice: 1399,
    attemptedMore: 1315,
    reachedCustomer: 1823,
    closedConversation: 1780,
    optedOut: 1119,
  },
  {
    id: 'qc',
    name: 'Quebec',
    contactsAssigned: 15805,
    notAttempted: 2885,
    attemptedOnce: 4354,
    attemptedTwice: 827,
    attemptedMore: 3198,
    reachedCustomer: 1841,
    closedConversation: 1867,
    optedOut: 833,
  },
  {
    id: 'sk',
    name: 'Saskatchewan',
    contactsAssigned: 7580,
    notAttempted: 2645,
    attemptedOnce: 1585,
    attemptedTwice: 518,
    attemptedMore: 742,
    reachedCustomer: 795,
    closedConversation: 930,
    optedOut: 365,
  },
];

export const Default: ComponentStory<typeof Table> = () => (
  <Table columns={columns} data={data} />
);
