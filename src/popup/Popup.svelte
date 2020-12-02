<script>
  import Router from "svelte-spa-router";
  import Signup from "../pages/Signup.svelte";
  import Login from "../pages/Login.svelte";
  import Home from "../pages/Home.svelte";
  import { LOGIN_PAGE, SIGN_UP_PAGE, HOME } from "../constants/routes";

  const routes = {
    [SIGN_UP_PAGE]: Signup,
    [LOGIN_PAGE]: Login,
    [HOME]: Home,
  };
</script>

<Router {routes} />
