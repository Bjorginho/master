import { AxisOptions, Chart } from "react-charts";
import { useMemo } from "react";
import { curveLinear } from "d3-shape";
import { data } from "./data";

type MyDatum = { weekNumber: number; score: number };

const MyChart = () => {
  const primaryAxis = useMemo(
    (): AxisOptions<MyDatum> => ({
      getValue: (datum) => datum.weekNumber,
    }),

    []
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<MyDatum>[] => [
      {
        getValue: (datum) => datum.score,
        min: 1,
        max: 5,
        curve: curveLinear,
      },
    ],

    []
  );
  return (
    <div className="size-full p-3">
      <p className="text-center">Previous evaluations</p>
      <div className="size-full flex">
        <Chart
          className="size-full"
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </div>
      <p className="text-center text-sm">Week</p>
    </div>
  );
};

export default MyChart;
