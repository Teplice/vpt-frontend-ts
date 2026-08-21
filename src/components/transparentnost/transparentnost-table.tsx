import {Fragment, useState} from "react";

import {TransparencyDoc} from "../../interfaces/models";


interface TransparentnostTableProps {
    transparency: TransparencyDoc[];
}

const TransparentnostTable: React.FC<TransparentnostTableProps> = ({transparency}) => {

    return (
        <Fragment>
            <table className="transparentnost-table__message">
                <thead>
                <tr>
                    <th>Typ reklamního sdělení</th>
                    <th>Vydavatel</th>
                    <th>Plátce</th>
                    <th>Období</th>
                    <th>Částka</th>

                </tr>
                </thead>
                <tbody>
                {transparency.map((item) => (
                    <tr className="transparentnost-table__message" key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.publisher}</td>
                        <td>{item.payer}</td>
                        <td>{item.from} - {item.until}</td>
                        <td>{item.amount},- Kč</td>
                    </tr>
                                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default TransparentnostTable;
