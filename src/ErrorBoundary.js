import React, { Component } from "react";
import { Link, Redirect, navigate } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundry cauch an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      // setTimeout(() => this.setState({ redirect: true }), 1000);
      setTimeout(() => navigate("/"), 1000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          These was an error with this listing. <Link to="/"> Click here</Link>{" "}
          to get back to the home page or wait five seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
