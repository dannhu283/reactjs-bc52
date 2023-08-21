import React from "react";

function UserGreeting() {
  let unreadMessage = 5;

  return (
    <>
      <div> Welcome Back</div>
      {unreadMessage > 0 && <p> You have {unreadMessage} unread Message</p>}
    </>
  );
}
function GuestGreeting() {
  return <div>Please Login</div>;
}

export default function Render() {
  let isLoggedIn = true;
  let shouldDisplay = true;
  let unreadMessage = 4;
  if (!shouldDisplay) {
    return null;
  }

  //   let greeting;
  //   if (isLoggedIn) {
  //     greeting = <div>Welcom Back</div>;
  //   } else {
  //     greeting = <div>Please Login</div>;
  //   }
  return (
    <div>
      <h1>ConditionalRendering</h1>
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
    </div>
  );
}
