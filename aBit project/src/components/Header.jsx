import React from "react";

function Header() {
  const img = "";
  const profile = "https://s3-alpha-sig.figma.com/img/fa88/725b/e918233d4da7ccd1a24a48ff69f54227?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGLyWnTlGCGuydtH6vvOScdkyET4THiymHYdeVzff~xM6cTAPGOEw8CHlmgB4P-yy5gqMOyFb6HQfsPLP-WgYMjQ4tSkDT~YKmAjfNIe3pK-EYUyb9c2mW7XgbvLE-AV1~nGL1amZPaCocRjBNCucSVi-wfsPqGtImufYVpSksmdHtfmNnJXv5LWSiONBX9bOvpQLEoHIL0OHOYNPDuwgKzgs-8pHcDLfuHpjP66J3ffOvbVa5--FQNnE36kn3Oqlp4ohMARpDIIncllMMIYLSWMX89lXmG5MOSDQxwVUUtprZFB4D8nfd2llOu8sdIyP2Jmo-g7tIYNDFAfUvHn7A__"
  return (
    <header class="lg:px-16 px-4 bg-white flex flex-wrap items-center py-6 shadow-md"
    style={{
      backgroundSize: "cover",
      backgroundAttachment: "scroll",
      backgroundImage:
        'url("https://s3-alpha-sig.figma.com/img/bdd1/217e/3c90f0a2a0733a37cfae73337e1beb01?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cy4vVvEYY~nOcRzMbnRDmP8pjxJAqp~J2xtNha8m89pGJBZ2rryiJWmt0R8mB60EJgK87R03s1VmLoXTnuFDIdGnnkQ3TRdn~62NJw3QRysJz2vD0OtuTSjV7oDEmXuWnHC5wC97puH7pK5AR5aJDu6XaJIutL2-ga4zn7rYa9F6UQDmMihydUswPUIa2HTekX5En95fB4PfbuQeo6R985V2WIMTe4vZTRAqIUK6JSwGnOy0XjrUkj64VFULc~2cRiIpHXKXcLXRp2ydZvK6jB4741z5kz4LEvdpQHCRPymRcqLf-hVdYKc3u3SJ4Mk481J6-rBW3Ph196JZFtTxpA__")',
    }}>
      <div class="flex-1 pl-8 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold">
          aBit
        </a>
      </div>

      <label for="menu-toggle" class="pointer-cursor md:hidden block">
        <svg
          class="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input class="hidden" type="checkbox" id="menu-toggle" />

      <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul class="md:flex items-center justify-between text-sm text-gray-700 pt-4 pr-4 gap-2 md:pt-0">
            <li className="text-purple-700 ">
              <a
                class="md:p-2 md:px-4 block border-2 border-purple-700 rounded-full"
                href="#"
              >
                Share new video
              </a>
            </li>
            <li className="w-10">
              <a class="md:p-2 py-3 px-0 block" href="#">
              <svg viewBox="-1.5 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>wallet</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-259.000000, -776.000000)" fill="#969696"> <path d="M283,799 L289,799 L289,797 L283,797 L283,799 Z M287,787 L259,787 L259,807 C259,808.104 259.896,809 261,809 L287,809 C288.104,809 289,808.104 289,807 L289,801 L282,801 C281.448,801 281,800.553 281,800 L281,796 C281,795.448 281.448,795 282,795 L289,795 L289,789 C289,787.896 288.104,787 287,787 L287,787 Z M287,778 C287,777.447 286.764,777.141 286.25,776.938 C285.854,776.781 285.469,776.875 285,777 L259,785 L287,785 L287,778 L287,778 Z" id="wallet" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
              </a>
            </li>
            <li className="w-11">
              <a class="md:p-2 py-3 px-0 block" href="#">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.35179 20.2418C9.19288 21.311 10.5142 22 12 22C13.4858 22 14.8071 21.311 15.6482 20.2418C13.2264 20.57 10.7736 20.57 8.35179 20.2418Z" fill="#969696"></path> <path d="M18.7491 9V9.7041C18.7491 10.5491 18.9903 11.3752 19.4422 12.0782L20.5496 13.8012C21.5612 15.3749 20.789 17.5139 19.0296 18.0116C14.4273 19.3134 9.57274 19.3134 4.97036 18.0116C3.21105 17.5139 2.43882 15.3749 3.45036 13.8012L4.5578 12.0782C5.00972 11.3752 5.25087 10.5491 5.25087 9.7041V9C5.25087 5.13401 8.27256 2 12 2C15.7274 2 18.7491 5.13401 18.7491 9Z" fill="#969696"></path> </g></svg>
              </a>
            </li>
            <li>
              <a class="md:p-2 py-3 px-0 block" href="#">
                <img src={profile} className="h-10 rounded-full" alt="profile" />
              </a>
            </li>
            <li>
              <div class="group">
                <button
                  type="button"
                  class="inline-flex justify-center items-center w-full py-2  focus:outline-none "
                >
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                        fill="#000000"
                      ></path>
                    </g>
                  </svg>
                </button>

                <div class="absolute right-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 2
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Option 3
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
