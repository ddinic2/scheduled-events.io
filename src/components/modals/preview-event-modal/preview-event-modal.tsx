

import { usePreviewEventModalStore } from "@/stores/preview-event-modal-store";
import { Badge, Button, Card, Group, Modal, SimpleGrid, Switch, Text, UnstyledButton } from "@mantine/core";
import { IconCalendar, IconCalendarTime, IconCheck, IconUserCheck } from "@tabler/icons-react";
import classes from './PreviewEvnetModal.module.css';

const data = [
    { title: 'Service call', description: 'Service call description', value: '567676' },
    { title: 'Code', description: 'Activity code', value: 'ACT-56' },
    { title: 'Street', description: '', value: 'Studentska 12' },
    { title: 'City', description: '', value: 'Belgrede' },
    { title: 'Subject', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    {
      title: 'Remarks',
      description: 'This is details of activity',
    },
  ];

export const PreviewEventModal = () => {
    const { isOpen, close, event } = usePreviewEventModalStore()

    const items = data.map((item) => (
        <Group justify="space-between" className={classes.item} wrap="nowrap" gap="xl" key={item.title}>
          <div>
            <Text>{item.title}</Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
          {item.value && 
          <Text>{item.value}</Text>
          }
          
          {/* <Switch onLabel="ON" offLabel="OFF" className={classes.switch} size="lg" /> */}
        </Group>
      ));

    return (
        <Modal opened={isOpen} onClose={close} size="xl" withCloseButton={false} title={""}>
            {/* <Card shadow="sm" padding="sm" radius="md" withBorder>
                <Card.Section></Card.Section>
                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Event:</Text>
                    <Badge color="pink" size="sm" variant="light">
                        {event}
                    </Badge>

                </Group>
                <SimpleGrid cols={3} mt="md">
                    <UnstyledButton key={1}>
                        <IconCalendarTime size="2rem" color="gray" />
                        <Text size="sm" mt={7}>
                            From:<br /> Wed, 12 Feb<br /> 9:30
                        </Text>
                    </UnstyledButton>
                    <UnstyledButton key={3}>
                        <IconCalendarTime size="2rem" color="gray" />
                        <Text size="sm" mt={7}>
                            To: <br /> Wed, 12 Feb<br /> 14:30
                        </Text>
                    </UnstyledButton>
                    <UnstyledButton key={2}>
                        <IconUserCheck size="2rem" color="gray" />
                        <Text size="sm" mt={7}>
                            Host:<br /> jovan kovacina
                        </Text>
                    </UnstyledButton>
                </SimpleGrid>
                <Text size="sm" color="dimmed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={close}>
                    Close
                </Button>
            </Card> */}

            <Card withBorder radius="sm" p="sm" className={classes.card}>
                <Text fz="sm" className={classes.title} fw={500} mb={"lg"}>
                    {event}
                </Text>
                {/* <Text fz="xs" c="dimmed" mt={3} mb="xl">
                    Choose what notifications you want to receive
                </Text> */}
                {items}

                <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={close}>
                    Close
                </Button>

            </Card>

        </Modal>
    );
};
