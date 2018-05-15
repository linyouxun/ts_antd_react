import * as React from 'react';
import { render } from 'react-dom';

interface IAppProps {
  name: string;
}
interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: any) {
    super(props);
    console.log('log init index');
  }
  public render(): JSX.Element {
    let { name } = this.props;
    return (
      <div>
        Hello world
        <br/>
        name: {name}
      </div>
    )
  }
}

render(<App name="test"/>, document.getElementById('app'))
