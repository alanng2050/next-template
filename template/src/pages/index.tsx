import { Box } from '@chakra-ui/react'
import { UserCard } from '@/components'

export default function Home() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <UserCard />
    </Box>
  )
}
