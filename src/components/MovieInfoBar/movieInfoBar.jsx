import { Wrapper, Content } from "./movieInfoBar.styles";
import { calcTime, convertMoney } from "../../helpers";
import PropTypes from "prop-types";

export default function MovieInfoBar(props) {
  const { budget, runtime, revenue } = props;
  return (
    <Wrapper>
      <Content>
        <div className="column">
          <p>Running time: {calcTime(runtime)}</p>
        </div>
        <div className="column">
          <p>Budget: {convertMoney(budget)}</p>
        </div>
        <div className="column">
          <p>Revenue: {convertMoney(revenue)}</p>
        </div>
      </Content>
    </Wrapper>
  );
}

MovieInfoBar.propTypes = {
  budget: PropTypes.number,
  runtime: PropTypes.number,
  revenue: PropTypes.number,
};
