import { FC, useState } from "react";
import {
  Card,
  CardBody,
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import SurveyComponent from "./components/survey";
import defaultSurveyConfig from "./config/survey";

const App: FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <Navbar color="primary" dark expand="md">
        <Container>
          <NavbarBrand>Survey Website</NavbarBrand>
          <NavbarToggler onClick={() => setNavbarOpen(!navbarOpen)} />
          <Collapse isOpen={navbarOpen} navbar>
            <Nav className="me-auto" navbar></Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Container>
        <Card className="mt-1">
          <CardBody>
            <SurveyComponent
              css={defaultSurveyConfig.defaultSurveyCSS}
              data={defaultSurveyConfig.defaultSurveyDATA}
              json={defaultSurveyConfig.defaultSurveyJSON}
              onComplete={(survey: any) => {
                console.log(survey.data);
              }}
            />
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default App;
