import { AppHeader, Button } from "components";

export const LoginPage = () => (
  <>
    <AppHeader />
    <main>
      <h1>Login page</h1>
      <form>
        <fieldset>
          <input type="email" name="email" id="email" />
        </fieldset>
        <fieldset>
          <input type="password" name="password" id="password" />
        </fieldset>
        <div className="text-center">
          <Button>Submit</Button>
        </div>
      </form>
    </main>
    <footer className="text-center">&copy; 2022</footer>
  </>
);
