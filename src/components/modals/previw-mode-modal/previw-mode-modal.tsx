import { usePreviewModalStore } from "@/stores/preview-mode-store";

import { Modal, Select } from "@mantine/core";

export const PreviewModeModal = () => {
    const { isOpen, close, setMode, mode } = usePreviewModalStore();

    return (
        <Modal opened={isOpen} onClose={close} size="sm" withCloseButton={true} title={"Select mode"}>
            <Select
                data={
                    ['DAY', 'WEEK', 'MONTH']?.map((p: any) => {
                        return { value: p, label: p, key: p };
                    }) || []
                }
                // label="Period"
                placeholder="Select period"
                value={mode}
                onChange={(v) => {
                    setMode(v ? v : "")
                }}
            />

        </Modal>
    );
};
