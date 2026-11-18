import { Stack } from '@astryxdesign/core/Stack'
import { Text } from '@astryxdesign/core/Text'
import type { Member } from '../../content/site'

export function MemberList({ members }: { members: Member[] }) {
  return (
    <Stack as="ul" className="plain-list" direction="vertical" gap={5}>
      {members.map((member) => (
        <Stack as="li" key={`${member.role}-${member.name}`} direction="vertical" gap={1}>
          <Text weight="semibold">{member.role}</Text>
          <Text>{member.name}</Text>
          {member.org ? (
            <Text color="secondary" size="sm">
              {member.org}
            </Text>
          ) : null}
        </Stack>
      ))}
    </Stack>
  )
}
