import { useStoreState } from '@/models'
import { Card, CardBody, Center, Image, Text } from '@chakra-ui/react'
import classes from './index.module.scss'

export function UserCard() {
  const { name, avatar } = useStoreState((s) => s.home.user)
  return (
    <Center className={classes.user_card}>
      <Card>
        <CardBody>
          <Text textAlign="center" mb="2">
            This is {name}
          </Text>
          <Image width={'100px'} src={avatar} alt="avatar" />
        </CardBody>
      </Card>
    </Center>
  )
}
