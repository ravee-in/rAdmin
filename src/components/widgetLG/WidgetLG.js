import { transactionsData } from "../../dummyData";
import "./widgetLG.css";

const WidgetLG = () => {

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };

    return (
        <div className="widgetLg bg-light">
            <h3 className="widgetLgTitle">Latest transactions</h3>

            <hr className="seprator mx-0" />

            <table className="widgetLgTable table">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionsData.map((transInfo) => {
                        return <tr className="widgetLgTr" key={transInfo.id}>
                            <td className="widgetLgUser">
                                <img
                                    src={transInfo.c_img}
                                    alt=""
                                    className="widgetLgImg"
                                />
                                <span className="widgetLgName">{transInfo.c_name}</span>
                            </td>
                            <td className="widgetLgDate">{transInfo.date}</td>
                            <td className="widgetLgAmount">{transInfo.price}</td>
                            <td className="widgetLgStatus">
                                <Button type={transInfo.status} />
                            </td>
                        </tr>;
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default WidgetLG