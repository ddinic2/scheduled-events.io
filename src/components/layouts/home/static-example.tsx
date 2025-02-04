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
                            <th style={{ width: '50px' }}>Employees</th>
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
                            <td colSpan={8} className="highlight">TS Luthi2023</td>
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
                            <td colSpan={7} className="highlight-red">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
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
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Jovan K.</td>
                            <td colSpan={8} className="highlight">TS Luthi2023</td>
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
                            <td colSpan={7} className="highlight-red">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Kevin R.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
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
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Dominic R.</td>
                            <td colSpan={8} className="highlight-gray">TS Luthi2023</td>
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
                            <td colSpan={7} className="highlight-gray">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Ralph S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
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
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Robert T.</td>
                            <td colSpan={8} className="highlight-gray">TS Luthi2023</td>
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
                            <td colSpan={7} className="highlight-red">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Mike R.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight-gray">TS Ruessen Ost, Baar - Res. R. Suter</td>
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
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Swen K.</td>
                            <td colSpan={8} className="highlight">TS Luthi2023</td>
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
                            <td colSpan={7} className="highlight-gray">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Christian S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
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
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={8} className="highlight">TS Luthi2023</td>
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
                            <td colSpan={7} className="highlight-red">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
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
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={8} className="highlight">TS Luthi2023</td>
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
                            <td colSpan={7} className="highlight-red">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
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
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={8} className="highlight">TS Luthi2023</td>
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
                            <td colSpan={7} className="highlight-red">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
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
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={8} className="highlight">TS Luthi2023</td>
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
                            <td colSpan={7} className="highlight-red">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
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
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={8} className="highlight">TS Luthi2023</td>
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
                            <td colSpan={7} className="highlight-red">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
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
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={8} className="highlight">TS Luthi2023</td>
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
                            <td colSpan={7} className="highlight-red">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={9} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>

                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
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
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
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
                            <th style={{ width: '50px' }}>Employees</th>
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
                            <td colSpan={2} className="highlight">TS Luthi2023</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2} className="highlight">TS Luthi2023</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td colSpan={4} className="highlight-red">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={4} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={2} className="highlight">TS Luthi2023</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2} className="highlight">TS Luthi2023</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td colSpan={4} className="highlight-red">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={4} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={2} className="highlight">TS Luthi2023</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2} className="highlight">TS Luthi2023</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td colSpan={4} className="highlight-red">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={4} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={2} className="highlight">TS Luthi2023</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2} className="highlight">TS Luthi2023</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td colSpan={4} className="highlight-red">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={4} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={2} className="highlight">TS Luthi2023</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2} className="highlight">TS Luthi2023</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td colSpan={4} className="highlight-red">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={4} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={2} className="highlight">TS Luthi2023</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2} className="highlight">TS Luthi2023</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td colSpan={4} className="highlight-red">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={4} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={2} className="highlight">TS Luthi2023</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2} className="highlight">TS Luthi2023</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td colSpan={4} className="highlight-red">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={4} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2} className="left-column">Gut K.</td>
                            <td colSpan={2} className="highlight">TS Luthi2023</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2} className="highlight">TS Luthi2023</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td colSpan={4} className="highlight-red">TS Niederwil Cham - Leistungse rhöhung</td>

                            <td></td>
                            <td colSpan={4} className="highlight">TS Niederwil Cham - Leistungs erhöhung</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td rowSpan={2} className="left-column">Truttman S.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={4} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={5} className="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
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
        //             <td colSpan={4} classNameName="highlight">TS Ruessen Ost, Baar - Res. R. Suter</td>
        //             <td></td>
        //             <td></td>
        //             <td></td>
        //         </tr>
        //     </tbody>
        // </table>
    )
}

export default StaticExample;