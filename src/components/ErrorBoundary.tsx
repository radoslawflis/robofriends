import React, { Component, ReactNode  } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state={
            hasError: false
        }
    }

    //If this function gets triggered then set state of hasError
    componentDidCatch(error: Error, info: React.ErrorInfo) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooooops. That is not good</h1> //Default State
        }
        return this.props.children
    }
}

export default ErrorBoundary;