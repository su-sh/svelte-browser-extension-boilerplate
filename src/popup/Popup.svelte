<script>
  import Router from "svelte-spa-router";
  import Signup from "../pages/Signup.svelte";
  import Login from "../pages/Login.svelte";
  import Home from "../pages/Home.svelte";

  const routes = {
    "/": Signup,
    "/login": Login,
    "/home": Home,
  };
</script>

<Router {routes} />
