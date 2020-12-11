<script>
  import axios from "axios";
  import { user } from "../stores/store";
  import { push } from "svelte-spa-router";

  let email;
  let firstName;
  let lastName;
  let password;

  async function signup() {
    try {
      await axios.post("/api/auth/signup", {
        email,
        firstName,
        lastName,
        password,
      });
      $user = data.user;
      push("/home");
    } catch (e) {
      if (e) {
        console.log(e);
        firstName = "";
        lastName = "";
        email = "";
        password = "";
      }
    }
  }
</script>

<main>
  <div>
    <span>
      <div
        class="h-auto min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
            <div class="rounded-md shadow-sm">
              <div class="pb-4">
                <label
                  for="email-address"
                  class="block text-sm font-medium text-gray-700">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  bind:value={email}
                  autocomplete="email"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address" />
              </div>
              <div class="flex items-center justify-between pb-4">
                <div class="mr-2">
                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-700">First name</label>
                  <input
                    id="first-name"
                    name="first name"
                    type="name"
                    bind:value={firstName}
                    autocomplete="name"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="First Name" />
                </div>

                <div class="ml-2">
                  <label
                    for="last_name"
                    class="block text-sm font-medium text-gray-700">Last name<span
                      class="pl-2 text-xs text-muted text-gray-400">(optional)</span></label>
                  <input
                    id="Last Name"
                    name="last name"
                    type="last name"
                    bind:value={lastName}
                    autocomplete="name"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Last Name" />
                </div>
              </div>

              <div>
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  bind:value={password}
                  autocomplete="current-password"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password" />
              </div>

              <div class="flex justify-end">
                <div class="text-sm pb-4">
                  <a
                    href="javascript.void()"
                    class="font-medium text-gray-500 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="group uppercase relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span
                    class="absolute left-0 inset-y-0 flex items-center pl-3">
                    <!-- Heroicon name: lock-closed -->
                    <svg
                      class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  create my account
                </button>
              </div>
              <div>
                <p class="mt-5 text-center text-sm text-gray-600">
                  Already have an account?
                  <span><a
                      class="font-bold text-indigo-600"
                      href="javascript.void()">Login</a></span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </span>
  </div>
</main>
