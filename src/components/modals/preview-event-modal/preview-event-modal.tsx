

import { usePreviewEventModalStore } from "@/stores/preview-event-modal-store";
import { Badge, Button, Card, Group, Modal, SimpleGrid, Text, UnstyledButton } from "@mantine/core";
import { IconCalendar, IconCalendarTime, IconCheck, IconUserCheck } from "@tabler/icons-react";

export const PreviewEventModal = () => {
    const { isOpen, close, event } = usePreviewEventModalStore()

    return (
        <Modal opened={isOpen} onClose={close} size="xl" withCloseButton={true} title={"Event details"}>
            <Card shadow="sm" padding="sm" radius="md" withBorder>
                <Card.Section></Card.Section>
                <Group justify="space-between" mt="md" mb="xs">
                    {/* <Text weight={500}>Order Id:  {data?.phabis_order_id}</Text> */}
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
            </Card>

        </Modal>
    );
};
