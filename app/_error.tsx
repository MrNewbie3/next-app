import React from "react";

const ErrorPage = ({ statusCode, message }: any) => {
  // Check for specific error conditions and render custom components accordingly
  if (statusCode === 500) {
    return (
      <div>
        <h1>Oops! Server is under maintenance!</h1>
        <p>We apologize for the inconvenience. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Error {statusCode}</h1>
      <p>{message}</p>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const message = err ? err.message : "Page not found";

  return { statusCode, message };
};

export default ErrorPage;
