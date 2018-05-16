import * as React from 'react';
import { render } from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

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
        <Switch>
          {routes.map((item) => {
            return (
              <Route exact strict key={item.key} {...item} />
            );
          })}
        </Switch>
      </div>
    )
  }
}

render(<Router><App name="test"/></Router>, document.getElementById('app'));
