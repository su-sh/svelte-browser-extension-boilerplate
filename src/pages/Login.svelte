<script>
  import axios from "axios";
  import { user } from "../stores/store";
  import { push, link } from "svelte-spa-router";

  import Button from "../components/Button.svelte";
  import Input from "../components/Input.svelte";
  import { SIGN_UP_PAGE } from "../constants/routes";

  let email;
  let password;

  async function login() {
    console.log(email, password);
  }
</script>

<main>
  <div>
    <span>
      <div class="min-h-screen flex items-center justify-center py-9 px-5">
        <div class="w-full">
          <div>
            <img
              class="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow" />
            <h2 class="mt-3 text-center text-2xl font-extrabold text-gray-900">
              Welcome back
            </h2>
          </div>
          <form class="mt-12 space-y-6" on:submit|preventDefault={login}>
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
              <div class="mb-6">
                <div class="mb-2">
                  <label
                    for="email-address"
                    class="text-base font-medium text-black-500">Email address</label>
                </div>
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  bind:value={email}
                  autocomplete="email"
                  required
                  placeholder="Email address" />
              </div>
              <div class="mb-5">
                <div class="mb-2">
                  <label
                    for="password"
                    class="text-base font-medium text-black-500">Password</label>
                </div>
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

            <Button>Log me in</Button>
            <div>
              <p class="mt-1 text-center text-sm text-gray-600">
                Don't have an account?
                <span><a
                    class="font-bold text-indigo-600"
                    href={SIGN_UP_PAGE}
                    use:link>Sign up</a></span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </span>
  </div>
</main>
