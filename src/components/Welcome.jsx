import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import theme from "../utils/theme";
import { useState, useEffect } from "react";
import axios from "axios";

function Welcome() {
  const [data, setData] = useState({});

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get("https://api.npms.io/v2/search?q=react")
      .then((response) => setData(response.data.total));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  let history = useHistory();

  const redirect = () => {
    history.push("/login");
  };

  return (
    <div>
      <AppBar
        position="relative"
        align="center"
        style={{ background: theme.palette.primary.gradient }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mt: 1, mb: 1 }}>
          Appoint
        </Typography>
      </AppBar>
      <main>
        <div>
          <Container align="center" sx={{ fontWeight: "light", mt: 15 }}>
            <Typography variant="h4" gutterBottom>
              Willkommen
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "light", mt: 10 }}
            >
              Das praktische Tool für deine Termine bei all deinen
              Lieblingsservices
            </Typography>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              style={{ maxWidth: 575 }}
            >
              <Button
                size="large"
                color="secondary"
                variant="contained"
                sx={{ mt: 10, borderRadius: 7 }}
                onClick={redirect}
              >
                Weiter
              </Button>
            </Grid>
            <Footer title="Appoint - Das einfache Leben" />
          </Container>
        </div>
      </main>
    </div>
  );
}

export default Welcome;
