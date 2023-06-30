'use client'
import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'
import type { User } from './types';

export const UserCard: React.FC<Pick<User, "dob" | "picture" | "name">> = ({picture, dob, name}) => {
    return (
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={picture.large}
            alt={name.title + name.first}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{name.first} {name.last}</Heading>
            <Text>
              {dob.age} y.o
            </Text>
          </Stack>
        </CardBody>
      </Card>
    );
  }
  
  