interface StaticExampleProps {
    type: string;
}

const StaticExample = ({ type }: StaticExampleProps) => {
    return (
        <>
            {type === 'DAY' &&
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: '60px' }}>Employees</th>
                            <th colSpan={2}>07h</th>
                            <th colSpan={2}>08h</th>
                            <th colSpan={2}>09h</th>
                            <th colSpan={2}>10h</th>
                            <th colSpan={2}>11h</th>
                            <th colSpan={2}>12h</th>
                            <th colSpan={2}>13h</th>
                            <th colSpan={2}>14h</th>
                            <th colSpan={2}>15h</th>
                            <th colSpan={2}>16h</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={8} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td colSpan={7} className="highlight-red">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">Montage Bauwasserständer</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Jovan K.</td>
                            <td colSpan={8} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td colSpan={7} className="highlight-red">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">Montage Bauwasserständer</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Kevin R.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Dominic R.</td>
                            <td colSpan={8} className="highlight-gray">Kdl. 146/6 LPH 6m richten</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td colSpan={7} className="highlight-gray">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">HA Demont Küntwilerstrasse 65, Rotkreuz</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Ralph S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">HA Demont Küntwilerstrasse 65, Rotkreuz</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Robert T.</td>
                            <td colSpan={8} className="highlight-gray">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td colSpan={7} className="highlight-red">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">Kdl. 146/6 LPH 6m richten</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Mike R.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight-gray">Mont NAK 097 ab VK St.Johannesstr, Zug</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Swen K.</td>
                            <td colSpan={8} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td colSpan={7} className="highlight-gray">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">Mont NAK 097 ab VK St.Johannesstr, Zug</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Christian S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">Mont NAK 097 ab VK St.Johannesstr, Zug</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={8} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td colSpan={7} className="highlight-red">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">Montage Bauwasserständer</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={8} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td colSpan={7} className="highlight-red">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">Montage Bauwasserständer</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={8} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td colSpan={7} className="highlight-red">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">Montage Bauwasserständer</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={8} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td colSpan={7} className="highlight-red">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">Montage Bauwasserständer</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={8} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td colSpan={7} className="highlight-red">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">Montage Bauwasserständer</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={8} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td colSpan={7} className="highlight-red">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">Montage Bauwasserständer</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            }
            {type === 'WEEK' &&
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: '60px' }}>Employees</th>
                            <th colSpan={2}>Mon 2.2.</th>
                            <th colSpan={2}>Tue 4.2.</th>
                            <th colSpan={2}>Wed 5.2.</th>
                            <th colSpan={2}>Thu 6.2.</th>
                            <th colSpan={2}>Fri 7.2.</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={2} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td colSpan={4} className="highlight-red">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={4} className="highlight">Montage Bauwasserständer</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={2} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td colSpan={4} className="highlight-red">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={4} className="highlight">Montage Bauwasserständer</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={2} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td colSpan={4} className="highlight-red">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={4} className="highlight">Montage Bauwasserständer</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={2} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td colSpan={4} className="highlight-red">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={4} className="highlight">Montage Bauwasserständer</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={2} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td colSpan={4} className="highlight-red">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={4} className="highlight">Montage Bauwasserständer</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={2} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td colSpan={4} className="highlight-red">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={4} className="highlight">Montage Bauwasserständer</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={2} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td colSpan={4} className="highlight-red">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={4} className="highlight">Montage Bauwasserständer</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={2} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2} className="highlight">Demontage NAK 160 ab TS Lauihof Walchwil</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td colSpan={4} className="highlight-red">KSR Kalibrierung</td>

                            <td></td>
                            <td colSpan={4} className="highlight">Montage Bauwasserständer</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">NS VK Seehof, Cham</td>
                            <td></td>
                            <td></td>
                        </tr>

                    </tbody>
                </table>
            }
        </>
        //     <table>
        //     <thead>
        //         <tr>
        //             <th>07h</th>
        //             <th>08h</th>
        //             <th>09h</th>
        //             <th>10h</th>
        //             <th>11h</th>
        //             <th>12h</th>
        //             <th>13h</th>
        //             <th>14h</th>
        //             <th>15h</th>
        //             <th>16h</th>
        //             <th>17h</th>
        //             <th>18h</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <td classNameName="left-column">Gut K.</td>
        //             <td colSpan={3} classNameName="highlight">TS Luthisbach Oberägeri - Albi, 7.11.2023</td>
        //             <td></td>
        //             <td></td>
        //             <td></td>
        //             <td></td>
        //             <td></td>
        //             <td></td>
        //             <td></td>
        //             <td></td>
        //         </tr>
        //         <tr>
        //             <td classNameName="left-column">Bucher D.</td>
        //             <td></td>
        //             <td></td>
        //             <td colSpan={3} classNameName="highlight-red">TS Niederwil Cham - Leistungserhöhung</td>
        //             <td></td>
        //             <td></td>
        //             <td></td>
        //             <td></td>
        //             <td></td>
        //             <td></td>
        //         </tr>
        //         <tr>
        //             <td classNameName="left-column">Truttman S.</td>
        //             <td></td>
        //             <td></td>
        //             <td></td>
        //             <td></td>
        //             <td colSpan={4} classNameName="highlight">NS VK Seehof, Cham</td>
        //             <td></td>
        //             <td></td>
        //             <td></td>
        //         </tr>
        //     </tbody>
        // </table>
    )
}

export default StaticExample;