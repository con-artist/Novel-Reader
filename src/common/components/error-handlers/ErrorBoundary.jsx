import React, { Component, ErrorInfo, ReactNode } from "react";

import GenericError from "./GenericError";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    email: this.props.email || "rajatsingh52220@gmail.com",
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <GenericError
          heading={"Something went wrong"}
          description={`Try reloading? If the problem persists please get in touch`}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
