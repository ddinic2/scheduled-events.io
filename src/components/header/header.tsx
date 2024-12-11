import { Box, Flex, UnstyledButton } from "@mantine/core";
import { useState } from "react";
import moment from "moment";
import { usePreviewModalStore } from "@/stores/preview-mode-store";
import { IconCaretLeftFilled, IconCaretRightFilled, IconLineHeight } from "@tabler/icons-react";
import { DatePickerInput, MonthPickerInput } from '@mantine/dates';
import { useDatesFromStore } from "@/stores/dates-store";


const Header = () => {

    const { open, mode } = usePreviewModalStore()

    const {
        setFrom, from, setTo, to,
    } = useDatesFromStore()



    const openPreviewMode = () => {
        open()
    }

    const setByMonth = (d: any) => {
        setFrom(d)
        const lastDayOfMonth = moment(d).endOf('month').toDate();
        setTo(lastDayOfMonth);
    }

    const [valueRange, setRangeValue] = useState<[Date | null, Date | null]>([null, null]);
    const setRange = (dateRange: any) => {
        if (dateRange[1]) {
            dateRange[1] = moment(dateRange[1]).endOf("day").toDate();
            setFrom(dateRange[0])
            setTo(dateRange[1])
        }
        setRangeValue(dateRange)
    }

    const disableNonMondayAndSunday = (date: Date) => {
        const dayOfWeek = date.getDay();
        if (valueRange[0] !== null) {
            return dayOfWeek !== 0 && dayOfWeek !== 1;
        } else {
            return dayOfWeek !== 1;
        }
    };

    const goNext = () => {
        if (mode === 'DAY') {
            setFrom(moment(from).add(1, "day").toDate())
            setTo(moment(to).add(1, "day").toDate())
        }
        if (mode === 'MONTH') {
            setFrom(moment(from).add(1, "month").toDate())
            setTo(moment(to).add(1, "month").toDate())
        }
        if (mode === 'WEEK') {
            setRange([moment(from).add(7, "day").toDate(), moment(to).add(7, "day").toDate()])
        }
    }

    const goPrevious = () => {
        if (mode === 'DAY') {
            setFrom(moment(from).subtract(1, "day").toDate())
            setTo(moment(to).subtract(1, "day").toDate())
        }
        if (mode === 'MONTH') {
            setFrom(moment(from).subtract(1, "month").toDate())
            setTo(moment(to).subtract(1, "month").toDate())
        }
        if (mode === 'WEEK') {
            setRange([moment(from).subtract(7, "day").toDate(), moment(to).subtract(7, "day").toDate()])
        }
    }



    return (
        <>
            <Flex direction="row" pt="xs" pr="md" pl="md" justify={"center"} align={"center"} >
                <Box style={{ display: "block", overflow: "auto", flexGrow: 1 }}>
                    <UnstyledButton onClick={() => { openPreviewMode() }}><IconLineHeight /></UnstyledButton>
                </Box>
                <Box style={{ display: "block", overflow: "auto", flexGrow: 1 }}>
                    <UnstyledButton>
                        <IconCaretLeftFilled onClick={goPrevious} />
                    </UnstyledButton>
                </Box>

                <Box style={{ display: "block", overflow: "auto", flexGrow: 4, textAlign: "center" }}>
                    {mode === 'MONTH' &&
                        <MonthPickerInput
                            placeholder="Pick month"
                            style={{ margin: "auto" }}
                            miw={180}
                            maw={400}
                            value={from}
                            onChange={setByMonth}
                        />

                    }
                    {mode === 'DAY' &&
                        <DatePickerInput
                            style={{ margin: "auto" }}
                            miw={180}
                            maw={400}
                            placeholder="Pick date"
                            value={from}
                            onChange={(v: any) => { setFrom(v); setTo(moment(v).endOf("day").toDate()) }}
                        />
                    }
                    {mode === 'WEEK' &&
                        <DatePickerInput
                            style={{ margin: "auto" }}
                            miw={180}
                            maw={400}
                            type="range"
                            placeholder="Pick dates range"
                            value={valueRange}
                            clearable
                            onChange={(v) => { setRange(v) }}
                            minDate={valueRange[0] || undefined}
                            maxDate={valueRange[0] ? moment(valueRange[0]).endOf('week').endOf('day').add(1, 'day').toDate() : undefined}
                            excludeDate={disableNonMondayAndSunday}
                        />
                    }
                </Box>

                <Box style={{ display: "block", overflow: "auto", flexGrow: 2 }}>
                    <UnstyledButton>
                        <IconCaretRightFilled onClick={goNext} />
                    </UnstyledButton>
                </Box>
            </Flex>
        </>

    );
};


export default Header;
