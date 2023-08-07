import React, { Component } from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundry cauch an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          These was an error. <Link to="/"> Click here</Link> to go back
        </h1>
      );
    }

    return this.props.children;
  }
}

// thsdf

export default ErrorBoundary;