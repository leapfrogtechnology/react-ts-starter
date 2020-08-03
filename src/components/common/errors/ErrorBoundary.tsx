import React, { Component, ErrorInfo, PropsWithChildren } from 'react';

import * as sentry from 'utils/sentry';

class ErrorBoundary extends Component<PropsWithChildren<any>, any> {
  constructor(props: PropsWithChildren<any>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    sentry.catchErrorsWithScope(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>We're sorry — something went wrong.</p>
          <p>Our team has been notified.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
