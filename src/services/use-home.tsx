import axios from "../lib/axios";
import { useQuery } from "react-query";
import moment from "moment";
import { useDatesFromStore } from "@/stores/dates-store";

export const useHomeData = () => {
    // const [from, setFrom] = useState((moment().startOf('day').toDate()))
    // const [to, setTo] = useState((moment().endOf('day').toDate()))

    const  {from, to} = useDatesFromStore()

    // useEffect(() => {
    //     console.log('from', from)
    // }, [from])


    // const getFromDate = (date: any) => {
    //     return date ? moment(date).format('YYYY-MM-DDTHH:mm:ss') : ''
    // }

    // READ HOME DATA
    const fetchHomeDataFn = async () => {
        const response = await axios.get("/dashboard/overview?from=" + moment(from).format('YYYY-MM-DDTHH:mm:ss') + '&to=' + moment(to).format('YYYY-MM-DDTHH:mm:ss'))
        try {
            // const headers = response && response.data && response.data.length ? Object.keys(response.data[0]).map((key) =>
            //     `${key}`,
            // ) : [];

            // console.log('RESPONSE HOME, ', response.data)
            return response.data;
        } catch (error) {
            console.error('error msg', error);
        }
    };
    const readHomeData = useQuery(
        // ["homeData", from, to],
        ["homeData"],
        fetchHomeDataFn,
    );


    return {
        from,
        to,
        // setFrom,
        // setTo,
        readHomeData
    };

};
