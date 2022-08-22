import { Button, ButtonGroup } from "@mui/material";
import { AppHeader, Parent } from "components";

export const HomePage = () => (
  <>
    <AppHeader />
    <main>
      <h1>Home page</h1>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae,
        nobis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae,
        nobis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae,
        nobis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae,
        nobis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae,
        nobis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae,
        nobis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae,
        nobis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae,
        nobis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae,
        nobis.
      </p>
      <Parent />
    </main>
    <footer className="text-center">&copy; 2022</footer>
  </>
);
