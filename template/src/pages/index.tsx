import { UserCard } from '@/components'
import { Box } from '@chakra-ui/react'

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
