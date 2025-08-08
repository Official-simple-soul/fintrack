import { User } from '@/types/user.types';
import { Avatar } from '@mantine/core';
import React from 'react';

interface UserProps {
  users: User[];
}

function ListUserSection({ users }: UserProps) {
  const toDisplay = users.slice(0, 4);
  const names = toDisplay.map((e) => e.name).join(', ');
  return (
    <div className="flex items-center gap-6">
      <div className="flex relative w-[110px]">
        {toDisplay.map((e, index) => (
          <Avatar
            src={e.image}
            size={'md'}
            className="border-3 border-white absolute"
            style={{
              right: index * 10,
              zIndex: users.length - index,
            }}
          >
            {e.name[0]}
          </Avatar>
        ))}
      </div>
      <p className="!text-info text-[15px]">
        {names} +{users.length - toDisplay.length} others
      </p>
    </div>
  );
}

export default ListUserSection;
