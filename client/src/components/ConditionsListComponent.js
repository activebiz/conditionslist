import { useSelector } from "react-redux";
import ConditionCard from "src/components/ConditionCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Paper } from "@material-ui/core";

function ConditionsListComponent() {
  const payload = useSelector((state) => state);
  if (
    payload &&
    payload.conditions &&
    payload.conditions.conditionsData &&
    payload.conditions.conditionsData.conditions
  ) {
    return (
      <Paper>
        {payload.conditions.conditionsData.conditions.map((cond) => (
          <ConditionCard key={cond.label} value={cond} />
        ))}
      </Paper>
    );
  }
  return (
    <div>
      <CircularProgress />
      Loading ....
    </div>
  );
}

export default ConditionsListComponent;
