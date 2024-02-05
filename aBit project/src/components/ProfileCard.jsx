import React from "react";

function ProfileCard() {
  const profile =
    "https://s3-alpha-sig.figma.com/img/fa88/725b/e918233d4da7ccd1a24a48ff69f54227?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGLyWnTlGCGuydtH6vvOScdkyET4THiymHYdeVzff~xM6cTAPGOEw8CHlmgB4P-yy5gqMOyFb6HQfsPLP-WgYMjQ4tSkDT~YKmAjfNIe3pK-EYUyb9c2mW7XgbvLE-AV1~nGL1amZPaCocRjBNCucSVi-wfsPqGtImufYVpSksmdHtfmNnJXv5LWSiONBX9bOvpQLEoHIL0OHOYNPDuwgKzgs-8pHcDLfuHpjP66J3ffOvbVa5--FQNnE36kn3Oqlp4ohMARpDIIncllMMIYLSWMX89lXmG5MOSDQxwVUUtprZFB4D8nfd2llOu8sdIyP2Jmo-g7tIYNDFAfUvHn7A__";

  return (
    <div className="flex h-60 w-128 bg-white rounded-3xl shadow-[4px_5px_10px_rgba(0,0,0,0.3)] overflow-hidden divide-black divide-x border-2 border-zinc-300">
      <img src={profile} className="basis-1/3 " alt="" />
      <div
        className="basis-2/3 text-sm"
        style={{
          backgroundSize: "cover",
          backgroundAttachment: "scroll",
          backgroundImage:
            'url("https://s3-alpha-sig.figma.com/img/bdd1/217e/3c90f0a2a0733a37cfae73337e1beb01?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cy4vVvEYY~nOcRzMbnRDmP8pjxJAqp~J2xtNha8m89pGJBZ2rryiJWmt0R8mB60EJgK87R03s1VmLoXTnuFDIdGnnkQ3TRdn~62NJw3QRysJz2vD0OtuTSjV7oDEmXuWnHC5wC97puH7pK5AR5aJDu6XaJIutL2-ga4zn7rYa9F6UQDmMihydUswPUIa2HTekX5En95fB4PfbuQeo6R985V2WIMTe4vZTRAqIUK6JSwGnOy0XjrUkj64VFULc~2cRiIpHXKXcLXRp2ydZvK6jB4741z5kz4LEvdpQHCRPymRcqLf-hVdYKc3u3SJ4Mk481J6-rBW3Ph196JZFtTxpA__")',
        }}
      >
        <div className="flex justify-between items-center m-6 mr-12">
          <h2 className="font-bold text-2xl">DAN MACE</h2>
          <h6 className="text-gray-500 font-inter">/Johny_Films/</h6>
        </div>
        <div className="m-6 text-gray-600 font-inter pr-6">
          <h2 className="font-bold">Bio</h2>
          <p >
            Simply a film fan creating original content for Youtube. Let's
            Collaborate.
          </p>
        </div>
        <div className="flex mt-10 items-center justify-center">
          <div className=" border border-gray-700 rounded-md w-60 flex">

          <button className="px-10 py-0.5 rounded-md basis-1/2">Creator</button>
          <button className=" px-10 py-0.5  bg-gray-600 basis-1/2 h-6"> </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
