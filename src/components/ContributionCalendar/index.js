import React from "react";
import Calendar from "react-github-contribution-calendar";
import { formatDate } from "../../dateFormatter";

import Legend from "../../resource/legend.svg";

const ContributionCalendar = ({ questions }) => {
  const values = {};
  const panelColors = ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"];
  const until = formatDate(new Date(), "yyyy-MM-dd");
  const weekNames = ["", "月", "", "水", "", "金", ""];
  const monthNames = [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ];

  questions.forEach((question) => {
    if (values[question.createdAt]) {
      values[question.createdAt] += 1;
      if (values[question.createdAt] >= 5) {
        values[question.createdAt] = 4;
      }
    } else {
      values[question.createdAt] = 1;
    }
  });

  return (
    <div className="ion-padding">
      <Calendar
        panelColors={panelColors}
        until={until}
        weekNames={weekNames}
        monthNames={monthNames}
        values={values}
      />
      <img src={Legend} alt="グラフの説明" className="ion-float-end" />
    </div>
  );
};

export default ContributionCalendar;
