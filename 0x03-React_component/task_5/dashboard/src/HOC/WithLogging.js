import React, { component } from 'react'

const WithLogging = (WrappedComponent) => {
    const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    class NewComponent extends Component {
        componentDidMount() {
            console.log(`Component ${name} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${name} is goint to unmount`);
        }

        renfer() {
            return <WrappedComponent {...this.props} />
        }
    };
    NewComponent.displayName = `WithLogging(${name})`;
    return NewComponent;
}

export default WithLogging