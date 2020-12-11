<script>
  import axios from "axios";
  import { push, link } from "svelte-spa-router";

  import { user } from "../stores/store";
  import Input from "../components/Input.svelte";
  import Button from "../components/Button.svelte";
  import { LOGIN_PAGE } from "../constants/routes";

  let email;
  let username;
  let password;

  async function signup() {
    try {
      await axios.post("/api/auth/signup", { email, username, password });
      $user = data.user;
      push("/home");
    } catch (e) {
      username = "";
      email = "";
      password = "";
    }
  }
</script>

<main>
  <div>
    <span>
      <div
        class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <img
              class="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow" />
            <h2 class="mt-6 text-center text-2xl font-extrabold text-gray-900">
              Join Time Ticker for free
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Stay productive by tracking browsing
              <br />time effectively.
            </p>
          </div>
          <form
            class="mt-8 space-y-6"
            action="#"
            method="POST"
            on:submit|preventDefault={signup}>
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  bind:value={email}
                  autocomplete="email"
                  required
                  placeholder="Email address" />
              </div>
              <div>
                <label for="user-name" class="sr-only">Username</label>
                <Input
                  id="user-name"
                  name="name"
                  bind:value={username}
                  autocomplete="name"
                  required
                  placeholder="Your name" />
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  bind:value={password}
                  autocomplete="current-password"
                  required
                  placeholder="Password" />
              </div>
            </div>

            <div class="flex justify-end">
              <div class="text-sm">
                <a
                  href="/forgot-password"
                  use:link
                  class="font-medium text-gray-500 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <Button>Create my account</Button>
            <div>
              <p class="mt-2 text-center text-sm text-gray-600">
                Already have an account?
                <span><a
                    class="font-bold text-indigo-600"
                    href={LOGIN_PAGE}
                    use:link>Login</a></span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </span>
  </div>
</main>
