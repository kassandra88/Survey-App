import { FC, useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import * as Survey from "survey-react";

export interface ISurveyProps {
  css: any;
  json: any;
  data: any;
  onComplete: (survey: any) => void;
}

const SurveyComponent: FC<ISurveyProps> = ({ css, data, json, onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Survey.StylesManager.applyTheme("bootstrap");

    setLoading(false);
  }, []);

  if (loading) return <Spinner />;

  return (
    <Survey.Survey css={css} data={data} json={json} onComplete={onComplete} />
  );
};

export default SurveyComponent;
