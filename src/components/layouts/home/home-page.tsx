import { Box, Center, Flex, Loader, Table } from "@mantine/core";
import { ReactNode, useEffect } from "react";
import moment from "moment";
import { useHomeData } from "@/services/use-home";
import { usePreviewModalStore } from "@/stores/preview-mode-store";
import { fakeDayData, fakeMonthData, fakeWeekData } from "@/const";
import { useDatesFromStore } from "@/stores/dates-store";
import StaticExample from "./static-example";


export const HomePage = () => {
    const today = moment();
    const beginingOfMonth = today.startOf("month").startOf("day").toDate()
    const endOfMonth = today.endOf("month").endOf("day").toDate()
    const todayStart = moment().startOf('day').toDate()
    const todayEnd = moment().endOf('day').toDate()
    const beginigOfWeek = moment().startOf("week").toDate()
    const endOfWeek = moment().endOf("week").toDate()

    const {
        readHomeData: { data: tdata, isLoading, isError, refetch },
    } = useHomeData()
    const { setFrom, from, setTo, to } = useDatesFromStore()

    const { mode } = usePreviewModalStore();

    useEffect(() => {
        if (mode === 'DAY') {
            setFrom(todayStart)
            setTo(todayEnd)
        } else if (mode === 'MONTH') {
            setFrom(beginingOfMonth)
            setTo(endOfMonth)
        } else if (mode === 'WEEK') {
            setFrom(beginigOfWeek)
            setTo(endOfWeek)
        }
    }, [mode])

    useEffect(() => {
        if (mode === 'WEEK') {
            getDateRange()
        }
    }, [from, to])

    const getRandomColor = (): string => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const getDateRange = () => {
        const start = moment(from, 'YYYY-MM-DD');
        const end = moment(to, 'YYYY-MM-DD');
        const dateArray = [];

        while (start.isSameOrBefore(end)) {
            const dayAbbreviation = start.format('dd');
            const dayNumber = start.format('DD');
            dateArray.push(`${dayAbbreviation} ${dayNumber}`);
            start.add(1, 'day');
        }
        // console.log('date array', dateArray);
        return dateArray;
    };

    const getHeaders = (): ReactNode => {
        if (mode === 'DAY') {
            return <Table.Tr>
                {/* <Table.Th key="User">User</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="07h">07h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="08h">08h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="09h">09h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="10h">10h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="11h">11h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="12h">12h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="13h">13h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="14h">14h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="15h">15h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="16h">16h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="17h">17h</Table.Th> */}

                <Table.Th key="User">User</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="07h">07h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="08h">08h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="09h">09h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="10h">10h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="11h">11h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="12h">12h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="13h">13h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="14h">14h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="15h">15h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="16h">16h</Table.Th>
                <Table.Th style={{ textAlign: 'center' }} key="17h">17h</Table.Th>

            </Table.Tr>
        }
        if (mode === 'WEEK' || mode === 'MONTH') {
            return <Table.Tr>
                <Table.Th style={{ position: 'sticky' }}>User</Table.Th>
                {getDateRange()?.map((v) => {
                    return <Table.Th style={{ textAlign: 'center', minWidth: '50px' }} key={v}>{v}</Table.Th>
                })}
            </Table.Tr>
        }
    }

    const getRows = (): ReactNode => {
        if (mode === 'DAY') {
            return fakeDayData?.map((element) => (
                <Table.Tr key={element.id}>
                    <Table.Td rowSpan={2} style={{ position: 'sticky', left: 0, background: 'white' }} key={element.user_name}>{element.user_name}</Table.Td>
                    {element.events.length === 0 && <Table.Td rowSpan={2} colSpan={element.max_col}></Table.Td>}
                    {element.events.length > 0 &&
                        element.events.map((e, ind) => {
                            return (
                                <>
                                    {e.offset > 0 && <Table.Td rowSpan={2} key={e.id} colSpan={e.offset}></Table.Td>}
                                    {e.colspan > 0 && <Table.Td rowSpan={2} key={e.id + '_colspan'} colSpan={e.colspan}><Box onClick={() => { alert(e.event_name) }} ta={"center"} style={{ borderRadius: "5px", cursor: 'pointer' }} c={"white"} bg={getRandomColor()}>{e.event_name}</Box></Table.Td>}
                                </>

                            )
                        })

                    }
                    {/* {element.offset > 0 && <Table.Td colSpan={element.offset}></Table.Td>}
                    {element.colspan > 0 && <Table.Td colSpan={element.colspan}><Box ta={"center"} style={{borderRadius: "5px"}} c={"white"} bg={getRandomColor()}>{element.event_name}</Box></Table.Td>} */}
                </Table.Tr>
            ));
        }
        if (mode === 'WEEK') {
            return fakeWeekData?.map((element) => (
                <Table.Tr key={element.id}>
                    <Table.Td key={element.user_name}>{element.user_name}</Table.Td>
                    {element.events.length === 0 && <Table.Td colSpan={element.max_col}></Table.Td>}
                    {element.events.length > 0 &&
                        element.events.map((e, ind) => {
                            return (
                                <>
                                    {e.offset > 0 && <Table.Td key={e.id} colSpan={e.offset}></Table.Td>}
                                    {e.colspan > 0 && <Table.Td key={e.id + '_colspan'} colSpan={e.colspan}><Box onClick={() => { alert(e.event_name) }} ta={"center"} style={{ borderRadius: "5px", cursor: 'pointer' }} c={"white"} bg={getRandomColor()}>{e.event_name}</Box></Table.Td>}
                                </>

                            )
                        })

                    }
                </Table.Tr>
            ));
        }
        if (mode === 'MONTH') {
            return fakeMonthData?.map((element) => (
                <Table.Tr key={element.id}>
                    <Table.Td style={{ position: 'sticky', left: 0, background: 'white' }} key={element.user_name}>{element.user_name}</Table.Td>
                    {element.events.length === 0 && <Table.Td colSpan={element.max_col}></Table.Td>}
                    {element.events.length > 0 &&
                        element.events.map((e, ind) => {
                            return (
                                <>
                                    {e.offset > 0 && <Table.Td key={e.id} colSpan={e.offset}></Table.Td>}
                                    {e.colspan > 0 && <Table.Td key={e.id + '_colspan'} colSpan={e.colspan}><Box onClick={() => { alert(e.event_name) }} ta={"center"} style={{ borderRadius: "5px", cursor: 'pointer' }} c={"white"} bg={getRandomColor()}>{e.event_name}</Box></Table.Td>}
                                </>

                            )
                        })

                    }
                    {/* {element.offset > 0 && <Table.Td colSpan={element.offset}></Table.Td>}
                    {element.colspan > 0 && <Table.Td colSpan={element.colspan}><Box ta={"center"} style={{borderRadius: "5px"}} c={"white"} bg={getRandomColor()}>{element.event_name}</Box></Table.Td>} */}
                </Table.Tr>
            ));
        }

    }

    // if (isLoading) {
    //     return (
    //         <Center h="100%">
    //             <Loader />
    //         </Center>
    //     );
    // }


    return (
        <>
            {/* {mode === 'DAY' &&
                <Table>
                    <Table.Thead>
                        {getHeaders()}

                    </Table.Thead>
                    <Table.Tbody>{getRows()}</Table.Tbody>
                </Table>
            }
            {mode === 'WEEK' &&
                <Table
                >
                    <Table.Thead>
                        {getHeaders()}
                    </Table.Thead>
                    <Table.Tbody>{getRows()}</Table.Tbody>
                </Table>
            }
            {mode === 'MONTH' &&
                <Table>
                    <Table.Thead>
                        {getHeaders()}
                    </Table.Thead>
                    <Table.Tbody>{getRows()}</Table.Tbody>
                </Table>
            }
            <br />
            <br />
            <br />
            <br />
            <br /> */}



            <StaticExample type={mode} />
{/* 
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


            <Flex direction={"row"} wrap={"wrap"}>
                <Box flex={1}>dejan</Box>
                <Box flex={20} style={{ display: 'flex', flexDirection: 'column' }}>
                    <Box style={{ display: 'flex', flexDirection: 'row' }} flex={5}>
                        <Box flex={5}>
                            dd -5
                        </Box>
                    </Box>
                </Box>
            </Flex> */}
        </>
    );
};


HomePage.requireAuth = true;
export default HomePage;