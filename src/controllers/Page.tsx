import * as React from 'react';

export default class Page extends React.Component<any, any> {
  componentDidMount():void {
    console.log(this.props)
  }
  public render(): JSX.Element {
    return (<div>
      {window.location.href}
    </div>)
  }
}
