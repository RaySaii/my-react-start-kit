import React from 'react';

export default function asyncImport(getComponent: () => {}) {
  return class AsyncComponent extends React.Component<any, any> {
    state = {
      component: null
    }

    componentDidMount() {
      Promise.resolve(getComponent()).then((module: any) => {
        return module.default || module
      }).then(component =>
        this.setState({component})
      )
    }

    render() {
      const {component} = this.state
      return component ? React.createElement(component, Object.assign({}, this.props)) : <h1>Loading...</h1>
    }
  }
}
