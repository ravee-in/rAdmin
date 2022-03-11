import "./widgetSM.css";
import { Visibility } from "@material-ui/icons";
import { userRows } from "../../dummyData";

const WidgetSM = () => {
  return (
    <div className="widgetSm bg-light">
      <h3 className="widgetSmTitle">New Members</h3>
      <hr className="seprator mx-0" />

      <ul className="widgetSmList">
        {userRows.slice(0, 5).map((userInfo) => {
          return <li className="widgetSmListItem row" key={userInfo.id}>
            <div className="col-md-2">
              <img
                src={userInfo.avatar}
                alt=""
                className="widgetSmImg"
              />
            </div>
            <div className="widgetSmUser col-md-6">
              <span className="widgetSmUsername">{userInfo.username}</span>
              <span className="widgetSmUserTitle">{userInfo.designation}</span>
            </div>
            <button className="widgetSmButton col-md-4">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default WidgetSM